// app/api/auth/register/route.ts

import { supabase } from "@/utils/supabaseClient";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 检查是否提供了 email 和 password
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email 和 Password 是必填项" }),
        { status: 400 }
      );
    }

    // 检查邮箱是否已经注册
    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (fetchError) {
      return new Response(
        JSON.stringify({ error: "数据库查询失败，请稍后再试" }),
        { status: 500 }
      );
    }

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "该邮箱已经注册，请使用其他邮箱" }),
        { status: 400 }
      );
    }

    // 使用 Supabase 进行注册
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(
      JSON.stringify({ message: "注册成功", user: data.user }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "注册失败，请检查请求格式" }), {
      status: 500,
    });
  }
}
