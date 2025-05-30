'use client'
import "./globals.css";
import Navbar from './_components/@business/Navbar'
import { usePathname } from "next/navigation"
import { useFonts } from "./_hooks/useFont";
import "./custom-styles.css"; // Temporarily commented out due to issues
import { Toaster } from "@/_components/@ui/sonner";
import { ThemeProvider } from '@/_components/@theme/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { fontVariables } = useFonts()
  const pathname = usePathname()
  const showNavbar = ["/", "/generate", "/blocks"].includes(pathname)
  return (
    <html lang="en" className={fontVariables} >
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        {/* 配置 darkMode: 'class' */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              important: '#preview-viewport',
              corePlugins: {
                preflight: false, // 完全禁用 preflight
              },
              // 其他配置...
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {showNavbar && <Navbar />}
          {/* 这里是你应用的主要内容 */}
          <div className="mt-16">{children}</div>
          <Toaster position="bottom-center"></Toaster>
        </ThemeProvider>
      </body>
    </html>
  )
}

