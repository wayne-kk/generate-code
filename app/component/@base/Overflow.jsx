import React, { useState, useEffect } from 'react';

const Overflow = ({
    data,
    style,
    className,
    renderItem,
    maxCount,
    minCount = 1,
    renderRest,
    onUpdate,
}) => {
    const [visibleItems, setVisibleItems] = useState(data.slice(0, maxCount));
    const [restItems, setRestItems] = useState(data.slice(maxCount));

    // 监听数据变化并更新显示的内容
    useEffect(() => {
        setVisibleItems(data.slice(0, maxCount));
        setRestItems(data.slice(maxCount));
    }, [data, maxCount]);

    // 更新 visibleItems 和 restItems
    const handleOverflowUpdate = () => {
        setVisibleItems(data.slice(0, maxCount));
        setRestItems(data.slice(maxCount));
        if (onUpdate) onUpdate(visibleItems, restItems); // 触发更新回调
    };

    return (
        <div className={className} style={style}>
            <div className="overflow-container flex items-center">
                {/* 渲染可见项 */}
                {visibleItems.map((item, index) => (
                    <div key={index} className="overflow-item">
                        {renderItem(item, index)}
                    </div>
                ))}

                {/* 渲染剩余项 */}
                {restItems.length > 0 && (
                    <div className="overflow-rest">
                        {renderRest ? renderRest(restItems) : `+${restItems.length} more`}
                    </div>
                )}
            </div>
            {/* 可选的溢出更新按钮 */}
            {restItems.length > 0 && (
                <button onClick={handleOverflowUpdate} className="overflow-update-btn">
                    {`Show ${restItems.length} more`}
                </button>
            )}
        </div>
    );
};

export default Overflow;
