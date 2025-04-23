'use client';  // 明确标记为客户端组件

import ColorPicker from '@/component/@color/ColorPicker';
import { useState } from 'react';

const Page = () => {
    const [color, setColor] = useState('#87CEEB');
    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    };
    return (
        <div className="relative">
            <ColorPicker color={color} onColorChange={handleColorChange} />
        </div >
    );
};

export default Page;
