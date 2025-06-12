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

}) =>{
  return (
    <div className="w-full bg-slate-100 dark:bg-black overflow-hidden">
      <div className="relative isolate max-w-7xl mx-auto py-10 px-4 lg:px-8">
        {/* 艺术科技风格背景 - 顶部 */}
        <div className="absolute inset-x-0 top-0 -z-10" aria-hidden="true">
          {/* 网格线条 - 增加间距，降低不透明度 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* 顶部光晕 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
            <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-[80px]"></div>
            <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-[60px]"></div>
          </div>
          
          {/* 科技线条 - 简化线条，只保留优雅的曲线 */}
          <svg className="absolute top-0 left-0 w-full h-[600px] opacity-15 dark:opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="url(#techGradient1)" strokeWidth="0.15" fill="none" />
            <path d="M0,70 Q45,50 90,70 T100,70" stroke="url(#techGradient1)" strokeWidth="0.15" fill="none" />
            <defs>
              <linearGradient id="techGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* 波浪线+流动光标的强化效果 */}
            <div className="relative group border border-2 border-sky-500 dark:border-sky-400 rounded-full px-4">
              {/* 标签主体 */}
              <div className="relative px-4 py-2.5 text-sm font-medium leading-6 text-sky-500 dark:text-sky-300">
                {/* 可编辑文本 */}
                <EditableText 
                  propKey="announcement" 
                  className="relative z-10 group-hover:text-sky-600 dark:group-hover:text-sky-200 transition-colors duration-200"
                >
                  {announcement}
                </EditableText>
                
                {/* 动态指示箭头 */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sky-500 dark:text-sky-300 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  👋
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="TITLE-PRIMARY text-4xl font-semibold sm:text-6xl" style={{
              background: "linear-gradient(to right, #0284c7, #6366f1)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent"
            }}>
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <p className="DESC mt-6 text-lg text-slate-700 dark:text-white/90">
              <EditableText propKey="description">{description}</EditableText>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-gradient-to-r from-sky-600 to-indigo-500 dark:from-sky-500 dark:to-indigo-400 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:from-sky-500 hover:to-indigo-400 dark:hover:from-sky-300 dark:hover:to-indigo-300 rounded-lg text-sm sm:text-base 2xl:text-lg transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] dark:shadow-[0_0_20px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.8)]" href={primaryButtonTextAttrLink}>
                <EditableText propKey="primaryButtonTextAttrLabel">{primaryButtonTextAttrLabel}</EditableText>
              </EditableButton>
              <EditableButton className="BTN-SECONDARY inline-flex items-center justify-center text-sky-600 dark:text-sky-200 bg-transparent font-medium border border-sky-500 dark:border-sky-200 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400/10 dark:hover:bg-sky-200/20 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-300" href={secondaryButtonTextAttrLink}>
                <EditableText propKey="secondaryButtonTextAttrLabel">{secondaryButtonTextAttrLabel}</EditableText>
              </EditableButton>
            </div>
          </div>
        </div>
        
        {/* 艺术科技风格背景 - 底部 */}
        <div className="absolute inset-x-0 bottom-0 -z-10" aria-hidden="true">
          {/* 底部光晕 */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
            <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-sky-500/20 dark:bg-sky-500/30 rounded-full blur-[80px]"></div>
          </div>
          
          {/* 科技线条 - 简化线条，更优雅 */}
          <svg className="absolute bottom-0 left-0 w-full h-[600px] opacity-15 dark:opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,70 50,50 T100,50" stroke="url(#techGradient2)" strokeWidth="0.15" fill="none" />
            <path d="M0,30 Q45,50 90,30 T100,30" stroke="url(#techGradient2)" strokeWidth="0.15" fill="none" />
            <defs>
              <linearGradient id="techGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* 数字雨效果 - 简化版，减少数量，增加间距 */}
          <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden opacity-15 dark:opacity-30">
            <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[15%] animate-digitalRain" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[35%] animate-digitalRain" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[55%] animate-digitalRain" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[75%] animate-digitalRain" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[90%] animate-digitalRain" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      
      {/* 添加数字雨动画定义 */}
      <style>{`
        @keyframes digitalRain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-digitalRain {
          animation: digitalRain 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;