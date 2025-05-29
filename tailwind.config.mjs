/** @type {import('tailwindcss').Config} */
const config = {
  corePlugins: {
    preflight: false, // 完全禁用 preflight
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./office_web_components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
