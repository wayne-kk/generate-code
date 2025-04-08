
import React from "react";
import AnimateInView from "../@base/AnimateInView";
import EditableButton from "../@base/EditableButton";
import EditableIcon from "../@base/EditableIcon";
import EditableImg from "../@base/EditableImg";
import EditableText from "../@base/EditableText";
import Overflow from "../@base/Overflow";
import Marquee from "../@base/Marquee";
import { getComConfigByType, getCompTypeOptions } from "../config";
import { motion } from "framer-motion";
import {
  UICompBuilder,
  withDefault,
  withExposingConfigs,
  StringControl,
  jsonArrayControl,
  ArrayStringControl,
  ArrayNumberControl,
  jsonObjectControl,
  Section,
  Dropdown,
  globalEventEmitter
} from "lowcoder-sdk";
export const Hero_ckIpJ3_om338MQw8UisCO_childrenMap = {
type: withDefault(StringControl, "Hero_ckIpJ3_om338MQw8UisCO"),
title:withDefault(StringControl, "探索未来，开启神秘的Web3旅程"),
description:withDefault(StringControl, "MetaMystic致力于将科幻与现实融合，以创新的设计和尖端技术引领未来。加入我们，解锁无限可能。"),
primaryButtonAttr:withDefault(StringControl, "text=联系我们&link="),
secondaryButtonAttr:withDefault(StringControl, "text=查看案例&link="),
images:withDefault(ArrayStringControl, JSON.stringify(["https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/e8608261-b972-4162-92d4-d6758c63d80b.jpeg?oldPrompt=A futuristic laboratory with advanced equipment and glowing screens, showcasing the innovative research of MetaMystic, (sci-fi and sleek:1.3) - [people, text, clutter]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/7c053fdb-6a27-4544-96cd-5ab48ad19276.jpeg?oldPrompt=A holographic interface displaying Web3 technology, with intricate digital patterns and glowing data streams, set against a dark background, (mysterious and futuristic:1.2) - [realistic elements, text, bright colors]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/6acca981-958f-4c45-acae-c7064722222b.jpeg?oldPrompt=A mysterious portal with swirling energy, representing the cutting-edge technology of MetaMystic, set against a dark and futuristic background, (mysterious and sci-fi:1.2) - [realistic elements, text, bright colors]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/17fd2c4c-1885-4248-a320-a636724b34cd.jpeg?oldPrompt=A futuristic cityscape at night, with towering skyscrapers and glowing lights, showcasing the advanced technology of MetaMystic, (sci-fi and sleek:1.3) - [people, text, clutter]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/aec5c449-ea06-4a75-9976-c59ecbc25240.jpeg?oldPrompt=A futuristic control room with glowing screens and advanced technology, showcasing the operational excellence of MetaMystic, (sci-fi and sleek:1.3) - [people, text, clutter]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/3467825e-597c-4500-9d10-bf8e56aa1aa0.jpeg?oldPrompt=A digital landscape with futuristic elements and glowing lights, representing the innovative vision of MetaMystic, (mysterious and modern:1.2) - [realistic elements, text, bright colors]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/777d1837-1bfc-4508-9320-41af771e252f.jpeg?oldPrompt=A digital network of interconnected nodes, glowing with a mysterious blue light, representing the Web3 technology of MetaMystic, (futuristic and modern:1.2) - [realistic elements, text, bright colors]","https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/4f2917a2-7109-4a4f-8386-bfe28d5dc1ad.jpeg?oldPrompt=A futuristic corporate building with glowing neon accents, surrounded by a mysterious fog, showcasing a sleek and modern design, with a glowing logo of MetaMystic prominently displayed, (sci-fi atmosphere:1.3) - [people, text, clutter]"])),
}
export function Hero_ckIpJ3_om338MQw8UisCO({
  title = 'From concept to reality, let every design tell a story',
  description = 'Our design team transforms your vision into compelling brand experiences, connecting creativity and performance to create business value with design.',
  primaryButton = {
    icon: 'fa-solid fa-chevron-right',
    textAttr: 'text=Contact Us&link=/',
  },
  secondaryButton = {
    textAttr: 'text=Show Case&link=/',
  },
  images = [
    'https://source.unsplash.com/1000x800/?3D design',
    'https://source.unsplash.com/1000x800/?UI design',
    'https://source.unsplash.com/1000x800/?UX design',
    'https://source.unsplash.com/1000x800/?illustration design',
    'https://source.unsplash.com/1000x800/?experience design',
    'https://source.unsplash.com/1000x800/?Package Design',
    'https://source.unsplash.com/1000x800/?visual design',
    'https://source.unsplash.com/1000x800/?logo design',
  ],
}) {
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
            <EditableButton className="BTN-PRIMARY w-fit h-12 px-6 group text-sm font-semibold text-white flex gap-2 items-center rounded-xl bg-orange-500 hover:bg-orange-600 hover:transition-all hover:duration-300 dark:hover:bg-orange-400 md:text-base md:px-8 md:h-14">
              <EditableText propKey="primaryButton_textAttr">
                {primaryButton.textAttr}
              </EditableText>
              <EditableIcon propKey="primaryButton_icon" icon={primaryButton.icon} iconLibrary="FontAwesome" className="text-base text-white group-hover:translate-x-1 transition-all" />
            </EditableButton>
            <EditableButton className="BTN-SECONDARY w-fit h-12 px-6 text-sm font-semibold flex gap-2 items-center rounded-xl outline outline-slate-900  hover:bg-slate-900 hover:text-slate-50 hover:transition-all hover:duration-300 dark:text-slate-50 dark:hover:text-slate-900 dark:hover:bg-slate-50 dark:outline-slate-50 md:text-base md:px-8 md:h-14">
              <EditableText propKey="secondaryButton_textAttr">
                {secondaryButton.textAttr}
              </EditableText>
            </EditableButton>
          </motion.div>
        </div>

        <div className="relative w-full">
          <div className="absolute z-10 left-0 bg-gradient-to-r from-white w-1/4 h-full dark:from-black"></div>
          <Marquee autoFill="true" speed={50}>
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
  export function Hero_ckIpJ3_om338MQw8UisCO_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Hero')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Hero')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.primaryButtonAttr?.propertyView({ label: 'primaryButtonAttr' })}
{children.secondaryButtonAttr?.propertyView({ label: 'secondaryButtonAttr' })}
{children.images?.propertyView({ label: 'images' })}

        </Section>
    );
} 
export const Hero_ckIpJ3_om338MQw8UisCO_Builder = new UICompBuilder(Hero_ckIpJ3_om338MQw8UisCO_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Hero')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Hero_ckIpJ3_om338MQw8UisCO_PropertyViewFn)
  .build();


export const Hero_ckIpJ3_om338MQw8UisCO_ExposingConfigs = withExposingConfigs(Hero_ckIpJ3_om338MQw8UisCO_Builder, [])