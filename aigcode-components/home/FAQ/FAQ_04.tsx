import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IFaqsItem {
  question: string
  answer: string
}

export interface IFAQProps {
  title: string
  faqs: IFaqsItem[]
}

const FAQ: React.FC<IFAQProps> = ({
  title = `Frequently Asked Questions`,
  faqs = [
    {
      question: `What services does the design studio offer?`,
      answer: `Our design studio specializes in branding, web design, and user interface solutions tailored for business growth.`,
    },
    {
      question: `Can the studio assist with e-commerce projects?`,
      answer: `Yes, we provide comprehensive e-commerce design solutions that enhance user experience and maximize sales.`,
    },
    {
      question: `What is the process for starting a new project?`,
      answer: `To start a project, schedule a consultation through our website to discuss your business goals and design needs.`,
    },
  ],
}) =>{
  return (
    <section className="relative py-10 overflow-hidden bg-slate-50 dark:bg-slate-800">
      <div className="absolute w-full bottom-0 transform -translate-x-1/2 translate-y-full left-1/2">
        <div className="w-full h-96 bg-gradient-to-r from-sky-500/20 to-sky-500/60  rounded-full filter blur-3xl"></div>
      </div>

      <AnimateInView type="rise">
        <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-20">
          <h1 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
            <EditableText propKey="title">{title}</EditableText>
          </h1>

          <hr className="border-black/10 dark:border-white/10" />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
            {faqs.map((faq, index) => (
              <div className="flex flex-col gap-6">
                <h2 className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90">
                  <EditableText propKey={`faqs_${index}_question`}>{faq.question}</EditableText>
                </h2>
                <p className="DESC text-base font-normal text-slate-600 dark:text-white/90">
                  <EditableText propKey={`faqs_${index}_answer`}>{faq.answer}</EditableText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}

export default FAQ;