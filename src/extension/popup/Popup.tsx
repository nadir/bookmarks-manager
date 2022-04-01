import React from 'react';
import {
  MemoryRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Bookmarks from './components/Bookmarks';
import FoldersList from './components/FoldersList';
import './popup.css';
import { RecoilRoot } from 'recoil';

const MainUI = styled.div`
  min-width: 0;
  display: flex;
  flex-grow: 999;
`;

const Popup = () => {
  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Sidebar />
          <MainUI>
            <Routes>
              {/* Remove the "1" later */}
              <Route path="/" element={<Navigate replace to="/folders/1" />} />
              <Route
                path="/overview"
                element={<h1>The overview view</h1>}
              ></Route>
              <Route path="/folders" element={<FoldersList />}>
                <Route path=":id" element={<Bookmarks />}></Route>
                <Route index element={<h1>No folders</h1>}></Route>
              </Route>
              <Route
                path="/readlater"
                element={<h1>The readlater view</h1>}
              ></Route>
              <Route path="/trash" element={<h1>The trash view</h1>}></Route>
              <Route
                path="/settings"
                element={<h1>The settings view</h1>}
              ></Route>
            </Routes>
          </MainUI>
        </div>
      </RecoilRoot>
    </Router>
  );
};

export default Popup;
