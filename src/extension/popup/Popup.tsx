import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Bookmarks from './components/Bookmarks';
import FoldersList from './components/FoldersList';
import './popup.css';

const MainUI = styled.div`
  min-width: 0;
  display: flex;
  flex-grow: 999;
`;

const Collections = () => {
  return (
    <>
      <FoldersList />
      <Bookmarks />
    </>
  );
};

const Popup = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainUI>
          <Routes>
            <Route path="/" element={<Collections />}></Route>
            <Route path="/stats" element={<h1>The stats component</h1>}></Route>
          </Routes>
        </MainUI>
      </div>
    </Router>
  );
};

export default Popup;
