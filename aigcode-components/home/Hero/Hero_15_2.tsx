import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';

export interface IHeroProps {
  announcement: string
  title: string
  description: string
  buttonPrimaryLabel: string
  buttonPrimaryLink: string
  buttonSecondaryLabel: string
  buttonSecondaryLink: string
}

const Hero: React.FC<IHeroProps> = ({
  announcement = 'Announcing our next round of funding. Read more →',
  title = 'Elevate Your Online Presence with Innovative Data Solutions',
  description = 'Discover how our data-driven approaches can transform your business, enhancing digital engagement and driving growth.',
  buttonPrimaryLabel = 'Get Started',
  buttonPrimaryLink = '/',
  buttonSecondaryLabel = 'Learn More',
  buttonSecondaryLink = '/',
}) =>{
  return (
    <>
      {/* 引入Roboto字体 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
        
        .roboto {
          font-family: 'Roboto', sans-serif;
        }
        
        @keyframes digitalRain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .animate-digitalRain {
          animation: digitalRain 4s linear infinite;
        }
        
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-wave {
          animation: wave 12s linear infinite;
        }
        
        @keyframes cursorFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-cursorFlow {
          animation: cursorFlow 4s ease-in-out infinite;
        }
      `}</style>
    
      <div className="w-full bg-gray-50 dark:bg-slate-900 overflow-hidden">
        <div className="relative isolate max-w-7xl mx-auto py-10 px-4 lg:px-8">
          {/* 背景 - 浅色模式 */}
          <div className="absolute inset-x-0 top-0 -z-10 dark:hidden" aria-hidden="true">
            {/* 网格线条 - 更淡的颜色和更大的间距 */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            {/* 顶部光晕 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
              <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-100 rounded-full blur-[100px]"></div>
              <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-sky-100 rounded-full blur-[80px]"></div>
            </div>
            
            {/* 动态粒子效果 */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-ping opacity-75"></div>
            
            {/* 简化科技线条 */}
            <svg className="absolute top-0 left-0 w-full h-[600px] opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q40,30 100,50" stroke="url(#lightTechGradient)" strokeWidth="0.15" fill="none" />
              <defs>
                <linearGradient id="lightTechGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* 背景 - 深色模式（原有的背景） */}
          <div className="absolute inset-x-0 top-0 -z-10 hidden dark:block" aria-hidden="true">
            {/* 网格线条 - 减少不透明度 */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(6,182,212,0.07)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            {/* 顶部光晕 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
              <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-cyan-500/20 rounded-full blur-[60px]"></div>
            </div>
            
            {/* 动态粒子效果 */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            
            {/* 科技线条 - 简化并减少数量 */}
            <svg className="absolute top-0 left-0 w-full h-[600px] opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
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
              <div className="relative group">
                {/* 标签主体 */}
                <div className="relative px-4 py-2.5 text-sm font-medium leading-6 text-blue-600 dark:text-sky-400">
                  {/* 可编辑文本 */}
                  <EditableText 
                    propKey="announcement" 
                    className="roboto relative z-10 group-hover:text-blue-700 dark:group-hover:text-sky-300 transition-colors duration-200"
                  >
                    {announcement}
                  </EditableText>
                  
                  {/* 动态指示箭头 */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-600 dark:text-sky-400 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    👋
                  </span>
                  
                  {/* 波浪线容器 */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
                    {/* 主波浪线 */}
                    <svg 
                      className="absolute -bottom-1 left-0 w-[200%] h-full text-blue-500/60 dark:text-sky-500/60 animate-wave"
                      viewBox="0 0 1200 50" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M0,30 C150,40 350,20 500,30 C650,40 850,20 1000,30 C1150,40 1200,30 1200,30" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* 流动光标 */}
                    <div className="absolute -bottom-1 h-1.5 bg-gradient-to-r from-transparent via-blue-300/90 dark:via-sky-300/90 to-transparent animate-cursorFlow rounded-full" 
                        style={{ width: '120%', left: '-10%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="roboto TITLE-PRIMARY text-4xl font-semibold text-gray-900 dark:text-white sm:text-6xl">
                <EditableText propKey="title">{title}</EditableText>
              </h1>
              <p className="roboto DESC mt-6 text-lg text-gray-600 dark:text-slate-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <EditableButton className="roboto BTN-PRIMARY inline-flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-sky-500 dark:to-indigo-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:from-blue-600 hover:to-indigo-600 dark:hover:from-sky-400 dark:hover:to-indigo-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]" href={buttonPrimaryLink}>
                  <EditableText propKey="buttonPrimaryLabel">{buttonPrimaryLabel}</EditableText>
                </EditableButton>
                <EditableButton className="roboto BTN-SECONDARY inline-flex items-center justify-center text-blue-600 dark:text-sky-300 bg-transparent font-medium border border-blue-200 dark:border-sky-700 py-2 xl:py-3 px-6 focus:outline-none hover:bg-blue-50 dark:hover:bg-sky-900/30 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-300"  href={buttonSecondaryLink}>
                  <EditableText propKey="buttonSecondaryLabel">{buttonSecondaryLabel}</EditableText>
                </EditableButton>
              </div>
            </div>
          </div>
          
          {/* 艺术科技风格背景 - 底部 */}
          <div className="absolute inset-x-0 bottom-0 -z-10" aria-hidden="true">
            {/* 底部光晕 - 浅色模式 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] dark:hidden">
              <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-100 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[80px]"></div>
            </div>
            
            {/* 底部光晕 - 深色模式 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] hidden dark:block">
              <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-sky-500/20 rounded-full blur-[80px]"></div>
            </div>
            
            {/* 底部动态粒子 - 浅色模式 */}
            <div className="dark:hidden">
              <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-60 right-40 w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
            </div>
            
            {/* 底部动态粒子 - 深色模式 */}
            <div className="hidden dark:block">
              <div className="absolute bottom-40 left-20 w-2 h-2 bg-sky-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-60 right-40 w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
            </div>
            
            {/* 科技线条 - 浅色模式 */}
            <svg className="absolute bottom-0 left-0 w-full h-[600px] opacity-10 dark:hidden" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q40,70 100,50" stroke="url(#lightTechGradient2)" strokeWidth="0.15" fill="none" />
              <defs>
                <linearGradient id="lightTechGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* 科技线条 - 深色模式 */}
            <svg className="absolute bottom-0 left-0 w-full h-[600px] opacity-15 hidden dark:block" viewBox="0 0 100 100" preserveAspectRatio="none">
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
            
            {/* 数字雨效果 - 深色模式特有 */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden opacity-20 hidden dark:block">
              <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[15%] animate-digitalRain" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[35%] animate-digitalRain" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[55%] animate-digitalRain" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[75%] animate-digitalRain" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-sky-400 to-transparent left-[90%] animate-digitalRain" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;