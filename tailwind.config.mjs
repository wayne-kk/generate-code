/** @type {import('tailwindcss').Config} */
const config = {
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
