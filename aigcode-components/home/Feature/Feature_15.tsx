import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IFeaturesItem {
  name: string
  description: string
  icon: string
}

export interface IIFeaturePropsBackgroundcolor {
  colorA: string
  colorB: string
}

export interface IFeatureProps {
  title: string
  description: string
  features: IFeaturesItem[]
  imageUrl: string
  backgroundColor: IIFeaturePropsBackgroundcolor
}

const Feature: React.FC<IFeatureProps> = ({
  title = "Enhance Your Creative Workflow",
  description = "Leverage cutting-edge tools and services to make your designs stand out. Join our community of creative professionals today.",
  features = [
    {
      name: "Seamless Collaboration",
      description: "Streamline your team's workflow with real-time collaboration and sharing features.",
      icon: "fa-solid fa-users",
    },
    {
      name: "Advanced Security",
      description: "Protect your projects with top-tier encryption and secure cloud storage.",
      icon: "fa-solid fa-shield-alt",
    },
    {
      name: "Efficient Backups",
      description: "Never lose your work with automated backups and version control.",
      icon: "fa-solid fa-cloud-upload-alt",
    },
  ],
  imageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  backgroundColor = {
    colorA: "#ff80b5",
    colorB: "#9089fc"
  }
}) =>{
  return (
    <div className="bg-white py-16 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 bg-gradient-to-r from-gray-950 to-gray-700 dark:from-gray-900 dark:to-gray-600">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-slate-50">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC mt-6 text-lg leading-8 text-gray-300 dark:text-slate-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>
            <EditableImg propKey="imageUrl" className="IMAGE relative z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none aspect-[2432/1442] object-cover" src={imageUrl} alt="imageUrl" />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t border-black/10 dark:border-white/10 lg:pt-8">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative">
                    <dt className="flex items-center gap-2 font-semibold text-white">
                      <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className=" text-lg text-indigo-500" aria-hidden="true" />
                      <EditableText propKey={`features_${index}_name`}>{feature.name}</EditableText>
                    </dt>
                    <p className="mt-2">
                      <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            aria-hidden="true"
          >
            <div
              className={`aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-25`}
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;