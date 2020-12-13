/* global chrome */

export const getFromStorage = (
  key,
  cb = () => {},
  initialState = {},
) => {
  chrome.storage.local.get([key], (items) => {
    console.log('how i get data', items);
    cb(items[key] || initialState);
  });
};

export const saveToStorage = (key, value, cb) => {
  chrome.storage.local.set({ [key]: value }, () => {
    cb(value);
  });
};
