import React from 'react';
import Marquee from '@ui/Marquee';
import EditableButton from '@ui/EditableButton';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import { motion } from 'framer-motion';

export interface IIHeroPropsbutton {
  textAttrLabel: string
  textAttrLink: string
  icon?: string
}
export interface IHeroProps {
  title: string
  description: string
  primaryButton: IIHeroPropsbutton
  secondaryButton: IIHeroPropsbutton
  images: string[]
}

const Hero: React.FC<IHeroProps> = ({
  title = 'From concept to reality, let every design tell a story',
  description = 'Our design team transforms your vision into compelling brand experiences, connecting creativity and performance to create business value with design.',
  primaryButton = {
    icon: 'fa-solid fa-arrow-right',
    textAttrLabel: 'Contact Us',
    textAttrLink: '/'
  },
  secondaryButton = {
    textAttrLabel: 'Show Case',
    textAttrLink: '/'
  },
  images = [
    'https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1746718186768-95b366cc69ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1747102325393-2f811b02752e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1747193544056-088ffe8969ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1747110325205-cb454d10ad1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
  ],
}) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section
      className="relative w-full px-6 py-24 md:px-8 md:py-32 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 dark:bg-[#141414]"
      // 只在浅色模式下显示 SVG 背景
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5v-1H1z'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundBlendMode: "soft-light",
      }}
    >
      {/* 暗色模式的背景覆盖层 */}
      <div className="pointer-events-none hidden dark:block absolute inset-0 w-full h-full z-0"
        style={{
          background: `
            radial-gradient(162.69% 61.79% at 126.41% 116.11%, #4659FF 0%, rgba(70, 89, 255, 0.00) 100%), 
            radial-gradient(82.63% 146.27% at 79.04% 219.54%, #48A7FF 0%, rgba(72, 167, 255, 0.00) 100%), 
            radial-gradient(105.25% 96.59% at 17.14% -56.9%, #4659FF 0%, rgba(70, 89, 255, 0.00) 100%), 
            radial-gradient(51.54% 91.62% at 45.13% -71.34%, #48A7FF 0%, rgba(72, 167, 255, 0.00) 100%), 
            radial-gradient(64.3% 59.41% at 19.84% -47.59%, #FFCD97 0%, rgba(255, 205, 151, 0.00) 100%), 
            #141414`,
        }}
        aria-hidden="true"
      />

      <div className="relative w-full mx-auto max-w-7xl flex flex-col gap-20 md:gap-24 z-10">
        <div className="w-full z-10 h-full flex flex-col gap-10 items-center">
          <motion.div
            className="w-full grid grid-cols-[0.1fr_1fr_0.1fr] justify-end"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full flex justify-end items-end">
              <motion.svg
                className="w-8 h-auto fill-blue-600 dark:fill-white md:w-10"
                viewBox="0 0 35 36"
                xmlns="http://www.w3.org/2000/svg"
                whileInView={{
                  rotate: [90, 0],
                  transition: { duration: 0.6, delay: 0.4 },
                }}
              >
                <path d="M17.833 35.056C15.337 26.509 9.379 21.045 0.740997 17.964C10.633 16.295 15.641 9.936 17.833 0.873001C21.825 10.05 27.402 15.993 34.925 17.964C26.459 21.374 20.738 27.052 17.833 35.056Z" />
              </motion.svg>
            </div>
            <h1 className="TITLE-PRIMARY text-5xl text-center font-semibold text-gray-800 dark:text-white md:text-6xl">
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <div className="w-full h-full flex justify-start items-start">
              <svg
                className="w-11 h-auto fill-blue-600 dark:fill-white md:w-13"
                viewBox="0 0 30 31"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M12.6591 0.630493C11.0871 7.12849 7.49706 11.6875 0.40506 12.8845C6.59706 15.0935 10.8691 19.0105 12.6591 25.1385C14.7411 19.4005 18.8431 15.3295 24.9131 12.8845C19.5201 11.4705 15.5211 7.21049 12.6591 0.630493Z"
                  whileInView={{
                    scale: [1, 0, 1],
                    transition: { duration: 0.6, delay: 0.4 },
                  }}
                />
                <motion.path
                  d="M23.511 18.045C22.714 21.338 20.895 23.648 17.301 24.255C20.439 25.374 22.604 27.359 23.511 30.464C24.566 27.556 26.645 25.494 29.721 24.255C26.988 23.538 24.961 21.379 23.511 18.045Z"
                  whileInView={{
                    scale: [1, 0, 1],
                    transition: { duration: 0.6, delay: 0.6 },
                  }}
                />
              </svg>
            </div>
          </motion.div>
          <motion.p
            className="DESC w-4/5 text-lg text-gray-600 dark:text-gray-400 text-center md:w-2/3"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EditableText propKey="description">{description}</EditableText>
          </motion.p>

          <motion.div
            className="mt-4 flex items-center gap-6"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* 一级按钮 - 应用了新的动效但保留原来的圆角样式 */}
            <EditableButton className="BTN-PRIMARY group w-fit h-12 px-6 text-sm font-semibold text-white flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-[#48A7FF] dark:hover:bg-[#3b96ea] transition-colors duration-300 md:text-base md:px-8 md:h-14"  href={primaryButton.textAttrLink}>
              <EditableText propKey="primaryButton_textAttrLabel">
                {primaryButton.textAttrLabel}
              </EditableText>
              <span className="relative w-[25px] h-[25px] flex-shrink-0 grid place-items-center overflow-hidden rounded-full bg-white text-blue-600 dark:text-[#48A7FF]">
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

            {/* 方案1: 使用带样式对象的二级按钮 */}
            <EditableButton
              className="BTN-SECONDARY w-fit h-12 px-6 text-sm font-semibold flex gap-2 items-center rounded-full outline outline-blue-600 text-dark-600 hover:bg-blue-600/10 dark:outline-white dark:hover:bg-white/45 hover:transition-all hover:duration-300 md:text-base md:px-8 md:h-14"
              href={secondaryButton.textAttrLink}
            >
              <span className="dark:text-gray-50" style={{ color: 'inherit', colorScheme: 'light dark' }}>
                <EditableText propKey="secondaryButton_textAttrLabel">
                  {secondaryButton.textAttrLabel}
                </EditableText>
              </span>
            </EditableButton>
          </motion.div>
        </div>

        <div className="relative w-full">
          <Marquee autoFill={true} speed={50}>
            <div className="w-full h-auto flex items-center">
              {images.map((image, index) => (
                <div className="IMAGE w-60 h-40 mx-3 rounded-xl overflow-hidden shadow-md dark:shadow-xl md:w-72 md:h-44" key={index}>
                  <EditableImg
                    propKey={`images_${index}`}
                    className="w-full h-full object-cover rounded-xl bg-white/10 dark:bg-black/5 aspect-[4/3]"
                    src={image}
                    alt={`images_${index}`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* 添加明确覆盖深色模式下文本的CSS */}
      <style>{`
        @media (prefers-color-scheme: dark) {
          .BTN-SECONDARY {
            color: #f9fafb !important; /* gray-50 */
          }
        }
        :global(.dark) .BTN-SECONDARY {
          color: #f9fafb !important; /* gray-50 */
        }
        /* 只在浅色模式下显示SVG背景 */
        @media (prefers-color-scheme: dark) {
          section[role="presentation"] {
            background-image: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;