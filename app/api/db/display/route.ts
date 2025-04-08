import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'local.db'));

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword') || '';

    const stmt = db.prepare(`
    SELECT * FROM blocks
    WHERE name LIKE ?
    ORDER BY RANDOM()
    LIMIT 20
  `);

    const result = stmt.all(`%${keyword}%`);
    return NextResponse.json({ data: result });
}
