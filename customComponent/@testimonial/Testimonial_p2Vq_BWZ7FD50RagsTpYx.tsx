
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
export const Testimonial_p2Vq_BWZ7FD50RagsTpYx_childrenMap = {
type: withDefault(StringControl, "Testimonial_p2Vq_BWZ7FD50RagsTpYx"),
testimonial:withDefault(StringControl, "作为MetaMystic的合作伙伴，我深刻感受到了他们团队的专业性和创新能力。每一个项目都充满了未来科技的魅力。"),
author:withDefault(StringControl, "张伟"),
position:withDefault(StringControl, "区块链技术专家"),
imageUrl:withDefault(StringControl, "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/77352d62-b69d-4bc0-86d3-cde3f1c4e648.jpeg?oldPrompt=a futuristic and sleek digital interface displaying glowing customer testimonials in a sci-fi style, holographic projection of positive feedback, a mysterious and modern corporate environment, sleek metallic surfaces, glowing neon accents, a sense of trust and confidence, no human figures, no distracting elements, [negative: blurry, low quality, outdated]"),
}
export function Testimonial_p2Vq_BWZ7FD50RagsTpYx({
  testimonial = `As the Project Manager at the design studio's official website, I had the privilege of collaborating with Jenny Wilson, whose talent and expertise greatly contributed to the success of our project. Her exceptional ability to coordinate and manage teams left a lasting impression.`,
  author = `Jenny Wilson`,
  position = `UX Designer at Microsoft`,
  imageUrl = `https://source.unsplash.com/800x800/?avatar`,
}) {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 ">
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col items-center justify-center gap-16 md:flex-row">
        <AnimateInView type="rise">
          <div className="relative w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 dark:bg-slate-700 rounded-full -bottom-2 -right-1"></div>
            <EditableImg propKey="imageUrl" className="IMAGE relative object-cover w-48 h-48 rounded-full bg-slate-100 aspect-[1/1]" src={imageUrl} alt={imageUrl} />
          </div>
        </AnimateInView>

        <div className="w-full h-full flex flex-col justify-between gap-6">
          <AnimateInView type="rise">
            <p className="DESC text-xl text-slate-900 dark:text-white">
              <EditableText propKey="testimonial">{testimonial}</EditableText>
            </p>
          </AnimateInView>
          <AnimateInView type="rise">
            <div className="flex flex-col gap-1.5">
              <p className="TITLE-PRIMARY text-lg font-semibold text-slate-900 dark:text-white">
                <EditableText propKey="author">{author}</EditableText>
              </p>
              <p className="TITLE-SECONDARY text-base text-slate-600 dark:text-slate-400">
                <EditableText propKey="position">{position}</EditableText>
              </p>
            </div>
          </AnimateInView>
        </div>

      </div>
    </section>
  );
}

  export function Testimonial_p2Vq_BWZ7FD50RagsTpYx_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Testimonial')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Testimonial')[value].exposingConfigs);
              }}
            />
           {children.testimonial?.propertyView({ label: 'testimonial' })}
{children.author?.propertyView({ label: 'author' })}
{children.position?.propertyView({ label: 'position' })}
{children.imageUrl?.propertyView({ label: 'imageUrl' })}

        </Section>
    );
} 
export const Testimonial_p2Vq_BWZ7FD50RagsTpYx_Builder = new UICompBuilder(Testimonial_p2Vq_BWZ7FD50RagsTpYx_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Testimonial')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Testimonial_p2Vq_BWZ7FD50RagsTpYx_PropertyViewFn)
  .build();


export const Testimonial_p2Vq_BWZ7FD50RagsTpYx_ExposingConfigs = withExposingConfigs(Testimonial_p2Vq_BWZ7FD50RagsTpYx_Builder, [])