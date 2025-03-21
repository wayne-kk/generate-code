// EditableButton: 可编辑的按钮文本
'use client'
export default function EditableButton({ children, className, style }) {
    return (
        <button className={className} style={style}>
            {children}
        </button>
    );
}