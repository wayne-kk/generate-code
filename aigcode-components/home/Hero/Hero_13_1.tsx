import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IHeroProps {
  applyTextAttrLabel: string
  applyTextAttrLink: string
  heroTitle: string
  heroDescription: string
  buttonIcon: string
}

const Hero: React.FC<IHeroProps> = ({
  applyTextAttrLabel = `Join the creative field`,
  applyTextAttrLink = `/`,
  heroTitle = `Crafting Designs that Inspire`,
  heroDescription = `Unlock your potential with our bespoke design services. Elevate your brand today.`,
  buttonIcon = 'fa-solid fa-arrow-right',
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-slate-900 flex justify-center items-center">
      <div className="max-w-7xl mx-auto py-10 px-4 relative z-[1] text-white flex flex-col items-center">
        <div className="flex flex-col w-fit items-center">
          <h1 className="TITLE-PRIMARY mb-6 text-4xl text-center font-extrabold text-black dark:text-white md:text-6xl">
            <EditableText propKey="heroTitle">{heroTitle}</EditableText>
          </h1>
          <p className="DESC mb-8 text-center max-w-lg text-base font-normal text-black/60 dark:text-white/70 lg:mb-10">
            <EditableText propKey="heroDescription">
              {heroDescription}
            </EditableText>
          </p>
          <EditableButton
            className={`
              group inline-flex items-center gap-3 font-semibold 
              text-white bg-slate-900 hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-700 
              whitespace-nowrap overflow-hidden text-ellipsis
              rounded-full px-5 py-[0.75rem] pl-[20px]
              transition-colors duration-300
            `}
            href={applyTextAttrLink}
          >
            <EditableText propKey="applyTextAttrLabel" className="overflow-hidden text-ellipsis">
              {applyTextAttrLabel}
            </EditableText>

            <span
              className={`
                relative w-[25px] h-[25px] flex-shrink-0 
                grid place-items-center overflow-hidden 
                rounded-full bg-white dark:bg-white transition-colors
                text-black dark:text-black
              `}
            >
              <EditableIcon
                propKey="buttonIcon"
                icon={buttonIcon}
                iconLibrary="FontAwesome"
                className={`
                  absolute
                  transition-transform duration-300 ease-in-out -rotate-45
                  group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
                `}
              />
              <EditableIcon
                propKey="buttonIcon"
                icon={buttonIcon}
                iconLibrary="FontAwesome"
                className={`
                  absolute
                  transform translate-x-[-150%] translate-y-[150%] -rotate-45
                  group-hover:translate-x-0 group-hover:translate-y-0 
                  transition-transform duration-300 ease-in-out delay-100
                `}
              />
            </span>
          </EditableButton>
        </div>
      </div>

      {/* 🔮 SVG 粒子背景 + 动态 radialGradient */}
      <svg
        className="IMAGE absolute w-full h-full object-cover opacity-90 dark:opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="bgGradient" r="0.7">
            <animate attributeName="fx" values="0.3;0.7;0.3" dur="15s" repeatCount="indefinite" />
            <animate attributeName="fy" values="0.3;0.7;0.3" dur="20s" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(0, 200, 255, 0.6)">
              <animate
                attributeName="stop-color"
                values="rgba(0, 200, 255, 0.6);rgba(255, 0, 255, 0.4);rgba(0, 200, 255, 0.6)"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          {/* 暗色模式使用的渐变 */}
          <radialGradient id="darkBgGradient" r="0.7">
            <animate attributeName="fx" values="0.3;0.7;0.3" dur="15s" repeatCount="indefinite" />
            <animate attributeName="fy" values="0.3;0.7;0.3" dur="20s" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(71, 85, 205, 0.6)">
              <animate
                attributeName="stop-color"
                values="rgba(71, 85, 205, 0.6);rgba(138, 43, 226, 0.4);rgba(71, 85, 205, 0.6)"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          {/* 添加气泡虚化滤镜 - 明亮模式 */}
          <filter id="bubbleBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
          
          {/* 添加气泡虚化滤镜 - 暗色模式（更强的模糊效果） */}
          <filter id="bubbleBlurDark" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
          
          {/* 为气泡添加发光效果 */}
          <filter id="bubbleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            <feComposite in="SourceGraphic" operator="over" />
          </filter>
          
          {/* 气泡渐变填充 */}
          <radialGradient id="bubbleGradient">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#bgGradient)" className="dark:hidden">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>
        
        {/* 暗色模式下显示的矩形 */}
        <rect width="100" height="100" fill="url(#darkBgGradient)" className="hidden dark:inline">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>

        {/* 🟣 自定义粒子模拟 - 添加了虚化效果 */}
        {Array.from({ length: 30 }).map((_, i) => {
          const delay = i * 0.8; // 缩短 delay 让粒子更密集感
          const size = (Math.random() * 1.8 + 0.5).toFixed(2); // 增大气泡尺寸
          const x = (Math.random() * 100).toFixed(2);
          const y = (Math.random() * 100).toFixed(2);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size}
              fill="url(#bubbleGradient)"
              className="opacity-20 dark:opacity-30"
              filter="url(#bubbleBlur)"
              style={{
                filter: "url(#bubbleBlur)",
                mixBlendMode: "screen"
              }}
            >
              <animate
                attributeName="cy"
                values={`${y};${(parseFloat(y) - 10).toFixed(2)};${y}`}
                dur={`${6 + Math.random() * 4}s`} // 随机化动画时长
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur={`${6 + Math.random() * 4}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${size};${(parseFloat(size) * 1.2).toFixed(2)};${size}`}
                dur={`${7 + Math.random() * 3}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}

export default Hero;