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
  title = `Elevate Your Design Workflow`,
  description = `Join our community and enhance your design process with our cutting-edge tools and resources. Sign up now to get started!`,
  buttonTextAttrLabel = `Get Started`,
  buttonTextAttrLink = `/`,
  learnMoreTextAttrLabel = `Learn More`,
  learnMoreTextAttrLink= `/`,
  learnMoreIcon = "fa-solid fa-arrow-right ",
  backgroundColor = {
    colorA: '#7775D6',
    colorB: '#E935C1',
  },
}) =>{
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            <EditableText propKey="description">{description}</EditableText>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-slate-800 bg-white font-medium border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-white/80 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextAttrLink}>
              <EditableText propKey="buttonTextAttrLabel">{buttonTextAttrLabel}</EditableText>
            </EditableButton>
            <EditableButton className="BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold leading-6 text-white" href={learnMoreTextAttrLink}>
              <EditableText propKey="learnMoreTextAttrLabel">{learnMoreTextAttrLabel}</EditableText>
              <EditableIcon propKey="learnMoreIcon" icon={learnMoreIcon} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor={backgroundColor.colorA} />
            <stop offset={1} stopColor={backgroundColor.colorB} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CallToAction;