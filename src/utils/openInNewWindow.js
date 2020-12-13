/* global chrome */
export const openInNewWindow = (tabs) => () =>
  chrome.windows.create({
    focused: false,
    url: tabs.map((t) => t.url),
  });
