
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
export const Feature_BpxpN24XIuSTpuxLpxKaP_childrenMap = {
type: withDefault(StringControl, "Feature_BpxpN24XIuSTpuxLpxKaP"),
title:withDefault(StringControl, "引领Web3时代的设计创新"),
description:withDefault(StringControl, "MetaMystic以独特的视角和专业能力为您提供突破性的解决方案，助力您的项目在未来科技中脱颖而出。"),
imageUrl:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/977bd73f-6483-4359-be2c-6f906c70a495.jpeg?oldPrompt=A futuristic corporate headquarters at night, illuminated by neon lights and holographic projections, (mysterious atmosphere:1.3), sleek architecture with glass and metal surfaces, holographic displays showing abstract data visualizations, subtle Web3 elements integrated into the design, -[people, traditional office furniture, bright daylight]"),
statsIcon:withDefault(StringControl, "fa-solid fa-rocket"),
statsNumber:withDefault(StringControl, "3,560"),
statsText:withDefault(StringControl, "本月成功交付的项目数量"),
buttonTextAttr:withDefault(StringControl, "text=了解更多&link="),
}
export function Feature_BpxpN24XIuSTpuxLpxKaP({
  title = `Grow Your Design Studio`,
  description = `Enhance your creative projects with exclusive resources from our design studio. Tailored assets to bring your visions to life.`,
  imageUrl = `https://source.unsplash.com/800x1200/?studio,teamwork`,
  statsIcon = `fa-solid fa-message`,
  statsNumber = `2,984`,
  statsText = `Successful projects delivered this month`,
  buttonTextAttr = `text=Discover More&link=/`,
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex items-center flex-col md:flex-row md:gap-x-10 gap-y-5">
          <div className="relative w-full flex justify-center pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
            <AnimateInView type="rise">
              <div className="relative max-w-xs">
                <div className="overflow-hidden">
                  <EditableImg propKey={`imageUrl`} className="rounded-lg bg-slate-100 object-cover w-full h-full scale-150 aspect-[3/4]" src={imageUrl} alt={imageUrl} />
                </div>

                <div className="absolute bottom-0 -left-16 sm:right-0">
                  <div className="bg-yellow-300 dark:bg-slate-600">
                    <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                      <EditableIcon propKey={`statsIcon`} icon={statsIcon} iconLibrary={"FontAwesome"} className="text-3xl sm:text-5xl text-white" />
                      <span className="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl dark:text-white/90">
                        <EditableText propKey={`statsNumber`}>{statsNumber}</EditableText>
                      </span>
                      <span className="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base dark:text-slate-300">
                        <EditableText propKey={`statsText`}>{statsText}</EditableText>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>

          <div className="md:order-1">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50">
              <EditableText propKey={`title`}>{title}</EditableText>
            </h2>
            <p className="mt-4 max-w-xl text-base font-normal text-slate-700 dark:text-slate-300">
              <EditableText propKey={`description`}>{description}</EditableText>
            </p>

            <EditableButton className="inline-flex mt-6 items-center justify-center text-white bg-sky-500 font-medium border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500">
              <EditableText propKey={`buttonTextAttr`}>{buttonTextAttr}</EditableText>
            </EditableButton>
          </div>
        </div>
      </div>
    </section>
  );
}

  export function Feature_BpxpN24XIuSTpuxLpxKaP_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Feature')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Feature')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.imageUrl?.propertyView({ label: 'imageUrl' })}
{children.statsIcon?.propertyView({ label: 'statsIcon' })}
{children.statsNumber?.propertyView({ label: 'statsNumber' })}
{children.statsText?.propertyView({ label: 'statsText' })}
{children.buttonTextAttr?.propertyView({ label: 'buttonTextAttr' })}

        </Section>
    );
} 
export const Feature_BpxpN24XIuSTpuxLpxKaP_Builder = new UICompBuilder(Feature_BpxpN24XIuSTpuxLpxKaP_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Feature')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Feature_BpxpN24XIuSTpuxLpxKaP_PropertyViewFn)
  .build();


export const Feature_BpxpN24XIuSTpuxLpxKaP_ExposingConfigs = withExposingConfigs(Feature_BpxpN24XIuSTpuxLpxKaP_Builder, [])