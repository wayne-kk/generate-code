
import {
  Pacifico, Bebas_Neue, UnifrakturMaguntia, Abril_Fatface, New_Rocker,
  Inter, Playfair_Display, Bubblegum_Sans, Comfortaa,
  Merriweather, Gochi_Hand, Fredoka, MedievalSharp,
  Roboto, Noto_Serif, Indie_Flower, Righteous, Pirata_One
} from 'next/font/google'
import localFont from 'next/font/local'

// 顶层就执行 Font 加载（符合 next/font 的规范）
const pacifico = Pacifico({ subsets: ['latin'], variable: '--font-pacifico', weight: '400' })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], variable: '--font-bebas-neue', weight: '400' })
const unifraktur = UnifrakturMaguntia({ subsets: ['latin'], variable: '--font-unifraktur', weight: '400' })
const abrilFatface = Abril_Fatface({ subsets: ['latin'], variable: '--font-abril-fatface', weight: '400' })
const newRocker = New_Rocker({ subsets: ['latin'], variable: '--font-new-rocker', weight: '400' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const bubblegum = Bubblegum_Sans({ subsets: ['latin'], variable: '--font-bubblegum', weight: '400' })
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' })
const merriweather = Merriweather({ subsets: ['latin'], variable: '--font-merriweather', weight: '400' })
const gochiHand = Gochi_Hand({ subsets: ['latin'], variable: '--font-gochi-hand', weight: '400' })
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' })
const medievalSharp = MedievalSharp({ subsets: ['latin'], variable: '--font-medieval-sharp', weight: '400' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['400', '700'] })
const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-noto-serif' })
const indieFlower = Indie_Flower({ subsets: ['latin'], variable: '--font-indie-flower', weight: '400' })
const righteous = Righteous({ subsets: ['latin'], variable: '--font-righteous', weight: '400' })
const pirataOne = Pirata_One({ subsets: ['latin'], variable: '--font-pirata-one', weight: '400' })
const muyao = localFont({
  src: '../../public/fonts/Muyao-Softbrush.ttf',
  variable: '--font-muyao',
  weight: '400',
  style: 'normal',
})

// 统一收敛，方便后续联动
export const fontConfig = {
  pacifico,
  bebasNeue,
  unifraktur,
  abrilFatface,
  newRocker,
  inter,
  playfair,
  bubblegum,
  comfortaa,
  merriweather,
  gochiHand,
  fredoka,
  medievalSharp,
  roboto,
  notoSerif,
  indieFlower,
  righteous,
  pirataOne,
  muyao
} as const

// 根据 fontConfig 动态生成 fontOptions
export const fontOptions = Object.keys(fontConfig) as Array<keyof typeof fontConfig>;

// 提供 hook 返回 fontVariables（加 'use client'，只能 Client 端调用）
export const useFonts = () => {
  const fontVariables = Object.values(fontConfig).map(font => font.variable).join(' ')
  return { fontVariables }
}

// 给定字体名，返回系统 font-family 字符串
export const getSystemFont = (font: string) => {
  return `"${font}", "ui-sans-serif", "system-ui", "Segoe UI", "roboto", "Helvetica Neue", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
}
