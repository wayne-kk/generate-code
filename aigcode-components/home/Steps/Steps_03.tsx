import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IStepsItem {
  icon: string
  text: string
}

export interface IStepsProps {
  title: string
  description: string
  steps: IStepsItem[]
}

const Steps: React.FC<IStepsProps> = ({
  title = `Our Workflow`,
  description = `Discover how we bring your ideas to life through our creative process.`,
  steps = [
    {
      icon: `fa-solid fa-lightbulb`,
      text: `Inspire & Conceptualize`,
    },
    {
      icon: `fa-solid fa-users`,
      text: `Collaborate with the Team`,
    },
    {
      icon: `fa-solid fa-cogs`,
      text: `Design & Develop`,
    },
    {
      icon: `fa-solid fa-rocket`,
      text: `Launch & Evolve`,
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-20">
        <AnimateInView type="rise">
          <div className="max-w-lg mx-auto text-center flex flex-col gap-6">
            <h1 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <AnimateInView key={index} type="rise">
              <div className="h-full bg-white border border-black/10 dark:bg-slate-700 dark:border-white/10 rounded-lg">
                <div className="h-full p-6 flex flex-col gap-16 justify-between">
                  <EditableIcon propKey={`steps_${index}_icon`} icon={step.icon} iconLibrary="FontAwesome" className="text-3xl text-sky-500" />
                  <p className="TEXT-CONTENT text-base font-normal text-slate-900 dark:text-white/90">
                    <EditableText propKey={`steps_${index}_text`}>{step.text}</EditableText>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;