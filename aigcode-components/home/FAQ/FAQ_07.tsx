import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IFaqsItem {
  question: string
  answer: string
  icon: string
}

export interface IFAQProps {
  title: string
  faqs: IFaqsItem[]
}

const FAQ: React.FC<IFAQProps> = ({
  title = 'Design Studio FAQs',
  faqs = [
    {
      question: 'Why choose our design studio?',
      answer: 'Our commitment to innovative design and exceptional craftsmanship ensures unique solutions tailored to your needs.',
      icon: 'fa-solid fa-plus',
    },
    {
      question: 'What services do we offer?',
      answer: 'From branding and web design to interior spaces, we provide a wide range of services to bring your vision to life.',
      icon: 'fa-solid fa-plus',
    },
    {
      question: 'How does our design process work?',
      answer: 'We collaborate closely with our clients through a series of workshops and revisions to ensure the final product exceeds expectations.',
      icon: 'fa-solid fa-plus',
    },
  ],
}) =>{
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleIndex = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="w-full max-w-7xl mx-auto py-10 px-4 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-black/10 dark:divide-white/10">
          <h2 className="TITLE-PRIMARY text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white/80">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-black/10 dark:divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button className="flex w-full items-start justify-between text-left" onClick={() => toggleIndex(index)}>
                    <span className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/80">
                      <EditableText propKey={`faqs_${index}_question`}>{faq.question}</EditableText>
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <EditableIcon propKey={`faqs_${index}_icon`} icon={faq.icon} iconLibrary="FontAwesome" className="text-lg text-slate-900 dark:text-white/80" />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="TEXT-CONTENT text-base leading-7 text-slate-700 dark:text-white/80">
                      <EditableText propKey={`faqs_${index}_answer`}>{faq.answer}</EditableText>
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}


export default FAQ;