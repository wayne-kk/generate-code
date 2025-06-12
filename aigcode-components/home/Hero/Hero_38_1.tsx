import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import { motion } from 'framer-motion';

export interface IStatsItem {
  stat: string
  text: string
}

export interface IHeroProps {
  title: string
  description: string
  stats: IStatsItem[]
  heroImage: string
  primaryButtonLabel: string
  primaryButtonLink: string
  secondaryButtonLabel: string
  secondaryButtonLink: string
  secondaryButtonIcon: string
}

const Hero: React.FC<IHeroProps> = ({ 
   title = "Dive into the World of Anime",
   description = "Experience the magic of anime with stunning visuals, unforgettable characters, and captivating stories that inspire.", stats = [{ "stat": "50M+", "text": "Anime Fans Worldwide" }, { "stat": "10K+", "text": "Iconic Characters" }, { "stat": "500+", "text": "Anime Works" }], heroImage = "https://images.unsplash.com/photo-1608804375269-d077e2a2adaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY0OTB8&ixlib=rb-4.0.3&q=80&w=1200&description=person+writing+on+white+paper", 
   primaryButtonLabel = "Explore Now",
   primaryButtonLink = "/",
   secondaryButtonLabel = "Learn More",
   secondaryButtonLink = '/',
   secondaryButtonIcon = "fa-solid fa-arrow-right" }) => {
  return (
    <section className="relative px-6 py-24 md:px-8 md:py-32 bg-[#e8f3e0] dark:bg-[#1a2a1e] overflow-hidden transition-colors duration-300">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes sway {
            0%, 100% { transform: rotate(-1deg); }
            50% { transform: rotate(1deg); }
          }
          
          @keyframes dustFloat {
            0% { transform: translateY(0) translateX(0) rotate(0); opacity: 0; }
            10% { opacity: 0.8; }
            100% { transform: translateY(-100px) translateX(20px) rotate(360deg); opacity: 0; }
          }
          
          .ghibli-border {
            position: relative;
            border: 2px solid #5c9e31;
            box-shadow: 0 4px 6px -1px rgba(92, 158, 49, 0.2);
          }
          
          .dark .ghibli-border {
            border: 2px solid #8abc65;
            box-shadow: 0 4px 6px -1px rgba(138, 188, 101, 0.3);
          }
          
          .ghibli-border::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            width: 100%;
            height: 100%;
            background: #f0f7eb;
            border: 2px solid #5c9e31;
            z-index: -1;
          }
          
          .dark .ghibli-border::before {
            background: #243321;
            border: 2px solid #4a7a35;
          }
          
          .ghibli-button {
            position: relative;
            transition: all 0.3s;
            border: 2px solid #5c9e31;
            background: #a2d175;
            color: #2c4c17;
            box-shadow: 0 4px 0 #5c9e31;
            transform-style: preserve-3d;
          }
          
          .dark .ghibli-button {
            border: 2px solid #8abc65;
            background: #4a7a35;
            color: #e0f5d3;
            box-shadow: 0 4px 0 #8abc65;
          }
          
          .ghibli-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 0 #5c9e31;
          }
          
          .dark .ghibli-button:hover {
            box-shadow: 0 6px 0 #8abc65;
          }
          
          .ghibli-button:active {
            transform: translateY(2px);
            box-shadow: 0 0 0 #5c9e31;
          }
          
          .dark .ghibli-button:active {
            box-shadow: 0 0 0 #8abc65;
          }
          
          .ghibli-secondary-button {
            position: relative;
            transition: all 0.3s;
            color: #5c9e31;
          }
          
          .dark .ghibli-secondary-button {
            color: #8abc65;
          }
          
          .ghibli-secondary-button:hover {
            color: #2c4c17;
          }
          
          .dark .ghibli-secondary-button:hover {
            color: #d1e6c8;
          }
          
          .ghibli-secondary-button::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #5c9e31;
            transition: width 0.3s;
          }
          
          .dark .ghibli-secondary-button::after {
            background-color: #8abc65;
          }
          
          .ghibli-secondary-button:hover::after {
            width: 100%;
          }
          
          .leaf-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 C 40 20, 45 30, 30 40 C 15 30, 20 20, 30 20 Z' fill='%235c9e31' fill-opacity='0.05'/%3E%3C/svg%3E");
          }
          
          .dark .leaf-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 C 40 20, 45 30, 30 40 C 15 30, 20 20, 30 20 Z' fill='%238abc65' fill-opacity='0.05'/%3E%3C/svg%3E");
          }
          
          .dust-sprite {
            position: absolute;
            background: #5c9e31;
            border-radius: 50%;
            opacity: 0;
            animation: dustFloat 10s linear infinite;
          }
          
          .dark .dust-sprite {
            background: #8abc65;
          }
          
          /* 萤火虫效果（只在暗色模式显示） */
          @keyframes firefly {
            0% { opacity: 0; }
            25% { opacity: 0.8; }
            50% { opacity: 0.4; }
            75% { opacity: 0.6; }
            100% { opacity: 0; }
          }
          
          .firefly {
            position: absolute;
            background: #e6ff9c;
            box-shadow: 0 0 10px 2px #e6ff9c;
            border-radius: 50%;
            opacity: 0;
            pointer-events: none;
            z-index: 5;
            display: none;
          }
          
          .dark .firefly {
            display: block;
            animation: firefly linear infinite, dustFloat linear infinite;
          }
        `}
      </style>

      {/* 吉卜力风格的背景元素 */}
      <div className="absolute inset-0 leaf-pattern opacity-70 pointer-events-none -z-10" />

      {/* 灰尘精灵效果 */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="dust-sprite"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }}
        />
      ))}

      {/* 萤火虫效果（暗色模式专用） */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`firefly-${i}`}
          className="firefly"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}
        />
      ))}

      {/* 主要内容 */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24 relative z-10">
        <div className="w-full flex flex-col gap-16 md:gap-20">
          <div className="w-full flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <EditableText
                propKey="title"
                className="text-5xl md:text-6xl font-bold text-[#2c4c17] dark:text-[#d1e6c8] leading-tight tracking-wide"
                style={{
                  fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                }}
              >
                {title}
              </EditableText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <EditableText
                propKey="description"
                className="text-lg text-[#5a7852] dark:text-[#a0b89a] leading-relaxed"
                style={{
                  fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                }}
              >
                {description}
              </EditableText>
            </motion.div>
          </div>
          <div className="flex flex-col gap-10">
            <motion.div
              className="w-full flex items-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <EditableButton className="ghibli-button w-fit whitespace-nowrap px-8 py-3 rounded-full text-lg"
                style={{
                  fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                }}
                href={primaryButtonLink}
              >
                <EditableText propKey="primaryButtonLabel">{primaryButtonLabel}</EditableText>
              </EditableButton>

              <EditableButton className="ghibli-secondary-button w-fit flex items-center gap-2 group whitespace-nowrap px-4 py-2 text-lg"
                style={{
                  fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                }}
                href={secondaryButtonLink}

              >
                <EditableText propKey="secondaryButtonLabel">{secondaryButtonLabel}</EditableText>
                <EditableIcon
                  propKey="secondaryButtonIcon"
                  icon={secondaryButtonIcon}
                  iconLibrary="FontAwesome"
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </EditableButton>
            </motion.div>
            <motion.div
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-5 rounded-xl bg-[#f0f7eb] dark:bg-[#243321] ghibli-border transform hover:rotate-1 transition-all duration-300"
                  style={{
                    animationName: 'sway',
                    animationDuration: `${5 + index}s`,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite'
                  }}
                >
                  <EditableText
                    propKey={`stats_${index}_stat`}
                    className="text-3xl font-bold text-[#5c9e31] dark:text-[#8abc65]"
                    style={{
                      fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                    }}
                  >
                    {item.stat}
                  </EditableText>
                  <EditableText
                    propKey={`stats_${index}_text`}
                    className="text-[#5a7852] dark:text-[#a0b89a]"
                    style={{
                      fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
                    }}
                  >
                    {item.text}
                  </EditableText>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="relative">
          {/* 手绘风格边框 */}
          <div className="absolute -top-3 -left-3 w-[calc(100%+24px)] h-[calc(100%+24px)] border-4 border-dashed border-[#5c9e31]/30 dark:border-[#8abc65]/30 rounded-[2.5rem] animate-[sway_10s_ease-in-out_infinite]"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <EditableImg
              propKey="heroImage"
              src={heroImage}
              className="w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-[2rem] ghibli-border transform hover:scale-[1.02] transition-all duration-500 filter saturate-[1.1] dark:brightness-[0.9] animate-[float_6s_ease-in-out_infinite]"
            />

            {/* 装饰性小叶子 */}
            <div className="absolute -top-4 -right-4 w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[sway_4s_ease-in-out_infinite]">
                <path d="M50 10 C 70 10, 90 30, 50 60 C 10 30, 30 10, 50 10 Z" className="fill-[#5c9e31] dark:fill-[#8abc65]" />
                <path d="M50 20 C 65 20, 80 35, 50 55 C 20 35, 35 20, 50 20 Z" className="fill-[#a2d175] dark:fill-[#4a7a35]" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-10 h-10 rotate-180">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[sway_5s_ease-in-out_infinite]">
                <path d="M50 10 C 70 10, 90 30, 50 60 C 10 30, 30 10, 50 10 Z" className="fill-[#5c9e31] dark:fill-[#8abc65]" />
                <path d="M50 20 C 65 20, 80 35, 50 55 C 20 35, 35 20, 50 20 Z" className="fill-[#a2d175] dark:fill-[#4a7a35]" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部草丛装饰 */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 dark:[--tw-mode:#4a7a35]"
              style={{
                left: `${i * 3.5}%`,
                width: '40px',
                height: `${Math.random() * 40 + 40}px`,
                background: 'var(--grass-color, #5c9e31)',
                borderRadius: '50% 50% 0 0 / 80% 80% 0 0',
                transform: 'scale(0.8)',
                opacity: 0.2 + Math.random() * 0.4,
                animationName: 'sway',
                animationDuration: `${3 + Math.random() * 4}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;