import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  name: string
  description: string
  icon: string
}

export interface IFeatureProps {
  features: IFeaturesItem[]
  sectionTitle: string
  sectionHeading: string
  sectionDescription: string
}

const Feature: React.FC<IFeatureProps> = ({
  features = [
    {
      name: 'Seamless Deployment',
      description: 'Effortlessly deploy your projects with our cutting-edge technology, ensuring rapid and reliable launches every time.',
      icon: 'fa-solid fa-cloud-arrow-up',
    },
    {
      name: 'Robust Security',
      description: 'Our platform ensures your data remains secure with SSL certificates and advanced encryption, keeping your information safe.',
      icon: 'fa-solid fa-lock',
    },
    {
      name: 'Efficient Workflows',
      description: 'Optimize your workflows with simple queues and automation, boosting productivity and efficiency across your projects.',
      icon: 'fa-solid fa-cloud',
    },
    {
      name: 'Comprehensive API',
      description: 'Unlock limitless possibilities with our powerful API, allowing for extensive customization and control over your applications.',
      icon: 'fa-solid fa-cog',
    },
    {
      name: 'Continuous Backups',
      description: 'Never worry about data loss again with our continuous backup solutions, ensuring your work is always safe and recoverable.',
      icon: 'fa-solid fa-server',
    },
    {
      name: 'Streamlined Collaboration',
      description: 'Enhance teamwork with tools designed for seamless collaboration, making it easier to share, communicate, and collaborate on projects.',
      icon: 'fa-solid fa-users',
    },
  ],
  sectionTitle = "Everything You Need",
  sectionHeading = "No Server? No Problem.",
  sectionDescription = "Our platform provides all the tools and services you need to deploy, secure, and manage your applications effortlessly, without the need for a server."
} ) =>{

  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="TITLE-PRIMARY text-base font-semibold leading-7 text-sky-500 dark:text-sky-400"><EditableText propKey={`sectionTitle`}>{sectionTitle}</EditableText></h2>
          <p className="TITLE-SECONDARY mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"><EditableText propKey={`sectionHeading`}>{sectionHeading}</EditableText></p>
          <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <EditableText propKey={`sectionDescription`}>
              {sectionDescription}
            </EditableText>
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature, index) => (
            <div key={`${feature.name}_${index}`} className="relative pl-9">
              <div className="flex items-center font-semibold text-slate-900 dark:text-white">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="absolute left-1 top-0 text-lg text-sky-500 dark:text-sky-400"/>
                <EditableText propKey={`features_${index}_name`}>{feature.name}</EditableText>
              </div>
              <dd className="inline TEXT-CONTENT">
                <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Feature;