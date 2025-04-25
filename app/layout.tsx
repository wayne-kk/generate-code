// app/layout.tsx
// import './custom-styles.css'; // Temporarily commented out due to issues
import "./globals.css";
import {
  Pacifico, Bebas_Neue, UnifrakturMaguntia, Abril_Fatface, New_Rocker,
  Inter, Playfair_Display, Bubblegum_Sans, Comfortaa,
  Merriweather, Gochi_Hand, Fredoka, MedievalSharp,
  Roboto, Noto_Serif, Indie_Flower, Righteous, Pirata_One
} from 'next/font/google'
import Navbar from './components/Navbar'

const pacifico = Pacifico({ subsets: ['latin'], variable: '--font-pacifico', weight: '400' })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], variable: '--font-bebas-neue', weight: '400' })
const unifraktur = UnifrakturMaguntia({
  subsets: ['latin'], variable: '--font-unifraktur',
  weight: '400'
})
const abrilFatface = Abril_Fatface({ subsets: ['latin'], variable: '--font-abril-fatface', weight: '400' })
const newRocker = New_Rocker({ subsets: ['latin'], variable: '--font-new-rocker', weight: '400' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const bubblegum = Bubblegum_Sans({
  subsets: ['latin'], variable: '--font-bubblegum',
  weight: '400'
})
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' })
const merriweather = Merriweather({
  subsets: ['latin'], variable: '--font-merriweather',
  weight: '400'
})
const gochiHand = Gochi_Hand({
  subsets: ['latin'], variable: '--font-gochi-hand',
  weight: '400'
})
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' })
const medievalSharp = MedievalSharp({
  subsets: ['latin'], variable: '--font-medieval',
  weight: '400'
})
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['400', '700'] })
const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-noto-serif' })
const indieFlower = Indie_Flower({
  subsets: ['latin'], variable: '--font-indie-flower',
  weight: '400'
})
const righteous = Righteous({
  subsets: ['latin'], variable: '--font-righteous',
  weight: '400'
})
const pirataOne = Pirata_One({
  subsets: ['latin'], variable: '--font-pirata-one',
  weight: '400'
})

const allFonts = [
  pacifico, bebasNeue, unifraktur, abrilFatface, newRocker, inter, playfair, bubblegum,
  comfortaa, merriweather, gochiHand, fredoka, medievalSharp, roboto, notoSerif,
  indieFlower, righteous, pirataOne
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={allFonts.map(f => f.variable).join(' ')}>
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
