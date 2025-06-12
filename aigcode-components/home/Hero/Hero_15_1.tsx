import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';

export interface IHeroProps {
  announcement: string
  title: string
  description: string
  primaryButtonTextAttrLabel: string
  primaryButtonTextAttrLink: string
  secondaryButtonTextAttrLabel: string
  secondaryButtonTextAttrLink: string
}

const Hero: React.FC<IHeroProps> = ({
  announcement = 'Announcing our next round of funding. Read more →',
  title = 'Elevate Your Online Presence with Innovative Data Solutions',
  description = 'Discover how our data-driven approaches can transform your business, enhancing digital engagement and driving growth.',
  primaryButtonTextAttrLabel = 'Get Started',
  primaryButtonTextAttrLink = '/',
  secondaryButtonTextAttrLabel = 'Learn More',
  secondaryButtonTextAttrLink = '/',
}) => {
  return (
    <>
      {/* 引入Inter字体 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="w-full bg-white dark:bg-black overflow-hidden relative">
        <div className="relative isolate max-w-7xl mx-auto py-10 px-4 lg:px-8">
          {/* Existing Hero content */}
          <div className="py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative group rounded-full px-4 py-1.5 text-sm text-sky-600 dark:text-sky-400 ring-1 ring-sky-500 dark:ring-sky-300 hover:ring-sky-700 dark:hover:ring-sky-200">
                <EditableText
                  propKey="announcement"
                  className="inter group-hover:text-sky-700 dark:group-hover:text-sky-200"
                >
                  {announcement}
                </EditableText>
              </div>
            </div>
            <div className="text-center">
              <h1 className="inter TITLE-PRIMARY text-4xl font-semibold text-gray-900 dark:text-white sm:text-6xl">
                <EditableText propKey="title">{title}</EditableText>
              </h1>
              <p className="inter DESC mt-6 text-lg text-gray-600 dark:text-gray-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <EditableButton className="inter BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-600 dark:bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-700 dark:hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={primaryButtonTextAttrLink}>
                  <EditableText propKey="primaryButtonTextAttrLabel">{primaryButtonTextAttrLabel}</EditableText>
                </EditableButton>
                <EditableButton className="inter BTN-SECONDARY inline-flex items-center justify-center text-gray-700 dark:text-white bg-transparent dark:bg-black font-medium border border-gray-300 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={secondaryButtonTextAttrLink}>
                  <EditableText propKey="secondaryButtonTextAttrLabel">{secondaryButtonTextAttrLabel}</EditableText>
                </EditableButton>
              </div>
            </div>
          </div>

          {/* 浅色模式背景 */}
          <div className="absolute inset-0 -z-10 dark:hidden">
            {/* 浅色基础 */}
            <div
              className="absolute w-full h-full bg-gradient-to-b from-white via-blue-50 to-white opacity-100"
            ></div>
            {/* 浅蓝光晕 */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-blue-100 via-transparent to-transparent opacity-75 blur-[150px]"
              style={{
                background: "radial-gradient(circle at 50% 0%, #dbeafe, transparent)",
              }}
            ></div>
            {/* 浅紫光晕 */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-purple-100 via-transparent to-transparent opacity-60 blur-[200px]"
              style={{
                background: "radial-gradient(circle at 60% 0%, #f3e8ff, transparent)",
              }}
            ></div>
            {/* 浅粉光晕 */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-pink-100 via-transparent to-transparent opacity-50 blur-[250px]"
              style={{
                background: "radial-gradient(circle at 70% 0%, #fce7f3, transparent)",
              }}
            ></div>
            {/* 点状图案 */}
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: "radial-gradient(#6b7280 1px, transparent 1px)",
                backgroundSize: "6px 6px",
                opacity: 0.1,
              }}
            ></div>
          </div>

          {/* 暗色模式背景 - 保持原有样式 */}
          <div className="absolute inset-0 -z-10 hidden dark:block">
            {/* Deep Dark Base */}
            <div
              className="absolute w-full h-full bg-gradient-to-b from-black via-blue-900 to-black opacity-100"
            ></div>
            {/* Blue Glow */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-blue-500 via-transparent to-transparent opacity-75 blur-[150px]"
              style={{
                background: "radial-gradient(circle at 50% 0%, #2563eb, transparent)",
              }}
            ></div>
            {/* Purple Glow */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-purple-500 via-transparent to-transparent opacity-60 blur-[200px]"
              style={{
                background: "radial-gradient(circle at 60% 0%, #9333ea, transparent)",
              }}
            ></div>
            {/* Pink Glow */}
            <div
              className="absolute w-full h-full bg-gradient-radial from-pink-500 via-transparent to-transparent opacity-50 blur-[250px]"
              style={{
                background: "radial-gradient(circle at 70% 0%, #ec4899, transparent)",
              }}
            ></div>
            {/* Dot Pattern */}
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "6px 6px",
                opacity: 0.1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;