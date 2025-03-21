import React from 'react';

const EditableIcon = ({ propKey, icon, iconLibrary = "FontAwesome", className }) => {
  // 在这里根据需要处理 iconLibrary 的支持，例如 FontAwesome
  if (!icon) return null;

  // 假设 icon 是 FontAwesome 格式
  return <i className={`${iconLibrary} ${icon} ${className}`} />;
};

export default EditableIcon;
