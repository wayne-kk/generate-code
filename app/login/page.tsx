'use client';
import React, { useState } from "react";
import { User, Lock, Mail } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // 切换登录和注册
  const [username, setUsername] = useState(''); // 切换登录和注册
  const [email, setEmail] = useState(''); // 切换登录和注册
  const [password, setPassword] = useState(''); // 切换登录和注册

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleRegister = async () => {
    try { // 检查是否提供了 email 和 password
      if (!email || !password) {
        throw new Error("Email 和 Password 是必填项");
      }
      // 检查邮箱是否已经注册
      const useInfo = fetch(`/api/mcp/resource/user-profile://${username}`)
      
      console.log('useInfo',useInfo)

      const registerInfo = await fetch('/api/mcp/tool/register-user', {
        method: 'POST', // 指定请求方法
        headers: {
          'Content-Type': 'application/json' // 指定请求头，通常是 JSON
        },
        body: JSON.stringify({
          params: {
            username,
            email,
            password,
          } // 传递的参数
        })
      })
      console.log('registerInfo',registerInfo)

    } catch (error) {
      console.error("注册失败，请检查请求格式:", error);
      throw error;
    }
  };

  const handleLogin = async () => {
  
      // 简单表单验证
      if (!email || !password) {
        return;
      }
      
      const loginInfo = await fetch('/api/mcp/tool/login-user', {
        method: 'POST', // 指定请求方法
        headers: {
          'Content-Type': 'application/json' // 指定请求头，通常是 JSON
        },
        body: JSON.stringify({
          params: {
            email,
            password,
          } // 传递的参数
        })
      })
      console.log('loginInfo',loginInfo)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {isLogin ? "登录" : "注册"}
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          {isLogin ? "欢迎回来！请输入您的账号信息。" : "创建一个新账号以开始使用。"}
        </p>

        <form className="mt-6">
          {/* 用户名/邮箱输入框 */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm text-gray-600 mb-1"
              >
                用户名
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="username"
                  placeholder="请输入用户名"
                  className="ml-2 w-full outline-none text-gray-700"
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              邮箱
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="请输入邮箱地址"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-1"
            >
              密码
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="请输入密码"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* 注册时显示确认密码 */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-gray-600 mb-1"
              >
                确认密码
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <Lock className="w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="请再次输入密码"
                  className="ml-2 w-full outline-none text-gray-700"
                />
              </div>
            </div>
          )}

          {/* 提交按钮 */}
          <button
            onClick={isLogin ? handleLogin : handleRegister}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {isLogin ? "登录" : "注册"}
          </button>
        </form>

        {/* 切换登录/注册模式 */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "还没有账号？" : "已经有账号了？"}
            <button
              onClick={toggleAuthMode}
              className="text-blue-500 hover:underline ml-1"
            >
              {isLogin ? "注册" : "登录"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;