
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
export const Contact_KRn_lLT1XQ614D6KX3ZwI_childrenMap = {
type: withDefault(StringControl, "Contact_KRn_lLT1XQ614D6KX3ZwI"),
title:withDefault(StringControl, "Connect with Us"),
description:withDefault(StringControl, "Have questions or feedback? Reach out to us and explore how we can enhance your anime experience."),
contactOptions:jsonArrayControl([{"id":1,"icon":"fa-solid fa-message","title":"General Inquiries","description":"Get in touch with our team for any questions or suggestions.","textAttr":"text=Contact Us&link=","buttonIcon":"fa-solid fa-arrow-right"},{"id":2,"icon":"fa-solid fa-bug","title":"Technical Support","description":"Encountering issues? Let us assist you with technical support.","textAttr":"text=Get Help&link=","buttonIcon":"fa-solid fa-arrow-right"},{"id":3,"icon":"fa-solid fa-desktop","title":"Collaboration Opportunities","description":"Partner with us on exciting anime projects and initiatives.","textAttr":"text=Collaborate&link=","buttonIcon":"fa-solid fa-arrow-right"}]),
}
export function Contact_KRn_lLT1XQ614D6KX3ZwI({
  title = 'Get in Touch',
  description = 'Explore how our design solutions can empower your creativity.',
  contactOptions = [
    {
      id: 1,
      icon: 'fa-solid fa-message',
      title: 'Design Consultation',
      description: 'Discuss your project ideas and how we can bring them to life.',
      textAttr: 'text=Start a conversation&link=/',
      buttonIcon: 'fa-solid fa-arrow-right',
    },
    {
      id: 2,
      icon: 'fa-solid fa-bug',
      title: 'Technical Support',
      description: 'Get help with any technical issues or inquiries.',
      textAttr: 'text=Get Support&link=/',
      buttonIcon: 'fa-solid fa-arrow-right',
    },
    {
      id: 3,
      icon: 'fa-solid fa-desktop',
      title: 'Project Collaboration',
      description: 'Collaborate with us on your upcoming design projects.',
      textAttr: 'text=Collaborate now&link=/',
      buttonIcon: 'fa-solid fa-arrow-right',
    },
  ],
}) {
  return (
    <div className="isolate bg-white px-6 py-16 sm:py-20 lg:px-8 dark:bg-slate-800">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl dark:text-white/80">
          <EditableText propKey="title">{title}</EditableText>
        </h2>
        <p className="DESC mt-2 text-lg leading-8 text-slate-700 dark:text-white/60">
          <EditableText propKey="description">{description}</EditableText>
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        {contactOptions.map((option, index) => (
          <AnimateInView key={option.id} type="rise">
            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500">
                <EditableIcon propKey={`contactOptions_${index}_icon`} icon={option.icon} iconLibrary="FontAwesome" className="text-lg text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-white/80">
                  <EditableText propKey={`contactOptions_${index}_title`}>{option.title}</EditableText>
                </h3>
                <p className="DESC mt-2 leading-7 text-slate-600 dark:text-white/60">
                  <EditableText propKey={`contactOptions_${index}_description`}>{option.description}</EditableText>
                </p>
                <p className="mt-4">
                  <EditableButton className="TEXT-LINK text-sm flex items-center gap-1 group font-semibold leading-6 text-sky-400 dark:text-sky-400 dark:hover:text-white">
                    <EditableText propKey={`contactOptions_${index}_textAttr`}>{option.textAttr}</EditableText>
                    <EditableIcon propKey={`contactOptions_${index}_buttonIcon`} icon={option.buttonIcon} className="group-hover:translate-x-1 transition-all duration-300" />
                  </EditableButton>
                </p>
              </div>
            </div>
          </AnimateInView>
        ))}
      </div>
    </div>
  );
}

  export function Contact_KRn_lLT1XQ614D6KX3ZwI_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Contact')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Contact')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.contactOptions?.propertyView({ label: 'contactOptions' })}

        </Section>
    );
} 
export const Contact_KRn_lLT1XQ614D6KX3ZwI_Builder = new UICompBuilder(Contact_KRn_lLT1XQ614D6KX3ZwI_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Contact')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Contact_KRn_lLT1XQ614D6KX3ZwI_PropertyViewFn)
  .build();


export const Contact_KRn_lLT1XQ614D6KX3ZwI_ExposingConfigs = withExposingConfigs(Contact_KRn_lLT1XQ614D6KX3ZwI_Builder, [])