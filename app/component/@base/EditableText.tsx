import React, { useState } from "react";
import { mapClassNames } from "../@utils/classMap";

interface EditableTextProps {
    className?: string; // 自定义类名
    propKey?: string; // 可选的 propKey，用于标识
    children?: string; // 初始文本内容
}

// EditableText: 允许用户编辑的文本组件
const EditableText: React.FC<EditableTextProps> = ({ propKey, className, children = "" }) => {
    const [text, setText] = useState<string>(children);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    className = mapClassNames(className);
    // 从文本中提取 `text=` 后的内容
    const match = text.match(/text=([^&]*)/);
    const result = match ? match[1] : text;

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
        <span key={propKey} onClick={() => setIsEditing(true)} className={className}>
            {result}
        </span>
    );
};

export default EditableText;