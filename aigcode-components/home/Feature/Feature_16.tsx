import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IFeaturesItem {
  name: string
  description: string
  icon: string
}

export interface IFeatureProps {
  title: string
  subtitle: string
  mainDescription: string
  features: IFeaturesItem[]
  imageUrl: string
}

const Feature: React.FC<IFeatureProps> = ({
  title = "Design Your Future",
  subtitle = "Deploy faster",
  mainDescription = "Unlock the full potential of your creative mind. Our platform streamlines your workflow for an unmatched design experience.",
  features = [
    {
      name: "Instant Deployment",
      description: "Elevate your projects with our push-to-deploy feature, ensuring your creations are live in no time.",
      icon: "fa-solid fa-cloud-arrow-up",
    },
    {
      name: "Secure SSL",
      description: "Your security is our priority. Enjoy hassle-free SSL certificates for every project you launch.",
      icon: "fa-solid fa-lock",
    },
    {
      name: "Effortless Backups",
      description: "Never lose your work again. Our automatic database backups keep your designs safe and sound.",
      icon: "fa-solid fa-database",
    },
  ],
  imageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
}) =>{
  return (
    <div className="w-full bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="TITLE-SECONDARY text-base font-semibold leading-7 text-sky-500 dark:text-slate-200"> <EditableText propKey={"subtitle"}>{subtitle}</EditableText></h2>
              <p className="TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                <EditableText propKey={"title"}>{title}</EditableText>
              </p>
              <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <EditableText propKey={"mainDescription"}>{mainDescription}</EditableText>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 dark:text-slate-400 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-9">
                    <div className="inline -ml-8 flex items-center gap-4 font-semibold text-slate-900 dark:text-slate-200">
                      <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary={"FontAwesome"} className="text-sky-500"></EditableIcon>
                      <EditableText propKey={`features_${index}_name`}>{feature.name}</EditableText>
                    </div>
                    <p className="inline TEXT-CONTENT">
                      <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true"></div>
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <EditableImg
                  propKey={"imageUrl"}
                  className="IMAGE bg-slate-100 object-cover aspect-[2/1] md:aspect-[1/1] rounded-tl-xl w-full h-auto"
                  src={imageUrl}
                  alt={imageUrl}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Feature;