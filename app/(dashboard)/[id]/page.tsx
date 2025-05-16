'use client';

import CombinationApp from '@/_components/CombinationApp';
import chroma from 'chroma-js';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import './container.css';
import { getSystemFont, fontOptions } from '@/_hooks/useFont';

const Page = () => {
    const [pageData, setPageData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();
    const [color, setColor] = useState('#87CEEB');
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const [showFontPicker, setShowFontPicker] = useState(false);
    const fontPickerRef = useRef<HTMLDivElement>(null);
    const fontButtonRef = useRef<HTMLDivElement>(null);
    const [selectedFont, setSelectedFont] = useState('Inter');

    const handleColorChange = (newColor: any) => {
        setColor(newColor.hex);
        setColorTheme(newColor.hex);
    };

    const setColorTheme = (color: string) => {
        const baseColor = chroma(color);
        const lightRatioList = [0.9, 0.75, 0.57, 0.37, 0.13];
        const lightColorScale = lightRatioList.map((ratio) =>
            chroma.mix(baseColor, 'white', ratio).hex()
        );

        const midColor = baseColor.hex();
        const darkRatioList = [0.1, 0.3, 0.5, 0.7, 0.9];
        const darkColorScale = darkRatioList.map((ratio) =>
            chroma.mix(baseColor, 'black', ratio).hex()
        );

        const initColorScale = [...lightColorScale, midColor, ...darkColorScale];
        const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

        const root = document.getElementById('preview-viewport');
        if (root) {
            initColorScale.forEach((color, index) => {
                const level = levels[index];
                const variableName = `--ai-theme-color-${level}`;
                root.style.setProperty(variableName, color);
            });
        }
    };

    const handleFontChange = (font: string) => {
        setSelectedFont(font);
        const root = document.getElementById('preview-viewport');
        if (root) {
            root.style.setProperty('--custom-heading-font', getSystemFont(font));
            root.style.setProperty('--custom-body-font', getSystemFont(font));
        }
    };

    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        const isOutsideColorPicker =
            pickerRef.current &&
            !pickerRef.current.contains(target) &&
            buttonRef.current &&
            !buttonRef.current.contains(target);

        const isOutsideFontPicker =
            fontPickerRef.current &&
            !fontPickerRef.current.contains(target) &&
            fontButtonRef.current &&
            !fontButtonRef.current.contains(target);

        if (isOutsideColorPicker) setShowPicker(false);
        if (isOutsideFontPicker) setShowFontPicker(false);
    };

    useEffect(() => {
        if (!id) return;

        const fetchPageData = async () => {
            try {
                const res = await fetch(`/api/pages/${id}`);
                const data = await res.json();

                if (res.ok) {
                    const pageData = data.data;
                    setPageData(pageData);
                    console.log('pageData', pageData);
                } else {
                    setError(data.error || '数据获取失败');
                }
            } catch (error) {
                setError('请求数据时出错');
            }
        };

        fetchPageData();
    }, [id]);

    // 等 pageData 渲染好后，单独监听
    useEffect(() => {
        if (!pageData) return;

        const root = document.getElementById('preview-viewport');
        if (!root) {
            console.warn('preview-viewport not found yet');
            return;
        }
        handleColorChange({ hex: pageData.extra.themeColor });
        handleFontChange(pageData.extra.themeFont.bodyText);
    }, [pageData]);

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
        <div id="preview-viewport" className="relative min-h-screen site_preview" >
            {/* 颜色选择按钮 */}
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

            {/* 字体选择按钮 */}
            <div
                ref={fontButtonRef}
                className="fixed top-4 right-16 w-8 h-8 rounded-full shadow-lg cursor-pointer border border-white z-50 bg-gray-200 flex items-center justify-center"
                onClick={() => setShowFontPicker(!showFontPicker)}
            >
                <FontAwesomeIcon icon={faFont} />
            </div>

            {showFontPicker && (
                <div
                    ref={fontPickerRef}
                    className="fixed top-16 right-16 z-50 bg-white rounded shadow-lg p-2 space-y-1 w-48 max-h-60 overflow-y-auto"
                >
                    {fontOptions.map((font) => (
                        <div
                            key={font}
                            onClick={() => handleFontChange(font)}
                            className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-100 ${selectedFont === font ? 'bg-gray-200 font-bold' : ''
                                }`}
                            style={{ fontFamily: font }}
                        >
                            {font}
                        </div>
                    ))}
                </div>
            )}


            <CombinationApp children={pageData.children} blocksMap={pageData.blocks_data} />
        </div>
    );
};

export default Page;
