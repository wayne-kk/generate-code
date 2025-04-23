
import React, { CSSProperties, useState } from 'react';
interface EditableImgProps {
    src?: string; // 图片的初始地址
    alt?: string; // 图片的初始描述
    className?: string; // 自定义样式类名
    propKey: string; // 必须传入的唯一标识符
    style?: CSSProperties; // 内联样式
}
import './base.css'; // 引入基础样式

const EditableImg = ({ src, alt, className, propKey, style }: EditableImgProps) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imageAlt, setImageAlt] = useState(alt);
    className = 'editable-img ' + className;
    return (
            <img
                style={style}
            key={propKey}
                src={imageSrc}
                alt={imageAlt}
            className={className} // 可以根据需要修改样式
        />
    );
};

export default EditableImg;
