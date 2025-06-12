import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IFaqitemsItem {
  question: string
  answer: string
  icon: string
}

export interface IFAQProps {
  introTitle: string
  title: string
  faqItems: IFaqitemsItem[]
  imageUrl: string
}

const FAQ: React.FC<IFAQProps> = ({
  introTitle = `FAQS`,
  title = `Frequently Asked Questions`,
  faqItems = [
    {
      question: `How do I start a project with your studio?`,
      answer: `Starting a project with us is easy! Just contact us through our website or give us a call, and we'll guide you through the process.`,
      icon: 'fa-solid fa-angle-down',
    },
    {
      question: `What kind of design services do you offer?`,
      answer: `We offer a wide range of design services including branding, web design, UI/UX, and print materials.`,
      icon: 'fa-solid fa-angle-down',
    },
    {
      question: `Can I see examples of past projects?`,
      answer: `Absolutely! Our portfolio is available on our website, showcasing a variety of projects we've completed.`,
      icon: 'fa-solid fa-angle-down',
    },
  ],
  imageUrl = `https://plus.unsplash.com/premium_photo-1664281095505-6b631bea83de?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
}) =>{
  const [activeFaq, setActiveFaq] = React.useState(0);

  return (
    <section className="py-10 bg-white dark:bg-slate-800">
      <div className="px-4 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
          <AnimateInView type="rise">
            <EditableImg propKey="imageUrl" className="IMAGE object-cover w-full h-auto aspect-[4/3] md:aspect-[3/4] rounded-2xl bg-slate-100" src={imageUrl} alt={imageUrl} />
          </AnimateInView>

          <div className="flex flex-col gap-12">
            <AnimateInView type="rise">
              <div className="flex flex-col gap-6">
                <p className="DESC font-semibold tracking-widest text-sky-500 uppercase">
                  <EditableText propKey="introTitle">{introTitle}</EditableText>
                </p>
                <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white">
                  <EditableText propKey="title">{title}</EditableText>
                </h2>
              </div>
            </AnimateInView>

            <AnimateInView type="rise">
              <div className="-my-8 divide-y divide-black/10 dark:divide-white/10">
                {faqItems.map((faq, index) => (
                  <div key={index} className="py-8">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                      className="flex items-center justify-between w-full py-6"
                    >
                      <EditableText propKey={`faqItems_${index}_question`} className="TITLE-SECONDARY text-xl font-medium text-left text-slate-900 dark:text-white/90">
                        {faq.question}
                      </EditableText>
                      <EditableIcon propKey={`faqItems_${index}_icon`} icon={faq.icon} iconLibrary="FontAwesome" className="ml-6 text-lg text-slate-400 dark:text-white/90" />
                    </button>

                    <div className={`${activeFaq === index ? 'block ' : 'hidden'}`}>
                      <p className="TEXT-CONTENT text-base text-slate-600 dark:text-white/90">
                        <EditableText propKey={`faqItems_${index}_answer`}>{faq.answer}</EditableText>
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}


export default FAQ;