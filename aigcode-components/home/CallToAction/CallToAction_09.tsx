import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionProps {
  title: string
  description: string
  primaryButtonTextAttrLabel: string
  primaryButtonTextAttrLink: string
  secondaryButtonTextAttrLabel: string
  secondaryButtonTextAttrLink: string
  secondaryButtonIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Enhance Your Creative Process`,
  description = `Join our community and streamline your workflow with our cutting-edge tools. Elevate your projects to new heights today.`,
  primaryButtonTextAttrLabel = `Get Started`,
  primaryButtonTextAttrLink = '/',
  secondaryButtonTextAttrLabel = `Discover More`,
  secondaryButtonTextAttrLink = '/',
  secondaryButtonIcon = " fa-solid fa-arrow-right ",
}) =>{
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-white/90 sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-white/90">
            <EditableText propKey="description">{description}</EditableText>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <EditableButton className="BTN-PRIMARY flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={primaryButtonTextAttrLink}>
              <EditableText propKey="primaryButtonTextAttrLabel">{primaryButtonTextAttrLabel}</EditableText>
            </EditableButton>
            <EditableButton className="BTN-SECONDARY flex group items-center  gap-1 text-slate-900 dark:text-white bg-white dark:bg-slate-800 font-medium border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={secondaryButtonTextAttrLink}>
              <EditableText propKey="secondaryButtonTextAttrLabel">{secondaryButtonTextAttrLabel}</EditableText>
              <EditableIcon propKey="secondaryButtonIcon" icon={secondaryButtonIcon} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;