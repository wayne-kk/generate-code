import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ILogoCloudsProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  contactText: string
  contactLink: string
  buttonArrow: string
  logos: string[]
}

const LogoClouds: React.FC<ILogoCloudsProps> = ({
  title = "Trusted by Innovative Design Studios",
  description = "Our collaboration tools are used by leading design studios worldwide. Join us and transform the way you work.",
  buttonText = "Get Started",
  buttonLink = "/",
  contactText = "Contact Us",
  contactLink = "/",
  buttonArrow = "fa-solid fa-arrow-right",
  logos = [
    "https://www.uilogos.co/logos/type/acme-black.png",
    "https://www.uilogos.co/logos/type/aven-black.png",
    "https://www.uilogos.co/logos/type/fox-hub-black.png",
    "https://www.uilogos.co/logos/type/goldline-black.png",
    "https://www.uilogos.co/logos/type/muzica-black.png",
  ]
}) =>{
  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-x-8 gap-y-16 lg:flex-row">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50">
              <EditableText propKey={"title"}>{title}</EditableText>
            </h2>
            <p className="DESC mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
              <EditableText propKey={"description"}>{description}</EditableText>
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <EditableButton className="BTN-PRIMARY rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600" href={buttonLink}>
                <EditableText propKey={"buttonText"}>{buttonText}</EditableText>
              </EditableButton>
              <EditableButton className="BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold text-gray-900 dark:text-slate-200"  href={contactLink}>
                <EditableText propKey={"contactText"}>{contactText}</EditableText>
                <EditableIcon propKey={"buttonArrow"} icon={buttonArrow} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
              </EditableButton>
            </div>
          </div>
          <div className="mx-auto gap-10 flex w-full max-w-xl flex-wrap items-center justify-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {logos.map((logo, index) => (
              <AnimateInView key={index} type="rise">
                <EditableImg propKey={`logos_${index}`} className="IMAGE h-10 w-auto object-contain object-left" src={logo} alt={`logo_${index}`} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoClouds;