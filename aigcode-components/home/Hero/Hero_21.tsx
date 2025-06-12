import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IIHeroPropsBackgroundcolor {
  colorA: string
  colorB: string
}

export interface IHeroProps {
  title: string
  description: string
  buttonPrimaryTextLabel: string;
  buttonPrimaryTextLink: string;
  buttonSecondaryTextLabel: string;
  buttonSecondaryTextLink: string;
  buttonArrow: string
  imageUrl: string
}

const Hero: React.FC<IHeroProps> = ({
  title = "Elevate Your Digital Presence with Our Design Studio",
  description = "Our team of expert designers and developers bring your vision to life with creative designs and robust technology. Let's create something extraordinary together.",
  buttonPrimaryTextLabel = "Discover Our Projects",
  buttonPrimaryTextLink = "/",
  buttonSecondaryTextLabel = "Meet the Team",
  buttonSecondaryTextLink = "/",
  buttonArrow = 'fa-solid fa-arrow-right',
  imageUrl = "https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
}) => {
  return (
    <>
      {/* 添加斜向滑动按钮效果的CSS */}
      <style>{`
        /* 使用Tailwind颜色系统 */
        :root {
          --sky-100: #e0f2fe;
          --blue-100: #dbeafe;
          --black: #000000;
          --gray-900: #111827;
        }
        
        .btn-slide-effect {
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: color 0.5s;
        }
        
        .btn-slide-effect:hover {
          color: var(--black); /* 改为黑色 */
        }
        
        .dark .btn-slide-effect:hover {
          color: var(--black); /* 深色模式也改为黑色 */
        }
        
        .btn-slide-effect::after {
          content: "";
          background: var(--sky-100); /* sky-100 */
          position: absolute;
          z-index: -1;
          left: -20%;
          right: -20%;
          top: 0;
          bottom: 0;
          transform: skewX(-45deg) scale(0, 1);
          transition: all 0.5s;
        }
        
        .dark .btn-slide-effect::after {
          background: var(--blue-100); /* blue-100 */
        }
        
        .btn-slide-effect:hover::after {
          transform: skewX(-45deg) scale(1, 1);
          transition: all 0.5s;
        }
      `}</style>

      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate">
          {/* 浅色模式的装饰背景 - 顶部 */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 dark:hidden"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-200 to-indigo-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          {/* 暗色模式的装饰背景 - 顶部 */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 hidden dark:block"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="TITLE-PRIMARY text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-6xl">
                  <EditableText propKey={`title`}>{title}</EditableText>
                </h1>
                <p className="DESC mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <EditableText propKey={`description`}>{description}</EditableText>
                </p>
                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
                  {/* 应用斜向滑动效果到主按钮 */}
                  <EditableButton className="BTN-PRIMARY btn-slide-effect inline-flex items-center justify-center text-white bg-indigo-600 dark:bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonPrimaryTextLink}>
                    <EditableText propKey={`buttonPrimaryTextLabel`}>{buttonPrimaryTextLabel}</EditableText>
                  </EditableButton>
                  <EditableButton className="BTN-SECONDARY text-sm group flex items-center gap-1 font-semibold leading-6 text-indigo-600 dark:text-white" href={buttonSecondaryTextLink}>
                    <EditableText propKey={`buttonSecondaryTextLabel`}>{buttonSecondaryTextLabel}</EditableText>
                    <EditableIcon
                      propKey={"buttonArrow"}
                      icon={buttonArrow}
                      iconLibrary="FontAwesome"
                      className="group-hover:translate-x-1 transition-all duration-300"
                    />
                  </EditableButton>
                </div>
              </div>
              <EditableImg
                propKey={`imageUrl`}
                className="IMAGE mt-16 rounded-md bg-gray-50 dark:bg-white/5 shadow-lg dark:shadow-2xl ring-1 ring-gray-200 dark:ring-white/10 sm:mt-24 w-full h-auto aspect-[16/9] object-cover"
                src={imageUrl}
                alt="Studio showcase"
              />
            </div>
          </div>

          {/* 浅色模式的装饰背景 - 底部 */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] dark:hidden"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-pink-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          {/* 暗色模式的装饰背景 - 底部 */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] hidden dark:block"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;