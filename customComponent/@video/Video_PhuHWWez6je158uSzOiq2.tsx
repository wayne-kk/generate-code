
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
export const Video_PhuHWWez6je158uSzOiq2_childrenMap = {
type: withDefault(StringControl, "Video_PhuHWWez6je158uSzOiq2"),
title:withDefault(StringControl, "Anime Highlights & Trailers"),
description:withDefault(StringControl, "Catch a glimpse of the latest anime releases and relive the most thrilling moments from your favorite series."),
videosUrl:withDefault(StringControl, "https://www.youtube.com/embed/ti6r17_TWf4?si=KjhpO48V1DYzbp5o"),
}
export function Video_PhuHWWez6je158uSzOiq2({
  title = `Explore Our Design Studio Work`,
  description = `Our team believes in delivering remarkable designs that can change the world. Explore some of our latest and most innovative work below.`,
  videosUrl = `https://www.youtube.com/embed/ti6r17_TWf4?si=KjhpO48V1DYzbp5o`
}) {
  return (
    <div className={`w-full dark:bg-slate-800`}>
      <div className={`max-w-7xl mx-auto py-20 px-4`}>
        <div className={`flex w-full flex-col md:flex-row gap-10 items-center`}>
          <div className="w-full flex flex-col gap-6 md:w-1/2">
            <h1 className={`TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white`}>
              <EditableText propKey={`title`}>{title}</EditableText>
            </h1>
            <p className="DESC text-base font-normal text-slate-700 dark:text-white/70">
              <EditableText propKey={`description`}>{description}</EditableText>
            </p>
          </div>
          <div className={`w-full md:w-1/2 mt-6 md:mt-0`}>
            <AnimateInView type="rise">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-video">
                  <iframe
                    className={`IMAGE w-full h-full`}
                    src={videosUrl}
                    title="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  );
}
  export function Video_PhuHWWez6je158uSzOiq2_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Video')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Video')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.videosUrl?.propertyView({ label: 'videosUrl' })}

        </Section>
    );
} 
export const Video_PhuHWWez6je158uSzOiq2_Builder = new UICompBuilder(Video_PhuHWWez6je158uSzOiq2_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Video')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Video_PhuHWWez6je158uSzOiq2_PropertyViewFn)
  .build();


export const Video_PhuHWWez6je158uSzOiq2_ExposingConfigs = withExposingConfigs(Video_PhuHWWez6je158uSzOiq2_Builder, [])