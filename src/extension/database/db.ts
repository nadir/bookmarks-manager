import Dexie, { Table } from 'dexie';

export interface Link {
  id?: number;
  title: string;
  url: string;
  // todo support undefined
  icon: string;
  description?: string;
  folderId: number;
}

export interface Folder {
  id?: number;
  name: string;
  icon?: string;
}

export class Database extends Dexie {
  bookmarks!: Table<Link>;
  folders!: Table<Folder>;
  constructor() {
    super('kanari');
    this.version(1).stores({
      bookmarks: '++id, title, url, icon, description, folderId',
      folders: '++id, name, icon', // Primary key and indexed props
    });
  }
}

export const db = new Database();
// <Folder name="Inspiration" />
// <Folder name="Software" />
// <Folder name="Programming" />
// <Folder name="Design"></Folder>
// <Folder name="Articles"></Folder>

const populate = async () => {
  await db.folders.bulkAdd([
    { name: 'Inspiration' },
    { name: 'Software' },
    { name: 'Programming' },
    { name: 'Design' },
    { name: 'Articles' },
  ]);
};

db.on('populate', populate);
