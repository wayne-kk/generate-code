import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  icon: string
  title: string
  description: string
}

export interface IFeatureProps {
  title: string
  description: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  title = 'Elevating Design Studio Experiences',
  description = 'We craft user-centric designs that empower your brand and engage your audience.',
  features = [
    {
      icon: 'fa-solid fa-headset',
      title: 'Dedicated Support',
      description: 'Our team provides continuous support to ensure your success at every step.',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Sales Boost',
      description: 'Enhance your sales strategies with our innovative design solutions.',
    },
    {
      icon: 'fa-solid fa-user-check',
      title: 'Smooth Onboarding',
      description: 'We ensure a seamless onboarding process for a great first impression.',
    },
    {
      icon: 'fa-solid fa-box-open',
      title: 'Product Excellence',
      description: 'Our designs focus on delivering quality and excellence in your product.',
    },
    {
      icon: 'fa-solid fa-heart-circle-check',
      title: 'Quality Assurance',
      description: 'Maintain high standards with our thorough quality assurance practices.',
    },
    {
      icon: 'fa-solid fa-id-badge',
      title: 'Proven Results',
      description: 'Our track record of delivering results speaks for itself.',
    },
  ],
}) =>{
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 sm:text-4xl xl:text-5xl font-pj dark:text-white/90">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-4 text-base leading-7 text-slate-600 sm:mt-8 font-pj dark:text-white/90">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => (
            <AnimateInView key={index} type="rise">
              <div className={`md:p-8 lg:p-14 h-full ${index % 3 !== 0 ? 'md:border-l border-black/10 dark:border-white/10' : ''} ${index >= 3 ? 'md:border-t border-black/10 dark:border-white/10' : ''}`}>
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="mx-auto text-sky-500 text-3xl"/>
                <h3 className="TITLE-SECONDARY mt-12 text-xl font-bold text-slate-900 dark:text-white/90">
                  <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
                </h3>
                <p className="TEXT-CONTENT mt-5 text-base text-slate-600 dark:text-white/90">
                  <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;