import chroma from 'chroma-js';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface ColorPickerProps {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
    const [isPickerVisible, setIsPickerVisible] = useState(true);
    const [colorScale, setColorScale] = useState<string[]>([]);
    const [lightMixRatios, setLightMixRatios] = useState<number[]>([0.70, 0.50, 0.40, 0.30, 0.20]);
    const [darkMixRatios, setDarkMixRatios] = useState<number[]>([0.10, 0.30, 0.50, 0.70, 0.85]);
    const [mixColor, setMixColor] = useState('white');

    const handleColorChange = (newColor: any) => {
        onColorChange(newColor.hex);
        setColorTheme(newColor.hex);
    };

    const handleColorChangeComplete = (newColor: any) => {
        onColorChange(newColor.hex);
    };

    const setColorTheme = (color: string) => {
        const baseColor = chroma(color);

        const lightColorScale = lightMixRatios.map((ratio) =>
            chroma.mix(baseColor, mixColor, ratio).hex()
        );

        const midColor = baseColor.hex();

        const darkColorScale = darkMixRatios.map((ratio) =>
            chroma.mix(baseColor, 'black', ratio).hex()
        );

        const initColorScale = [
            ...lightColorScale,
            midColor,
            ...darkColorScale,
        ];

        const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

        setColorScale(initColorScale);

        const root = document.getElementById('preview-viewport');
        if (root) {
            initColorScale.forEach((color, index) => {
                const level = levels[index];
                const variableName = `--ai-theme-color-${level}`;
                root.style.setProperty(variableName, color);
            });
        }

        console.log('colorScale', initColorScale);
    };

    const handleLightMixChange = (index: number, value: number) => {
        const updatedLightMixRatios = [...lightMixRatios];
        updatedLightMixRatios[index] = value;
        setLightMixRatios(updatedLightMixRatios);
        setColorTheme(color);
    };

    const handleDarkMixChange = (index: number, value: number) => {
        const updatedDarkMixRatios = [...darkMixRatios];
        updatedDarkMixRatios[index] = value;
        setDarkMixRatios(updatedDarkMixRatios);
        setColorTheme(color);
    };

    const handleLightInputChange = (index: number, value: string) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 1) {
            const updatedLightMixRatios = [...lightMixRatios];
            updatedLightMixRatios[index] = numericValue;
            setLightMixRatios(updatedLightMixRatios);
            setColorTheme(color);
        }
    };

    const handleDarkInputChange = (index: number, value: string) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 1) {
            const updatedDarkMixRatios = [...darkMixRatios];
            updatedDarkMixRatios[index] = numericValue;
            setDarkMixRatios(updatedDarkMixRatios);
            setColorTheme(color);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
            {isPickerVisible && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-[400px] max-w-full">
                    <ChromePicker
                        color={color}
                        onChange={handleColorChange}
                        onChangeComplete={handleColorChangeComplete}
                    />

                    {/* 控制每个浅色部分的 mixRatio */}
                    <div className="mt-4">
                        <h3 className="text-gray-900 mr-4">Adjust Light Color Mix</h3>
                        {[50, 100, 200, 300, 400].map((level, index) => (
                            <div key={index} className="flex flex-row items-center justify-center mt-1">
                                <label className="text-sm text-gray-700">{`${level}`}</label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={lightMixRatios[index]}
                                        onChange={(e) => handleLightMixChange(index, parseFloat(e.target.value))}
                                        className="w-full"
                                    />
                                    <input
                                        type="number"
                                        value={lightMixRatios[index]}
                                        onChange={(e) => handleLightInputChange(index, e.target.value)}
                                        className="w-16 text-center"
                                    />
                                </div>
                                {/* 展示浅色部分的色块 */}
                                <div
                                    className="w-10 h-10 rounded-md cursor-pointer mt-2"
                                    style={{ backgroundColor: chroma.mix(color, mixColor, lightMixRatios[index]).hex() }}
                                    id={`tooltip-light-${index}`}
                                    data-tooltip-id={`tooltip-light-${index}`}
                                >
                                    <ReactTooltip id={`tooltip-light-${index}`} place="top" content={chroma.mix(color, mixColor, lightMixRatios[index]).hex()} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 控制每个深色部分的 mixRatio */}
                    <div className="mt-4">
                        <h3 className="text-gray-900">Adjust Dark Color Mix</h3>
                        {['600', '700', '800', '900', '950'].map((level, index) => (
                            <div key={index} className="flex flex-row items-center justify-center mt-1">
                                <label className="text-sm text-gray-700">{`${level}`}</label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={darkMixRatios[index]}
                                        onChange={(e) => handleDarkMixChange(index, parseFloat(e.target.value))}
                                        className="w-full"
                                    />
                                    <input
                                        type="number"
                                        value={darkMixRatios[index].toFixed(2)}
                                        onChange={(e) => handleDarkInputChange(index, e.target.value)}
                                        className="w-16 text-center"
                                    />
                                </div>
                                {/* 展示深色部分的色块 */}
                                <div
                                    className="w-10 h-10 rounded-md cursor-pointer mt-2"
                                    style={{ backgroundColor: chroma.mix(color, 'black', darkMixRatios[index]).hex() }}
                                    id={`tooltip-dark-${index}`}
                                    data-tooltip-id={`tooltip-dark-${index}`}
                                >
                                    <ReactTooltip id={`tooltip-dark-${index}`} place="top" content={chroma.mix(color, 'black', darkMixRatios[index]).hex()} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
