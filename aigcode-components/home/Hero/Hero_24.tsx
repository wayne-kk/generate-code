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
  imageUrl = `https://images.unsplash.com/photo-1746972170275-53dd382e49af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D`
}) =>{
   return (
    <section className="w-full bg-white dark:bg-slate-800 overflow-hidden">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-200/20 pt-14 dark:from-slate-900">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 sm:-mr-80 lg:-mr-96 dark:bg-slate-800 dark:shadow-slate-600 dark:ring-slate-700"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className=" w-full grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col items-end gap-4">
                <svg viewBox="0 0 159 159" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-slate-900 dark:text-white">
                  <path 
                    d="M1.57977 27.8423L28.2324 1.1897L122.732 95.9844L122.732 20.9835L157.733 20.9835L157.733 157.982L20.7331 157.982L20.7331 122.982L96.7194 122.982L1.57977 27.8423Z" 
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="none"
                  />
                </svg>
                <h1 className="TITLE-PRIMARY text-right text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-50">
                  <EditableText propKey={`title`}>{title}</EditableText>
                </h1>
              </div>
              
              {/* 第一条分割线，位于title和description之间 */}
              <hr className="w-full border-t border-slate-700 dark:border-slate-300 opacity-30" />
              
              <div className="w-full flex flex-col gap-12">
                <p className="DESC text-right text-base font-normal text-slate-700 dark:text-slate-300">
                  <EditableText propKey={`description`}>{description}</EditableText>
                </p>
                
                {/* 第二条分割线，位于description和button之间 */}
                <hr className="w-full border-t border-slate-700 dark:border-slate-300 opacity-30" />
                
                <div className="w-full flex justify-end items-center gap-x-6">
                  <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 dark:bg-sky-600 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 dark:hover:bg-sky-500 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"  href={buttonTextLink}>
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
              className="IMAGE aspect-[6/7] md:aspect-[6/7] w-full h-auto rounded-2xl object-cover dark:ring-1 dark:ring-slate-700"
              src={imageUrl}
              alt="Design studio showcase"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 dark:from-slate-800" />
      </div>
    </section>
  );
}

export default Hero;