import React, { useEffect, useRef } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';
import { INIT } from './action-types';
import { reducer } from './reducer';
const AppContext = React.createContext(null);

const initialState = { groups: [] };

export const AppStateProvider = (props) => {
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
      saveToStorage('data', state);
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
