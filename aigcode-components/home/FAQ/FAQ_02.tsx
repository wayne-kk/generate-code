import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IFaqitemsItem {
  question: string
  answer: string
}

export interface IFAQProps {
  introTitle: string
  sectionTitle: string
  sectionDescription: string
  faqItems: IFaqitemsItem[]
  allQuestionsTextAttr: string
  allQuestionsTextAttrLink: string
}

const FAQ: React.FC<IFAQProps> = ({
  introTitle = `FAQ`,
  sectionTitle = `Frequently Asked Questions`,
  sectionDescription = `Find answers to the most common inquiries regarding our design studio.`,
  faqItems = [
    {
      question: `Does this studio support custom design requests?`,
      answer: `Our studio welcomes custom design requests. We thrive on creating unique experiences tailored to our client's needs.`,
    },
    {
      question: `What is the typical timeline for a project?`,
      answer: `The timeline varies depending on project complexity, but we always aim for efficiency without compromising on quality.`,
    },
    {
      question: `How do I get started with a project?`,
      answer: `Reach out to us with your ideas, and we'll guide you through our process to bring those concepts to life.`,
    },
  ],
  allQuestionsTextAttr = `Check all common questions`,
  allQuestionsTextAttrLink = '/',
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <AnimateInView type="rise">
            <div className="flex flex-col gap-6">
              <p className="font-semibold tracking-widest text-sky-500 uppercase">
                <EditableText propKey="introTitle">{introTitle}</EditableText>
              </p>
              <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50">
                <EditableText propKey="sectionTitle">{sectionTitle}</EditableText>
              </h2>
              <p className="DESC text-base font-normal text-slate-600 dark:text-slate-400">
                <EditableText propKey="sectionDescription">{sectionDescription}</EditableText>
              </p>
            </div>
          </AnimateInView>

          <div className="flex flex-col gap-10">
            <div className="space-y-8">
              {faqItems.map((faq, index) => (
                <AnimateInView key={index} type="rise">
                  <div className="bg-white dark:bg-slate-700 border border-black/10 dark:border-white/10 rounded-lg hover:-translate-y-1  hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                    <div className="p-6 flex flex-col gap-6">
                      <p className="TITLE-SECONDARY text-xl font-semibold text-slate-900 dark:text-slate-50">
                        <EditableText propKey={`faqItems_${index}_question`}>{faq.question}</EditableText>
                      </p>
                      <p className="TEXT-CONTENT text-base font-normal text-slate-600 dark:text-slate-400">
                        <EditableText propKey={`faqItems_${index}_answer`}>{faq.answer}</EditableText>
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
            <AnimateInView type="rise">
              <EditableButton className="TEXT-LINK flex group items-center gap-1 text-base font-semibold text-sky-500 hover:text-sky-400 focus:text-sky-500 " href={allQuestionsTextAttrLink}>
                <EditableText propKey="allQuestionsTextAttr">{allQuestionsTextAttr}</EditableText>
                <span className="group-hover:translate-x-1 transition-all duration-300">→</span>
              </EditableButton>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}


export default FAQ;