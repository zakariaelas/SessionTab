import React, { useEffect, useRef } from 'react';
import { uuid } from 'uuidv4';
import { getFromStorage, saveToStorage } from '../utils/storage';
import {
  ADD_GROUP,
  ADD_TABS,
  DELETE_GROUP,
  DELETE_TAB,
  EDIT_GROUP,
  INIT,
} from './action-types';
const AppContext = React.createContext(null);

function reducer(state, action) {
  let newState = state;
  switch (action.type) {
    case INIT:
      console.log('INIT', action.payload);
      return {
        ...action.payload,
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, { ...action.payload, id: uuid() }],
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: [...state.groups].filter(
          (g) => g.name !== action.payload,
        ),
      };
    case EDIT_GROUP: {
      const groupIndex = state.groups.findIndex(
        (g) => g.id === action.payload.id,
      );
      let newGroups = state.groups.slice();
      newGroups[groupIndex] = {
        ...action.payload,
      };
      return {
        ...state,
        groups: newGroups,
      };
    }
    case ADD_TABS: {
      const groupIndex = state.groups.findIndex(
        (g) => g.name === action.payload.name,
      );
      let newGroups = state.groups.slice();
      newGroups[groupIndex] = {
        ...newGroups[groupIndex],
        ...action.payload.tabs,
      };
      return {
        ...state,
        groups: newGroups,
      };
    }
    case DELETE_TAB: {
      const groupIndex = state.groups.findIndex(
        (g) => g.name === action.payload.groupName,
      );
      let newGroups = state.groups.slice();
      const newTabs = newGroups[groupIndex].tabs.filter(
        (tab) => tab.title !== action.payload.tabTitle,
      );
      newGroups[groupIndex] = {
        ...newGroups[groupIndex],
        tabs: newTabs,
      };
      return {
        ...state,
        groups: newGroups,
      };
    }
    default:
      return state;
  }

  return newState;
}

export const AppStateProvider = (props) => {
  const initialState = { groups: [] };
  const firstRunRef = useRef(true);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useEffect(
    () =>
      getFromStorage(
        'data',
        (data) => {
          dispatch({ type: INIT, payload: data });
        },
        initialState,
      ),
    [],
  );
  useEffect(() => {
    if (!firstRunRef.current) {
      saveToStorage('data', state, console.log);
    } else {
      firstRunRef.current = false;
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }} {...props} />
  );
};

export const useAppState = () => {
  const context = React.useContext(AppContext);
  if (!context)
    throw new Error(
      'useAppState must be used within AppStateProvider',
    );
  return context;
};

// {
//     groups: [
//       {
//         id: '1',
//         name: 'Operating Systems - Memory Management',
//         tabs: [
//           {
//             url: '',
//             id: '02',
//             title: 'Outlook - Inbox',
//           },
//         ],
//       },
//       {
//         id: '2',
//         name: 'OAuth2',
//         tabs: [
//           {
//             url: '',
//             id: '12',
//             title: 'RFC 5596',
//           },
//           {
//             url: '',
//             id: '63',
//             title:
//               'Understanding OAuth 2.0 authorization grant types',
//           },
//           {
//             url: '',
//             id: '36',
//             title:
//               'Why do we need to use PKCE in authorization flow?',
//           },
//         ],
//       },
//     ],
//   }
