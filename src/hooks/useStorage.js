/* global chrome */
import { useCallback, useState } from 'react';

export const useStorage = (key, initialState = {}) => {
  const [data, setData] = useState({});
  chrome.storage.sync.get([key], (items) =>
    setData(items[key] || initialState),
  );
  const saveToStorage = useCallback(
    (value, cb = () => {}) =>
      chrome.storage.sync.set({ [key]: value }, () => {
        setData(value);
        cb(value);
      }),
    [key],
  );
  return [data, saveToStorage];
};
