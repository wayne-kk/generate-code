import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IIFeaturePropsHeader {
  title: string
  subtitle: string
}

export interface IItemsItem {
  title: string
  description: string
  icon: string
}

export interface IFeatureProps {
  header: IIFeaturePropsHeader
  items: IItemsItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  header = {
    title: "Built exclusively for you",
    subtitle: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."
  },
  items = [
    {
      title: "Acquisition",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "fa-solid fa-square"
    },
    {
      title: "Activation",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "fa-solid fa-envelope-open-text"
    },
    {
      title: "Retention",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "fa-solid fa-check-circle"
    }
  ]
}) =>{
  return (
    <section className="w-full bg-white dark:bg-slate-900 px-6 py-24 md:px-8 md:py-32">
       <AnimateInView>
       <div className="max-w-7xl mx-auto ">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center pb-12 md:pb-20">
            <EditableText propKey={"header_title"} className="TITLE-PRIMARY text-4xl font-bold text-slate-900 dark:text-slate-50">{header.title}</EditableText>
            <EditableText propKey={"header_subtitle"} className="TITLE-SECONDARY text-xl text-slate-600 dark:text-slate-400">{header.subtitle}</EditableText>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6 text-slate-900 dark:text-slate-50">
                <EditableIcon propKey={`items_${index}_icon`} icon={item.icon} className="text-2xl mt-4"/>
                <EditableText propKey={`items_${index}_title`} className="TITLE-PRIMARY text-lg font-bold">{item.title}</EditableText>
                <EditableText propKey={`items_${index}_description`} className="DESC text-lg text-slate-600 text-center dark:text-slate-400">{item.description}</EditableText>
              </div>
            ))}
          </div>
       </div>
       </AnimateInView>
    </section>
  )
}

export default Feature;