import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';

export interface ILogoCloudsProps {
  logos: string[]
}

const LogoClouds: React.FC<ILogoCloudsProps> = ({
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
        <div className="mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-10 sm:gap-x-10">
          {logos.map((logoUrl, index) => (
            <AnimateInView type="rise" key={`logo_${index}`}>
              <EditableImg
                propKey={`logos_${index}`}
                className="IMAGE max-h-10 w-full object-contain aspect-[158/48]"
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