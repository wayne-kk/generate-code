'use client'
import "./globals.css";
import Navbar from './components/@business/Navbar'
import { usePathname } from "next/navigation"
import { useFonts } from "./hooks/useFont";
import "./custom-styles.css"; // Temporarily commented out due to issues
import { Toaster } from "./components/ui/sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { fontVariables } = useFonts()
  const pathname = usePathname()
  const showNavbar = ["/", "/generate", "/blocks"].includes(pathname)
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">
        {showNavbar && <Navbar />}
        <div className="mt-16">{children}</div>
        <Toaster position="bottom-center"></Toaster>
      </body> 
    </html>
  )   
}
