
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
export const Gallery_t17t3rdBGmD344moFO2ut_childrenMap = {
type: withDefault(StringControl, "Gallery_t17t3rdBGmD344moFO2ut"),
title:withDefault(StringControl, "Anime Character Gallery"),
description:withDefault(StringControl, "Immerse yourself in the vibrant world of anime with a curated gallery of iconic heroes and villains."),
galleryInfo:jsonArrayControl([{"imageUrl":"https://images.unsplash.com/photo-1517414204284-fb7e98b2e255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjJ8&ixlib=rb-4.0.3&q=80&h=800&description=Books+to+read+for+exploring+the+world+differently%21","name":"Goku","category":"Dragon Ball"},{"imageUrl":"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=800&description=Asuka+Langley+action+figure+from+Evangelion%3A+3.0+You+Can+%28Not%29+Redo+Japanese+Anime","name":"Light Yagami","category":"Death Note"},{"imageUrl":"https://images.unsplash.com/photo-1560972550-aba3456b5564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=800&description=white+and+black+graffiti+on+white+wall","name":"Monkey D. Luffy","category":"One Piece"},{"imageUrl":"https://images.unsplash.com/photo-1542403764-c26462c4697e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=800&description=grey+sword+photography","name":"Edward Elric","category":"Fullmetal Alchemist"},{"imageUrl":"https://images.unsplash.com/photo-1547410295-500c6167d544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=800&description=black+pendant+on+palm","name":"Sailor Moon","category":"Sailor Moon"},{"imageUrl":"https://images.unsplash.com/photo-1518457032933-2da6b92f088e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=800&description=Legos+in+the+grass","name":"Shinji Ikari","category":"Evangelion"}]),
}
export function Gallery_t17t3rdBGmD344moFO2ut({
  title = `Design Studio Essentials`,
  description = `Enhance your creative environment with our curated selection of design studio essentials.`,
  galleryInfo = [
   {
     imageUrl: `https://source.unsplash.com/700x800/?design,studio`,
     name: `Creative Workspace`,
     category: `Studio Design`,
   },
   {
     imageUrl: `https://source.unsplash.com/700x800/?graphic,design`,
     name: `Graphic Tools`,
     category: `Graphic Design`,
   },
   {
     imageUrl: `https://source.unsplash.com/700x800/?artist,office`,
     name: `Artistic Space`,
     category: `Art Studio`,
   },
   {
     imageUrl: `https://source.unsplash.com/700x800/?interior,design`,
     name: `Modern Interior`,
     category: `Interior Design`,
   },
   {
     imageUrl: `https://source.unsplash.com/700x800/?architecture,office`,
     name: `Architect's Desk`,
     category: `Architecture`,
   },
  {
     imageUrl: `https://source.unsplash.com/700x800/?creative,tools`,
     name: `Creative Tools`,
     category: `Design Accessories`,
   },
 ]

}) {

 return (
   <section className="bg-white dark:bg-slate-800 px-6 py-24 md:px-8 md:py-32">
    <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
      <AnimateInView type="rise">
       <div className="w-full flex flex-col gap-6 text-center md:text-left">
         <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
           <EditableText propKey={"title"}>{title}</EditableText>
         </h2>
         <p className="DESC font-normal text-slate-700 dark:text-slate-400">
           <EditableText propKey={"description"}>
             {description}
           </EditableText>
         </p>
       </div>
       </AnimateInView>
     <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-6">
       {galleryInfo.map((info, index) => (
         <AnimateInView type="rise" key={index}>
           <div className="relative group">
             <div className="overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
               <EditableImg
                 propKey={`galleryInfo_${index}_imageUrl`}
                 className="IMAGE object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110 aspect-[3/4]"
                 src={info.imageUrl}
                 alt={info.name}
               />
               <div className="absolute z-20  flex flex-col justify-center items-center">
                 <h3 className="TITLE-SECONDARY text-base font-bold text-white">
                   <EditableText propKey={`galleryInfo_${index}_name`}>{info.name}</EditableText>
                 </h3>
                 <p className="DESC text-sm font-medium text-gray-300">
                   <EditableText propKey={`galleryInfo_${index}_category`}>{info.category}</EditableText>
                 </p>
               </div>
               <div className="absolute z-10 inset-0 bg-black/20  pointer-events-none"></div>
             </div>
           </div>
         </AnimateInView>
       ))}
      </div>
   </div>   
   </section>
 )
}
  export function Gallery_t17t3rdBGmD344moFO2ut_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Gallery')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Gallery')[value].exposingConfigs);
              }}
            />
           {children.title?.propertyView({ label: 'title' })}
{children.description?.propertyView({ label: 'description' })}
{children.galleryInfo?.propertyView({ label: 'galleryInfo' })}

        </Section>
    );
} 
export const Gallery_t17t3rdBGmD344moFO2ut_Builder = new UICompBuilder(Gallery_t17t3rdBGmD344moFO2ut_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Gallery')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Gallery_t17t3rdBGmD344moFO2ut_PropertyViewFn)
  .build();


export const Gallery_t17t3rdBGmD344moFO2ut_ExposingConfigs = withExposingConfigs(Gallery_t17t3rdBGmD344moFO2ut_Builder, [])