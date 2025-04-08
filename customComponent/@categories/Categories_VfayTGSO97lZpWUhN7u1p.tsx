
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
export const Categories_VfayTGSO97lZpWUhN7u1p_childrenMap = {
type: withDefault(StringControl, "Categories_VfayTGSO97lZpWUhN7u1p"),
categories:jsonArrayControl([{"name":"Top Anime Series","products":"120 Titles","imageUrl":"https://images.unsplash.com/photo-1712642724142-48e16e65291e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY3MzF8&ixlib=rb-4.0.3&q=80&w=800&description=a+body+of+water+surrounded+by+lots+of+trees","key":"anime-series"},{"name":"Iconic Characters","products":"85 Characters","imageUrl":"https://images.unsplash.com/photo-1675623262783-1b2081faf118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY3MzF8&ixlib=rb-4.0.3&q=80&w=800&description=Hands+holding+a+tablet+with+a+game+%22Yu-Gi-Oh%21+Cross+Duel%22+playing+on+the+display+%7C%7C+I+decided+to+join+in+Konami%27s+%28Yu-Gi-Oh%21+Card+Game+25th+Anniversary%29+fun+%26+create+a+series+of+photos+featuring+the+latest+Yu-Gi-Oh+games%2Fapps+%7C%7C+%F0%9F%93%B8+Photo+by%3A+Jovan+Vasiljevi%C4%87","key":"iconic-characters"},{"name":"Video Highlights","products":"50 Clips","imageUrl":"https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY3MzF8&ixlib=rb-4.0.3&q=80&w=800&description=Anime+feels","key":"video-highlights"},{"name":"Upcoming Releases","products":"25 Titles","imageUrl":"https://images.unsplash.com/photo-1599083481037-679e78b4bf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjY3MzF8&ixlib=rb-4.0.3&q=80&w=800&description=Russian+teen+cosplay","key":"upcoming-releases"}]),
title:withDefault(StringControl, "Dive into the Anime Universe"),
subtitle:withDefault(StringControl, "Explore series, characters, and highlights from the world of anime"),
buttonTextAttr:withDefault(StringControl, "text=Browse All Sections&link=/works"),
buttonIcon:withDefault(StringControl, "fa-solid fa-arrow-right"),
}
export function Categories_VfayTGSO97lZpWUhN7u1p({
  categories = [
    {
      name: 'Innovative Designs',
      products: '2,345 Products',
      imageUrl: 'https://source.unsplash.com/800x700/?innovative,design',
      key: 'design',
    },
    {
      name: 'Ergonomic Chairs',
      products: '1,234 Products',
      imageUrl: 'https://source.unsplash.com/800x700/?ergonomic,chairs',
      key: 'chairs',
    },
    {
      name: 'Modern Desks',
      products: '789 Products',
      imageUrl: 'https://source.unsplash.com/800x700/?modern,desks',
      key: 'desks',
    },
    {
      name: 'Stylish Lamps',
      products: '567 Products',
      imageUrl: 'https://source.unsplash.com/800x700/?stylish,lamps',
      key: 'lamps',
    },
  ],
  title = 'Explore Our Categories',
  subtitle = 'Discover unique pieces to accent your workspace',
  buttonTextAttr = 'text=Browse All Categories&link=/',
  buttonIcon = 'fa-solid fa-arrow-right',
}) {
  return (
    <div className="w-full  dark:bg-slate-800 py-14">
      <section className="py-10 px-4 mx-auto max-w-7xl ">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-bold text-slate-900 dark:text-white">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="TITLE-SECONDARY mt-6 text-base font-normal text-slate-700 dark:text-white/80">
            <EditableText propKey="subtitle">{subtitle}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8 w-full h-full text-center sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:mt-12">
          {categories.map((category, index) => (
            <AnimateInView key={category.key} type="rise">
              <div className="relative w-full h-full group overflow-hidden rounded-lg">
                <div className="absolute w-full h-full inset-0 ">
                  <EditableImg
                    propKey={`categories_${index}_imageUrl`}
                    className="IMAGE object-cover w-full h-full aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-900"
                    src={`${category.imageUrl}`}
                    alt={category.imageUrl}
                  />
                </div>

                <div className="relative p-6">
                  <span className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-bold text-gray-900 bg-white rounded opacity-100 group-hover:opacity-0">
                    <EditableText propKey={`categories_${index}_name`}>{category.name}</EditableText>
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black transition-all duration-300 opacity-0 group-hover:opacity-80">
                  <div className="flex flex-col items-center">

                    <span className="mt-1 text-lg font-bold text-white">
                      <EditableButton className="TEXT-LINK">
                        <EditableText propKey={`categories_${index}_name`}>{category.name}</EditableText>
                      </EditableButton>
                    </span>
                    <span className="DESC mt-1.5 text-sm font-medium text-gray-200">
                      <EditableText propKey={`categories_${index}_products`}>{category.products}</EditableText>
                    </span>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView>
          <div className="mt-12 text-center">
            <EditableButton
              className="BTN-PRIMARY inline-flex gap-1 group text-sky-400 items-center justify-center px-6 py-2 text-sm font-medium  dark:text-sky-300 border border-sky-400 dark:border-sky-300 rounded-lg  dark:bg-slate-800 transition-colors duration-500"
            >
              <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
              <EditableIcon propKey="buttonIcon" icon={buttonIcon} className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
        </AnimateInView>
      </section>
    </div>
  );
}

  export function Categories_VfayTGSO97lZpWUhN7u1p_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Categories')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Categories')[value].exposingConfigs);
              }}
            />
           {children.categories?.propertyView({ label: 'categories' })}
{children.title?.propertyView({ label: 'title' })}
{children.subtitle?.propertyView({ label: 'subtitle' })}
{children.buttonTextAttr?.propertyView({ label: 'buttonTextAttr' })}
{children.buttonIcon?.propertyView({ label: 'buttonIcon' })}

        </Section>
    );
} 
export const Categories_VfayTGSO97lZpWUhN7u1p_Builder = new UICompBuilder(Categories_VfayTGSO97lZpWUhN7u1p_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Categories')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Categories_VfayTGSO97lZpWUhN7u1p_PropertyViewFn)
  .build();


export const Categories_VfayTGSO97lZpWUhN7u1p_ExposingConfigs = withExposingConfigs(Categories_VfayTGSO97lZpWUhN7u1p_Builder, [])