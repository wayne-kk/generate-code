import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ICallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonTextLink: string
  imageUrl: string
  titleSubTitle: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = 'Your Design Success Partner',
  description = 'At our design studio, we understand the importance of support in your creative journey. Whether it\'s a technical query or a design dilemma, our award-winning team is here to assist you every step of the way.',
  buttonText = 'Explore Our Services',
  buttonTextLink = '/',
  imageUrl = 'https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  titleSubTitle = 'Award Winning Support',
}) =>{
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <EditableImg propKey="imageUrl" className="IMAGE h-full w-full object-cover bg-slate-100" src={imageUrl} alt={imageUrl} />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-16 sm:py-20 lg:px-8 lg:py-32">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="TITLE-SECONDARY text-base font-semibold leading-7 text-indigo-400 dark:text-slate-200"><EditableText propKey="titleSubTitle">{titleSubTitle}</EditableText></h2>
          <p className="TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-slate-50"><EditableText propKey="title">{title}</EditableText></p>
          <p className="DESC mt-6 text-base leading-7 text-gray-300 dark:text-slate-300"><EditableText propKey="description">{description}</EditableText></p>
          <div className="mt-8">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white" href={buttonTextLink}>
              <EditableText propKey="buttonText">{buttonText}</EditableText>
            </EditableButton>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CallToAction;