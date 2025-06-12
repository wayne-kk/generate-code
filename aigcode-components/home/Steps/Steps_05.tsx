import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IStepsItem {
  id: string
  text: string
}

export interface IStepsProps {
  title: string
  steps: IStepsItem[]
  imageUrl: string
}

const Steps: React.FC<IStepsProps> = ({
  title = `Ways we can help`,
  steps = [
    { id: `01.`, text: `Our design studio offers unique aesthetics and functionalities that stand out.` },
    { id: `02.`, text: `With a focus on user experience, our designs are user-friendly and engaging.` },
    { id: `03.`, text: `We ensure that your website is optimized for performance and SEO.` },
  ],
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`
}) =>{
  return (
    <section className="w-full py-10 bg-slate-50 dark:bg-slate-800">
      <AnimateInView>
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="w-full grid items-center grid-cols-1 gap-20 md:grid-cols-2 md:gap-28">
          
            <EditableImg propKey="imageUrl" className="IMAGE opacity-50 rounded-lg bg-slate-900 w-[45rem] h-[45rem] aspect-[1/1] object-cover" src={imageUrl} alt={imageUrl} />
          
            <div className="flex flex-col gap-12">
              <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <div className="flow-root">
                <ul className="-my-8 divide-y divide-black/5 dark:divide-white/10">
                  {steps.map((step, index) => (
                    <li className="flex flex-col py-10 gap-6 md:flex-row md:items-start" key={step.id}>
                      <span className="text-4xl font-medium text-sky-500">
                        <EditableText propKey={`steps_${index}_id`}>{step.id}</EditableText>
                      </span>
                      <p className="TEXT-CONTENT text-xl font-normal text-slate-900  dark:text-white/90">
                        <EditableText propKey={`steps_${index}_text`}>{step.text}</EditableText>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
         
        </div>
      </div>
       </AnimateInView>
    </section>
  );
}

export default Steps;