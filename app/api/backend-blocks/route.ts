import supabase from '@/_lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {

  const { data, error } = await supabase
    .from('backend_blocks')
    .select('*');

  if (error) {
    console.error('Error fetching all blocks:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
