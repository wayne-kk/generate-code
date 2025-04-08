
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
export const Contact_KjQt6AD0Yn4scjlJkgveq_childrenMap = {
type: withDefault(StringControl, "Contact_KjQt6AD0Yn4scjlJkgveq"),
offices:jsonArrayControl([{"title":"MetaMystic 上海办公室","description":"联系我们的上海团队，探索未来科技的无限可能。","address":"中国上海市静安区南京西路123号","email":"shanghai@metamystic.com","iconLocation":"fa-solid fa-location-dot","iconEmail":"fa-solid fa-envelope"},{"title":"MetaMystic 纽约办公室","description":"与我们的纽约团队一起开启Web3的创新旅程。","address":"4517 Washington Ave, New York, NY","email":"ny@metamystic.com","iconLocation":"fa-solid fa-location-dot","iconEmail":"fa-solid fa-envelope"},{"title":"MetaMystic 伦敦办公室","description":"加入伦敦团队，推动未来科技的发展。","address":"8502 Preston Rd, London, UK","email":"london@metamystic.com","iconLocation":"fa-solid fa-location-dot","iconEmail":"fa-solid fa-envelope"}]),
}
export function Contact_KjQt6AD0Yn4scjlJkgveq({
  offices = [
    {
      title: 'Design Studio London Office',
      description: 'Get in touch with our creative team in London.',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
      email: 'london@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
    {
      title: 'Design Studio New York Office',
      description: 'Discuss your project with our experts in New York.',
      address: '4517 Washington Ave. Manchester, Kentucky',
      email: 'ny@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
    {
      title: 'Design Studio Singapore Office',
      description: 'Start your journey with us in Singapore.',
      address: '3517 W. Gray St. Utica, Pennsylvania 57867',
      email: 'singapore@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
  ],
}) {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
          {offices.map((office, index) => (
            <div key={index}>
              <h3 className="TITLE-PRIMARY text-2xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey={`offices_${index}_title`}>{office.title}</EditableText>
              </h3>
              <p className="DESC mt-3 text-base font-normal text-slate-700 dark:text-white/70">
                <EditableText propKey={`offices_${index}_description`}>{office.description}</EditableText>
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center">
                  <EditableIcon propKey={`offices_${index}_iconLocation`} icon={office.iconLocation} iconLibrary="FontAwesome" className="text-sky-500 dark:text-white/70 text-base"/>
                  <span className="TEXT-CONTENT block ml-3 text-base font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`offices_${index}_address`}>{office.address}</EditableText>
                  </span>
                </div>

                <div className="flex items-center">
                  <EditableIcon propKey={`offices_${index}_iconEmail`} icon={office.iconEmail} iconLibrary="FontAwesome" className="text-sky-500 dark:text-white/70 text-base"/>
                  <span className="TEXT-CONTENT block ml-3 text-base font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`offices_${index}_email`}>{office.email}</EditableText>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  export function Contact_KjQt6AD0Yn4scjlJkgveq_PropertyViewFn(children: any) {
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
           {children.offices?.propertyView({ label: 'offices' })}

        </Section>
    );
} 
export const Contact_KjQt6AD0Yn4scjlJkgveq_Builder = new UICompBuilder(Contact_KjQt6AD0Yn4scjlJkgveq_childrenMap, (props: any) => {
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
}).setPropertyViewFn(Contact_KjQt6AD0Yn4scjlJkgveq_PropertyViewFn)
  .build();


export const Contact_KjQt6AD0Yn4scjlJkgveq_ExposingConfigs = withExposingConfigs(Contact_KjQt6AD0Yn4scjlJkgveq_Builder, [])