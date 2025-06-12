import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IStepsItem {
  key: string
  number: string
  subTitle: string
  detail: string
}

export interface IStepsProps {
  title: string
  description: string
  steps: IStepsItem[]
  imageUrl: string
}

const Steps: React.FC<IStepsProps> = ({
  title = `How it works?`,
  description = `Our design studio provides all the elements you need to create a stunning and professional website.`,
  steps = [
    {
      key: `design`,
      number: `01`,
      subTitle: `Start with a great design`,
      detail: `Our studio offers a variety of design blocks and components to kickstart your website creation.`,
    },
    {
      key: `content`,
      number: `02`,
      subTitle: `Add clever content areas`,
      detail: `Incorporate smart content areas to deliver your message effectively and engage visitors.`,
    },
    {
      key: `update`,
      number: `03`,
      subTitle: `Easily update your site`,
      detail: `With our user-friendly tools, updating and maintaining your site is simple and hassle-free.`,
    },
  ],
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 py-10 mx-auto max-w-7xl flex flex-col gap-20">
        <AnimateInView type="rise">
          <div className=" grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>
            <EditableImg propKey="imageUrl" className="IMAGE object-cover w-full rounded-lg aspect-[2/1]" src={imageUrl} alt={imageUrl} />
          </div>
        </AnimateInView>

        <AnimateInView type="rise">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="w-full flex flex-row gap-8 md:flex-col">
                <div className="relative flex flex-col items-center md:flex-row">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-xl font-medium text-white bg-sky-500 rounded-full shrink-0">
                    <EditableText propKey={`steps_${index}_number`}>{item.number}</EditableText>
                  </div>
                  <div className="absolute top-16 w-px h-3/4 bg-black/10 dark:bg-white/10  md:h-px md:w-3/4 md:ml-8 md:left-10 md:top-6"></div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`steps_${index}_subTitle`}>{item.subTitle}</EditableText>
                  </h3>
                  <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
                    <EditableText propKey={`steps_${index}_detail`}>{item.detail}</EditableText>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}

export default Steps;