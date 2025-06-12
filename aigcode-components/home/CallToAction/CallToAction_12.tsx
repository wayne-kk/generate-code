import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionProps {
  title: string
  subTitle: string
  buttonPrimaryLabel: string
  buttonPrimaryLink: string
  buttonSecondaryLabel: string
  buttonSecondaryLink: string
  buttonSecondaryIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Ready to elevate your brand?`,
  subTitle = `Join us and start your journey today.`,
  buttonPrimaryLabel = `Get Started`,
  buttonPrimaryLink = '/',
  buttonSecondaryLabel = `Learn More&link`,
  buttonSecondaryLink = '/',
  buttonSecondaryIcon = 'fa-solid fa-arrow-right',
}) =>{
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="w-full max-w-7xl mx-auto py-20 px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div>
            <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="TITLE-SECONDARY mt-4 text-base font-normal text-slate-700 dark:text-white/70">
              <EditableText propKey="subTitle">{subTitle}</EditableText>
            </p>
          </div>
          <div className="mt-10 md:mt-0 flex gap-4">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonPrimaryLink}>
              <EditableText propKey="buttonPrimaryLabel">{buttonPrimaryLabel}</EditableText>
            </EditableButton>
            <EditableButton className="BTN-SECONDARY inline-flex gap-1 group items-center justify-center text-slate-900 bg-white font-medium border border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white"  href={buttonSecondaryLink}>
              <EditableText propKey="buttonSecondaryLabel">{buttonSecondaryLabel}</EditableText>
              <EditableIcon propKey="buttonSecondaryIcon" icon={buttonSecondaryIcon} className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CallToAction;