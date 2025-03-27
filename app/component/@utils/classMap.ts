// 映射表
export const CLASS_NAME_MAP: Record<string, string> = {
    "BTN-PRIMARY": "text-base font-medium tracking-wide leading-normal",
    "BTN-SECONDARY": "text-base font-medium tracking-wide leading-normal",
    "CARD": "text-base font-normal tracking-normal leading-normal",
    "DESC": "text-lg font-normal tracking-normal leading-relaxed",
    "FORM": "space-y-4",
    "IMAGE": "rounded-lg shadow-md",
    "INPUT": "border rounded-md px-4 py-2 text-base font-normal tracking-normal leading-normal",
    "LIST": "list-disc pl-6 text-base font-normal tracking-normal leading-normal",
    "TABLE": "border-collapse border border-gray-300 text-base font-normal tracking-normal leading-normal",
    "TEXT-CONTENT": "text-base font-light tracking-normal leading-normal",
    "TEXT-LINK": "text-lg font-normal tracking-normal leading-normal",
    "TITLE-PRIMARY": "text-5xl font-bold tracking-wide leading-tight",
    "TITLE-SECONDARY": "text-4xl font-medium tracking-normal leading-normal",
  };
  
  /**
   * 根据传入的 className 字符串，动态映射样式并合并额外样式
   * @param className - 包含映射键和额外样式的字符串
   * @returns 合并后的样式字符串
   */
  export const mapClassNames = (className: string | undefined): string => {
    if(!className) return "";
    const classNameParts = className.split(" "); // 按空格分割 className
    const mappedClassNames = classNameParts
      .map((part) => CLASS_NAME_MAP[part]) // 根据映射表获取样式
      .filter(Boolean) // 过滤掉 undefined 或空值
      .join(" "); // 合并为字符串
  
    const additionalClassNames = classNameParts
      .filter((part) => !CLASS_NAME_MAP[part]) // 获取没有映射的额外样式
      .join(" ");
  
    return `${mappedClassNames} ${additionalClassNames}`.trim(); // 合并映射样式和额外样式
  };