import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IFeaturesItem {
  name: string
  description: string
  icon: string
}

export interface IFeatureProps {
  title: string
  subTitle: string
  description: string
  imageUrl: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  title = "Everything Your Design Studio Needs to Excel",
  subTitle = "No server? No problem.",
  description = "Unlock the full potential of your creative team with our cutting-edge tools and services, designed to enhance productivity and creativity.",
  imageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  features = [
    { name: "Innovative Design Tools", description: "Empower your creativity with advanced design tools that streamline your workflow.", icon: "fa-solid fa-palette" },
    { name: "Collaborative Workspace", description: "Enhance teamwork with a platform that supports seamless collaboration.", icon: "fa-solid fa-users" },
    { name: "Reliable Cloud Storage", description: "Secure and access your projects from anywhere with our cloud storage solutions.", icon: "fa-solid fa-cloud" },
  ]}) =>{
  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="TITLE-PRIMARY text-base font-semibold leading-7 text-sky-500 dark:text-sky-400"><EditableText propKey={`title`}>{title}</EditableText></h2>
          <p className="TITLE-SECONDARY mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"><EditableText propKey={`subTitle`}>{subTitle}</EditableText></p>
          <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300"><EditableText propKey={`description`}>{description}</EditableText></p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <EditableImg propKey={`imageUrl`} className="IMAGE mb-[-12%] rounded-xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10 object-cover w-full h-auto aspect-[2832/1842]" src={imageUrl} alt={imageUrl} />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white to-transparent dark:from-slate-800 dark:to-transparent pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-9">
              <dt className="inline font-semibold text-slate-900 dark:text-white">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} className={`absolute left-1 top-1 text-sky-500 text-lg`} aria-hidden="true"/>
                <EditableText propKey={`features_${index}_name`}>{feature.name}</EditableText>
              </dt>{' '}
              <dd className="inline TEXT-CONTENT"><EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText></dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Feature;