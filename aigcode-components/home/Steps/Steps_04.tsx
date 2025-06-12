import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IStepsItem {
  title: string
  description: string
  imageKeyword: string
}

export interface IStepsProps {
  introTitle: string
  mainTitle: string
  description: string
  steps: IStepsItem[]
}

const Steps: React.FC<IStepsProps> = ({
  introTitle = `Process`,
  mainTitle = `How Design Studio Works for You`,
  description = `Discover a seamless way to create and manage your design projects. Our platform is built to empower your creative workflow.`,
  steps = [
    {
      title: `Create Free Account`,
      description: `Start your journey by signing up with us. No credit card required and instant access to our features.`,
      imageKeyword: `account`,
    },
    {
      title: `Add Team Members`,
      description: `Collaborate with your team by adding them to your workspace. Simplify your workflow and increase productivity.`,
      imageKeyword: `team`,
    },
    {
      title: `Start Automation`,
      description: `Implement automation tools and watch your efficiency skyrocket. Say goodbye to repetitive tasks.`,
      imageKeyword: `automation`,
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 mx-auto py-10 max-w-7xl flex flex-col gap-14">
        <AnimateInView type="rise">
          <div className="max-w-xl flex flex-col gap-6">
            <p className="text-sm font-normal text-sky-500 tracking-widest uppercase">
              <EditableText propKey="introTitle">{introTitle}</EditableText>
            </p>
            <h1 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
              <EditableText propKey="mainTitle">{mainTitle}</EditableText>
            </h1>
            <p className="DESC max-w-md text-base font-normal text-slate-700 dark:text-slate-300">
              <EditableText propKey="description">
                {description}
              </EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimateInView key={index} type="rise">
              <div className="h-full bg-white rounded-md border border-black/10 dark:bg-slate-700 dark:border-white/10">
                <div className="h-full p-6 flex flex-col ">
                  <h3 className="TITLE-SECONDARY text-sm font-normal tracking-widest text-slate-600 dark:text-slate-400 uppercase">
                    {`Step ${index + 1}`}
                  </h3>
                  <p className="TITLE-PRIMARY mt-8 text-xl font-medium text-slate-900 dark:text-slate-50">
                    <EditableText propKey={`steps_${index}_title`}>{step.title}</EditableText>
                  </p>
                  <p className="DESC mt-5 text-base font-normal text-slate-600 dark:text-slate-400">
                    <EditableText propKey={`steps_${index}_description`}>{step.description}</EditableText>
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