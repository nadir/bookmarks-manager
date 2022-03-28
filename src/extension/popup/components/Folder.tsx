import React from 'react';
import styled from 'styled-components';
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
  return (
    <FolderContainer>
      <FolderIcon icon={icon}></FolderIcon>
      <FolderName>
        <p>{name}</p>
      </FolderName>
    </FolderContainer>
  );
};

export default Folder;
