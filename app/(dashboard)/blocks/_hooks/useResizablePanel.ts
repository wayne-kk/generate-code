import { useEffect, useRef } from 'react';

export function useResizablePanel(setSplitPosition: (position: number) => void) {
    const isDraggingRef = useRef(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDraggingRef.current) return;

            const containerRect = document.getElementById('split-pane')?.getBoundingClientRect();
            if (!containerRect) return;

            const containerWidth = containerRect.width;
            const mouseX = e.clientX - containerRect.left;

            // 计算鼠标位置相对于容器的百分比
            let newPosition = (mouseX / containerWidth) * 100;

            // 限制分割比例在10%到90%之间
            newPosition = Math.max(10, Math.min(90, newPosition));

            setSplitPosition(newPosition);
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [setSplitPosition]);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault(); // 防止文本选择
        isDraggingRef.current = true;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };

    return { handleMouseDown };
}
