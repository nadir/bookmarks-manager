import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';
import { db } from '../../database/db';
import { useParams } from 'react-router-dom';
import BookmarkItem from './BookmarkItem';
import SearchBar from './SearchBar';

const Bookmarks = () => {
  const { id } = useParams();
  const links = useLiveQuery(() => {
    return db.bookmarks.where('folderId').equals(parseInt(id)).toArray();
  }, [id]);

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
      <SearchBar />
      {links?.map((link) => {
        return (
          <BookmarkItem
            //@ts-ignore
            id={link.id}
            key={link.id}
            title={link.title}
            url={link.url}
            faviconUrl={link.icon}
          ></BookmarkItem>
        );
      })}
    </div>
  );
};

export default Bookmarks;
