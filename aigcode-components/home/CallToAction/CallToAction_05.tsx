import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IBulletpointsItem {
  icon: string
  point: string
}

export interface ICallToActionProps {
  title: string
  description: string
  bulletPoints: IBulletpointsItem[]
  mainImageUrl: string
  primaryButtonText: string
  primaryButtonLink: string
  primaryButtonIcon: string
  secondaryButtonText: string
  secondaryButtonLink: string
  secondaryButtonIcon: string
  primaryButtonAttr: string
  secondaryButtonAttr: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Become an early adopter of our app.`,
  description = `Keep control on your projects. Don't make the mistakes again & again.`,
  bulletPoints = [
    {
      icon: "fa-solid fa-check",
      point: "Get 10 Web & Mobile UI Inspirations Every Week"
    },
    {
      icon: "fa-solid fa-check",
      point: "Exclusive Discount on Design Resources"
    },
    {
      icon: "fa-solid fa-check",
      point: "3 Random Subscriber will Get Featured on Emails"
    }
  ],
  mainImageUrl = `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  primaryButtonText = `Try For Free`,
  primaryButtonLink = '/tryforfree',
  primaryButtonIcon = `fa-solid fa-pen-to-square`,
  secondaryButtonText = `Contact Sales`,
  secondaryButtonLink = `/contactable`,
  secondaryButtonIcon = `fa-solid fa-comments`,
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <AnimateInView type="rise">
      <div className=" max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="TITLE-PRIMARY text-5xl font-extrabold text-slate-900 dark:text-white/90">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC text-lg font-normal text-slate-600 dark:text-white/90">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>

            <ul className="space-y-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="TEXT-CONTENT flex items-center text-lg font-normal text-slate-900 dark:text-white">
                  <EditableIcon propKey={`bulletPoints_${index}_icon`} icon={point.icon} iconLibrary="FontAwesome" className="mr-3 text-sky-500 text-lg"/>
                  <EditableText propKey={`bulletPoints_${index}_point`}>{point.point}</EditableText>
                </li>
              ))}
            </ul>
            </div>

            <div className="flex flex-row items-center space-x-5">
              <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={primaryButtonLink}>
                <EditableIcon propKey="primaryButtonIcon" icon={primaryButtonIcon} iconLibrary="FontAwesome" className="mr-2 text-lg text-white"/>
                <EditableText propKey="primaryButtonText">{primaryButtonText}</EditableText>
              </EditableButton>
              <EditableButton className="BTN-SECONDARY inline-flex items-center justify-center text-slate-900 bg-white font-medium border border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white" href={secondaryButtonLink}>
                <EditableIcon propKey="secondaryButtonIcon" icon={secondaryButtonIcon} iconLibrary="FontAwesome" className="mr-2 text-lg text-slate-900 dark:text-white"/>
                <EditableText propKey="secondaryButtonText">{secondaryButtonText}</EditableText>
              </EditableButton>
            </div>
          </div>
    
          <EditableImg propKey="mainImageUrl" className="IMAGE w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-lg bg-slate-100" src={mainImageUrl} alt={mainImageUrl} />

      </div>
      </AnimateInView>
    </section>
  );
}

export default CallToAction;