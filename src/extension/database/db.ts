import Dexie, { Table } from 'dexie';

export interface Link {
  id: number;
  title: string;
  url: string;
  // todo support undefined
  icon: string;
  description?: string;
}

export interface Collection {
  id: number;
  name: string;
  icon: string;
}

export class Database extends Dexie {
  bookmarks!: Table<Link>;
  collections!: Table<Collection>;
  constructor() {
    super('kanari');
    this.version(1).stores({
      bookmarks: '++id, title, url, icon, description',
      categories: '++id, name, icon', // Primary key and indexed props
    });
  }
}

export const db = new Database();
