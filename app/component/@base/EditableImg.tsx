import React, { CSSProperties } from 'react';
import "./base.css"
interface imageProps {
    id: string;
    alt_description: string;
    imageUrl: string;
    user: {
        name?: string;
        username?: string;
        profileUrl?: string;
    };
}

interface EditableImgProps {
    src?: string | imageProps;
    alt?: string;
    className?: string;
    propKey: string;
    style?: CSSProperties;
}

const EditableImg = ({ src, alt, className = '', propKey, style }: EditableImgProps) => {
    const imgSrc = typeof src === 'string' ? src : src?.imageUrl;
    const altText = alt || (typeof src !== 'string' ? src?.alt_description : '');

// const userName = typeof src !== 'string' ? src?.user?.name : '';
// const userUsername = typeof src !== 'string' ? src?.user?.username : '';
// const userLink = userUsername
//     ? `https://unsplash.com/@${userUsername}?utm_source=your_app_name&utm_medium=referral`
//     : '#';
    return (
        <img
            key={propKey}
            src={imgSrc}
            alt={altText}
            className={`editable-img ${className}`}
            style={style}
        />
    )
    // return (
    //     <div className="inline-block text-center">
    //         <a
    //             href={userLink}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             title={`Photo by ${userName} on Unsplash`}
    //         >
    //             <img
    //                 key={propKey}
    //                 src={imgSrc}
    //                 alt={altText}
    //                 className={`editable-img ${className}`}
    //                 style={style}
    //             />
    //         </a>
    //     </div>
    // );
};

export default EditableImg;
