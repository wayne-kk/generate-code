// app/api/blocks/route.ts

import { NextResponse } from 'next/server';
import { searchBlocksRandomly } from '@/lib/database';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get('keyword');

  try {
    let data;

    if (keyword) {
      data = await searchBlocksRandomly(keyword);
      if (!data) {
        return NextResponse.json({ message: 'No items found matching the keyword.' }, {
          status: 404,
          headers: CORS_HEADERS,
        });
      }
    } else {
      data = { message: 'Keyword is required for search.' };
    }

    return NextResponse.json({ message: 'success', data }, {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error) {
    return NextResponse.json({ message: 'error', error: String(error) }, {
      status: 500,
      headers: CORS_HEADERS,
    });
  }
}
