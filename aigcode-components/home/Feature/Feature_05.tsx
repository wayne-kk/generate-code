import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  icon: string
  text: string
}

export interface IFeatureProps {
  introText: string
  title: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  introText = `Say hello to Landingfolio`,
  title = `Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.`,
  features = [
    {
      icon: "fa-solid fa-magnifying-glass",
      text: `Customize things easily`,
    },
    {
      icon: "fa-solid fa-filter",
      text: `Filter categories fast`,
    },
    {
      icon: "fa-solid fa-chart-line",
      text: `Get daily reports`,
    },
  ],
}) =>{
  return (
    <section className="py-12 bg-white dark:bg-slate-800 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="DESC text-base font-semibold text-sky-600 dark:text-slate-200">
            <EditableText propKey={"introText"}>{introText}</EditableText>
          </p>
          <h2 className="TITLE-PRIMARY mt-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 lg:mt-8 sm:text-3xl lg:text-4xl">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h2>

          <div className="flex justify-center mt-12 sm:mt-16">
            <div className="flex flex-col items-center justify-center flex-1 pt-8 space-y-6 border-t border-black/10 dark:border-white/10 lg:inline-flex md:flex-row md:space-y-0 lg:space-x-12 md:space-x-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} className="text-lg text-sky-600 dark:text-slate-200"/>
                  <h3 className="TITLE-SECONDARY ml-3 text-base font-medium text-slate-900 dark:text-slate-200 lg:text-lg">
                    <EditableText propKey={`features_${index}_text`}>{feature.text}</EditableText>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;