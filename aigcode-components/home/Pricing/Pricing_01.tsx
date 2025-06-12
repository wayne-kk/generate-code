import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import AnimateInView from '@ui/AnimateInView';
import EditableButton from '@ui/EditableButton';

// 类型定义
interface Feature {
  text: string;
  icon: string;
}

interface Plan {
  name: string;
  price: string;
  features: Feature[];
}

interface PricingProps {
  title?: string;
  description?: string;
  plans?: Plan[];
  buttonTextAttr?: string;
  buttonDescription?: string;
}

const Pricing:React.FC<PricingProps> =({
  title = `Affordable Plans`,
  description = `Get started with a free trial today`,
  plans = [
    {
      name: `Starter Pack`,
      price: `$9`,
      features: [
        {
          text: `Up to 10 projects`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Basic support`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Community access`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
    {
      name: `Professional Pack`,
      price: `$29`,
      features: [
        {
          text: `Unlimited projects`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Priority support`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Exclusive resources`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
    {
      name: `Enterprise Pack`,
      price: `$49`,
      features: [
        {
          text: `Dedicated support`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Custom solutions`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Personalized setup`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
  ],
  buttonTextAttr = `text=Contact Us&link=/`,
  buttonDescription = `No credit card required to start`,
}:PricingProps) => {
  return (
    <section className="py-10 bg-white dark:bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-14">
        <AnimateInView type="rise">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="DESC text-base text-slate-600 dark:text-slate-400">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className=" grid grid-cols-1 gap-6 text-center items-center  md:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimateInView key={index} type="rise">
              <div className="px-4 py-5 flex flex-col items-center outline outline-offset-0 outline-slate-200 rounded-lg hover:outline-sky-400 active:outline-sky-500 focus:outline-sky-500  dark:outline-slate-700 dark:hover:outline-sky-400  dark:active:outline-sky-500  dark:focus:outline-sky-500">
                <p className="TITLE-SECONDARY text-lg font-medium text-slate-600 dark:text-slate-400">
                  <EditableText propKey={`plans_${index}_name`}>{plan.name}</EditableText>
                </p>
                <p className="mt-4 text-6xl font-bold text-slate-900 dark:text-white">
                  <EditableText propKey={`plans_${index}_price`}>{plan.price}</EditableText>
                </p>
                <ul className="w-fit flex flex-col mt-8 gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className=" flex flex-row items-center gap-2.5">
                      <EditableIcon propKey={`plans_${index}_features_${featureIndex}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="flex-shrink-0 text-sky-500 text-lg text-sky-500" />
                      <li className="TEXT-CONTENT text-base font-medium text-slate-600 dark:text-slate-400">
                        <EditableText propKey={`plans_${index}_features_${featureIndex}_text`}>
                          {feature.text}
                        </EditableText>
                      </li>
                    </div>
                  ))}
                </ul>

              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView type="rise">
          <div className="flex flex-col items-center gap-4 text-center">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center px-6 py-2 xl:py-3 text-sm sm:text-base 2xl:text-lg font-medium text-white bg-sky-500 rounded-lg focus:outline-none hover:bg-sky-400 transition-colors duration-500">
              <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
            </EditableButton>
            <p className="DESC text-sm text-slate-700 dark:text-slate-400">
              <EditableText propKey="buttonDescription">{buttonDescription}</EditableText>
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}

export default Pricing