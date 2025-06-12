import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IFeaturesItem {
  title: string
  text: string
  imageUrl: string
  detail: string
}

export interface IFeatureProps {
  title: string
  description: string
  features: IFeaturesItem[]
}

const Feature: React.FC<IFeatureProps> = ({
  title = `Explore Design Studio, the pinnacle of creativity & elegance`,
  description = `Craft stunning pages in just 3 effortless steps`,
  features = [
    {
      title: `Showcase your design portfolio with style`,
      text: `Utilize Design Studio to present your work and captivate your audience.`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      detail: `Immerse yourself in a world where creativity meets precision. Display your projects in a layout that's as meticulously crafted as your designs.`
    },
    {
      title: `Analyze creative insights seamlessly`,
      text: `Gain a deeper understanding of your audience's preferences.`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      detail: `Leverage analytics to refine your artistic direction. Make informed decisions based on real data to enhance your studio's creative output.`
    },
    {
      title: `Engage with clients and gather feedback effortlessly`,
      text: `Foster a collaborative environment with live feedback to perfect your projects.`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      detail: `Build a bridge between your vision and your clients' needs. Use real-time feedback to iterate and evolve your designs for maximum impact.`
    }
  ]
}) =>{
  return (
    <section className="py-12 bg-slate-50 sm:py-16 lg:py-20 dark:bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl flex flex-col justify-between sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="DESC text-lg font-medium text-slate-700 dark:text-white/80"><EditableText propKey={"description"}>{description}</EditableText></p>
          <h2 className="TITLE-PRIMARY mt-4 text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl dark:text-white/80"><EditableText propKey={"title"}>{title}</EditableText></h2>
        </div>

        <div className="flex flex-col mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:flex-row md:gap-x-6 lg:gap-x-16 md:text-left">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="TITLE-SECONDARY text-2xl font-bold text-slate-900 dark:text-white/80"><EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText></h3>
              <p className="DESC mt-4 text-base leading-7 text-slate-900 dark:text-white/80"><EditableText propKey={`features_${index}_text`}>{feature.text}</EditableText></p>
              
              <div className="w-full h-full flex flex-col items-end">
              <AnimateInView type="rise">
                <EditableImg propKey={`features_${index}_imageUrl`} className="IMAGE object-cover aspect-[4/3] w-full mx-auto mt-10 rounded-lg bg-slate-100 md:mx-0" src={feature.imageUrl} alt={feature.imageUrl} />
              </AnimateInView>

              <p className="TEXT-CONTENT text-base leading-7 text-slate-700 mt-7 dark:text-white/80"><EditableText propKey={`features_${index}_detail`}>{feature.detail}</EditableText></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;