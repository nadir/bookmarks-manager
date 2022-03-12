import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ActiveTabsContainer = styled.div`
  flex-grow: 1;
`;

const ActiveTabs = () => {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

  useEffect(() => {
    async function getTabs() {
      let currentTabs = await chrome.tabs.query({ currentWindow: true });
      setTabs(currentTabs);
    }
    getTabs();
  }, []);
  return (
    <ActiveTabsContainer>
      {tabs.map((tab) => (
        <h3 key={tab.id}>{tab.title}</h3>
      ))}
    </ActiveTabsContainer>
  );
};

export default ActiveTabs;
