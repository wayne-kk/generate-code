import { style } from 'framer-motion/client';
import React, { useState } from 'react';


const EditableImg = ({ src, alt, className, propKey, style }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imageAlt, setImageAlt] = useState(alt);

    // 编辑图片源和 alt 文本
    const handleImageChange = (e) => {
        setImageSrc(e.target.value);
    };

    const handleAltChange = (e) => {
        setImageAlt(e.target.value);
    };

    return (
        <div className={className}>
            <img
                style={style}
                src={imageSrc}
                alt={imageAlt}
                className="object-cover w-full h-full" // 可以根据需要修改样式
            />
        </div>
    );
};

export default EditableImg;
