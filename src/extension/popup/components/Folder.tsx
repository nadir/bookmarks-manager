import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuDivider, MenuItem, useMenuState } from '@szhsin/react-menu';
import ContextMenu from './ContextMenu';
import '@szhsin/react-menu/dist/index.css';

import { MdFolder } from 'react-icons/md';

const FolderIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FolderIcon = ({ icon }: { icon?: string }) => {
  return (
    <FolderIconContainer>
      {icon ? (
        <img src={icon} alt="folder icon"></img>
      ) : (
        <MdFolder color={'#dddddd'} size={20} />
      )}
    </FolderIconContainer>
  );
};

const FolderName = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
  }
`;

const FolderContainer = styled.a`
  user-select: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  padding: 10px 20px 10px 20px;
  &:hover {
    background-color: #121010;
  }
`;

interface FolderProps {
  name: string;
  icon?: string;
}

const Folder = ({ name, icon }: FolderProps) => {
  const [menuProps, toggleMenu] = useMenuState({ unmountOnClose: true });
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  return (
    <FolderContainer
      onContextMenu={(e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        toggleMenu(true);
      }}
    >
      <FolderIcon icon={icon}></FolderIcon>
      <FolderName>
        <p>{name}</p>
      </FolderName>
      <ContextMenu
        {...menuProps}
        anchorPoint={anchorPoint}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>Rename</MenuItem>
        <MenuItem>Change Icon</MenuItem>
        <MenuDivider />
        <MenuItem>Delete</MenuItem>
      </ContextMenu>
    </FolderContainer>
  );
};

export default Folder;
