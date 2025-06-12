import React from 'react';
import Marquee from '@ui/Marquee';
import EditableButton from '@ui/EditableButton';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IIHeroPropsPrimarybutton {
  textAttrLabel: string
  textAttrLink: string
  icon?: string
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
    <section className="w-full px-6 py-24 md:px-8 md:py-32 relative overflow-hidden">
      {/* Light mode background gradient effect */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full dark:hidden" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="paint0_linear_hero" x1="-10" y1="13.115" x2="102.594" y2="46.0087" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F759AB" />
            <stop offset="1" stopColor="#F759AB" stopOpacity="0.01" />
          </linearGradient>
          <clipPath id="bgblur_hero_clip_path">
            <rect width="100" height="100" />
          </clipPath>
        </defs>

        {/* Base background with light blue color */}
        <rect width="100" height="100" fill="#43CAE8" />

        {/* Gradient ellipse - now with 100% opacity and moved down by 10px */}
        <ellipse
          cx="40"
          cy="10"
          rx="50"
          ry="35"
          transform="rotate(180 40 10)"
          fill="url(#paint0_linear_hero)"
        />

        {/* Blur effect layer */}
        <foreignObject x="0" y="0" width="100" height="100">
          <div
            style={{
              backdropFilter: "blur(13.59px)",
              clipPath: "url(#bgblur_hero_clip_path)",
              height: "100%",
              width: "100%"
            }}
          ></div>
        </foreignObject>

        {/* Semi-transparent white overlay */}
        <rect
          width="100"
          height="100"
          fill="white"
          fillOpacity="0.15"
        />
      </svg>

      {/* Dark mode background gradient effect */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full hidden dark:block" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="paint0_linear_hero_dark" x1="-10" y1="13.115" x2="102.594" y2="46.0087" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4418" />
            <stop offset="1" stopColor="#FF4418" stopOpacity="0.01" />
          </linearGradient>
          <radialGradient id="paint1_radial_hero_dark" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(50)">
            <stop offset="0" stopColor="#111827" />
            <stop offset="1" stopColor="#030712" />
          </radialGradient>
          <clipPath id="bgblur_hero_clip_path_dark">
            <rect width="100" height="100" />
          </clipPath>
        </defs>

        {/* Base background with dark color */}
        <rect width="100" height="100" fill="url(#paint1_radial_hero_dark)" />

        {/* Gradient ellipse */}
        <ellipse
          cx="40"
          cy="10"
          rx="50"
          ry="35"
          transform="rotate(180 40 10)"
          fill="url(#paint0_linear_hero_dark)"
          opacity="0.3"
        />

        {/* Blur effect layer */}
        <foreignObject x="0" y="0" width="100" height="100">
          <div
            style={{
              backdropFilter: "blur(15px)",
              clipPath: "url(#bgblur_hero_clip_path_dark)",
              height: "100%",
              width: "100%"
            }}
          ></div>
        </foreignObject>

        {/* Semi-transparent overlay */}
        <rect
          width="100"
          height="100"
          fill="#111827"
          fillOpacity="0.1"
        />
      </svg>

      <div className="relative w-full mx-auto max-w-7xl flex flex-col gap-24 z-10">
        <div className="w-full h-full grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className=" w-full flex flex-col gap-16">
            <h1 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50 md:text-6xl">
              <EditableText propKey={`title`}>{title}</EditableText>
            </h1>
            <div className="flex items-center gap-6">
              <EditableButton className="BTN-PRIMARY w-fit h-12 px-6 group text-sm font-semibold uppercase text-white flex gap-2 items-center rounded-full bg-[#FF4418] hover:bg-[#ff5a34] hover:transition-all hover:duration-300 md:px-8 md:text-base md:h-14" href={primaryButton.textAttrLink}>
                <EditableText propKey={`primaryButton_textAttrLabel`}>
                  {primaryButton.textAttrLabel}
                </EditableText>
                <EditableIcon propKey={`primaryButton_icon`} icon={primaryButton.icon} iconLibrary={"FontAwesome"} className="text-base text-white group-hover:translate-x-1 transition-all" />
              </EditableButton>
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
              <p className="DESC text-slate-600 dark:text-slate-400">
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
                  className="IMAGE w-80 h-56 mx-3 rounded-xl overflow-hidden md:h-60 group"
                >
                  {/* 图片容器 - 使用scale-[1.1]确保精确缩放 */}
                  <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-[1.1]">
                    <EditableImg
                      propKey={`images_${index}`}
                      className="w-full h-full object-cover rounded-xl bg-slate-200 dark:bg-slate-700 aspect-[4/3]"
                      src={image}
                      alt={`images_${index}`}
                    />
                    {/* 这里可以添加任何遮罩层，它会随着容器一起缩放 */}
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:group-hover:opacity-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Hero;