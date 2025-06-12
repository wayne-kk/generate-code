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
    <>
      {/* 添加数字雨动画定义 */}
      <style>{`
        @keyframes digitalRain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-digitalRain {
          animation: digitalRain 8s linear infinite;
        }
      `}</style>
      
      <div className="w-full bg-white dark:bg-slate-900 overflow-hidden">
        <div className="relative isolate max-w-7xl mx-auto py-10 px-4 lg:px-8">
          {/* 艺术科技风格背景 - 顶部 */}
          <div className="absolute inset-x-0 top-0 -z-10" aria-hidden="true">
            {/* 网格线条 */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(56,189,248,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* 顶部光晕 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
              <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-100/50 dark:bg-purple-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-cyan-100/50 dark:bg-cyan-500/20 rounded-full blur-[60px]"></div>
            </div>
          </div>

          <div className="py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center relative group">
              {/* 波浪线+流动光标的强化效果 */}
              <div className="relative group border border-2 border-sky-200 dark:border-sky-700 px-10 rounded-full bg-sky-50/60 dark:bg-sky-900/20 group-hover:opacity-100 transition-all duration-300">
                {/* 标签主体 */}
                <div className="relative px-4 py-2.5 text-sm font-medium leading-6 text-sky-600 dark:text-sky-400">
                  {/* 可编辑文本 */}
                  <EditableText 
                    propKey="announcement" 
                    className="relative z-10 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-200"
                  >
                    {announcement}
                  </EditableText>

                  {/* 动态指示箭头 */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sky-600 dark:text-sky-400 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    👉
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="TITLE-PRIMARY text-4xl font-semibold text-sky-700 dark:text-sky-500 sm:text-6xl">
                <EditableText propKey="title">{title}</EditableText>
              </h1>
              <p className="DESC mt-6 text-lg text-slate-600 dark:text-slate-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-gradient-to-r from-sky-600 to-indigo-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:from-sky-500 hover:to-indigo-400 dark:hover:from-sky-400 dark:hover:to-indigo-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] dark:shadow-[0_0_15px_rgba(56,189,248,0.5)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]"  href={primaryButtonTextAttrLink}>
                  <EditableText propKey="primaryButtonTextAttr">{primaryButtonTextAttrLabel}</EditableText>
                </EditableButton>
                <EditableButton className="BTN-SECONDARY inline-flex items-center justify-center text-sky-600 dark:text-sky-400 bg-transparent font-medium border border-sky-200 dark:border-sky-300 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-300" href={secondaryButtonTextAttrLink}>
                  <EditableText propKey="secondaryButtonTextAttr">{secondaryButtonTextAttrLabel}</EditableText>
                </EditableButton>
              </div>
            </div>
          </div>

          {/* 艺术科技风格背景 - 底部 */}
          <div className="absolute inset-x-0 bottom-0 -z-10" aria-hidden="true">
            {/* 底部光晕 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
              <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-100/50 dark:bg-indigo-500/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-sky-100/50 dark:bg-sky-500/20 rounded-full blur-[80px]"></div>
            </div>

            {/* 数字雨效果 - 浅色模式下更淡一些 */}
            <div className="absolute bottom-0 left-0 w-full h-[1000px] overflow-hidden opacity-10 dark:opacity-30">
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[10%] animate-digitalRain" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[20%] animate-digitalRain" style={{animationDelay: '1.1s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-300 to-transparent left-[30%] animate-digitalRain" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-200 to-transparent left-[40%] animate-digitalRain" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-200 to-transparent left-[50%] animate-digitalRain" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-200 to-transparent left-[60%] animate-digitalRain" style={{animationDelay: '1.4s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-300 to-transparent left-[70%] animate-digitalRain" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[80%] animate-digitalRain" style={{animationDelay: '1.0s'}}></div>
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-sky-500 to-transparent left-[90%] animate-digitalRain" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;