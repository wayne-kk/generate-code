// app/api/auth/me/route.ts

import { supabase } from "@/utils/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return new Response(JSON.stringify({ error: "未登录或 Session 过期" }), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({ message: "当前用户信息", user: data.user }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "获取用户信息失败" }), {
      status: 500,
    });
  }
}
