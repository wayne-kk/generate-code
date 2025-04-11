import useDataStore from "@/store/useDateStore";
import React, { useState } from "react";

interface EditableTextProps {
    className?: string; // 自定义类名
    propKey?: string; // 可选的 propKey，用于标识
    children?: string; // 初始文本内容
}

// EditableText: 允许用户编辑的文本组件
const EditableText: React.FC<EditableTextProps & React.HTMLAttributes<HTMLDivElement>> = ({ propKey, className, children = "", ...rest }) => {
    let [text, setText] = useState<string>(children);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    console.log('text', text)
    if (typeof text !== 'string') text = text[0] || ''
    const linkText = text.split('&')[1];
    // 从文本中提取 `text=` 后的内容
    const match = text.match(/text=([^&]*)/);
    const result = decodeURIComponent(match ? match[1] : text);

    const pageDefaultData = { ...useDataStore((state => state.pageDefaultData)) }
    const setPageDefaultData = useDataStore((state => state.setPageDefaultData))
    return isEditing ? (
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="border-b border-gray-400 focus:outline-none"
        />
    ) : (
            <div key={propKey} onClick={(e) => {
                const linkText = e.currentTarget.dataset.link;
                if (!linkText) return
                const pageInfo = pageDefaultData.pageInfo
                for (const info of pageInfo.data.list) {
                    if (linkText.includes(info.path)) {
                        pageDefaultData.blocksMap = info.blocksData.blocksMap
                        pageDefaultData.children = info.blocksData.children
                        setPageDefaultData(pageDefaultData)
                        console.log('pageDefaultData', pageDefaultData)
                    }
                }
            }} className={className} data-link={linkText} {...rest} >
                {result}
            </div>
    );
};

export default EditableText;