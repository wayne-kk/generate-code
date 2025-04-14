'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useDataStore from './store/useDateStore';

export default function Home() {
  const [wegicUrl, setWegicUrl] = useState<string>('');
  const [wegicUrlList, setWegicUrlList] = useState<string>(''); // 多行输入支持批量
  const [cookie, setCookie] = useState<string>('');
  const [isSave, setIsSave] = useState<boolean>(false);
  const [isSaveDB, setIsSaveDB] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const setPageDefaultData = useDataStore((state) => state.setPageDefaultData);
  const router = useRouter();

  useEffect(() => {
    const storedCookie = localStorage.getItem('cookie');
    if (storedCookie) {
      setCookie(storedCookie);
    }
  }, []);

  const fetchSingle = async (url: string) => {
    const requestBody = { wegicUrl: url, cookie, isSave, isSaveDB };
    const response = await fetch('/api/fetchResource', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  };

  const handleFetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      localStorage.setItem('cookie', cookie);

      // 构造 URL 列表
      const urls = wegicUrlList
        ? wegicUrlList.split('\n').map((url) => url.trim()).filter(Boolean)
        : [wegicUrl];

      const allData = await Promise.all(
        urls.map((url) =>
          fetchSingle(url).catch((err) => {
            console.error(`Error fetching ${url}:`, err);
            return null;
          })
        )
      );

      // 可选：过滤掉失败的请求
      const validData = allData.filter((d) => d !== null);
      
      // 更新 Zustand（这里只存第一条，你可以改为存数组）
      if (validData.length > 0) {
        setPageDefaultData(validData[0]); // or setPageDefaultData(validData)
      }

      router.push('/display');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Fetch Data</h1>

        {/* 单个 URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Wegic URL (Single):</label>
          <input
            type="text"
            value={wegicUrl}
            onChange={(e) => setWegicUrl(e.target.value)}
            placeholder="Enter Wegic URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* 多个 URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Wegic URLs (Batch - one per line):</label>
          <textarea
            value={wegicUrlList}
            onChange={(e) => setWegicUrlList(e.target.value)}
            placeholder="Enter one URL per line"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
          />
        </div>

        {/* Cookie */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Cookie:</label>
          <input
            type="text"
            value={cookie}
            onChange={(e) => {
              localStorage.setItem('cookie', e.target.value);
              setCookie(e.target.value);
            }}
            placeholder="Enter Cookie"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* 选项 */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={isSave}
            onChange={(e) => setIsSave(e.target.checked)}
            className="mr-2 h-5 w-5"
          />
          <label className="text-gray-700 font-medium">Save Data</label>
          <input
            type="checkbox"
            checked={isSaveDB}
            onChange={(e) => setIsSaveDB(e.target.checked)}
            className="ml-4 mr-2 h-5 w-5"
          />
          <label className="text-gray-700 font-medium">Save to DB</label>
        </div>

        {/* 按钮 */}
        <button
          onClick={handleFetchData}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Fetch Data
        </button>

        {loading && <div className="mt-4 text-blue-500 text-center">Loading...</div>}
        {error && <div className="mt-4 text-red-500 text-center">Error: {error}</div>}
      </div>
    </div>
  );
}
