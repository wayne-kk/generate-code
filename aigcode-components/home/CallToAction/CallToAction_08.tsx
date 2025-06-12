import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IICallToActionPropsBackgroundcolor {
  colorA: string
  colorB: string
}

export interface ICallToActionProps {
  title: string
  description: string
  buttonTextAttrLabel: string
  buttonTextAttrLink: string
  learnMoreTextAttrLabel: string
  learnMoreTextAttrLink: string
  learnMoreIcon: string
  backgroundColor: IICallToActionPropsBackgroundcolor
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = 'Elevate Your Design Workflow',
  description = 'Join our creative community and explore all the features we offer. Realize your potential with every project!',
  buttonTextAttrLabel = 'Get Started',
  buttonTextAttrLink = '/',
  learnMoreTextAttrLabel = 'Discover More',
  learnMoreTextAttrLink = '/',
  learnMoreIcon = "fa-solid fa-arrow-right",
  backgroundColor = {
    colorA: '#7775D6',
    colorB: '#E935C1',
  },
}) =>{
  return (
    <div className="w-full bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="TITLE-PRIMARY mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white/90 sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300/90">
            <EditableText propKey="description">{description}</EditableText>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <EditableButton className="BTN-PRIMARY flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextAttrLink}>
              <EditableText propKey="buttonTextAttrLabel">{buttonTextAttrLabel}</EditableText>
            </EditableButton>
            <EditableButton className="BTN-SECONDARY text-sm group flex items-center gap-1 font-semibold leading-6 text-white" href={learnMoreTextAttrLink}>
              <EditableText propKey="learnMoreTextAttrLabel">{learnMoreTextAttrLabel}</EditableText>
              <EditableIcon propKey="learnMoreIcon" icon={learnMoreIcon} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7"></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor={backgroundColor.colorA}></stop>
                <stop offset="1" stopColor={backgroundColor.colorB}></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;