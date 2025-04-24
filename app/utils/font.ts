export const fontOptions = [
    "pacifico", "bebasNeue", "unifraktur", "abrilFatface", "newRocker", "inter", "playfair", "bubblegum",
    "comfortaa", "merriweather", "gochiHand", "fredoka", "medievalSharp", "roboto", "notoSerif",
    "indieFlower", "righteous", "pirataOne"
];

export const getSystemFont = (font: string) => {
    return `"${font}", "ui-sans-serif", "system-ui", "Segoe UI", "roboto", "Helvetica Neue", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji`
}