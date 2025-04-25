import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Register user with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Create a profile record for the user
    if (data.user) {
      try {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              name,
              email,
              created_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          console.error('Error creating user profile:', profileError);
          
          // If the profiles table doesn't exist, we'll create it
          if (profileError.code === '42P01') {
            console.log('Profiles table does not exist, attempting to create it');
            
            // For Supabase, we would typically create tables through migrations or the dashboard
            // This is a simplified approach for demonstration purposes
            return NextResponse.json({
              message: 'Registration successful, but profiles table does not exist.',
              note: 'Please create a profiles table in your Supabase dashboard with the following columns: id (UUID, primary key), name (text), email (text), created_at (timestamp), updated_at (timestamp)',
              user: data.user,
            });
          }
        }
      } catch (profileInsertError) {
        console.error('Error in profile creation:', profileInsertError);
      }
    }

    return NextResponse.json({
      message: 'Registration successful. Please check your email for verification.',
      user: data.user,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}