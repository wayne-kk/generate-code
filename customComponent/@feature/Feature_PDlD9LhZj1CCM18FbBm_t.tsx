
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
export const Feature_PDlD9LhZj1CCM18FbBm_t_childrenMap = {
type: withDefault(StringControl, "Feature_PDlD9LhZj1CCM18FbBm_t"),
title:withDefault(StringControl, "Discover Iconic Anime Works"),
creativeBg01:withDefault(StringControl, "https://images.unsplash.com/photo-1516641051054-9df6a1aad654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=1200&description=MAYGAS"),
creative01:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/80f653e6-f031-43a8-b2ed-5595afc2a814.jpeg?oldPrompt=Iconic anime characters in dynamic poses, showcasing their unique personalities and styles, in a vibrant anime world setting, surrounded by elements that represent their respective series, with a focus on detailed character design and expressive emotions, (highly detailed and intricate artwork:1.3), [negative prompt: blurry, low quality, distorted features, overly saturated colors]"),
name1:withDefault(StringControl, "Naruto Uzumaki"),
username1:withDefault(StringControl, "@Hokage"),
creativeBg02:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/9a871ecb-3ec0-42be-9c0a-00a914cf6e45.jpeg?oldPrompt=Anime character in dynamic pose, surrounded by iconic anime scenes, showcasing unique appeal and artistry, detailed background with subtle warm tones, -low quality, -blurry, -distorted"),
creative02:withDefault(StringControl, "https://images.unsplash.com/photo-1697715841744-9c24df04dacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=1200&description=NIER+AUTOMATA"),
name2:withDefault(StringControl, "Sakura Haruno"),
username2:withDefault(StringControl, "@MedicNinja"),
creativeBg03:withDefault(StringControl, "https://images.unsplash.com/photo-1579541591970-e5780dc6b31f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=1200&description=Stonehenge%2C+1845%0D%0A+by+James+Ward"),
creative03:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/fca56fdc-897e-451d-9efc-f7c21ef86a76.jpeg?oldPrompt=Anime characters in dynamic poses, surrounded by vibrant energy effects, showcasing their unique abilities and personalities, with a focus on detailed costume design and expressive facial features, set in a dramatic scene that highlights their iconic status, (epic:1.3), (highly detailed:1.2), (cinematic lighting), -blurry, -low quality, -oversaturated colors"),
name3:withDefault(StringControl, "Sasuke Uchiha"),
username3:withDefault(StringControl, "@Avenger"),
creativeBg04:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/e2b3d820-8adb-4da2-969e-91c0f6b11b80.jpeg?oldPrompt=anime characters in dynamic poses, (highly detailed character designs:1.3), vibrant yet soft color palette, [background with subtle anime-inspired elements], (expressive facial features:1.2), [cinematic composition], - low quality, - blurry, - excessive text"),
creative04:withDefault(StringControl, "https://images.unsplash.com/photo-1590610092461-8e6237d6bd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=1200&description=Anime+cloud"),
name4:withDefault(StringControl, "Kakashi Hatake"),
username4:withDefault(StringControl, "@CopyNinja"),
creativesImage:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/77bae8f1-400e-45ad-887e-0593168c1d32.jpeg?oldPrompt=anime character in dynamic pose, showcasing unique costume design and expressive features, surrounded by elements of their iconic story world, (highly detailed:1.3), - blurry background, - low quality, - text overlay"),
subHeader:withDefault(StringControl, "Celebrating Anime Legends"),
description:withDefault(StringControl, "Explore the artistry and storytelling of the most beloved anime works that have captivated audiences around the globe."),
primaryButton:jsonObjectControl({"textAttr":"text=Join the Journey&link="}),
}
export function Feature_PDlD9LhZj1CCM18FbBm_t({
  title = "Join over 2M creatives from around the world",
  creativeBg01 = "https://source.unsplash.com/random/1200x600/?texture,background",
  creative01 = "https://source.unsplash.com/random/1200x600/?portrait,people",
  name1 = "Ethan",
  username1 = "@Detective",
  creativeBg02 = "https://source.unsplash.com/random/1200x600/?texture,wall",
  creative02 = "https://source.unsplash.com/random/1200x600/?portrait,artist",
  name2 = "Olivia",
  username2 = "@Astronaut",
  creativeBg03 = "https://source.unsplash.com/random/1200x600/?texture,art",
  creative03 = "https://source.unsplash.com/random/1200x600/?portrait,creative",
  name3 = "Noah",
  username3 = "@Chef",
  creativeBg04 = "https://source.unsplash.com/random/1200x600/?texture,design",
  creative04 = "https://source.unsplash.com/random/1200x600/?portrait,designer",
  name4 = "Emma",
  username4 = "@Pilot",
  creativesImage = "https://source.unsplash.com/random/1200x600/?community,creatives",
  subHeader = "More than a community",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
  primaryButton = {
    textAttr: "text=Join The Community&link=/",
  }
}) {
  return (
      <section className="w-full bg-white dark:bg-slate-900 px-6 py-24 md:px-8 md:py-32">
        <AnimateInView>
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <EditableText propKey={"title"} className="TITLE-PRIMARY text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">{title}</EditableText>
          </div>
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            <div className="md:w-1/2">
              <div className="flex space-x-6">
                <div className="w-1/2 space-y-6">
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg01"} src={creativeBg01} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative01"} src={creative01} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name1"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name1}</EditableText>
                        <EditableText propKey={"username1"} className="TEXT-CONTENT text-sm text-slate-500">{username1}</EditableText>
                      </div>

                    </div>
                  </div>
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg02"} src={creativeBg02} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative02"} src={creative02} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name2"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name2}</EditableText>
                        <EditableText propKey={"username2"} className="TEXT-CONTENT text-sm text-slate-500">{username2}</EditableText>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-1/2 mt-6 space-y-6">
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg03"} src={creativeBg03} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative03"} src={creative03} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name3"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name3}</EditableText>
                        <EditableText propKey={"username3"} className="TEXT-CONTENT text-sm text-slate-500">{username3}</EditableText>
                      </div>

                    </div>
                  </div>
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg04"} src={creativeBg04} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className=" px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative04"} src={creative04} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name4"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name4}</EditableText>
                        <EditableText propKey={"username4"} className="TEXT-CONTENT text-sm text-slate-500">{username4}</EditableText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="w-full flex flex-col items-center gap-6 text-center md:text-left md:items-start">
                <EditableImg propKey={"creativesImage"} src={creativesImage} className="IMAGE w-full h-auto aspect-[4/3] object-cover mb-12"/>
                <EditableText propKey={"subHeader"} className="TITLE-SECONDARY text-4xl font-semibold text-slate-900 dark:text-slate-50">{subHeader}</EditableText>
                <EditableText propKey={"description"} className="DESC text-xl text-slate-600 dark:text-slate-400">{description}</EditableText>
                <EditableButton className="BTN-PRIMARY w-fit text-white bg-sky-500 py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-sky-600 mt-6">
                    <EditableText propKey={"primaryButton_textAttr"}>{primaryButton.textAttr}</EditableText>
                </EditableButton>
              </div>
            </div>
          </div>
        </div>
        </AnimateInView>
      </section>
  )
}

  export function Feature_PDlD9LhZj1CCM18FbBm_t_PropertyViewFn(children: any) {
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
{children.creativeBg01?.propertyView({ label: 'creativeBg01' })}
{children.creative01?.propertyView({ label: 'creative01' })}
{children.name1?.propertyView({ label: 'name1' })}
{children.username1?.propertyView({ label: 'username1' })}
{children.creativeBg02?.propertyView({ label: 'creativeBg02' })}
{children.creative02?.propertyView({ label: 'creative02' })}
{children.name2?.propertyView({ label: 'name2' })}
{children.username2?.propertyView({ label: 'username2' })}
{children.creativeBg03?.propertyView({ label: 'creativeBg03' })}
{children.creative03?.propertyView({ label: 'creative03' })}
{children.name3?.propertyView({ label: 'name3' })}
{children.username3?.propertyView({ label: 'username3' })}
{children.creativeBg04?.propertyView({ label: 'creativeBg04' })}
{children.creative04?.propertyView({ label: 'creative04' })}
{children.name4?.propertyView({ label: 'name4' })}
{children.username4?.propertyView({ label: 'username4' })}
{children.creativesImage?.propertyView({ label: 'creativesImage' })}
{children.subHeader?.propertyView({ label: 'subHeader' })}
{children.description?.propertyView({ label: 'description' })}
{children.primaryButton?.propertyView({ label: 'primaryButton' })}

        </Section>
    );
} 
export const Feature_PDlD9LhZj1CCM18FbBm_t_Builder = new UICompBuilder(Feature_PDlD9LhZj1CCM18FbBm_t_childrenMap, (props: any) => {
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
}).setPropertyViewFn(Feature_PDlD9LhZj1CCM18FbBm_t_PropertyViewFn)
  .build();


export const Feature_PDlD9LhZj1CCM18FbBm_t_ExposingConfigs = withExposingConfigs(Feature_PDlD9LhZj1CCM18FbBm_t_Builder, [])