
import React, { useState } from 'react';


const EditableImg = ({ src, alt, className, propKey, style }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imageAlt, setImageAlt] = useState(alt);

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
