import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'local.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS blocks (
    id TEXT PRIMARY KEY,
    name TEXT,
    code TEXT,
    props TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export function searchBlocksRandomly(keyword: string) {
  const stmt = db.prepare('SELECT * FROM blocks WHERE name LIKE ?');
  const matched = stmt.all(`%${keyword}%`);
  if (matched.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * matched.length);
  console.log('matched Length', matched.length)
  return matched[randomIndex];
}


export default db;
