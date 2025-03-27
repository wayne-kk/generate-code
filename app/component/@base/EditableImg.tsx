
import React, { CSSProperties, useState } from 'react';
import { mapClassNames } from '../@utils/classMap';
interface EditableImgProps {
    src?: string; // 图片的初始地址
    alt?: string; // 图片的初始描述
    className?: string; // 自定义样式类名
    propKey: string; // 必须传入的唯一标识符
    style?: CSSProperties; // 内联样式
}


const EditableImg = ({ src, alt, className, propKey, style }: EditableImgProps) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imageAlt, setImageAlt] = useState(alt);
    className = mapClassNames(className);
    return (
        <div className={className} key={propKey}>
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
