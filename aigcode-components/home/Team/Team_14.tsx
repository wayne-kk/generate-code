import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface ITeamFeaturesItem {
  title: string
  icon: string
  description: string
}

export interface ITeamProps {
  title: string
  subtitle: string
  features: ITeamFeaturesItem[]
  images: string[]
}

const Team: React.FC<ITeamProps> = ({
  title= "Join a team of makers",
  subtitle= "We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy.",
  features = [
    {
      title: "Passionate",
      icon: "fa-solid fa-heart",
      description: "You are passionate about digital products of any kind and are a builder at heart."
    },
    {
      title: "Energetic",
      icon: "fa-solid fa-bolt",
      description: "You are passionate about digital products of any kind and are a builder at heart."
    },
    {
      title: "Achiever",
      icon: "fa-solid fa-trophy",
      description: "You are passionate about digital products of any kind and are a builder at heart."
    },
  ],
 
  images = [
    "https://source.unsplash.com/random/1200x900/?office,team",
    "https://source.unsplash.com/random/1200x900/?workspace,creative",
    "https://source.unsplash.com/random/1200x900/?technology,innovation",
    "https://source.unsplash.com/random/1200x900/?computer,design"
  ],
}) =>{
  return (
    <section className="relative bg-white dark:bg-slate-900 px-6 py-24 md:px-8 md:py-32 ">
      <AnimateInView>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <EditableText propKey={"title"} className="TITLE-PRIMARY text-5xl font-bold text-slate-900 dark:text-slate-50">{title}</EditableText>
            <EditableText propKey={"subtitle"} className="DESC text-slate-600 dark:text-slate-400">{subtitle}</EditableText>
          </div>
          <div className="w-full grid md:grid-cols-3 gap-10 md:gap-14 max-w-xs mx-auto md:max-w-none">
            {features.map((feature, index) => (
              <div key={index} className="w-full flex items-center text-center text-slate-900 dark:text-slate-50 flex flex-col gap-4">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} className="text-2xl"/>
                <EditableText propKey={`features_${index}_title`} className="TITLE-PRIMARY font-bold">{feature.title}</EditableText>
                <EditableText propKey={`features_${index}_description`} className="DESC text-sm text-slate-600 dark:text-slate-400">{feature.description}</EditableText>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 md:-mx-5">
          {images.map((image, index) => (
            <EditableImg key={index} propKey={`images_${index}`} src={image} className="IMAGE w-full h-auto aspect-[16/10] object-cover"/>
          ))}
        </div>
      </div>
      </AnimateInView>
    </section>
  )
}

export default Team;