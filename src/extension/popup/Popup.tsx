import React, { useEffect, useState } from 'react';
import {
  MemoryRouter as Router,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Bookmarks from './components/Bookmarks';
import FoldersList from './components/FoldersList';
import App from './components/App';
import './popup.css';
import { RecoilRoot } from 'recoil';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const MainUI = styled.div`
  min-width: 0;
  display: flex;
  flex-grow: 999;
`;

const Popup = () => {
  const [lastLocation, setLastLocation] = useState<string>();
  useEffect(() => {
    const getLastLocation = async () => {
      const { lastVisitedLocation } = await chrome.storage.local.get([
        'lastVisitedLocation',
      ]);
      setLastLocation(lastVisitedLocation);
    };
    getLastLocation();
  }, []);

  return lastLocation ? (
    <Router initialEntries={[lastLocation]}>
      <RecoilRoot>
        <App>
          <DndProvider backend={HTML5Backend}>
            <MainUI>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Sidebar />
                      <Outlet />
                    </>
                  }
                >
                  <Route
                    path="overview"
                    element={<h1>The overview view</h1>}
                  ></Route>
                  <Route path="folders" element={<FoldersList />}>
                    <Route path=":id" element={<Bookmarks />}></Route>
                    <Route index element={<h1>No folders</h1>}></Route>
                  </Route>
                  <Route
                    path="readlater"
                    element={<h1>The readlater view</h1>}
                  ></Route>
                  <Route path="trash" element={<h1>The trash view</h1>}></Route>
                  <Route
                    path="settings"
                    element={<h1>The settings view</h1>}
                  ></Route>
                </Route>
              </Routes>
            </MainUI>
          </DndProvider>
        </App>
      </RecoilRoot>
    </Router>
  ) : (
    <p>Loading</p>
  );
};

export default Popup;
