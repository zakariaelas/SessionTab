/* global chrome */

export const getFromStorage = (
  key,
  cb = () => {},
  initialState = {},
) => {
  chrome.storage.local.get([key], (items) => {
    cb(items[key] || initialState);
  });
};

export const saveToStorage = (key, value, cb = () => {}) => {
  chrome.storage.local.set({ [key]: value }, () => {
    cb(value);
  });
};
