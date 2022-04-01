import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';
import { atom } from 'recoil';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Folder from './Folder';
import { db } from '../../database/db';

const FoldersListContainer = styled.div`
  position: relative;
  z-index: 10;
  flex-basis: 200px;
  flex-shrink: 0;
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

export const activeFolderState = atom<number | null>({
  key: 'activeFolder',
  default: null,
});

const FoldersList = () => {
  const { id } = useParams();

  const folders = useLiveQuery(() => {
    return db.folders.toArray();
  });

  return (
    <>
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
          {folders?.map((folder) => {
            return (
              <Folder
                //@ts-ignore
                id={folder.id}
                key={folder.id}
                //@ts-ignore
                selected={parseInt(id) === folder.id}
                name={folder.name}
                icon={folder.icon}
              ></Folder>
            );
          })}
        </FoldersColumn>
      </FoldersListContainer>
      <Outlet />
    </>
  );
};

export default FoldersList;
