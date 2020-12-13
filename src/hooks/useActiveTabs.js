/* global chrome */
import { useState } from 'react';

export const useActiveTabs = () => {
  const [tabs, setTabs] = useState([]);
  chrome.tabs.getAllInWindow((tabs) => setTabs(tabs));

  return [tabs, setTabs];
};
