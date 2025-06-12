import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import { motion } from 'framer-motion';

export interface IIHeroPropsPrimarybutton {
  icon: string
  textAttrLabel: string
  textAttrLink: string
}

export interface IIHeroPropsRecommend {
  name: string
  subTitle: string
  src: string
  description: string
  taste: string
  score: string
}

export interface IHeroProps {
  title: string
  subTitle: string
  description: string
  primaryButton: IIHeroPropsPrimarybutton
  recommend: IIHeroPropsRecommend
}

const Hero: React.FC<IHeroProps> = ({
  title = "Discover the authentic taste of Japan",
  subTitle = "About US",
  description = "From every slice of fresh sashimi to every bowl of ramen soup that\'s been simmered for hours, our chefs use their ingenuity to bring you an authentic Japanese culinary experience.",
  primaryButton = {
    icon: "fa-solid fa-arrow-right",
    textAttrLabel: 'Discover delicious food',
    textAttrLink:'/',
  },
  recommend = {
    name: "Tempura",
    subTitle: "Today's recommendation",
    src: 'https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "🦐Tempura is light, crispy, and deep-fried Japanese batter-coated seafood or vegetables.",
    taste: "Crisp, fresh, slightly sweet taste",
    score: "4.5",
  },
}) =>{
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  React.useEffect(() => {
    if (!containerRef.current) return;
    const ref = containerRef.current;
    ref.addEventListener("mouseenter", handleMouseEnter);
    ref.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.removeEventListener("mouseenter", handleMouseEnter);
      ref.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 卡片翻转样式
  const cardFlipStyle = isMouseEntered
    ? {
        transform: `rotateY(180deg)`,
      }
    : {
        transform: "rotateY(0deg)",
      };

  // 背面与按钮默认颜色一致的蓝色弥散渐变
  const diffuseGradientBack = {
    background: "linear-gradient(135deg, rgba(14,165,233,0.95) 0%, rgba(56,189,248,0.9) 50%, rgba(2,132,199,0.85) 100%), radial-gradient(circle at 30% 70%, rgba(186,230,253,0.4) 0%, rgba(186,230,253,0) 60%)",
    boxShadow: "0 8px 32px 0 rgba(14, 165, 233, 0.25)",
  };

  return (
    <section className="w-full px-6 py-24 md:px-8 md:py-32 relative bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* 弥散渐变背景效果 - 增强深色模式下的渐变 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 主要背景渐变层 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-transparent dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 opacity-0 dark:opacity-100"></div>

        {/* 增加多层渐变球体，提供更丰富的视觉效果 */}
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] bg-sky-200/20 dark:bg-sky-600/10 rounded-full filter blur-[120px] dark:animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] bg-sky-300/20 dark:bg-indigo-700/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-200/20 dark:bg-blue-600/10 rounded-full filter blur-[80px]"></div>

        {/* 添加额外的渐变层次 */}
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-transparent dark:bg-purple-900/5 rounded-full filter blur-[100px] dark:animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[25%] h-[25%] bg-transparent dark:bg-cyan-800/5 rounded-full filter blur-[70px]"></div>

        {/* 添加微妙的动态元素 */}
        <div className="absolute top-[10%] left-[50%] w-[15%] h-[15%] bg-transparent dark:bg-sky-400/5 rounded-full filter blur-[50px] animate-[bounce_10s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative w-full h-full mx-auto max-w-7xl grid grid-cols-1 gap-16 md:grid-cols-2 z-10">
        <motion.div
          className="w-full flex flex-col gap-14 justify-between"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex items-center gap-6">
              <EditableText
                propKey={`subTitle`}
                className="TITLE-SECONDARY w-fit uppercase text-black dark:text-sky-100 font-medium"
              >
                {subTitle}
              </EditableText>
              <motion.div
                className="h-[1px] bg-black/20 dark:bg-white/50"
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <h1 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white md:text-6xl">
              <EditableText propKey={`title`}>{title}</EditableText>
            </h1>
            <p className="DESC mt-4 text-slate-600 dark:text-sky-100 font-medium">
              <EditableText propKey={`description`}>{description}</EditableText>
            </p>
          </div>
          <EditableButton className="BTN-PRIMARY w-fit h-12 px-6 group font-semibold text-sm text-white uppercase flex gap-2 items-center rounded-lg bg-sky-500 hover:bg-sky-400 hover:transition-all hover:duration-300 md:h-14 md:text-base md:px-8"   href={primaryButton.textAttrLink}>
            <EditableText propKey={`primaryButton_textAttrLabel`}>
              {primaryButton.textAttrLabel}
            </EditableText>
            <EditableIcon
              propKey={`primaryButton_icon`}
              icon={primaryButton.icon}
              iconLibrary="FontAwesome"
              className="group-hover:translate-x-1 transition-transform"
            />
          </EditableButton>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            ref={containerRef}
            className="relative w-full h-auto cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                ...cardFlipStyle
              }}
            >
              {/* 卡片正面 - 使用纯Tailwind类处理亮色/暗色模式 */}
              <div
                className="w-full h-full flex flex-col gap-6 rounded-2xl p-5 shadow-sm bg-white dark:bg-[#1e293b] border border-white/30 dark:border-sky-400/30 backdrop-blur-md"
                style={{ backfaceVisibility: "hidden" }}
              >
                <EditableImg
                  propKey={`recommend_src`}
                  className="IMAGE w-full h-auto aspect-[2/1.4] md: aspect-[3/2] rounded-lg bg-black/10 dark:bg-white/10 object-cover"
                  src={recommend.src}
                  alt={`recommend_src`}
                />

                <div className="w-full h-full px-4 flex items-center justify-between md:px-6">
                  <div className="w-full flex flex-col md:gap-1">
                    <EditableText
                      propKey={`recommend_subTitle`}
                      className="TITLE-SECONDARY text-xs uppercase text-black dark:text-sky-200 font-medium md:text-sm"
                    >
                      {recommend.subTitle}
                    </EditableText>
                    <EditableText
                      propKey={`recommend_name`}
                      className="TITLE-PRIMARY mt-2 text-lg font-semibold text-black dark:text-white md:text-xl"
                    >
                      {recommend.name}
                    </EditableText>
                    <EditableText
                      propKey={`recommend_taste`}
                      className="DESC text-sm text-slate-600 dark:text-sky-100 md:text-base"
                    >
                      {recommend.taste}
                    </EditableText>
                  </div>
                  <EditableText
                    propKey={`recommend_score`}
                    className="TITLE-PRIMARY text-5xl font-semibold text-black dark:text-white md:text-6xl"
                  >
                    {recommend.score}
                  </EditableText>
                </div>
              </div>

              {/* 卡片背面 - 蓝色弥散渐变风格，与按钮默认颜色一致 */}
              <div
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl border border-sky-300/30 backdrop-blur-lg"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  ...diffuseGradientBack
                }}
              >
                <div className="w-full flex flex-col items-center text-center">
                  <EditableText
                    propKey={`recommend_description`}
                    className="DESC text-xl font-medium mb-8 text-white"
                    style={{textShadow: "0 0 10px rgba(0,0,0,0.3)"}}
                  >
                    {recommend.description}
                  </EditableText>

                  <EditableText
                    propKey={`recommend_taste`}
                    className="DESC text-lg italic text-white font-medium"
                    style={{textShadow: "0 0 8px rgba(0,0,0,0.3)"}}
                  >
                    {recommend.taste}
                  </EditableText>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

