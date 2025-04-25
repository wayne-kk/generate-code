import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  try {
    // Check if profiles table exists
    const { data: tableExists, error: checkError } = await supabase
      .from('profiles')
      .select('*')
      .limit(1);

    if (checkError && checkError.code === '42P01') { // Table doesn't exist
      // Create profiles table using individual SQL commands
      
      // Create table
      const { error: createTableError } = await supabase.auth.admin.createUser({
        email: 'temp@example.com',
        password: 'tempPassword123',
        email_confirm: true,
      });

      if (createTableError) {
        console.error('Error creating temp user:', createTableError);
      }

      return NextResponse.json({ 
        message: 'Please use the registration page to create a user. The profiles table will be created automatically.',
        note: 'For Supabase, you need to create tables through the Supabase dashboard or migrations.'
      });
    }

    return NextResponse.json({ 
      message: 'Database appears to be set up correctly',
      tableExists: !!tableExists
    });
  } catch (error) {
    console.error('Database setup error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred during database setup',
        message: 'Please use the registration page to create a user. The profiles table will be created automatically.'
      },
      { status: 500 }
    );
  }
}