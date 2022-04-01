import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IoSettingsSharp,
  IoMenu,
  IoFolderOpen,
  IoTime,
  IoTrash,
  IoAppsSharp,
} from 'react-icons/io5';

import Button from './Button';
import NavButton from './NaviguationButton';
import { IconContext } from 'react-icons/lib';
import { db } from '../../database/db';
import { useParams } from 'react-router-dom';
import { activeFolder } from './Folder';
import { useRecoilValue } from 'recoil';

const StyledSidebar = styled.div`
  position: relative;
  z-index: 99;
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
  const activeFolderId = useRecoilValue(activeFolder);

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
              folderId: activeFolderId,
            });
          }}
          icon={<IoMenu size={'20px'} />}
        ></Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <IconContext.Provider value={{ size: '20px' }}>
          <NavButton icon={<IoAppsSharp />} to={'/overview'} />
          <NavButton icon={<IoFolderOpen />} to={'/folders'} />
          <NavButton icon={<IoTime />} to={'/readlater'} />
          <NavButton icon={<IoTrash />} to={'/trash'} />
        </IconContext.Provider>
      </ButtonsContainer>

      <ButtonsContainer>
        <NavButton icon={<IoSettingsSharp size={'20px'} />} to={'/settings'} />
      </ButtonsContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
