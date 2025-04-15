'use client';
import React, { useRef, useEffect, useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // 滚动速度，单位为秒
  direction?: 'left' | 'right';
  className?: string;
  autoFill?: boolean; // 是否自动填充
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 10,
  direction = 'left',
  className = '',
  autoFill = false,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // 获取内容的宽度
  useEffect(() => {
    const updateContentWidth = () => {
      if (marqueeRef.current) {
        setContentWidth(marqueeRef.current.scrollWidth);
      }
    };

    updateContentWidth();

    window.addEventListener('resize', updateContentWidth);
    return () => {
      window.removeEventListener('resize', updateContentWidth);
    };
  }, [children]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={marqueeRef}
        className="flex"
        style={{
          animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${speed
            }s linear infinite`,
        }}
      >
        {/* 渲染原始内容 */}
        <div className="flex flex-shrink-0">{children}</div>

        {/* 如果需要填充的副本，使其实现首尾相连效果 */}
        {autoFill && (
          <div className="flex flex-shrink-0">{children}</div>
        )}
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
