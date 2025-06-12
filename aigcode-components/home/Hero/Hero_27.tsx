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
    icon: 'fa-solid fa-chevron-right',
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
}) =>{
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section className="w-full px-6 py-24 bg-white dark:bg-black md:px-8 md:py-32">
      <div className="relative w-full mx-auto max-w-7xl flex flex-col gap-20 md:gap-24">
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
                className="w-8 h-auto fill-zinc-900 dark:fill-zinc-50 md:w-10"
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
            <h1 className="TITLE-PRIMARY text-5xl text-center font-semibold text-slate-900 dark:text-slate-50 md:text-6xl">
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <div className="w-full h-full flex justify-start items-start">
              <svg
                className="w-11 h-auto fill-zinc-900 dark:fill-zinc-50 md:w-13"
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
            className="DESC w-4/5 text-lg text-slate-600 text-center dark:text-slate-400 md:w-2/3"
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
            <EditableButton className="BTN-PRIMARY w-fit h-12 px-6 group text-sm font-semibold text-white flex gap-2 items-center rounded-xl bg-orange-500 hover:bg-orange-600 hover:transition-all hover:duration-300 dark:hover:bg-orange-400 md:text-base md:px-8 md:h-14" href={primaryButton.textAttrLink}>
              <EditableText propKey="primaryButton_textAttrLabel">
                {primaryButton.textAttrLabel}
              </EditableText>
              <EditableIcon propKey="primaryButton_icon" icon={primaryButton.icon} iconLibrary="FontAwesome" className="text-base text-white group-hover:translate-x-1 transition-all" />
            </EditableButton>
            <EditableButton className="BTN-SECONDARY w-fit h-12 px-6 text-sm font-semibold flex gap-2 items-center rounded-xl outline outline-slate-900  hover:bg-slate-900 hover:text-slate-50 hover:transition-all hover:duration-300 dark:text-slate-50 dark:hover:text-slate-900 dark:hover:bg-slate-50 dark:outline-slate-50 md:text-base md:px-8 md:h-14" href={secondaryButton.textAttrLink}>
              <EditableText propKey="secondaryButton_textAttrLabel">
                {secondaryButton.textAttrLabel}
              </EditableText>
            </EditableButton>
          </motion.div>
        </div>

        <div className="relative w-full">
          <div className="absolute z-10 left-0 bg-gradient-to-r from-white w-1/4 h-full dark:from-black"></div>
          <Marquee autoFill={true} speed={50}>
            <div className="w-full h-auto flex items-center">
              {images.map((image, index) => (
                <div className="IMAGE w-60 h-40 mx-3 rounded-xl md:w-72 md:h-44">
                  <EditableImg
                    key={index}
                    propKey={`images_${index}`}
                    className="w-full h-full object-cover rounded-xl bg-black/5 dark:bg-white/10 aspect-[4/3]"
                    src={image}
                    alt={`images_${index}`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <div className="absolute z-10 top-0 right-0 bg-gradient-to-l from-white w-1/4 h-full dark:from-black"></div>
        </div>

        <div className="absolute inset-x-0 top-1/3 z-0 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[60rem] w-[100rem] flex-none stroke-zinc-400 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            >
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;