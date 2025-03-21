'use client'
import { useState } from 'react'
// EditableText: 允许用户编辑的文本组件
export default function EditableText({ propKey, children }) {
    const [text, setText] = useState(children);
    const [isEditing, setIsEditing] = useState(false);
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
        <span onClick={() => setIsEditing(true)} className="cursor-pointer hover:underline">
            {result}
        </span>
    );
}