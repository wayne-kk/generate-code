import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionProps {
  title: string
  description: string
  buttonTextAttr: string
  buttonTextAttrLink: string
  learnMoreTextAttr: string
  learnMoreTextAttrLink: string
  learnMoreIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Elevate Your Design Workflow`,
  description = `Join our community and enhance your design process with our cutting-edge tools and resources. Sign up now to get started!`,
  buttonTextAttr = `Get Started`,
  buttonTextAttrLink = '/',
  learnMoreTextAttr = `Learn More`,
  learnMoreTextAttrLink = '/',
  learnMoreIcon = 'fa-solid fa-arrow-right',
}) =>{
  return (
    <div className="relative isolate overflow-hidden bg-sky-500">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            <EditableText propKey="description">{description}</EditableText>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-slate-800 bg-white font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-white/80 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextAttrLink}>
              <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
            </EditableButton>
            <EditableButton className="BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold leading-6 bg-transparent text-white border-none" href={learnMoreTextAttrLink}>
              <EditableText propKey="learnMoreTextAttr">{learnMoreTextAttr}</EditableText>
              <EditableIcon propKey="learnMoreIcon" icon={learnMoreIcon} className="group-hover:translate-x-1 transition-all duration-300"/>
            </EditableButton>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CallToAction;