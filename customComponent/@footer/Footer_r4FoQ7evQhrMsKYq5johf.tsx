
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
export const Footer_r4FoQ7evQhrMsKYq5johf_childrenMap = {
type: withDefault(StringControl, "Footer_r4FoQ7evQhrMsKYq5johf"),
navigationItems:jsonArrayControl([{"textAttr":"text=关于我们&link=about-us"},{"textAttr":"text=服务与产品&link=services-products"},{"textAttr":"text=最新动态&link=blog"},{"textAttr":"text=联系我们&link=contact"}]),
socialMediaItems:jsonArrayControl([{"icon":"fa-brands fa-twitter","href":"https://twitter.com/metamystic"},{"icon":"fa-brands fa-facebook-f","href":"https://facebook.com/metamystic"},{"icon":"fa-brands fa-instagram","href":"https://instagram.com/metamystic"},{"icon":"fa-brands fa-github","href":"https://github.com/metamystic"}]),
copyrightText:withDefault(StringControl, "© MetaMystic 2023, 神秘与未来的交汇之地"),
}
export function Footer_r4FoQ7evQhrMsKYq5johf({
  navigationItems = [
    { textAttr: "text=About Us&link=/"},
    { textAttr: "text=Our Services&link=/"},
    { textAttr: "text=Projects&link=/"},
    { textAttr: "text=Careers&link=/"},
  ],
  socialMediaItems = [
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-instagram", href: "#" },
    { icon: "fa-brands fa-github", href: "#" },
  ],
  copyrightText = "© Design Studio 2023, All Rights Reserved",
}) {
  return (
    <section className="bg-black px-6 py-20 md:px-8">
      <AnimateInView type="rise">
      <div className=" mx-auto max-w-7xl flex flex-col  gap-16">
            <ul className="w-full flex items-center justify-center gap-8">
              {navigationItems.map((item,index) => (
                <li key={item.textAttr}>
                  <EditableButton
                    className="TEXT-LINK font-semibold  text-slate-50  hover:text-sky-400  dark:hover:text-sky-400 focus:text-sky-500 dark:focus:text-sky-500"
                  >
                    <EditableText  propKey={`navigationItems_${index}_textAttr`}>{item.textAttr}</EditableText>
                  </EditableButton>
                </li>
              ))}
            </ul>


          <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <ul className="flex items-center gap-8 ">
                {socialMediaItems.map((item,index) => (
                  <li key={item.icon} href={item.href}>
                    <EditableButton
                      className="TEXT-LINK text-slate-50 hover:text-sky-400 dark:hover:text-sky-400  dark:focus:text-slate-500"
                    >
                      <EditableIcon  propKey={`socialMediaItems_${index}_icon`} icon={item.icon} iconLibrary={"FontAwesome"} className="text-lg"/>
                    </EditableButton>
                  </li>
                ))}
              </ul>

            </div>
            <p className="text-sm  lg:mt-0 text-white/60">
              <EditableText propKey={"copyrightText"}>{copyrightText}</EditableText>
            </p>

          </div>
      </div>
      </AnimateInView>
    </section>
  )
}
  export function Footer_r4FoQ7evQhrMsKYq5johf_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Footer')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Footer')[value].exposingConfigs);
              }}
            />
           {children.navigationItems?.propertyView({ label: 'navigationItems' })}
{children.socialMediaItems?.propertyView({ label: 'socialMediaItems' })}
{children.copyrightText?.propertyView({ label: 'copyrightText' })}

        </Section>
    );
} 
export const Footer_r4FoQ7evQhrMsKYq5johf_Builder = new UICompBuilder(Footer_r4FoQ7evQhrMsKYq5johf_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Footer')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Footer_r4FoQ7evQhrMsKYq5johf_PropertyViewFn)
  .build();


export const Footer_r4FoQ7evQhrMsKYq5johf_ExposingConfigs = withExposingConfigs(Footer_r4FoQ7evQhrMsKYq5johf_Builder, [])