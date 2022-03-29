import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuDivider, MenuItem, useMenuState } from '@szhsin/react-menu';
import ContextMenu from './ContextMenu';
import { db } from '../../database/db';

interface CollectionItemProps {
  id: number;
  title: string;
  url: string;
  faviconUrl: string;
}

const CollectionItemContainer = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? '#121010' : 'none')};
  min-width: 0;
  width: 100%;
  flex-basis: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  :hover {
    background-color: #121010;
    cursor: pointer;
  }
`;

const ItemIcon = styled.div`
  img {
    max-width: 32px;
  }
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121010;
  border: 0.5px solid #5a5a5a42;
  border-radius: 5px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const ItemDetails = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  h1 {
    font-size: 16px;
    font-weight: normal;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    color: #bababa;
  }
`;

// TODO TRY TO MINIMIZE MIN WIDTH

const CollectionItem = ({
  id,
  title,
  url,
  faviconUrl,
}: CollectionItemProps) => {
  const [menuProps, toggleMenu] = useMenuState({ unmountOnClose: true });
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState(false);

  const { hostname } = new URL(url);
  return (
    <CollectionItemContainer
      selected={selected}
      onContextMenu={(e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        toggleMenu(true);
        setSelected(true);
      }}
      onDoubleClick={() => {
        chrome.tabs.create({ url: url });
      }}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <ItemIcon>
        <img src={faviconUrl} alt="" />
      </ItemIcon>
      <ItemDetails>
        <h1>{title}</h1>
        <p>{hostname}</p>
      </ItemDetails>
      <ContextMenu
        {...menuProps}
        anchorPoint={anchorPoint}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>Open in new tab</MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        >
          Copy to clipboard
        </MenuItem>
        <MenuDivider />
        <MenuItem>Edit</MenuItem>
        <MenuItem
          onClick={() => {
            db.bookmarks.delete(id);
          }}
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
