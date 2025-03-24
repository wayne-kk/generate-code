import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import bcrypt from "bcryptjs";
import supabase from "./supabase";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const mcpServer = new McpServer({
  name: "User Management",
  version: "1.0.0",
});

// 注册用户工具（支持密码加密）
mcpServer.tool(
  "register-user",
  {
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["user"]).optional(),
  },
  async ({ username, email, password, role = "user" }) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const { data, error } = await supabase
        .from("users")
        .insert([{ username, email, password: hashedPassword, role }])
        .select();

      if (error) {
        return { content: [{ type: "text", text: error.message }] };
      }

      return { content: [{ type: "text", text: "注册成功", user: data[0] }] };
    } catch (err) {
      return { content: [{ type: "text", text: "服务器错误" }] };
    }
  }
);

// 登录用户工具（支持密码验证）
mcpServer.tool(
  "login-user",
  {
    username: z.string(),
    password: z.string(),
  },
  async ({ username, password }) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("username, email, password, role")
        .eq("username", username)
        .single();

      if (error || !data) {
        return { content: [{ type: "text", text: "用户名或密码错误" }] };
      }

      const isPasswordValid = await bcrypt.compare(password, data.password);
      if (!isPasswordValid) {
        return { content: [{ type: "text", text: "用户名或密码错误" }] };
      }

      return {
        content: [
          {
            type: "text",
            text: "登录成功",
            profile: {
              username: data.username,
              email: data.email,
              role: data.role,
            },
          },
        ],
      };
    } catch (err) {
      return { content: [{ type: "text", text: "服务器错误" }] };
    }
  }
);

// 用户信息资源
mcpServer.resource(
  "user-profile",
  new ResourceTemplate("user-profile://{username}", { list: undefined }),
  async (uri, { username }) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("username, email, role")
        .eq("username", username)
        .single();

      if (error) {
        return { contents: [{ uri: uri.href, text: error.message }] };
      }

      return { contents: [{ uri: uri.href, text: "获取成功", profile: data }] };
    } catch (err) {
      return { contents: [{ uri: uri.href, text: "服务器错误" }] };
    }
  }
);

const transport = new StdioServerTransport();
await mcpServer.connect(transport);

export default mcpServer;
