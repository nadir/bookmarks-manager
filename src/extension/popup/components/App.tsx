import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App: React.FC = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // saves the last visited route to chrome storage
    chrome.storage.local.set({ lastVisitedLocation: location.pathname });
  }, [location]);

  return <div className="App">{children}</div>;
};

export default App;
