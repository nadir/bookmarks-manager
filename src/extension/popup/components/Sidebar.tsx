import React from 'react';
import styled from 'styled-components';
import {
  IoSettingsSharp,
  IoAddCircle,
  IoFolderOpen,
  IoTime,
  IoTrash,
  IoAppsSharp,
} from 'react-icons/io5';

import Button from './Button';
import { IconContext } from 'react-icons/lib';
import { db } from '../../database/db';

const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #121010;
  flex: 0 0 50px;
  box-shadow: 0.2px 0px 0px #5a5a5a;
  border-radius: 5px 0px 0px 5px;
  overflow: hidden;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ButtonsContainer>
        <Button
          onClick={async () => {
            const [activeTab] = await chrome.tabs.query({ active: true });
            let favicon = activeTab.favIconUrl
              ? activeTab.favIconUrl
              : 'https://www.google.com/favicon.ico';
            await db.bookmarks.add({
              icon: favicon,
              // @ts-ignore
              title: activeTab.title,
              // @ts-ignore DO NOT IGNORE JUST DEBUGGING
              url: activeTab.url,
            });
          }}
          icon={<IoAddCircle size={'20px'} />}
        ></Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <IconContext.Provider value={{ size: '20px' }}>
          <Button icon={<IoAppsSharp />}></Button>
          <Button icon={<IoFolderOpen />}></Button>
          <Button icon={<IoTime />}></Button>
          <Button icon={<IoTrash />}></Button>
        </IconContext.Provider>
      </ButtonsContainer>

      <ButtonsContainer>
        <Button icon={<IoSettingsSharp size={'20px'} />}></Button>
      </ButtonsContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
