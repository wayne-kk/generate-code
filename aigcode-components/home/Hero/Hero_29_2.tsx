import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import { motion } from 'framer-motion';

export interface IIHeroPropsPrimarybutton {
  textAttrLabel: string
  textAttrLink: string
  icon: string;
}

export interface IIHeroPropsSecondarybutton {
  textAttrLabel: string
  textAttrLink: string
}

export interface IHeroProps {
  title: string;
  description: string;
  subtitle: string;
  subdescription: string;
  primaryButton: IIHeroPropsPrimarybutton;
  secondaryButton: IIHeroPropsSecondarybutton;
  images: string[];
}

const Hero: React.FC<IHeroProps> = ({
  title = 'From concept to reality, let every design tell a story',
  description = 'Our design team transforms your vision into compelling brand experiences, connecting creativity and performance to create business value with design.',
  subtitle = 'Design elite: create excellent experience',
  subdescription = 'Our design studio brings together top talent to transform your vision into a compelling reality through superb UI/UX design, precise product strategy and innovative graphic creation.',
  primaryButton = {
    icon: 'fa-solid fa-arrow-right',
    textAttrLabel: 'Contact Us',
    textAttrLink:'/',
  },
  secondaryButton = {
    textAttrLabel: 'Show Case',
    textAttrLink:'/',
  },
  images = [
    'https://images.unsplash.com/photo-1746928340632-7861734eb7e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1746950862786-c13d07b85bff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1747102325393-2f811b02752e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
  ],
}) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section className="relative w-full z-[1] overflow-hidden px-6 py-24 md:px-8 md:py-32 transition-colors duration-500">
      {/* 浅色模式背景 */}
      <div className="absolute inset-0 block dark:hidden">
        {/* 浅色模式背景 - 白色背景 */}
        <div className="absolute inset-0 bg-white"></div>

        {/* 浅色模式装饰背景 */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-50"></div>

        {/* 彩色渐变叠加层 - 浅色模式 */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20"
          style={{
            background: 'radial-gradient(53.02% 51.29% at 20.6% 134.44%, #FF8453 0%, rgba(255, 132, 83, 0.00) 100%), radial-gradient(52.35% 35.27% at -11.12% 96.76%, #FF71A3 0%, rgba(255, 113, 163, 0.00) 100%), radial-gradient(98.99% 80.98% at 91.33% -37.69%, #4659FF 0%, rgba(70, 89, 255, 0.00) 100%), radial-gradient(70.22% 65.51% at 113.31% 6.76%, #48A7FF 0%, rgba(72, 167, 255, 0.00) 100%)'
          }}
        ></div>
      </div>

      {/* 暗色模式背景 */}
      <div className="absolute inset-0 hidden dark:block">
        {/* 黑色背景方块 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#141414',
            zIndex: -30
          }}
        ></div>

        {/* SVG Background */}
        <svg
          className="absolute inset-0 -z-20 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="gradient1" cx="1" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DE80F2" />
              <stop offset="100%" stopColor="rgba(222, 128, 242, 0)" />
            </radialGradient>
            <radialGradient id="gradient2" cx="0.7375" cy="0.0287" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="17.14%" stopColor="#FF9752" />
              <stop offset="100%" stopColor="rgba(255, 151, 82, 0)" />
            </radialGradient>
            <radialGradient id="gradient3" cx="0" cy="0.7671" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#464CFF" />
              <stop offset="100%" stopColor="rgba(70, 76, 255, 0)" />
            </radialGradient>
            <radialGradient id="gradient4" cx="1" cy="1" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="16.54%" stopColor="#312D61" />
              <stop offset="100%" stopColor="rgba(49, 45, 97, 0)" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#gradient1)" />
          <rect width="1440" height="900" fill="url(#gradient2)" />
          <rect width="1440" height="900" fill="url(#gradient3)" />
          <rect width="1440" height="900" fill="url(#gradient4)" />
        </svg>

        {/* 渐变背景 */}
        <div
          className="absolute"
          style={{
            left: 'calc(50% - 2rem)',
            top: 0,
            width: '50vw',
            height: '100vh',
            background:
              'radial-gradient(46.65% 48.83% at 100% -1.81%, #DE80F2 0%, rgba(222, 128, 242, 0.00) 100%), radial-gradient(107.79% 109.14% at 73.75% 2.87%, #FF9752 17.14%, rgba(255, 151, 82, 0.00) 100%), radial-gradient(197.78% 100.42% at 0% 76.71%, #464CFF 0%, rgba(70, 76, 255, 0.00) 100%), radial-gradient(282.23% 122.36% at 100% 100%, #312D61 16.54%, rgba(49, 45, 97, 0.00) 100%)',
            zIndex: -5,
          }}
        ></div>

        {/* SVG 图形 */}
        <div
          className="absolute"
          style={{
            top: '822px',
            left: '-226px',
            bottom: '-287px',
            right: '1048px',
            transform: 'rotate(15deg)',
            width: '1147.997px',
            height: '193.429px',
            background: 'linear-gradient(180deg, #464CFF 0%, #FF9752 100%)',
            filter: 'blur(50px)',
            zIndex: -4,
          }}
        ></div>
      </div>

      <div className="w-full mx-auto max-w-7xl flex flex-col gap-24 relative z-10">
        <div className="z-20 w-full h-full grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="w-full flex flex-col gap-16 justify-between">
            <motion.div
              className="w-full flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-10 flex items-center justify-between md:h-12">
                <svg
                  className="w-auto h-1/2 stroke-yellow-500 dark:stroke-yellow-400"
                  viewBox="0 0 124 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C8.66667 0.666667 15.3333 0.666667 22 6C28.6667 11.3333 35.3333 11.3333 42 6C48.6667 0.666667 55.3333 0.666667 62 6C68.6667 11.3333 75.3333 11.3333 82 6C88.6667 0.666667 95.3333 0.666667 102 6C108.667 11.3333 115.333 11.3333 122 6"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 30C8.66667 24.6667 15.3333 24.6667 22 30C28.6667 35.3333 35.3333 35.3333 42 30C48.6667 24.6667 55.3333 24.6667 62 30C68.6667 35.3333 75.3333 35.3333 82 30C88.6667 24.6667 95.3333 24.6667 102 30C108.667 35.3333 115.333 35.3333 122 30"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h1 className="text-5xl font-semibold text-slate-900 dark:text-white md:text-6xl">
                <EditableText propKey="title">{title}</EditableText>
              </h1>
            </motion.div>
            <div className="w-full flex flex-col gap-12">
              <motion.div
                className="flex items-center gap-6"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* 更新后的一级按钮 - 添加新动效 */}
                <EditableButton
                  className="group w-fit h-12 px-6 whitespace-nowrap text-sm font-semibold flex items-center gap-3 rounded-full hover:transition-all hover:duration-300 md:px-8 md:h-14 md:text-base"
                  style={{
                    backgroundColor: '#4659FF',
                    background: 'linear-gradient(270deg, #4659FF 0%, #48A7FF 100%)',
                    color: 'white',
                  }}
                  href={primaryButton.textAttrLink}

                >
                  <EditableText propKey="primaryButton_textAttrLabel">
                    {primaryButton.textAttrLabel}
                  </EditableText>

                  <span className="relative w-[25px] h-[25px] flex-shrink-0 grid place-items-center overflow-hidden rounded-full bg-white text-blue-600 dark:text-[#DE80F2]">
                    <EditableIcon
                      propKey="primaryButton_icon"
                      icon={primaryButton.icon}
                      iconLibrary="FontAwesome"
                      className="absolute transition-transform duration-300 ease-in-out -rotate-45 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                    />
                    <EditableIcon
                      propKey="primaryButton_icon"
                      icon={primaryButton.icon}
                      iconLibrary="FontAwesome"
                      className="absolute transform translate-x-[-150%] translate-y-[150%] -rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-100"
                    />
                  </span>
                </EditableButton>

                {/* 二级按钮 - 适配浅色/深色模式 */}
                <EditableButton
                  className="w-fit h-12 px-6 text-sm whitespace-nowrap font-semibold flex gap-2 items-center rounded-full outline outline-slate-900 dark:outline-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white/45 dark:hover:text-white hover:transition-all hover:duration-300 md:text-base md:h-14 md:px-8"
                  href={secondaryButton.textAttrLink}

                >
                  <EditableText propKey="secondaryButton_textAttrLabel">
                    {secondaryButton.textAttrLabel}
                  </EditableText>
                </EditableButton>
              </motion.div>
              <motion.p
                className="text-slate-600 dark:text-slate-300"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EditableText propKey="description">{description}</EditableText>
              </motion.p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <motion.div
              className="w-full h-[18rem] overflow-hidden bg-origin-content rounded-2xl md:h-[24rem]"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <EditableImg
                propKey="images_2"
                className="w-full h-full aspect-[4/3] bg-zinc-200 dark:bg-transparent object-cover object-top transition-all ease-in-out duration-300 group-hover:scale-110"
                src={images[2]}
                alt="images_2"
              />
            </motion.div>
            <motion.div
              className="w-full h-[14rem] p-6 flex flex-col justify-between rounded-2xl bg-blue-500 dark:bg-transparent md:h-[16rem]"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="w-full text-white text-3xl font-semibold md:text-4xl md:w-5/6">
                <EditableText propKey="subtitle">{subtitle}</EditableText>
              </h1>
              <p className="w-full text-white text-sm md:text-base md:w-4/5">
                <EditableText propKey="subdescription">
                  {subdescription}
                </EditableText>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;