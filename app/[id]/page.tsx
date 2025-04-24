'use client';  // 明确标记为客户端组件

import CombinationApp from '@/component/CombinationApp';
import chroma from 'chroma-js';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';
import './container.css'; // 引入 CSS 文件
const Page = () => {
    const [pageData, setPageData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();
    const [color, setColor] = useState('#87CEEB');
    const [showPicker, setShowPicker] = useState(false); // 控制 ChromePicker 显示
    const pickerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleColorChange = (newColor: any) => {
        setColor(newColor.hex);
        setColorTheme(newColor.hex);
    };

    const setColorTheme = (color: string) => {
        const baseColor = chroma(color);

        const lightColorScale = [50, 100, 200, 300, 400].map((ratio) =>
            chroma.mix(baseColor, 'white', ratio).hex()
        );

        const midColor = baseColor.hex();

        const darkColorScale = [600, 700, 800, 900, 950].map((ratio) =>
            chroma.mix(baseColor, 'black', ratio).hex()
        );

        const initColorScale = [
            ...lightColorScale,
            midColor,
            ...darkColorScale,
        ];

        const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

        const root = document.getElementById('preview-viewport');
        if (root) {
            initColorScale.forEach((color, index) => {
                const level = levels[index];
                const variableName = `--ai-theme-color-${level}`;
                root.style.setProperty(variableName, color);
            });
        }
        console.log('colorScale', initColorScale);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (
            pickerRef.current &&
            !pickerRef.current.contains(e.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        if (!id) return;

        const fetchPageData = async () => {
            try {
                const res = await fetch(`/api/get-page?id=${id}`);
                const data = await res.json();

                if (res.ok) {
                    const pageData = data.data;
                    setPageData(pageData);
                    console.log('pageData', pageData);
                    handleColorChange({ hex: pageData.extra.color.colorHex })
                } else {
                    setError(data.error || '数据获取失败');
                }
            } catch (error) {
                setError('请求数据时出错');
            }
        };

        fetchPageData();
    }, [id]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (error) {
        return <div>错误：{error}</div>;
    }

    if (!pageData) {
        return <div>加载中...</div>;
    }

    return (
        <div id="preview-viewport" className="relative min-h-screen site_preview">
            {/* 固定右上角色块按钮 */}
            <div
                ref={buttonRef}
                className="fixed top-4 right-4 w-8 h-8 rounded-full shadow-lg cursor-pointer border border-white z-50"
                style={{ backgroundColor: color }}
                onClick={() => setShowPicker(!showPicker)}
            />

            {showPicker && (
                <div
                    ref={pickerRef}
                    className="fixed top-16 right-4 z-50 bg-white rounded shadow-lg"
                >
                    <ChromePicker color={color} onChange={handleColorChange} />
                </div>
            )}

            <CombinationApp children={pageData.children} blocksMap={pageData.blocks_data} />
        </div>
    );
};

export default Page;
