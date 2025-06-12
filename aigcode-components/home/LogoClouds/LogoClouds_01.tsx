import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ILogoCloudsProps {
  title: string
  logos: string[]
}

const LogoClouds: React.FC<ILogoCloudsProps> = ({
  title = `Trusted by the world's most innovative design teams`,
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
        <h2 className="TITLE-PRIMARY text-center text-lg font-semibold leading-8 text-slate-900 dark:text-slate-50">
          <EditableText propKey={`title`}>{title}</EditableText>
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-10 sm:gap-x-10">
          {logos.map((logoUrl, index) => (
            <AnimateInView type="rise" key={`logo_${index}`}>
              <EditableImg
                propKey={`logos_${index}`}
                className="IMAGE max-h-12 w-full object-contain aspect-[158/48]"
                src={logoUrl}
                alt={`logo_${index}`}
              />
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  );
}


export default LogoClouds;