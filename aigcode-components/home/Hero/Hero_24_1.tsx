import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IHeroProps {
  title: string
  description: string
  buttonTextLabel: string
  buttonTextLink: string
  learnMoreTextLabel: string
  learnMoreTextLink: string
  buttonArrow: string
  imageUrl: string
}

const Hero: React.FC<IHeroProps> = ({
  title = `Creating Connections in Design World`,
  description = `In our design studio, we believe in creating meaningful connections through our designs. Our approach ensures that every design is not only visually appealing but also enriches the user's experience.`,
  buttonTextLabel = `Explore Now`,
  buttonTextLink = `/`,
  learnMoreTextLabel = `View Projects`,
  learnMoreTextLink = '/',
  buttonArrow = 'fa-solid fa-arrow-right',
  imageUrl = `https://source.unsplash.com/random/1000x1000/?design,studio`
}) =>{
  return (
    <section className="w-full bg-white dark:bg-slate-800 overflow-hidden">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-200/20 pt-14 dark:from-slate-900">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 sm:-mr-80 lg:-mr-96 dark:bg-slate-800 dark:shadow-slate-600 dark:ring-slate-700"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-20 lg:px-8">
          <div className=" w-full grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            <div className="w-full flex flex-col gap-8">
              <h1 className="TITLE-PRIMARY w-fit text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-50">
                <EditableText propKey={`title`}>{title}</EditableText>
              </h1>
              <div className="w-full flex flex-col gap-12">
                <p className="DESC w-fit text-base font-normal text-slate-700 dark:text-slate-300">
                  <EditableText propKey={`description`}>{description}</EditableText>
                </p>
                <div className="w-full flex items-center gap-x-6">
                  <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600" href={buttonTextLink}>
                    <EditableText propKey={`buttonTextLabel`}>{buttonTextLabel}</EditableText>
                  </EditableButton>
                  <EditableButton className="BTN-SECONDARY text-base group flex items-center gap-1 font-semibold leading-6 text-slate-900 dark:text-slate-200" href={learnMoreTextLink}>
                    <EditableText propKey={`learnMoreTextLabel`}>{learnMoreTextLabel}</EditableText>
                    <EditableIcon propKey={"buttonArrow"} icon={buttonArrow} iconLibrary="FontAwesome" className="group-hover:translate-x-1 transition-all duration-300" />
                  </EditableButton>
                </div>
              </div>
            </div>
            <EditableImg
              propKey={`imageUrl`}
              className="IMAGE aspect-[4/3] md:aspect-[1/1] w-full h-auto  rounded-2xl object-cover"
              src={imageUrl}
              alt={imageUrl}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 dark:from-slate-800" />
      </div>
    </section>
  );
}


export default Hero;