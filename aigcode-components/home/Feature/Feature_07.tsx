import React from 'react';
import EditableIcon from '@ui/EditableIcon';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IFeaturesItem {
  icon: string
  title: string
  description: string
}

export interface IFeatureProps {
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  features = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Innovative Design Solutions',
      description: 'Our team provides modern design solutions that elevate your brand and engage your audience.',
    },
    {
      icon: 'fa-solid fa-lock',
      title: 'Secure and Reliable',
      description: 'We prioritize security and reliability to ensure your digital assets are protected.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Dedicated Support',
      description: 'Our customer support team is available 24/7 to assist you with any inquiries.',
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center gap-y-10 md:grid-cols-3 md:text-left">
          {features.map((feature, index) => (
            <div key={index} className={`md:${index > 0 ? 'border-l border-black/10 dark:border-white/10' : ''} md:px-6 lg:px-12`}>
              <AnimateInView type="rise">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="text-4xl text-slate-900 dark:text-white/80" />
                <h3 className="TITLE-PRIMARY mt-12 text-lg font-bold text-slate-900 dark:text-white/80">
                  <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
                </h3>
                <p className="DESC mt-5 text-base text-slate-700 dark:text-white/80">
                  <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                </p>
              </AnimateInView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Feature;