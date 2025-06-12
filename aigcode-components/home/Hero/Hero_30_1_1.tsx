import React from 'react';
import Marquee from '@ui/Marquee';
import EditableButton from '@ui/EditableButton';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import { motion } from 'framer-motion';

export interface IIHeroPropsTitlewords {
  text: string
  typingDelay: number
}

export interface IIHeroPropsImage {
  src: string
  url: string
}

export interface ITestimonialsItem {
  avatar: string
  name: string
  role: string
  detail: string
}

export interface IprimaryButtonProp {
  icon: string
  textAttrLabel: string
  textAttrLink: string
}

export interface IHeroProps {
  titleWords: IIHeroPropsTitlewords
  description: string
  primaryButton: IprimaryButtonProp
  image: IIHeroPropsImage
  testimonials: ITestimonialsItem[]
}

const Hero: React.FC<IHeroProps> = ({
  titleWords = {
    text: "From concept to reality,let every design tell a story",
    typingDelay: 20,
  },
  description = "Our design team transforms your vision into compelling brand experiences, connecting creativity and performance to create business value with design.",
  primaryButton = {
    icon: "fa-solid fa-arrow-right",
    textAttrLabel: 'Start Designing for Fre',
    textAttrLink:'/',
  },
  image = {
    src:     'https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
    url: "wegic.ai",
  },
  testimonials = [
    {
      avatar: 'https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      name: "Sophia",
      role: "Graphic Designer",
      detail:
        "Our graphic designers specialize in using color, shape and typography to create memorable print and digital media pieces.",
    },
    {
      avatar:     'https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
      name: "Turner",
      role: "UX Designer",
      detail:
        "Our UX designers delve into user behavior to design products that are easy to navigate and highly engaging.",
    },
    {
      avatar: 'https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      name: "Tony",
      role: "Project Manager",
      detail:
        "Our product managers are the heart and soul of the project, coordinating the various teams to ensure accuracy every step from concept to final delivery.",
    },
    {
      avatar:'https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
      name: "Tom",
      role: "UI Designer",
      detail:
        "Our UI designers focus on creating beautiful, intuitive and user-friendly interfaces, ensuring every click is a visual feast.",
    },
  ],
}) =>{
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 60 },
  };

  const [displayedText, setDisplayedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    if (isTyping) {
      if (displayedText.length < titleWords.text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(titleWords.text.slice(0, displayedText.length + 1));
        }, 30);

        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping, titleWords.text, titleWords.typingDelay]);

  return (
    <section className="w-full px-6 py-24 bg-white dark:bg-slate-950 md:px-8 md:py-32 relative overflow-hidden">
      {/* SVG mask using SVG viewBox for consistent proportions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="imageMask" clipPathUnits="objectBoundingBox">
            <path d="M0 0.0336C0 0.015 0.0118 0 0.0264 0H0.9736C0.9882 0 1 0.015 1 0.0336V0.9664C1 0.985 0.9882 1 0.9736 1H0.1295C0.1186 1 0.1097 0.9888 0.1097 0.9749V0.9318C0.1097 0.8878 0.0817 0.8522 0.047 0.8522H0.0198C0.0089 0.8522 0 0.8411 0 0.827V0.0336Z" />
          </clipPath>
        </defs>
      </svg>
      
      {/* 圆形背景元素 - 使用内联样式确保浅色/深色模式切换 */}
      <motion.div 
        className="absolute pointer-events-none" 
        style={{ 
          left: '74%', 
          top: '9%', 
          width: '30vw',
          height: '30vw',
          maxWidth: '400px',
          maxHeight: '400px',
          borderRadius: '1000px',
          backdropFilter: 'blur(50px)',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          backgroundColor: 'var(--circle-bg-color)',
        }}
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      ></motion.div>
      
      {/* 浅色模式CSS变量 */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --circle-bg-color: rgb(224, 231, 255); /* indigo-100 */
        }
        .dark {
          --circle-bg-color: rgba(15, 23, 42, 0.3); /* slate-950 with 30% opacity */
        }
      `}} />
      
      {/* 浅色模式下的渐变圆 */}
      <div 
        className="absolute pointer-events-none block dark:hidden" 
        style={{ 
          left: '40%', 
          top: '40%', 
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: 'auto',
          zIndex: 0
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox="0 0 1325 1212" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <g filter="url(#filter0_f_103_61)">
            <path d="M924.551 563.162C924.551 700.128 807.249 811.162 662.551 811.162C517.852 811.162 400.551 700.128 400.551 563.162C400.551 426.195 517.852 315.162 662.551 315.162C807.249 315.162 924.551 426.195 924.551 563.162Z" fill="url(#paint0_radial_103_61)"/>
          </g>
          <defs>
            <filter id="filter0_f_103_61" x="0.550537" y="-84.8384" width="1324" height="1296" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_103_61"/>
            </filter>
            <radialGradient id="paint0_radial_103_61" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(141.157 -924.838) rotate(62.9063) scale(2695.99 8401.12)">
              <stop offset="0.292419" stop-color="#9BFFA5"/>
              <stop offset="0.473798" stop-color="#AED3FF"/>
              <stop offset="0.549708" stop-color="#C9D4EF"/>
              <stop offset="0.657456" stop-color="#D798E1"/>
              <stop offset="0.817708" stop-color="#CACFFA"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
        
      {/* 暗色模式下的渐变圆 - 更高的透明度和较亮的颜色 */}
      <div 
        className="absolute pointer-events-none hidden dark:block" 
        style={{ 
          left: '40%', 
          top: '40%', 
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: 'auto',
          zIndex: 0
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox="0 0 1325 1212" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 0.25 }} /* 调整整体不透明度到可见范围 */
        >
          <g filter="url(#filter_dark)">
            <path d="M924.551 563.162C924.551 700.128 807.249 811.162 662.551 811.162C517.852 811.162 400.551 700.128 400.551 563.162C400.551 426.195 517.852 315.162 662.551 315.162C807.249 315.162 924.551 426.195 924.551 563.162Z" fill="url(#paint_dark)"/>
          </g>
          <defs>
            <filter id="filter_dark" x="100.551" y="15.162" width="1124" height="1096" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur"/> {/* 增加模糊半径使效果更明显 */}
            </filter>
            <radialGradient id="paint_dark" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(141.157 -924.838) rotate(62.9063) scale(2695.99 8401.12)">
              <stop offset="0.2" stop-color="#34d399"/> {/* emerald-400 */}
              <stop offset="0.4" stop-color="#3b82f6"/> {/* blue-500 */}
              <stop offset="0.6" stop-color="#6b7280"/> {/* gray-500 */}
              <stop offset="0.8" stop-color="#a855f7"/> {/* purple-500 */}
              <stop offset="1" stop-color="#6366f1"/> {/* indigo-500 */}
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* 背景装饰线 */}
      <div 
        className="absolute left-0 right-0 top-[8%] w-full overflow-visible pointer-events-none" 
        style={{ height: '720px', zIndex: 0 }}
      >
        <div className="relative mx-auto" style={{ width: '100%', maxWidth: '1728px', height: '100%' }}>
          {/* Vector 1 - 基准线 */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1728 719" 
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="absolute left-0 top-0"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }}
          >
            <path d="M-188 607.573C-161.982 607.573 35.756 718.336 297.424 718.336C660.935 718.336 860.902 -235.77 1338.89 56.7321C1687.54 270.081 1893.45 354.826 2027.26 258.93" className="stroke-slate-300 dark:stroke-slate-800"/>
          </svg>
          
          {/* Vector 2 - 比Vector 1上移6px */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1728 629" 
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="absolute left-0 top-0"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(-6px)', opacity: 0.25 }}
          >
            <path d="M-188 404.633C-161.982 404.633 35.756 628.389 297.424 628.389C660.935 628.389 856.656 -186.733 1368.63 41.1227C1774.51 221.763 1952.92 241.091 2027.26 115.46" className="stroke-slate-300 dark:stroke-slate-800"/>
          </svg>
          
          {/* Vector 3 - 与Vector 2位置一致 */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1728 544" 
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="absolute left-0 top-0"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(-6px)', opacity: 0.25 }}
          >
            <path d="M-188 126.356C-164.955 143.453 35.756 543.389 297.424 543.389C660.935 543.389 916.126 -182.528 1428.1 45.3277C1833.98 225.968 1897.91 196.976 2027.26 104.798" className="stroke-slate-300 dark:stroke-slate-800"/>
          </svg>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="w-full mx-auto max-w-7xl flex flex-col gap-16 md:gap-28 relative z-10">
        <div className="w-full h-full grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="w-full flex flex-col gap-14 justify-between">
            <motion.div
              className="w-full flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span className="TITLE-PRIMARY text-6xl font-semibold text-slate-900 dark:text-slate-50">
                {displayedText}
              </motion.span>

              <p className="DESC text-lg text-slate-600 dark:text-slate-400">
                <EditableText propKey={`description`}>
                  {description}
                </EditableText>
              </p>
            </motion.div>
            
            {/* 使用新的按钮动效，保持原始宽度设置 */}
            <EditableButton
              className="BTN-PRIMARY w-fit h-12 group flex items-center gap-2 text-sm text-white font-semibold rounded-full bg-amber-500 hover:bg-amber-400 transition-colors duration-300 px-6 md:px-8 md:h-14 md:text-base"
              href={primaryButton.textAttrLink}
            
            >
              <EditableText propKey={`primaryButton_textAttrLabel`} className="overflow-hidden text-ellipsis">
                {primaryButton.textAttrLabel}
              </EditableText>

              <span
                className="relative w-[25px] h-[25px] flex-shrink-0 grid place-items-center overflow-hidden rounded-full bg-white text-slate-900 dark:text-slate-800"
              >
                <EditableIcon
                  propKey={`primaryButton_icon`}
                  icon={primaryButton.icon}
                  iconLibrary={"FontAwesome"}
                  className="absolute transition-transform duration-300 ease-in-out -rotate-45 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />
                <EditableIcon
                  propKey={`primaryButton_icon`}
                  icon={primaryButton.icon}
                  iconLibrary={"FontAwesome"}
                  className="absolute transform translate-x-[-150%] translate-y-[150%] -rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-100"
                />
              </span>
            </EditableButton>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* 整个图片区域的容器 */}
            <div className="w-full aspect-[4/3] relative">
              {/* 带遮罩的图片 */}
              <EditableImg
                propKey={`image_src`}
                className="IMAGE absolute inset-0 w-full h-full bg-zinc-200 dark:bg-zinc-800 object-cover"
                src={image.src}
                alt={`image_src`}
                style={{ clipPath: "url(#imageMask)" }}
              />
              
              {/* SVG图标容器 - 使用相对于容器的百分比定位，保证比例一致 */}
              <div className="absolute" style={{ 
                left: 'calc(2% - 13px)',
                bottom: 'calc(2% - 10px)', 
                width: '10%',
                height: 'auto',
                zIndex: 5 
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 60 60" 
                  fill="none"
                  className="w-full h-full"
                >
                  <path d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM13 27.8867L27.5 32.4463L32.1133 47L42 18L13 27.8867Z" className="fill-slate-900 dark:fill-slate-800"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative w-full z-20">
          <div className="absolute z-10 left-0 bg-gradient-to-r from-white w-1/4 h-full dark:from-slate-950"></div>
          <Marquee autoFill={true} speed={50}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-80 h-[10.5rem] mx-3 flex flex-col gap-4 p-6 rounded-xl bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm md:w-96 md:h-[11.5rem]"
              >
                <div className="w-full flex items-center gap-4">
                  <EditableImg
                    propKey={`testimonials_${index}_avatar`}
                    className="IMAGE w-12 h-12 aspect-[1/1] rounded-full bg-black/10 dark:bg-white/10 object-cover md:w-14 md:h-14"
                    src={testimonial.avatar}
                    alt={`testimonials_${index}_avatar`}
                  />
                  <div className="w-full flex flex-col justify-between">
                    <p className="TITLE-SECONDARY font-semibold text-sm text-slate-900 dark:text-slate-50 md:text-base">
                      <EditableText propKey={`testimonials_${index}_name`}>
                        {testimonial.name}
                      </EditableText>
                    </p>
                    <p className="DESC text-xs text-slate-600 dark:text-slate-400 md:text-sm">
                      <EditableText propKey={`testimonials_${index}_role`}>
                        {testimonial.role}
                      </EditableText>
                    </p>
                  </div>
                </div>
                <p className="TEXT-CONTENT w-full text-xs text-slate-600 dark:text-slate-400 md:text-sm">
                  <EditableText propKey={`testimonials_${index}_detail`}>
                    {testimonial.detail}
                  </EditableText>
                </p>
              </div>
            ))}
          </Marquee>
          <div className="absolute z-10 top-0 right-0 bg-gradient-to-l from-white w-1/4 h-full dark:from-slate-950"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;