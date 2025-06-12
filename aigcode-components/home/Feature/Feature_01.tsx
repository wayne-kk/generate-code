import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  icon: string
  title: string
  description: string
  color: string
}

export interface IFeatureProps {
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
    features = [
      {
        icon: "fa-solid fa-magnifying-glass",
        title: "Innovative Design",
        description: "We create unique layouts and designs that stand out.",
        color: "blue"
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Fast Performance",
        description: "Our websites load quickly, ensuring a smooth user experience.",
        color: "orange"
      },
      {
        icon: "fa-solid fa-palette",
        title: "Creative Solutions",
        description: "We think outside the box to provide creative solutions.",
        color: "green"
      },
      {
        icon: "fa-solid fa-code",
        title: "Clean Code",
        description: "We write clean, maintainable code for easy future updates.",
        color: "purple"
      },
      {
        icon: "fa-solid fa-mobile-alt",
        title: "Mobile Friendly",
        description: "Our designs are responsive and mobile-friendly.",
        color: "cyan"
      },
      {
        icon: "fa-solid fa-lock",
        title: "Secure",
        description: "We prioritize security to protect your data.",
        color: "yellow"
      }
    ]
  }) =>{
     return (
      <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center text-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <AnimateInView type="rise">
                  <div className={`relative w-14 h-14 inline-flex items-center justify-center mx-auto rounded-full bg-${feature.color}-100 dark:bg-${feature.color}-100`}>
                    <EditableIcon className={`text-${feature.color}-600 dark:text-${feature.color}-700 text-2xl`} propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} />
                  </div>
                  <h3 className="TITLE-PRIMARY mt-8 text-lg font-semibold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
                  </h3>
                  <p className="DESC mt-4 text-base text-slate-700 dark:text-white/80">
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