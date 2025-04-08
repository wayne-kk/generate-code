
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
export const Hero_saHjHP4mB1u9L19ka8rTY_childrenMap = {
type: withDefault(StringControl, "Hero_saHjHP4mB1u9L19ka8rTY"),
title:withDefault(StringControl, "Dive into the World of Anime"),
description:withDefault(StringControl, "Experience the magic of anime with stunning visuals, unforgettable characters, and captivating stories that inspire."),
stats:jsonArrayControl([{"stat":"50M+","text":"Anime Fans Worldwide"},{"stat":"10K+","text":"Iconic Characters"},{"stat":"500+","text":"Anime Works"}]),
heroImage:withDefault(StringControl, "https://images.unsplash.com/photo-1608804375269-d077e2a2adaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY0OTB8&ixlib=rb-4.0.3&q=80&w=1200&description=person+writing+on+white+paper"),
primaryButton:withDefault(StringControl, "text=Explore Now&link="),
secondaryButton:withDefault(StringControl, "text=Learn More&link="),
secondaryButtonIcon:withDefault(StringControl, "fa-solid fa-arrow-right"),
}
export function Hero_saHjHP4mB1u9L19ka8rTY({title="Dive into the World of Anime",description="Experience the magic of anime with stunning visuals, unforgettable characters, and captivating stories that inspire.",stats=[{"stat":"50M+","text":"Anime Fans Worldwide"},{"stat":"10K+","text":"Iconic Characters"},{"stat":"500+","text":"Anime Works"}],heroImage="https://images.unsplash.com/photo-1608804375269-d077e2a2adaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY0OTB8&ixlib=rb-4.0.3&q=80&w=1200&description=person+writing+on+white+paper",primaryButton="text=Explore Now&link=",secondaryButton="text=Learn More&link=",secondaryButtonIcon="fa-solid fa-arrow-right"}) {
  return (
    <section className="relative px-6 py-24 md:px-8 md:py-32 bg-[#fff5e6] dark:bg-[#1a1a1a]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .sketch-border {
            position: relative;
          }
          .sketch-border::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border: 3px solid #2d3436;
            border-radius: inherit;
            transform: rotate(-2deg);
          }
          .sketch-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23dfe6e9' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        `}
      </style>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <div className="w-full flex flex-col gap-16 md:gap-20">
          <div className="w-full flex flex-col gap-6">
            <EditableText 
              propKey="title" 
              className="text-6xl font-bold text-[#2d3436] dark:text-[#dfe6e9] font-comic leading-tight tracking-wide"
            >
              {title}
            </EditableText>
            <EditableText 
              propKey="description" 
              className="text-lg text-[#636e72] dark:text-[#b2bec3] font-comic leading-relaxed"
            >
              {description}
            </EditableText>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-full flex items-center gap-6 flex-wrap">
              <EditableButton className="w-fit text-[#2d3436] dark:text-[#dfe6e9] whitespace-nowrap px-8 py-4 rounded-xl bg-[#ffeaa7] hover:bg-[#fdcb6e] transform hover:-translate-y-1 transition-all duration-300 font-comic text-lg sketch-border">
                <EditableText propKey="primaryButton">{primaryButton}</EditableText>
              </EditableButton>
              <EditableButton className="w-fit flex items-center gap-2 group text-[#2d3436] dark:text-[#dfe6e9] whitespace-nowrap px-4 py-3 hover:text-[#00b894] dark:hover:text-[#00cec9] font-comic text-lg">
                <EditableText propKey="secondaryButton">{secondaryButton}</EditableText>
                <EditableIcon 
                  propKey="secondaryButtonIcon" 
                  icon={secondaryButtonIcon} 
                  iconLibrary="FontAwesome" 
                  className="group-hover:translate-x-1 transition-all duration-300" 
                />
              </EditableButton>
            </div>

            <div className="w-full flex flex-wrap items-center gap-6">
              {stats.map((item, index) => (
                <div key={index} className="flex-1 min-w-[200px] flex flex-col gap-1 sketch-border bg-white dark:bg-[#2d3436] p-6 rounded-lg transform hover:rotate-3 transition-all duration-300 hover:scale-105">
                  <EditableText 
                    propKey={`stats_${index}_stat`} 
                    className="text-3xl font-extrabold text-[#2d3436] dark:text-[#dfe6e9] font-comic"
                  >
                    {item.stat}
                  </EditableText>
                  <EditableText 
                    propKey={`stats_${index}_text`} 
                    className="text-[#636e72] dark:text-[#b2bec3] font-comic"
                  >
                    {item.text}
                  </EditableText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <EditableImg 
          propKey="heroImage" 
          src={heroImage} 
          className="w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-[2rem] sketch-border transform hover:scale-105 transition-all duration-500 filter saturate-[1.2] contrast-[1.1] shadow-[8px_8px_0px_#2d3436] animate-[float_6s_ease-in-out_infinite]"
        />
      </div>

      <div className="absolute inset-0 sketch-pattern opacity-50 pointer-events-none -z-10" />
    </section>
  );
}
  export function Hero_saHjHP4mB1u9L19ka8rTY_PropertyViewFn(children: any) {
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
{children.stats?.propertyView({ label: 'stats' })}
{children.heroImage?.propertyView({ label: 'heroImage' })}
{children.primaryButton?.propertyView({ label: 'primaryButton' })}
{children.secondaryButton?.propertyView({ label: 'secondaryButton' })}
{children.secondaryButtonIcon?.propertyView({ label: 'secondaryButtonIcon' })}

        </Section>
    );
} 
export const Hero_saHjHP4mB1u9L19ka8rTY_Builder = new UICompBuilder(Hero_saHjHP4mB1u9L19ka8rTY_childrenMap, (props: any) => {
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
}).setPropertyViewFn(Hero_saHjHP4mB1u9L19ka8rTY_PropertyViewFn)
  .build();


export const Hero_saHjHP4mB1u9L19ka8rTY_ExposingConfigs = withExposingConfigs(Hero_saHjHP4mB1u9L19ka8rTY_Builder, [])