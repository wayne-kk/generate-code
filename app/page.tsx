'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 路由跳转
import useDataStore from './store/useDateStore';

export default function Home() {
  const [wegicUrl, setWegicUrl] = useState<string>(''); // 存储用户输入的 wegicUrl
  const [cookie, setCookie] = useState<string>(''); // 存储用户输入的 Cookie
  const [isSave, setIsSave] = useState<boolean>(false); // 存储用户是否选择保存数据
  const [loading, setLoading] = useState<boolean>(false); // 显示加载状态
  const [error, setError] = useState<string | null>(null); // 存储错误信息

  const setData = useDataStore((state) => state.setData); // 获取 Zustand 中的 setData 方法
  const router = useRouter(); // 用于页面跳转

  // 从 localStorage 加载 cookie
  useEffect(() => {
    const storedCookie = localStorage.getItem('cookie');
    if (storedCookie) {
      setCookie(storedCookie);
    }
  }, []);

  // 发送请求的函数
  const handleFetchData = async () => {
    try {
      setLoading(true); // 开始加载
      setError(null); // 清除之前的错误信息

      // 保存 cookie 到 localStorage
      localStorage.setItem('cookie', cookie);

      // 构造请求体
      const requestBody = { wegicUrl, cookie, isSave };

      const response = await fetch('/api/fetchResource', {
        method: 'POST', // 使用 POST 请求
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('result', result);

      // 将数据存储到 Zustand Store 中
      setData(result.data);

      // 跳转到目标页面
      router.push('/display');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false); // 加载结束
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Fetch Data</h1>

        {/* 表单 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Wegic URL:</label>
          <input
            type="text"
            value={wegicUrl}
            onChange={(e) => setWegicUrl(e.target.value)}
            placeholder="Enter Wegic URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Cookie:</label>
          <input
            type="text"
            value={cookie}
            onChange={(e) => {
              localStorage.setItem('cookie', e.target.value);
              setCookie(e.target.value)
            }}
            placeholder="Enter Cookie"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={isSave}
            onChange={(e) => setIsSave(e.target.checked)}
            className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-gray-700 font-medium">Save Data</label>
        </div>

        <button
          onClick={handleFetchData}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Fetch Data
        </button>

        {/* 显示加载状态 */}
        {loading && <div className="mt-4 text-blue-500 text-center">Loading...</div>}

        {/* 显示错误信息 */}
        {error && <div className="mt-4 text-red-500 text-center">Error: {error}</div>}
      </div>
    </div>
  );
}