
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
export const Steps_UE6QtE9IXR79XDP4iwsn8_childrenMap = {
type: withDefault(StringControl, "Steps_UE6QtE9IXR79XDP4iwsn8"),
title:withDefault(StringControl, "合作流程"),
description:withDefault(StringControl, "从概念到实现，MetaMystic为您提供全面支持，确保每一步都充满创意和效率。"),
steps:jsonArrayControl([{"key":"concept","number":"01","subTitle":"概念设计","detail":"我们与您紧密合作，定义项目目标并制定创新的设计方案。"},{"key":"development","number":"02","subTitle":"技术开发","detail":"利用尖端技术实现设计方案，确保项目的高效实施。"},{"key":"launch","number":"03","subTitle":"项目发布","detail":"全面测试并优化您的项目，为成功发布做好准备。"}]),
imageUrl:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/4ad1d1a0-6414-4c87-918d-84e3d1bddf80.jpeg?oldPrompt=A futuristic digital interface, holographic flowchart with glowing nodes representing service steps, ethereal blue and purple lighting, sleek modern design, cyberpunk atmosphere, high-tech corporate environment, (clean and professional:1.3), [no people], [no text], [no clutter]"),
}
export function Steps_UE6QtE9IXR79XDP4iwsn8({
  title = `How it works?`,
  description = `Our design studio provides all the elements you need to create a stunning and professional website.`,
  steps = [
    {
      key: `design`,
      number: `01`,
      subTitle: `Start with a great design`,
      detail: `Our studio offers a variety of design blocks and components to kickstart your website creation.`,
    },
    {
      key: `content`,
      number: `02`,
      subTitle: `Add clever content areas`,
      detail: `Incorporate smart content areas to deliver your message effectively and engage visitors.`,
    },
    {
      key: `update`,
      number: `03`,
      subTitle: `Easily update your site`,
      detail: `With our user-friendly tools, updating and maintaining your site is simple and hassle-free.`,
    },
  ],
  imageUrl = `https://source.unsplash.com/1000x700/?pattern`,
}) {
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 py-10 mx-auto max-w-7xl flex flex-col gap-20">
        <AnimateInView type="rise">
          <div className=" grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>
            <EditableImg propKey="imageUrl" className="IMAGE object-cover w-full rounded-lg aspect-[2/1]" src={imageUrl} alt={imageUrl} />
          </div>
        </AnimateInView>

        <AnimateInView type="rise">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="w-full flex flex-row gap-8 md:flex-col">
                <div className="relative flex flex-col items-center md:flex-row">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-xl font-medium text-white bg-sky-500 rounded-full shrink-0">
                    <EditableText propKey={`steps_${index}_number`}>{item.number}</EditableText>
                  </div>
                  <div className="absolute top-16 w-px h-3/4 bg-black/10 dark:bg-white/10  md:h-px md:w-3/4 md:ml-8 md:left-10 md:top-6"></div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`steps_${index}_subTitle`}>{item.subTitle}</EditableText>
                  </h3>
                  <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
                    <EditableText propKey={`steps_${index}_detail`}>{item.detail}</EditableText>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
  export function Steps_UE6QtE9IXR79XDP4iwsn8_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Steps')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Steps')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.steps?.propertyView({ label: 'steps' })}
{children.imageUrl?.propertyView({ label: 'imageUrl' })}

        </Section>
    );
} 
export const Steps_UE6QtE9IXR79XDP4iwsn8_Builder = new UICompBuilder(Steps_UE6QtE9IXR79XDP4iwsn8_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Steps')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Steps_UE6QtE9IXR79XDP4iwsn8_PropertyViewFn)
  .build();


export const Steps_UE6QtE9IXR79XDP4iwsn8_ExposingConfigs = withExposingConfigs(Steps_UE6QtE9IXR79XDP4iwsn8_Builder, [])