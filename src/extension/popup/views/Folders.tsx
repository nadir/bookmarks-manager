import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookmarks from '../components/Bookmarks';
import FoldersList from '../components/FoldersList';
import { db } from '../../database/db';

const Folders = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getFirstFolder = async () => {
      const folder = await db.folders.toCollection().first();
      if (!folder) return;
      navigate(`/folders/${folder.id}`);
    };
    getFirstFolder();
  }, [navigate]);

  return (
    <>
      <FoldersList />
      <Bookmarks />
    </>
  );
};

export default Folders;
