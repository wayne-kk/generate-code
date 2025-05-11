// components/ConfirmDialog.tsx
'use client';

import { useEffect } from 'react';

type ConfirmDialogProps = {
    isOpen: boolean;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmDialog({
    isOpen,
    title = '确认操作',
    description = '你确定要执行这个操作吗？',
    onConfirm,
    onCancel,
}: ConfirmDialogProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCancel();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onCancel]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                    >
                        取消
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onCancel(); // 自动关闭弹窗
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                    >
                        确认删除
                    </button>
                </div>
            </div>
        </div>
    );
}
