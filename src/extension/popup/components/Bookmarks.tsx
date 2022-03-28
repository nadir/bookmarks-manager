import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';
import { db } from '../../database/db';
import BookmarkItem from './BookmarkItem';
import SearchBar from './SearchBar';

const Bookmarks = () => {
  const links = useLiveQuery(() => {
    return db.bookmarks.toArray();
  });

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
