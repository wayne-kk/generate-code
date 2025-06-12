import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableIcon from '@ui/EditableIcon';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IQuestionsItem {
  icon: string
  question: string
  answer: string
}

export interface IFAQProps {
  title: string
  description: string
  questions: IQuestionsItem[]
  supportText: string
  supportButtonTextAttr: string
  supportButtonTextAttrLink:string
}

const FAQ: React.FC<IFAQProps> = ({
  title = `Questions & Answers`,
  description = `Explore the common questions and answers about our Design Studio`,
  questions = [
    { icon:"fa-solid fa-question", question: `How to create an account?`, answer: `You can create an account by clicking on the Sign Up button on the top right corner and filling in your details.` },
    { icon:"fa-solid fa-question", question: `How can I make payment?`, answer: `Payments can be made through various methods including credit cards, PayPal, and bank transfers.` },
    { icon:"fa-solid fa-question", question: `Do you provide discounts?`, answer: `Yes, we offer seasonal discounts and special promotions for our subscribers.` },
    { icon:"fa-solid fa-question", question: `How do you provide support?`, answer: `Our support team is available 24/7 via email, live chat, and phone to assist you with any queries.` },
  ],
  supportText = `Didn't find the answer you are looking for?`,
  supportButtonTextAttr = `Contact our support`,
  supportButtonTextAttrLink = '/',
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col items-center gap-20">
        <AnimateInView type="rise">
          <div className="text-center flex flex-col gap-6">
            <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="DESC text-base font-normal text-slate-600 dark:text-slate-400">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {questions.map((item, index) => (
            <AnimateInView type="rise" key={index}>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full">
                  <EditableIcon propKey={`questions_${index}_icon`} icon={item.icon} iconLibrary="FontAwesome" className="text-white text-lg"/>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-slate-50">
                    <EditableText propKey={`questions_${index}_question`}>{item.question}</EditableText>
                  </p>
                  <p className="TEXT-CONTENT text-base text-slate-600 dark:text-slate-400">
                    <EditableText propKey={`questions_${index}_answer`}>{item.answer}</EditableText>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView type="rise">
          <div className="w-fit flex items-center gap-3 px-8 py-4 bg-white border border-black/10 dark:border-white/10 rounded-full dark:bg-slate-700">
            <EditableText propKey="supportText" className="TEXT-CONTENT text-slate-600 dark:text-slate-400">{supportText}</EditableText>
            <EditableButton className="TEXT-LINK text-sky-500 transition-all duration-200 hover:text-sky-400 focus:text-sky-500 hover:underline" href={supportButtonTextAttrLink}>
              <EditableText propKey="supportButtonTextAttr">{supportButtonTextAttr}</EditableText>
            </EditableButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}

export default FAQ;