'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ConfirmDialog from './component/@business/ConfirmDialog';
import { MdMoreHoriz } from 'react-icons/md';

type PageData = {
  id: string;
  page_name: string;
  page_description?: string;
  cover_url?: string;
  created_at: string;
};

export default function Home() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();
  const pageSize = 20;

  const PLACEHOLDER_IMAGE =
    'https://images.unsplash.com/photo-1553995551-662b0b1036ad?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const fetchPages = async (pageToFetch: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/getAllPages?page=${pageToFetch}&pageSize=${pageSize}`);
      const json = await res.json();
      if (res.ok) {
        setPages((prev) => [...prev, ...json.data]);
        setTotalPages(json.pagination?.totalPages || 1);
      } else {
        console.error(json.error || 'Fetch error');
      }
    } catch (err) {
      console.error('Failed to fetch pages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages(1);
  }, []);

  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node || loading || page >= totalPages) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prevPage) => {
              const nextPage = prevPage + 1;
              fetchPages(nextPage);
              return nextPage;
            });
          }
        },
        { threshold: 1.0 }
      );

      observer.observe(node);
      observerRef.current = observer;
      loaderRef.current = node;
    },
    [loading, page, totalPages]
  );

  const confirmDelete = (id: string) => {
    setPageToDelete(id);
    setConfirmVisible(true);
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;

    try {
      const res = await fetch(`/api/deletePage?id=${pageToDelete}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPages((prev) => prev.filter((p) => p.id !== pageToDelete));
      } else {
        const { error } = await res.json();
        alert('删除失败: ' + error);
      }
    } catch (err) {
      console.error('删除失败:', err);
      alert('删除请求失败');
    } finally {
      setPageToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">🌟 My Pages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pages.map((pageItem) => (
          <div
            key={pageItem.id}
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => router.push(`/${pageItem.id}`)}
          >
            <div className="relative group">
              <img
                src={pageItem.cover_url || PLACEHOLDER_IMAGE}
                alt={pageItem.page_name}
                className="w-full h-56 object-cover rounded-t-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = PLACEHOLDER_IMAGE;
                }}
              />

              {/* 包裹按钮和菜单，监听 hover */}
              <div
                className="absolute top-2 right-2 z-20"
                onMouseEnter={() => setOpenMenu(pageItem.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* 三个点按钮 */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 p-2 rounded-full"
                >
                  <MdMoreHoriz size={18} />
                </button>

                {/* 删除菜单 */}
                {openMenu === pageItem.id && (
                  <div
                    className="absolute top-8 right-0 w-32 bg-white shadow-lg rounded-lg p-2 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => confirmDelete(pageItem.id)}
                      className="w-full text-left text-red-500 hover:bg-gray-100 px-2 py-1 rounded-lg text-sm"
                    >
                      删除
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 信息部分 */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                {pageItem.page_name || 'Untitled Page'}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {pageItem.page_description || 'No description provided.'}
              </p>
              <p className="text-gray-400 text-xs">
                🕒 {new Date(pageItem.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center mt-8 text-blue-500 font-medium animate-pulse">
          Loading more...
        </div>
      )}
      <div ref={loadMoreRef} className="h-1 mt-8" />

      {/* 删除确认弹层 */}
      <ConfirmDialog
        isOpen={confirmVisible}
        title="确认删除页面"
        description="删除后无法恢复，确定要继续吗？"
        onConfirm={handleDelete}
        onCancel={() => {
          setConfirmVisible(false);
          setPageToDelete(null);
        }}
      />
    </div>
  );
}
