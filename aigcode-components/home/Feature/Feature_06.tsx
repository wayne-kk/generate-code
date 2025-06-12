import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturesItem {
  title: string
  description: string
  icon: string
}

export interface IFeatureProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  buttonIcon: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  title = `Innovative Solutions for Your Design Needs`,
  description = `Explore our range of creative services tailored to establish your brand's digital presence and engage your audience with exceptional design aesthetics.`,
  buttonText = `Learn More`,
  buttonLink = '/productspage',
  buttonIcon = `fa-solid fa-arrow-right`,
  features = [
    {
      title: `Collaborative Workspace`,
      description: `Leverage our virtual space for seamless collaboration and ideation, ensuring efficient project management and communication.`,
      icon: `fa-solid fa-users`
    },
    {
      title: `Creative Branding`,
      description: `Transform your brand with our strategic branding solutions that resonate with your target audience and reflect your company's values.`,
      icon: `fa-solid fa-lightbulb`
    },
    {
      title: `Interactive Design`,
      description: `Engage your users with interactive design elements that create memorable experiences and drive user interaction.`,
      icon: `fa-solid fa-object-ungroup`
    },
    {
      title: `Responsive Websites`,
      description: `Get a visually stunning, responsive website that adapts to all devices, enhancing user experience and accessibility.`,
      icon: `fa-solid fa-mobile-alt`
    },
  ]
}) =>{
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 dark:bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32 gap-y-12">
          <div>
            <h2 className="TITLE-PRIMARY text-4xl md:text-6xl font-extrabold text-white/90 dark:text-white">
              <EditableText propKey={"title"}>{title}</EditableText>
            </h2>
            <p className="DESC mt-8 text-lg font-normal leading-8 text-white/70 dark:text-white/60">
              <EditableText propKey={"description"}>{description}</EditableText>
            </p>
            <div className="mt-8">
              <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-slate-900 bg-white font-medium border py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:border-black/10 dark:text-white" href={buttonLink}>
                <EditableIcon propKey={"buttonIcon"} icon={buttonIcon} iconLibrary={"FontAwesome"} className="mr-2 text-base text-sky-500 dark:text-white"/>
                <EditableText propKey={"buttonText"}>{buttonText}</EditableText>
              </EditableButton>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={feature.title} className="space-y-5">
                  <div className="overflow-hidden h-full transition-all duration-200 border border-black/10 dark:border-white/10 rounded-lg hover:bg-slate-950 dark:hover:bg-slate-700">
                    <AnimateInView type="rise">
                      <div className="px-4 py-5 sm:p-6 lg:p-8">
                        <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} className="text-lg text-sky-500 dark:text-white"/>
                        <h3 className="TITLE-SECONDARY mt-3 text-2xl font-normal text-white/90 dark:text-white">
                          <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
                        </h3>
                        <p className="DESC mt-4 text-base font-normal text-white/70 dark:text-white/60">
                          <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                        </p>
                      </div>
                    </AnimateInView>
                  </div>
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