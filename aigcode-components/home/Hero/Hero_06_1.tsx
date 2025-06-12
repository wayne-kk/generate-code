import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IHeroProps {
  title: string;
  subTitle: string;
  description: string;
  buttonPrimaryLabel: string;
  buttonSecondaryLabel: string;
  buttonIcon: string;
  heroImageUrl: string;
  buttonPrimaryLink: string;
  buttonSecondaryLink: string;
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
}) => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative z-10 py-24 px-4 md:px-20">
        <EditableImg
          propKey="heroImageUrl"
          className="IMAGE absolute top-0 left-0 z-[-1] h-full w-full object-cover object-center"
          src={heroImageUrl}
          alt={heroImageUrl}
        />
        {/* 添加暗色模式下的图片遮罩，增强文字可读性 */}
        <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-black/10 dark:bg-black/50"></div>
        
        <div className="container max-w-7xl mx-auto py-10 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-[570px] rounded-2xl bg-white/25 dark:bg-gray-900/40 backdrop-blur-[48px] py-10 px-8 sm:p-12 md:p-[60px]">
                <span className="block mb-3 text-base font-medium text-white dark:text-white">
                  <EditableText propKey="subTitle">{subTitle}</EditableText>
                </span>

                <h1 className="TITLE-PRIMARY mb-6 text-3xl font-semibold text-white dark:text-white md:text-4xl">
                  <EditableText propKey="title">{title}</EditableText>
                </h1>

                <p className="DESC mb-10 text-base text-slate-300 dark:text-slate-200">
                  <EditableText propKey="description">{description}</EditableText>
                </p>

                <div className="flex flex-wrap gap-3">
                  <EditableButton 
                    className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-[#2B3580] dark:bg-[#3a46a7] font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-[#242c6a] dark:hover:bg-[#2c3780] rounded-full text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
                    href={buttonPrimaryLink}
                  >
                    <EditableText propKey="buttonPrimaryLabel">{buttonPrimaryLabel}</EditableText>
                  </EditableButton>
                  
                  <EditableButton 
                    className="BTN-SECONDARY flex group items-center gap-1 text-white border border-white dark:border-white py-2 xl:py-3 px-6 focus:outline-none hover:bg-white/10 dark:hover:bg-white/20 rounded-full text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
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
};

export default Hero;