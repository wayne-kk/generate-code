import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IHeroProps {
  applyTextAttrLabel: string
  applyTextAttrLink: string
  heroTitle: string
  heroDescription: string
  applyIcon: string
}

const Hero: React.FC<IHeroProps> = ({
  applyTextAttrLabel = `Join the creative field`,
  applyTextAttrLink = '/',
  heroTitle = `Crafting Designs that Inspire`,
  heroDescription = `Unlock your potential with our bespoke design services. Elevate your brand today.`,
  applyIcon = 'fa-solid fa-arrow-right',
}) => {
  return (
    <>
      {/* 添加Outfit字体 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .outfit-font {
          font-family: 'Outfit', sans-serif;
        }
        
        /* Dynamic Noise Effect */
        .noise-layer {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
          background-size: 300px 300px;
          animation: noise-animation 0.3s steps(5) infinite;
          opacity: 0.3; /* 降低噪点不透明度，减少对前景内容的影响 */
          z-index: 5; /* 降低z-index值，确保不会覆盖前景内容 */
          pointer-events: none; /* 确保不会影响交互 */
        }

        @keyframes noise-animation {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(-4%, 2%); }
          30% { transform: translate(2%, -4%); }
          40% { transform: translate(-2%, 5%); }
          50% { transform: translate(-4%, 2%); }
          60% { transform: translate(3%, 0); }
          70% { transform: translate(0, 3%); }
          80% { transform: translate(-3%, 0); }
          90% { transform: translate(2%, 2%); }
          100% { transform: translate(1%, 0); }
        }
      `}</style>
    
      <div className="relative w-full h-screen overflow-hidden bg-gray-100 dark:bg-black flex justify-center items-center">
        {/* Main Content - 增加z-index确保在噪点层之上 */}
        <div className="max-w-7xl mx-auto py-10 px-4 relative z-10 text-slate-900 dark:text-white flex flex-col items-center">
          <div className="flex flex-col w-fit items-center">
            <h1 className="outfit-font TITLE-PRIMARY mb-6 text-4xl text-center font-extrabold text-slate-900 dark:text-white md:text-6xl">
              <EditableText propKey="heroTitle">{heroTitle}</EditableText>
            </h1>
            <p className="outfit-font DESC mb-8 text-center max-w-lg text-base font-normal text-slate-700 dark:text-white/80 lg:mb-10">
              <EditableText propKey="heroDescription">
                {heroDescription}
              </EditableText>
            </p>
            
            {/* 按钮样式和动效 */}
            <EditableButton
              className="outfit-font group inline-flex items-center gap-3 font-semibold 
                text-white bg-slate-900 hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 
                whitespace-nowrap overflow-hidden text-ellipsis
                rounded-lg px-8 py-2 xl:py-3
                transition-colors duration-300
                relative z-20" // 增加z-index以确保在噪点层之上
                href={applyTextAttrLink}
            >
              <EditableText propKey="applyTextAttrLabel" className="overflow-hidden text-ellipsis">
                {applyTextAttrLabel}
              </EditableText>

              <span
                className="relative w-[25px] h-[25px] flex-shrink-0 
                  grid place-items-center overflow-hidden 
                  rounded-full bg-white dark:bg-black
                  text-black dark:text-white
                  ml-2 -mr-2"
              >
                <EditableIcon
                  propKey="applyIcon"
                  icon={applyIcon}
                  iconLibrary="FontAwesome"
                  className="absolute transition-transform duration-300 ease-in-out -rotate-45
                    group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />
                <EditableIcon
                  propKey="applyIcon"
                  icon={applyIcon}
                  iconLibrary="FontAwesome"
                  className="absolute transform translate-x-[-150%] translate-y-[150%] -rotate-45
                    group-hover:translate-x-0 group-hover:translate-y-0 
                    transition-transform duration-300 ease-in-out delay-100"
                />
              </span>
            </EditableButton>
          </div>
        </div>

        {/* Background Layer */}
        <div className="absolute w-screen h-screen top-0 left-0 pointer-events-none">
          {/* Noise Effect */}
          <div className="noise-layer"></div>
          
          {/* Light Beams - 亮色模式 */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-screen h-screen object-cover dark:hidden"
          >
            <defs>
              {/* Light Beam Gradient - 适合浅色背景的颜色 */}
              <linearGradient id="LightBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(30, 64, 175, 0.05)" /> {/* 蓝色 */}
                <stop offset="50%" stopColor="rgba(30, 64, 175, 0.3)" />
                <stop offset="100%" stopColor="rgba(30, 64, 175, 0.05)" />
              </linearGradient>

              {/* Blur and Glow Filter */}
              <filter id="beamGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred" />
                <feColorMatrix
                  in="blurred"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 0.8 0"
                  result="colored"
                />
                <feMerge>
                  <feMergeNode in="colored" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Multiple Light Beams */}
            {[...Array(6)].map((_, index) => (
              <rect
                key={index}
                x="0"
                y={`${10 + index * 15}%`}
                width="100%"
                height="15%"
                fill="url(#LightBeamGradient)"
                opacity="0.7"
                filter="url(#beamGlow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="-100 0"
                  to="100 0"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0.7;0.5"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </svg>
          
          {/* Light Beams - 暗色模式（使用之前浅色模式的黄色光束） */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-screen h-screen object-cover hidden dark:block"
          >
            <defs>
              {/* Yellow Light Beam Gradient - 从之前的浅色模式 */}
              <linearGradient id="YellowBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 0, 0.1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                <stop offset="100%" stopColor="rgba(255, 255, 0, 0.1)" />
              </linearGradient>

              {/* Blur and Glow Filter */}
              <filter id="darkBeamGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred" />
                <feColorMatrix
                  in="blurred"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 1 0"
                  result="colored"
                />
                <feMerge>
                  <feMergeNode in="colored" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Multiple Light Beams for Dark Mode */}
            {[...Array(6)].map((_, index) => (
              <rect
                key={index}
                x="0"
                y={`${10 + index * 15}%`}
                width="100%"
                height="15%"
                fill="url(#YellowBeamGradient)"
                opacity="0.6"
                filter="url(#darkBeamGlow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="-100 0"
                  to="100 0"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.6;0.4"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;