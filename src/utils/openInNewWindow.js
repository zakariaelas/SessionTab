/* global chrome */
export const openInNewWindow = (tabs) => () =>
  chrome.windows.create({ url: tabs.map((t) => t.url) });
