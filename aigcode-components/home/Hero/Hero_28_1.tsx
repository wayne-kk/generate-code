import React from 'react';
import Marquee from '@ui/Marquee';
import EditableButton from '@ui/EditableButton';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IIHeroPropsPrimarybutton {
  textAttrLabel: string
  textAttrLink: string
  icon: string
}

export interface IIHeroPropsSecondarybutton {
  textAttrLabel: string
  textAttrLink: string
}

export interface IHeroFeaturesItem {
  icon: string
  text: string
}

export interface IHeroProps {
  title: string
  description: string
  images: string[]
  primaryButton: IIHeroPropsPrimarybutton
  secondaryButton: IIHeroPropsSecondarybutton
  features: IHeroFeaturesItem[]
}

const Hero: React.FC<IHeroProps> = ({
  title = "Travel and discover the beauty of life",
  description = "Embark on a journey with us and discover the wonders hidden around every corner. Experience a safe and comfortable trip.",
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
  primaryButton = {
    icon: "fa-solid fa-arrow-right",
    textAttrLabel: 'Contact Us',
    textAttrLink: '/'
  },
  secondaryButton = {
    textAttrLabel: 'Learn more',
    textAttrLink: '/'
  },
  features = [
    {
      icon: "fa-solid fa-user",
      text: "Personalise",
    },
    {
      icon: "fa-solid fa-shield-heart",
      text: "Safety",
    },
    {
      icon: "fa-solid fa-earth-americas",
      text: "Anywhere",
    },
  ],
}) => {
  const [isMarqueePaused, setIsMarqueePaused] = React.useState(false);

  return (
    <>
      {/* 添加Outfit字体 */}
      <section className="w-full px-6 py-24 md:px-8 md:py-32 relative overflow-hidden">
        {/* Light mode background gradient effect */}
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full dark:hidden" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Yellow gradient (top layer) */}
            <radialGradient id="yellow_gradient" cx="105%" cy="-19.2%" r="100%" fx="105%" fy="-19.2%">
              <stop offset="0%" stopColor="#FFFAB3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Pink gradient (middle layer) */}
            <radialGradient id="pink_gradient" cx="70.49%" cy="-18.59%" r="100%" fx="70.49%" fy="-18.59%">
              <stop offset="0%" stopColor="#FFCEE9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Blue gradient (bottom layer) */}
            <radialGradient id="blue_gradient" cx="13.44%" cy="-14.73%" r="100%" fx="13.44%" fy="-14.73%">
              <stop offset="0%" stopColor="#9BD5FF" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* White background */}
          <rect width="100" height="100" fill="#FFFFFF" />

          {/* Blue gradient layer (bottom) */}
          <rect width="100" height="100" fill="url(#blue_gradient)" />

          {/* Pink gradient layer (middle) */}
          <rect width="100" height="100" fill="url(#pink_gradient)" />

          {/* Yellow gradient layer (top) */}
          <rect width="100" height="100" fill="url(#yellow_gradient)" />
        </svg>

        {/* Dark mode background */}
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full hidden dark:block" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Dark mode gradients */}
            <radialGradient id="dark_gradient1" cx="105%" cy="-19.2%" r="100%" fx="105%" fy="-19.2%">
              <stop offset="0%" stopColor="#FF4418" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#121212" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dark_gradient2" cx="70.49%" cy="-18.59%" r="100%" fx="70.49%" fy="-18.59%">
              <stop offset="0%" stopColor="#4B5563" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#121212" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dark_gradient3" cx="13.44%" cy="-14.73%" r="100%" fx="13.44%" fy="-14.73%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#121212" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dark background */}
          <rect width="100" height="100" fill="#121212" />

          {/* Gradient layers */}
          <rect width="100" height="100" fill="url(#dark_gradient3)" />
          <rect width="100" height="100" fill="url(#dark_gradient2)" />
          <rect width="100" height="100" fill="url(#dark_gradient1)" />
        </svg>

        <div className="relative w-full mx-auto max-w-7xl flex flex-col gap-24 z-10">
          <div className="w-full h-full grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className=" w-full flex flex-col gap-16">
              <h1 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50 md:text-6xl">
                <EditableText propKey={`title`}>{title}</EditableText>
              </h1>
              <div className="flex items-center gap-6">
                {/* 一级按钮 - 应用新的动效 */}
                <EditableButton className="BTN-PRIMARY group w-fit h-12 px-6 text-sm font-semibold uppercase text-white flex items-center gap-3 rounded-full bg-[#FF4418] hover:bg-[#ff5a34] transition-colors duration-300 md:px-8 md:text-base md:h-14"  href={primaryButton.textAttrLink}>
                  <EditableText propKey={`primaryButton_textAttrLabel`}>
                    {primaryButton.textAttrLabel}
                  </EditableText>
                  <span className="relative w-[25px] h-[25px] flex-shrink-0 grid place-items-center overflow-hidden rounded-full bg-white text-[#FF4418]">
                    <EditableIcon
                      propKey={`primaryButton_icon`}
                      icon={primaryButton.icon}
                      iconLibrary="FontAwesome"
                      className="absolute transition-transform duration-300 ease-in-out -rotate-45 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                    />
                    <EditableIcon
                      propKey={`primaryButton_icon`}
                      icon={primaryButton.icon}
                      iconLibrary="FontAwesome"
                      className="absolute transform translate-x-[-150%] translate-y-[150%] -rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-100"
                    />
                  </span>
                </EditableButton>

                {/* 二级按钮 - 保持原装 */}
                <EditableButton className="BTN-SECONDARY w-fit h-12 px-6 text-sm font-semibold uppercase flex gap-2 items-center rounded-full border border-slate-900 text-slate-900 dark:border-slate-50 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 hover:transition-all hover:duration-300 hover:dark:text-slate-900 hover:dark:bg-slate-50 md:text-base md:px-8 md:h-14" href={secondaryButton.textAttrLink}>
                  <EditableText propKey={`secondaryButton_textAttrLabel`}>
                    {secondaryButton.textAttrLabel}
                  </EditableText>
                </EditableButton>
              </div>
            </div>
            <div className="w-full flex flex-col gap-16">
              <div className="w-full flex flex-col gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-auto dark:opacity-90" width="58" height="38" viewBox="0 0 58 38" fill="none">
                  <g clipPath="url(#clip0_306_323)">
                    <path d="M5.13 37.9997C1.83659 32.8126 7.24792e-07 26.0418 0 18.9999C0 11.9579 1.83659 5.18712 5.13 0V37.9997Z" fill="#FF4418" />
                    <path d="M38 38C32.9609 38 28.1282 35.9982 24.565 32.435C21.0018 28.8718 19 24.0391 19 19C19 13.9609 21.0018 9.12817 24.565 5.56498C28.1282 2.00178 32.9609 1.81167e-06 38 8.30517e-07L38 38Z" fill="#FF4418" />
                    <path d="M11.455 33.3421C13.3969 35.4152 15.716 36.9932 18.24 37.9999V0C15.716 1.00677 13.3969 2.58475 11.455 4.65782C7.89178 8.4616 5.89 13.6206 5.89 19C5.89 24.3793 7.89178 29.5383 11.455 33.3421Z" fill="#FF4418" />
                    <path d="M57.935 38C52.8959 38 48.0632 35.9982 44.5 32.435C40.9368 28.8718 38.935 24.0391 38.935 19C38.935 13.9609 40.9368 9.12817 44.5 5.56498C48.0632 2.00178 52.8959 9.81152e-07 57.935 0L57.935 38Z" fill="#FF4418" />
                  </g>
                  <defs>
                    <clipPath id="clip0_306_323">
                      <rect width="58" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="DESC text-slate-600 dark:text-slate-300">
                  <EditableText propKey={`description`}>
                    {description}
                  </EditableText>
                </p>
              </div>
              <ul className="flex gap-8 items-center md:mt-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-2.5 items-center">
                    <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} className="text-xl text-slate-900 dark:text-slate-50" />
                    <label className="TEXT-CONTENT text-slate-900 uppercase dark:text-slate-50 md:text-xl">
                      <EditableText propKey={`features_${index}_text`}>
                        {feature.text}
                      </EditableText>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative w-full">
            {/* 左侧渐变遮罩 - 修复暗色模式颜色匹配 */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none">
              {/* 亮色模式渐变 */}
              <div className="absolute inset-0 block dark:hidden" style={{
                background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
              }}></div>
              {/* 暗色模式渐变 - 使用与背景匹配的颜色 */}
              <div className="absolute inset-0 hidden dark:block" style={{
                background: 'linear-gradient(to right, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)'
              }}></div>
            </div>

            {/* 右侧渐变遮罩 - 修复暗色模式颜色匹配 */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none">
              {/* 亮色模式渐变 */}
              <div className="absolute inset-0 block dark:hidden" style={{
                background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
              }}></div>
              {/* 暗色模式渐变 - 使用与背景匹配的颜色 */}
              <div className="absolute inset-0 hidden dark:block" style={{
                background: 'linear-gradient(to left, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)'
              }}></div>
            </div>

            <div
              className="relative w-full"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
            >
              {/* 使用自定义状态控制Marquee的暂停 */}
              <Marquee
                autoFill={true}
                play={!isMarqueePaused}
                speed={50}
              >
                <div className="w-full h-auto flex items-center">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="IMAGE w-80 h-56 mx-3 rounded-xl overflow-hidden md:h-60 group relative"
                    >
                      {/* 图片容器 - 使用scale-[1.1]确保精确缩放 */}
                      <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-[1.1]">
                        <EditableImg
                          propKey={`images_${index}`}
                          className="w-full h-full object-cover rounded-xl bg-slate-200 dark:bg-slate-700 aspect-[4/3]"
                          src={image}
                          alt={`images_${index}`}
                        />
                        {/* 遮罩层 - 增强暗色模式效果 */}
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:group-hover:opacity-30"></div>
                      </div>

                      {/* 暗色模式下的强调框 */}
                      <div className="absolute inset-0 rounded-xl border border-transparent dark:border-slate-600/20 transition-all duration-300 group-hover:dark:border-slate-500/40"></div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;