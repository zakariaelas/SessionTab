import { v4 } from 'uuidv4';
import {
  ADD_GROUP,
  ADD_TABS,
  DELETE_GROUP,
  DELETE_TAB,
  EDIT_GROUP,
  INIT,
} from './action-types';

export function reducer(state, action) {
  switch (action.type) {
    case INIT:
      return {
        ...action.payload,
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, { ...action.payload, id: v4() }],
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
}
