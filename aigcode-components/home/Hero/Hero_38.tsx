import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

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

const Hero: React.FC<IHeroProps> = ({title="Dive into the World of Anime",description="Experience the magic of anime with stunning visuals, unforgettable characters, and captivating stories that inspire.",stats=[{"stat":"50M+","text":"Anime Fans Worldwide"},{"stat":"10K+","text":"Iconic Characters"},{"stat":"500+","text":"Anime Works"}],heroImage="https://images.unsplash.com/photo-1608804375269-d077e2a2adaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY0OTB8&ixlib=rb-4.0.3&q=80&w=1200&description=person+writing+on+white+paper",
  primaryButtonLabel="Explore Now",
  primaryButtonLink = "/",
  secondaryButtonLabel="Learn More",
  secondaryButtonLink = "/",
secondaryButtonIcon="fa-solid fa-arrow-right"}) =>{
  return (
    <section className="relative px-6 py-24 md:px-8 md:py-32 bg-[#fff5e6] dark:bg-[#1a1a1a]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .sketch-border {
          position: relative;
        }
        .sketch-border::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 3px solid #2d3436;
          border-radius: inherit;
          transform: rotate(-2deg);
        }
        :global(.dark) .sketch-border::before {
          border-color: #dfe6e9;
        }
        .sketch-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23dfe6e9' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .comic-button {
          position: relative;
          transform: skew(-5deg);
          box-shadow: 5px 5px 0px #000;
          transition: all 0.2s ease;
          border: 3px solid #000;
          overflow: hidden;
        }
        .comic-button:hover {
          transform: skew(-5deg) scale(1.05);
          box-shadow: 7px 7px 0px #000;
        }
        .comic-button:active {
          transform: skew(-5deg) translate(3px, 3px);
          box-shadow: 2px 2px 0px #000;
        }
        .comic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -10px;
          width: 30px;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.3);
          transform: skew(20deg);
          transition: all 0.5s ease;
        }
        .comic-button:hover::before {
          left: 110%;
        }
        .secondary-comic-button {
          position: relative;
          transform: skew(5deg);
          box-shadow: 4px 4px 0px #000;
          transition: all 0.2s ease;
          border: 3px solid #000;
          overflow: hidden;
        }
        .secondary-comic-button:hover {
          transform: skew(5deg) scale(1.05);
          box-shadow: 6px 6px 0px #000;
        }
        .secondary-comic-button:active {
          transform: skew(5deg) translate(3px, 3px);
          box-shadow: 1px 1px 0px #000;
        }
      `}</style>

      {/* 使用内联样式替代全局CSS */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <div className="w-full flex flex-col gap-16 md:gap-20">
          <div className="w-full flex flex-col gap-6">
            <EditableText 
              propKey="title" 
              className="text-6xl font-bold text-[#2d3436] dark:text-[#dfe6e9] font-comic leading-tight tracking-wide"
            >
              {title}
            </EditableText>
            <EditableText 
              propKey="description" 
              className="text-lg text-[#636e72] dark:text-[#b2bec3] font-comic leading-relaxed"
            >
              {description}
            </EditableText>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-full flex items-center gap-6 flex-wrap">
              <EditableButton className="comic-button w-fit text-black whitespace-nowrap px-8 py-4 bg-[#ffdd00] font-bold text-lg uppercase" href={primaryButtonLink}>
                <EditableText propKey="primaryButtonLabel">{primaryButtonLabel}</EditableText>
              </EditableButton>
              <EditableButton className="secondary-comic-button w-fit flex items-center gap-2 group text-black bg-[#ff5252] whitespace-nowrap px-6 py-4 font-bold text-lg uppercase" href={secondaryButtonLink}>
                <EditableText propKey="secondaryButtonLabel">{secondaryButtonLabel}</EditableText>
                <EditableIcon 
                  propKey="secondaryButtonIcon" 
                  icon={secondaryButtonIcon} 
                  iconLibrary="FontAwesome" 
                  className="group-hover:translate-x-1 transition-all duration-300" 
                />
              </EditableButton>
            </div>

            <div className="w-full flex flex-wrap items-center gap-6">
              {stats.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-1 min-w-[200px] flex flex-col gap-1 p-6 rounded-lg relative overflow-hidden z-[1]"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '6px 6px 0px #000',
                    border: '3px solid #000',
                    transform: index === 0 ? 'rotate(-3deg)' : index === 1 ? 'rotate(2deg)' : 'rotate(-1deg)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* 暗色模式样式覆盖 */}
                  <div 
                    className="absolute inset-0 bg-[#2d3436] z-[-1] hidden dark:block" 
                    style={{
                      boxShadow: '6px 6px 0px #dfe6e9',
                      border: '3px solid #dfe6e9'
                    }}
                  ></div>
                  
                  <div className="relative inline-block z-[2]">
                    <EditableText 
                      propKey={`stats_${index}_stat`} 
                      className="text-3xl font-extrabold text-black dark:text-[#dfe6e9] font-comic"
                    >
                      {item.stat}
                    </EditableText>
                    {/* 下划线高亮 */}
                    <span 
                      className="absolute bottom-0 left-0 w-full h-2 bg-[rgba(255,221,0,0.4)] dark:bg-[rgba(255,82,82,0.5)] z-[-1]"
                      style={{ transform: 'skew(-12deg) rotate(-2deg)' }}
                    ></span>
                  </div>
                  
                  <EditableText 
                    propKey={`stats_${index}_text`} 
                    className="text-black dark:text-[#b2bec3] font-comic font-bold"
                  >
                    {item.text}
                  </EditableText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <EditableImg 
          propKey="heroImage" 
          src={heroImage} 
          className="w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-[2rem] sketch-border transform hover:scale-105 transition-all duration-500 filter saturate-[1.2] contrast-[1.1]"
          style={{
            boxShadow: '8px 8px 0px #2d3436',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
      </div>

      <div className="absolute inset-0 sketch-pattern opacity-50 pointer-events-none -z-10" />
    </section>
  );
}

export default Hero;