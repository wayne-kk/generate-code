import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
    try {
        const data = await request.json();
        // Handle the update logic here
        return NextResponse.json({ message: 'Page updated successfully', data });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update page' }, { status: 500 });
    }
}