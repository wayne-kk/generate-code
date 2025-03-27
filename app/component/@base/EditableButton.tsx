import React from "react";
import { mapClassNames } from "../@utils/classMap";

// 定义 props 类型，扩展所有 button 元素的内置属性
interface EditableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode; // 子节点内容，可选
    className?: string; // className，可选
    style?: React.CSSProperties; // 内联样式，可选
    propKey?: string; // 自定义 key 属性
}

// EditableButton: 可编辑的按钮文本
export default function EditableButton({
    children,
    className = "",
    style,
    propKey,
    ...rest // 解构其余的 button 原生属性
}: EditableButtonProps) {
    // 使用 mapClassNames 函数处理 className
    className = mapClassNames(className) || className;

    return (
        <button
            className={className}
            style={style}
            key={propKey}
            {...rest} // 将剩余的 button 属性传递给原生 button 元素
        >
            {children}
        </button>
    );
}