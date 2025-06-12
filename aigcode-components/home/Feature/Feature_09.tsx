import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  title: string
  description: string
  icon: string
}

export interface IFeatureProps {
  sectionTitle: string
  sectionSubtitle: string
  sectionDescription: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  sectionTitle = 'Design Studio Benefits',
  sectionSubtitle = 'Explore the Advantages',
  sectionDescription = 'Elevate your brand\'s digital narrative with our cutting-edge design solutions.',
  features = [
    {
      title: 'Enhance Visual Appeal',
      description: 'Create stunning visuals that captivate your audience and make your brand unforgettable.',
      icon: 'fa-solid fa-eye',
    },
    {
      title: 'Build Brand Recognition',
      description: 'Consistent and memorable design elements that resonate with your audience and foster brand loyalty.',
      icon: 'fa-solid fa-star',
    },
    {
      title: 'Increase Engagement',
      description: 'Engaging designs that improve user experience and drive higher interaction rates.',
      icon: 'fa-solid fa-users',
    },
  ],
}) =>{
  return (
    <section className="w-full py-10 px-4 dark:bg-slate-900 bg-white">
      
      <div className="container max-w-7xl mx-auto space-y-10 md:space-y-16">
        <header className="flex flex-col items-start">
          <p className="TITLE-SECONDARY md:text-xl font-semibold text-sky-500 dark:text-sky-300">
            <EditableText propKey="sectionTitle">{sectionTitle}</EditableText>
          </p>
          <h2 className="TITLE-PRIMARY max-w-4xl mt-6 text-3xl font-semibold md:text-4xl lg:text-4xl text-slate-900 dark:text-slate-50">
            <EditableText propKey="sectionSubtitle">{sectionSubtitle}</EditableText>
            <span className="DESC block text-slate-500">
              <EditableText propKey="sectionDescription">{sectionDescription}</EditableText>
            </span>
          </h2>
        </header>

        <ul className="grid w-full gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <li key={`features_${index}`} className="w-full">
              <div className="flex items-center justify-center w-12 h-12 bg-white shadow-lg text-sky-500 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 shadow-slate-500/10">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="text-xl text-sky-500 drop-shadow"/>
              </div>

              <h3 className="TITLE-SECONDARY mt-6 text-2xl font-semibold  text-slate-900 dark:text-slate-50">
                <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
              </h3>

              <p className="DESC mt-1.5 text-slate-700 dark:text-slate-300 text-lg">
                <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Feature;