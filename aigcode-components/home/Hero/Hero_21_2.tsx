import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IIHeroPropsBackgroundcolor {
  colorA: string;
  colorB: string;
}

export interface IHeroProps {
  title: string;
  description: string;
  buttonPrimaryTextLabel: string;
  buttonPrimaryTextLink: string;
  buttonSecondaryTextLabel: string;
  buttonSecondaryTextLink: string;
  buttonArrow: string;
  imageUrl: string;
}

const Hero: React.FC<IHeroProps> = ({
  title = "Elevate Your Digital Presence with Our Design Studio",
  description = "Our team of expert designers and developers bring your vision to life with creative designs and robust technology. Let's create something extraordinary together.",
  buttonPrimaryTextLabel = "Discover Our Projects",
  buttonPrimaryTextLink = "/",
  buttonSecondaryTextLabel = "Meet the Team",
  buttonSecondaryTextLink = "/",
  buttonArrow = 'fa-solid fa-arrow-right',
  imageUrl = "https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 relative isolate">
        {/* First SVG Background */}
        <div className="absolute inset-x-0 top-[150px] -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1728"
            viewBox="0 0 1920 1728"
            fill="none"
            className="w-full"
          >
            <g filter="url(#filter0_f_1039_223)">
              <path
                d="M347 322.5C-61.5835 347.32 -191.994 796.723 -223 809.133V1728H2170.49L2224 1204.09C2116.14 925.497 1857.32 369.177 1684.89 372.63C1469.35 376.946 1476.07 509.226 1149 492.5C821.933 475.774 755.583 297.681 347 322.5Z"
                className="fill-[url(#paint0_radial_1039_223)]"
              />
              <path
                d="M347 322.5C-61.5835 347.32 -191.994 796.723 -223 809.133V1728H2170.49L2224 1204.09C2116.14 925.497 1857.32 369.177 1684.89 372.63C1469.35 376.946 1476.07 509.226 1149 492.5C821.933 475.774 755.583 297.681 347 322.5Z"
                className="fill-[url(#paint1_radial_1039_223)]"
              />
              <path
                d="M347 322.5C-61.5835 347.32 -191.994 796.723 -223 809.133V1728H2170.49L2224 1204.09C2116.14 925.497 1857.32 369.177 1684.89 372.63C1469.35 376.946 1476.07 509.226 1149 492.5C821.933 475.774 755.583 297.681 347 322.5Z"
                className="fill-[url(#paint2_radial_1039_223)]"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1039_223"
                x="-543"
                y="0.132324"
                width="3087"
                height="2047.87"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="160"
                  result="effect1_foregroundBlur_1039_223"
                />
              </filter>
              <radialGradient
                id="paint0_radial_1039_223"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(558.66 162.202) rotate(47.5431) scale(1478 1014.07)"
              >
                <stop className="stop-color-rose-400 dark:stop-color-rose-600" />
                <stop offset="1" className="stop-color-rose-400 stop-opacity-0 dark:stop-color-rose-600 dark:stop-opacity-0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1039_223"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(128.072 546.368) rotate(33.4158) scale(800.455 826.702)"
              >
                <stop className="stop-color-fuchsia-300 dark:stop-color-fuchsia-500" />
                <stop offset="1" className="stop-color-fuchsia-300 stop-opacity-0 dark:stop-color-fuchsia-500 dark:stop-opacity-0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1039_223"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(3042.17 228.568) rotate(151.296) scale(1854.76 3026.22)"
              >
                <stop className="stop-color-amber-400 dark:stop-color-amber-500" />
                <stop offset="1" className="stop-color-amber-400 stop-opacity-0 dark:stop-color-amber-500 dark:stop-opacity-0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="TITLE-PRIMARY text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl relative">
                <EditableText propKey={`title`}>{title}</EditableText>
                {/* SVG Positioned Below "Design Studio" */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 scale-[0.5]"
                  style={{ top: "calc(100% + 2px)" }} // Move up by 2px
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="624"
                    height="44"
                    viewBox="0 0 624 44"
                    fill="none"
                  >
                    <path
                      d="M6.5957 0.301758L119.782 6H618C621.314 6 624 8.68629 624 12C624 15.3137 621.314 18 618 18H358.144L617.822 31.0732C621.132 31.2401 623.679 34.0588 623.513 37.3682C623.346 40.6774 620.528 43.225 617.219 43.0586L119.485 18H6C2.68632 18 5.1541e-05 15.3137 0 12C0 10.8554 0.31979 9.78505 0.875977 8.875C0.460718 8.00522 0.249894 7.02236 0.301758 5.99219C0.468435 2.6828 3.28632 0.135264 6.5957 0.301758Z"
                      className="fill-red-500 dark:fill-red-400"
                    />
                  </svg>
                </div>
              </h1>
              <p className="DESC mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                <EditableText propKey={`description`}>{description}</EditableText>
              </p>
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 relative">
                <EditableButton className="BTN-PRIMARY bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 inline-flex items-center justify-center font-medium py-2 xl:py-3 px-6 focus:outline-none rounded-full text-sm sm:text-base 2xl:text-lg transition-colors duration-200"  href={buttonPrimaryTextLink}>
                  <EditableText propKey={`buttonPrimaryTextLabel`}>
                    {buttonPrimaryTextLabel}
                  </EditableText>
                </EditableButton>
                <EditableButton className="BTN-SECONDARY text-sm group flex items-center gap-1 font-semibold leading-6 text-gray-800 dark:text-gray-200 rounded-full" href={buttonSecondaryTextLink}>
                  <EditableText propKey={`buttonSecondaryTextLabel`}>
                    {buttonSecondaryTextLabel}
                  </EditableText>
                  <EditableIcon
                    propKey={'buttonArrow'}
                    icon={buttonArrow}
                    iconLibrary="FontAwesome"
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </EditableButton>
                {/* 使用新的SVG图标 */}
                <div
                  className="absolute transform scale-[0.32]"
                  style={{
                    bottom: "-94px",
                    left: "14px",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="111" height="111" viewBox="0 0 111 111" fill="none">
                    <path d="M16.6422 2.713C15.0141 2.7943 13.4822 3.50849 12.3732 4.70326C11.2642 5.89803 10.6658 7.47882 10.7058 9.10848C10.7458 10.7381 11.4209 12.2877 12.5871 13.4266C13.7534 14.5656 15.3185 15.2038 16.9486 15.2052L88.8673 13.4551L2.04636 100.276C0.874257 101.448 0.215774 103.038 0.215774 104.695C0.215774 106.353 0.874256 107.943 2.04636 109.115C3.21846 110.287 4.80817 110.945 6.46578 110.945C8.12338 110.945 9.71309 110.287 10.8852 109.115L97.7061 22.294L95.9619 94.2185C95.9633 95.8486 96.6015 97.4137 97.7405 98.58C98.8795 99.7462 100.429 100.421 102.059 100.461C103.688 100.501 105.269 99.903 106.464 98.794C107.659 97.685 108.373 96.153 108.454 94.5249L110.534 9.15946C110.583 7.29458 110.002 5.46767 108.884 3.974C108.428 3.30075 107.846 2.7224 107.17 2.27106C105.678 1.16014 103.855 0.583185 101.996 0.632928L16.6422 2.713Z" fill="#FF666C" />
                  </svg>
                </div>
              </div>
            </div>
            <EditableImg
              propKey={`imageUrl`}
              className="IMAGE mt-16 rounded-md bg-gray-50 dark:bg-gray-800/20 shadow-md dark:shadow-2xl ring-1 ring-gray-200 dark:ring-white/10 sm:mt-24 w-full h-auto aspect-[16/9] object-cover"
              src={imageUrl}
              alt="Design studio showcase"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;