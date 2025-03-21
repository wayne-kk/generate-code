// app/api/auth/login/route.ts

import { supabase } from "@/utils/supabaseClient";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 使用 Supabase 进行登录
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(
      JSON.stringify({
        message: "登录成功",
        user: data.user,
        token: data.session?.access_token,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "登录失败，请检查请求格式" }), {
      status: 500,
    });
  }
}
