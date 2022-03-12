import React from 'react';
import styled from 'styled-components';

interface CollectionItemProps {
  title: string;
  url: string;
  faviconUrl: string;
}

const CollectionItemContainer = styled.div`
  min-width: 0;
  width: 100%;
  flex-basis: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  :hover {
    background-color: #181818;
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
  border: 0.5px solid #4a4a4a;
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

const CollectionItem = ({ title, url, faviconUrl }: CollectionItemProps) => {
  const { hostname } = new URL(url);
  return (
    <CollectionItemContainer
      onClick={() => {
        chrome.tabs.create({ url: url });
      }}
    >
      <ItemIcon>
        <img src={faviconUrl} alt="" />
      </ItemIcon>
      <ItemDetails>
        <h1>{title}</h1>
        <p>{hostname}</p>
      </ItemDetails>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
