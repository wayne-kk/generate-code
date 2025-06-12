import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import { motion } from 'framer-motion';

export interface IHeroImagesItem {
  src: string
  title: string
  subTitle: string
  icon: string
}

export interface IIHeroPropsPrimarybutton {
  icon: string
  textAttrLabel: string
  textAttrLink: string
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
  subtitle: string
  images: IHeroImagesItem[]
  primaryButton: IIHeroPropsPrimarybutton
  secondaryButton: IIHeroPropsSecondarybutton
  features: IHeroFeaturesItem[]
}

const Hero: React.FC<IHeroProps> = ({
  title = 'Travel and discover the beauty of life',
  description = 'Embark on a journey with us and discover the wonders hidden around every corner. Experience a safe and comfortable trip.',
  subtitle = 'Explore the world',
  images = [
    {
      src:'https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Maldives',
      subTitle: 'Maldives coral reef',
      icon: 'fa-solid fa-location-dot',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1746718186768-95b366cc69ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
      title: 'Paris',
      subTitle: 'Paris eiffel tower',
      icon: 'fa-solid fa-location-dot',
    },
    {
      src: 'https://images.unsplash.com/photo-1747102325393-2f811b02752e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      title: 'China',
      subTitle: 'Guilin, Guangxi, China',
      icon: 'fa-solid fa-location-dot',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title: 'USA',
      subTitle: 'Grand canyon national park',
      icon: 'fa-solid fa-location-dot',
    },
  ],
  primaryButton = {
    textAttrLabel: 'Contact Us',
    textAttrLink:'/',
  },
  secondaryButton = {
    textAttrLabel: 'Show Case',
    textAttrLink:'/',
  },
  features = [
    {
      icon: 'fa-solid fa-user',
      text: 'Personalise',
    },
    {
      icon: 'fa-solid fa-shield-heart',
      text: 'Safety',
    },
    {
      icon: 'fa-solid fa-earth-americas',
      text: 'Anywhere',
    },
  ],
}) => {
  const [isSelected, setSelected] = React.useState(0);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section
      className="relative w-full px-6 py-24 md:px-8 md:py-32 transition-colors duration-300 overflow-hidden"
    >
      {/* Light mode background */}
      <div className="absolute inset-0 block dark:hidden"
        style={{
          background:
            'radial-gradient(68.26% 68.03% at 58.49% -31.11%, #CA74FF 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(54.59% 28.15% at 88.2% -2.73%, #FF6F6F 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(35.17% 56.87% at 38.44% -13.84%, #4BEAFF 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(47.82% 46.29% at 14.48% -13.84%, #FF56C1 0%, rgba(255, 255, 255, 0.00) 100%), #FFF',
        }}
      ></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(68.26% 68.03% at 58.49% -31.11%, rgba(147, 51, 234, 0.5) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(54.59% 28.15% at 88.2% -2.73%, rgba(220, 38, 38, 0.5) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(35.17% 56.87% at 38.44% -13.84%, rgba(14, 165, 233, 0.3) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(47.82% 46.29% at 14.48% -13.84%, rgba(219, 39, 119, 0.4) 0%, rgba(0, 0, 0, 0.00) 100%), #111827',
        }}
      ></div>

      {/* SVG Background */}
      <div
        className="absolute w-full"
        style={{
          bottom: '794px',
          left: '0',
          zIndex: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="287"
          viewBox="0 0 1920 287"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2026.5 138.904L2026.1 138.989C1980.07 148.829 1853.74 168.5 1716.5 168.5C1630.81 168.5 1590.74 180.362 1542.68 192.235C1494.59 204.119 1438.54 216 1321 216C1203.46 216 1148.04 204.12 1103.31 192.233C1058.62 180.357 1024.68 168.5 950 168.5C875.373 168.5 810.596 197.824 743.764 227.208C676.957 256.581 608.118 286 525.5 286C442.815 286 385.567 244.019 329.889 202.463C274.615 161.209 220.908 120.396 145.298 120.979L143.508 121C20.5604 123.002 -72.2603 66.1074 -103.34 37.3672L-103.5 37.2188V-6.49609L-80.458 -6.69141C-89.9988 -13.254 -97.6899 -19.4081 -103.34 -24.6328L-103.5 -24.7812V-68.4961L-86.0527 -68.6436C-93.0452 -73.7209 -98.8399 -78.4716 -103.34 -82.6328L-103.5 -82.7812V-126.496L-73.041 -126.754C-86.0695 -135.151 -96.2922 -143.116 -103.34 -149.633L-103.5 -149.781V-193.496L-77.5469 -193.716C-88.4437 -201.017 -97.1262 -207.887 -103.34 -213.633L-103.5 -213.781V-257.496L2026.5 -275.504V138.904ZM..."
            className="stroke-white dark:stroke-gray-800"
          />
        </svg>
      </div>

      <div className="w-full h-auto mx-auto max-w-7xl grid grid-cols-1 items-center gap-16 md:grid-cols-2 relative z-10">
        {/* Content */}
        <div className="w-full flex flex-col gap-6">
          <motion.h2
            className="TITLE-SECONDARY font-semibold text-[#FF6F6F] dark:text-rose-400 uppercase"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EditableText propKey="subtitle">{subtitle}</EditableText>
          </motion.h2>
          <motion.h1
            className="TITLE-PRIMARY w-full text-5xl font-semibold text-black dark:text-white md:text-6xl"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EditableText propKey="title">{title}</EditableText>
          </motion.h1>
          <motion.p
            className="DESC w-full text-slate-600 dark:text-slate-300"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EditableText propKey="description">{description}</EditableText>
          </motion.p>
          <motion.ul
            className="w-full mt-6 flex gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2.5 items-center">
                <EditableIcon
                  propKey={`features_${index}_icon`}
                  icon={feature.icon}
                  iconLibrary="FontAwesome"
                  className="text-zinc-900 dark:text-zinc-100 md:text-xl text-xl"
                />
                <label className="TEXT-CONTENT text-black dark:text-white uppercase md:text-xl">
                  <EditableText propKey={`features_${index}_text`}>
                    {feature.text}
                  </EditableText>
                </label>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="w-full mt-14 flex items-center gap-6"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* 一级按钮 - 添加动效 */}
            <EditableButton className="BTN-PRIMARY w-fit h-12 px-6 group whitespace-nowrap text-sm font-semibold uppercase text-white flex items-center gap-3 rounded-full bg-[#FF6F6F] dark:bg-rose-500 hover:bg-[#FF5A5A] dark:hover:bg-rose-600 transition-colors duration-300 md:text-base md:h-14 md:px-8" href={primaryButton.textAttrLink}>
              <EditableText propKey="primaryButton_textAttrLabel">
                {primaryButton.textAttrLabel}
              </EditableText>
              <span className="relative w-[25px] h-[25px] flex-shrink-0 grid place-items-center overflow-hidden rounded-full bg-white text-[#FF6F6F] dark:text-rose-500">
                <EditableIcon
                  propKey="primaryButton_icon"
                  icon={'fa-solid fa-arrow-right'}
                  iconLibrary="FontAwesome"
                  className="absolute transition-transform duration-300 ease-in-out -rotate-45 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />
                <EditableIcon
                  propKey="primaryButton_icon"
                  icon={'fa-solid fa-arrow-right'}
                  iconLibrary="FontAwesome"
                  className="absolute transform translate-x-[-150%] translate-y-[150%] -rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-100"
                />
              </span>
            </EditableButton>

            <EditableButton className="BTN-SECONDARY w-fit h-12 px-6 text-sm whitespace-nowrap font-semibold uppercase flex gap-2 items-center rounded-full outline outline-black dark:outline-white text-black dark:text-white bg-white/5 backdrop-blur-md hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 md:text-base md:h-14 md:px-8" href={secondaryButton.textAttrLink}>
              <EditableText propKey="secondaryButton_textAttrLabel">
                {secondaryButton.textAttrLabel}
              </EditableText>
            </EditableButton>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-auto flex gap-4"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${index === isSelected
                  ? 'w-[26rem] shadow-xl shadow-black/10 dark:shadow-black/30'
                  : 'w-20'
                } IMAGE relative group h-[22rem] overflow-hidden bg-origin-content rounded-2xl transition-all duration-500 md:h-[35rem] md:rounded-3xl`}
              onHoverStart={() => setSelected(index)}
            >
              <EditableImg
                propKey={`images_${index}_src`}
                className="w-full h-full bg-zinc-200 dark:bg-zinc-800 object-cover transition-all ease-in-out duration-300 group-hover:scale-110"
                src={image.src}
                alt={`images_${index}_src`}
              />
              {index === isSelected ? (
                <div className="absolute w-full h-1/2 bottom-0 flex items-end bg-gradient-to-t from-black/80 to-transparent">
                  <div className="w-10 h-10 ml-3 mb-3 flex items-center justify-center text-white text-xl rounded-xl backdrop-blur-lg bg-black/60 transition-all duration-300 md:w-14 md:h-14 md:rounded-2xl md:text-3xl md:ml-5 md:mb-5">
                    <EditableIcon
                      propKey={`images_${index}_icon`}
                      icon={image.icon}
                      iconLibrary="FontAwesome"
                      className="text-white text-xl"
                    />
                  </div>
                  <motion.div
                    className="absolute w-48 left-[62px] mb-[16px] flex flex-col text-white text-xs md:left-[92px] md:mb-6 md:text-base md:w-56"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, delay: 0.2 },
                    }}
                  >
                    <EditableText
                      propKey={`images_${index}_title`}
                      className="TITLE-PRIMARY font-semibold"
                    >
                      {image.title}
                    </EditableText>
                    <EditableText
                      propKey={`images_${index}_subTitle`}
                      className="DESC"
                    >
                      {image.subTitle}
                    </EditableText>
                  </motion.div>
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


export default Hero;