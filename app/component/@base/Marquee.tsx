'use client';
import React, { useRef, useEffect } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // 滚动速度，单位为秒，默认 10s
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 10,
  direction = 'left',
  className = '',
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.children[0].cloneNode(true);
      marquee.appendChild(clone);
    }
  }, []);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        ref={marqueeRef}
        className="flex"
        style={{
          animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${speed}s linear infinite`,
        }}
      >
        <div className="flex-shrink-0">{children}</div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};
export default Marquee