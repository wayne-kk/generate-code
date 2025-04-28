// app/layout.tsx
// import './custom-styles.css'; // Temporarily commented out due to issues
import "./globals.css";
import Navbar from './component/Navbar'
import { useFonts } from "./hooks/useFont";
import "./custom-styles.css"; // Temporarily commented out due to issues

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { fontVariables } = useFonts()
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body> 
    </html>
  )   
}
