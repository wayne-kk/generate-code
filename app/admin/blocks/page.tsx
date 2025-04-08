'use client';

import { useEffect, useState } from 'react';

export default function BlocksPage() {
  const [keyword, setKeyword] = useState('');
  const [blocks, setBlocks] = useState<any[]>([]);

  const fetchBlocks = async () => {
    const res = await fetch(`/api/blocks/search?keyword=${encodeURIComponent(keyword)}`);
    const json = await res.json();
    setBlocks(json.data || []);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔍 Blocks Explorer</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && fetchBlocks()}
        className="border p-2 rounded w-1/2"
        placeholder="Search block by name..."
      />
      <button
        onClick={fetchBlocks}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-6 space-y-4">
        {blocks.map((block) => (
          <div key={block.id} className="border rounded p-4 bg-gray-50 shadow">
            <h2 className="text-lg font-semibold">{block.name}</h2>
            <pre className="text-sm whitespace-pre-wrap break-all text-gray-700">
              {JSON.stringify(JSON.parse(block.props), null, 2)}
            </pre>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600">Show code</summary>
              <pre className="text-xs bg-gray-100 mt-2 p-2 rounded">
                {block.code}
              </pre>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
