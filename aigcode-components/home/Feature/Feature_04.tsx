import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';
import EditableButton from '@ui/EditableButton';
import EditableIcon from '@ui/EditableIcon';

export interface IFeaturepointsItem {
  featurePoint: string
  icon: string
}

export interface IFeatureProps {
  featureSectionTitle: string
  featureSectionSubTitle: string
  featureSectionDescription: string
  featurePoints: IFeaturepointsItem[]
  featureSectionButtonLabel: string
  featureSectionButtonLink: string
  featureSectionButtonIcon: string
  featureImage: string
}

const Feature: React.FC<IFeatureProps> = ({
  featureSectionTitle = `Design Studio Excellence at Your Fingertips`,
  featureSectionSubTitle = `Your Fingertips`,
  featureSectionDescription = `Our studio offers the essential tools and services to bring your digital presence to life with elegance and simplicity.`,
  featurePoints = [
    {
      featurePoint: `Access a wealth of creative inspiration. Elevate your brand's aesthetic.`,
      icon: 'fa-solid fa-lightbulb',
    },
    {
      featurePoint: `Choose from over 14 exclusive design kits. Enjoy limitless creativity with our resources.`,
      icon: 'fa-solid fa-palette',
    },
  ],
  featureSectionButtonLabel = `Explore Our Design Studio`,
  featureSectionButtonLink = '/productspage',
  featureSectionButtonIcon = 'fa-solid fa-arrow-right',
  featureImage = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-16 xl:gap-x-24 gap-y-12">
          <div className="lg:col-span-5 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="DESC text-base font-semibold text-sky-500 dark:text-slate-400"><EditableText propKey="featureSectionSubTitle">{featureSectionSubTitle}</EditableText></p>
              <h2 className="TITLE-PRIMARY mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 lg:mt-8 sm:text-4xl lg:text-5xl">
                <EditableText propKey="featureSectionTitle">{featureSectionTitle}</EditableText>
              </h2>
              <p className="DESC mt-4 text-base font-normal leading-7 text-slate-700 dark:text-slate-300 lg:text-lg lg:pr-24 lg:mt-6 lg:leading-8">
                <EditableText propKey="featureSectionDescription">{featureSectionDescription}</EditableText>
              </p>
            </div>

            <div className="grid grid-cols-1 pt-8 mt-8 border-t border-black/10 dark:border-white/10 sm:grid-cols-2 md:mt-16 xl:mt-24 gap-x-16 gap-y-8">
              {featurePoints.map((point, index) => (
                <h3 key={index} className="TEXT-CONTENT flex items-start gap-2 text-lg flex font-semibold text-slate-900 dark:text-slate-200">
                  <EditableIcon propKey={`featurePoints_${index}_icon`} icon={point.icon} iconLibrary="FontAwesome" className="text-lg text-black dark:text-white mt-1 mr-2" />
                  <EditableText propKey={`featurePoints_${index}_featurePoint`}>{point.featurePoint}</EditableText>
                </h3>
              ))}
            </div>

            <div className="mt-12">
              <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={featureSectionButtonLink}>
                <EditableText propKey="featureSectionButtonLabel">{featureSectionButtonLabel}</EditableText>
                <EditableIcon propKey="featureSectionButtonIcon" icon={featureSectionButtonIcon} iconLibrary="FontAwesome" className="text-lg text-white ml-2" />
              </EditableButton>
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-center">
            <AnimateInView type="rise">
              <EditableImg propKey="featureImage" className="IMAGE rounded-lg bg-slate-100 w-[25rem] h-[37.5rem] object-cover aspect-[4/3]" src={featureImage} alt={featureImage} />
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Feature;