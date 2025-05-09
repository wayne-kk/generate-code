import { NextRequest, NextResponse } from 'next/server';
import { generateCover } from '../../../utils/generateCover';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    try {
        const coverUrl = await generateCover(url);
        return NextResponse.json({ url: coverUrl });
    } catch (error: any) {
        console.error('Error generating cover:', error);
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
