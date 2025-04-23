// app/api/blocks/route.ts

import { NextResponse } from 'next/server';
import { getAiBlockById } from '@/lib/database';

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
  const blockId = searchParams.get('blockId');

  try {
    let data;

    if (blockId) {
      // 查询单个 block
      data = await getAiBlockById(blockId);
      if (!data) {
        return NextResponse.json({ message: 'No item found with the provided blockId.' }, {
          status: 404,
          headers: CORS_HEADERS,
        });
      }
    } else {
      // 如果没有提供关键字和 blockId
      data = { message: 'Either keyword or blockId is required for search.' };
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
