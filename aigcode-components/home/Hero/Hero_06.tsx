import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IHeroProps {
  title: string
  subTitle: string
  description: string
  buttonPrimaryLabel: string
  buttonPrimaryLink: string
  buttonSecondaryLabel: string
  buttonSecondaryLink: string
  buttonIcon: string
  heroImageUrl: string
}

const Hero: React.FC<IHeroProps> = ({
  title = `Innovative Solutions for Modern Enterprise`,
  subTitle = `Elevate Your Business Potential`,
  description = `Unlock the power of creative design with PixelCraft Studio where originality meets functionality, ensuring your business stands out in the competitive market.`,
  buttonPrimaryLabel = `Learn More`,
  buttonPrimaryLink = `/`,
  buttonSecondaryLabel = `Our Portfolio`,
  buttonSecondaryLink = `/`,
  buttonIcon = "fa-solid fa-arrow-right",
  heroImageUrl = `https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D`,
}) =>{
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-800">
      <div className="relative z-10 py-24 px-4 md:px-20">
        <EditableImg
          propKey="heroImageUrl"
          className="IMAGE absolute top-0 left-0 z-[-1] h-full w-full object-cover object-center"
          src={heroImageUrl}
          alt={heroImageUrl}
        />
        <div className="container max-w-7xl mx-auto py-10 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-[570px] rounded-2xl bg-white dark:bg-slate-800 py-10 px-8 sm:p-12 md:p-[60px]">
                <span className="block mb-3 text-base font-medium text-sky-500">
                  <EditableText propKey="subTitle">{subTitle}</EditableText>
                </span>
                <h1 className="TITLE-PRIMARY mb-6 text-3xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
                  <EditableText propKey="title">{title}</EditableText>
                </h1>
                <p className="DESC mb-10 text-base text-slate-700 dark:text-slate-300 ">
                  <EditableText propKey="description">{description}</EditableText>
                </p>
                <div className="flex flex-wrap gap-3">
                  <EditableButton 
                    className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
                    href={buttonPrimaryLink}
                  >
                    <EditableText propKey="buttonPrimaryLabel">{buttonPrimaryLabel}</EditableText>
                  </EditableButton>
                  <EditableButton 
                    className="BTN-SECONDARY flex group items-center gap-1 text-slate-900 bg-white font-medium border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white"
                    href={buttonSecondaryLink}
                  >
                    <EditableText propKey="buttonSecondaryLabel">{buttonSecondaryLabel}</EditableText>
                    <EditableIcon propKey={"buttonIcon"} icon={buttonIcon} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
                  </EditableButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero;