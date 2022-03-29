import React from 'react';
import styled from 'styled-components';
import Folder from './Folder';

const FoldersListContainer = styled.div`
  position: relative;
  z-index: 10;
  flex-basis: 280px;
  box-shadow: 0.2px 0px 0px #5a5a5a;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  flex-direction: column;
  padding: 60px 0 20px 0;
`;

const FoldersColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const FoldersList = () => {
  return (
    <FoldersListContainer>
      <p
        style={{
          display: 'flex',
          padding: '0 20px 10px 20px',
          color: '#bababa',
          fontSize: '13px',
        }}
      >
        Folders
      </p>

      <FoldersColumn>
        <Folder name="Inspiration" />
        <Folder name="Software" />
        <Folder name="Programming" />
        <Folder name="Design"></Folder>
        <Folder name="Articles"></Folder>
      </FoldersColumn>
    </FoldersListContainer>
  );
};

export default FoldersList;
