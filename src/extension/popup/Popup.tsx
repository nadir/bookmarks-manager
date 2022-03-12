import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useLiveQuery } from 'dexie-react-hooks';
import Sidebar from './components/Sidebar';
import CollectionItem from './components/CollectionItem';
import './popup.css';
import { db } from '../database/db';

const TestingMessages = () => {
  const links = useLiveQuery(() => {
    return db.bookmarks.toArray();
  });

  return (
    <div
      style={{
        width: '100%',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
      }}
    >
      {links?.map((link) => {
        return (
          <CollectionItem
            key={link.id}
            title={link.title}
            url={link.url}
            faviconUrl={link.icon}
          ></CollectionItem>
        );
      })}
    </div>
  );
};

const MainUI = styled.div`
  min-width: 0;
  display: flex;
  flex-grow: 999;
`;

const Popup = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainUI>
          <Routes>
            <Route path="/" element={<TestingMessages />}></Route>
            <Route path="/stats" element={<h1>The stats component</h1>}></Route>
          </Routes>
        </MainUI>
      </div>
    </Router>
  );
};

export default Popup;
