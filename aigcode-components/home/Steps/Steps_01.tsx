import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IStepsItem {
  title: string
  description: string
  icon: string
}

export interface IStepsProps {
  title: string
  description: string
  steps: IStepsItem[]
}

const Steps: React.FC<IStepsProps> = ({
  title = `How Our Design Studio Creates Success`,
  description = `Our process is meticulously crafted to deliver top-notch designs that stand out in the digital landscape.`,
  steps = [
    {
      title: `Sign Up for Free`,
      description: `Begin your journey with us by signing up for a free account. Experience design freedom like never before.`,
      icon: `fa-solid fa-user-plus`,
    },
    {
      title: `Craft Your Masterpiece`,
      description: `Utilize our cutting-edge tools to build a website that captures your unique brand identity.`,
      icon: `fa-solid fa-paint-brush`,
    },
    {
      title: `Launch with Confidence`,
      description: `Go live with your project and make a powerful impact in the market. We've got your back every step of the way.`,
      icon: `fa-solid fa-rocket`,
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-16">
        <AnimateInView type="rise">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="DESC max-w-lg mx-auto text-base font-normal text-slate-600 dark:text-white/70">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <AnimateInView type="rise">
          <ul className="max-w-md mx-auto space-y-12">
            {steps.map((step, index) => (
              <li key={index} className="relative flex items-start">
                {index < steps.length - 1 && (
                  <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-black/10 dark:border-white/10 h-full" aria-hidden="true"></div>
                )}
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white border border-black/10 dark:border-white/10  dark:bg-slate-700 rounded-full">
                  <EditableIcon propKey={`steps_${index}_icon`} icon={step.icon} iconLibrary="FontAwesome" className="text-sky-500 text-lg"/>
                </div>
                <div className="ml-6">
                  <h3 className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`steps_${index}_title`}>{step.title}</EditableText>
                  </h3>
                  <p className="TEXT-CONTENT mt-4 text-base font-normal text-slate-600 dark:text-white/70">
                    <EditableText propKey={`steps_${index}_description`}>{step.description}</EditableText>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </AnimateInView>
      </div>
    </section>
  );
}

export default Steps;