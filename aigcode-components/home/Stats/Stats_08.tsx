import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IStatsItem {
  id: number
  name: string
  value: string
}

export interface IStatsProps {
  stats: IStatsItem[]
  backgroundImageUrl: string
  sectionTitle: string
  mainHeading: string
  description: string
}

const Stats: React.FC<IStatsProps> = ({
  stats = [
    { id: 1, name: "Projects Completed", value: "1,200+" },
    { id: 2, name: "Satisfied Clients", value: "800+" },
    { id: 3, name: "Awards Won", value: "15+" },
    { id: 4, name: "Years of Service", value: "10+" },
  ],
  backgroundImageUrl = "https://source.unsplash.com/random/1200x800/?creative,work",
  sectionTitle = "Our Achievements",
  mainHeading = "Trusted by the Best in Design",
  description = "We've collaborated with industry leaders to create memorable experiences that last a lifetime.",
}) =>{
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20">
      <EditableImg
        propKey={`backgroundImageUrl`}
        src={backgroundImageUrl}
        className="IMAGE absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="TITLE-SECONDARY text-base font-semibold leading-8 text-sky-400">
            <EditableText propKey={`sectionTitle`}>{sectionTitle}</EditableText>
          </h2>
          <p className="TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <EditableText propKey={`mainHeading`}>{mainHeading}</EditableText>
          </p>
          <p className="DESC mt-6 text-lg leading-8 text-gray-300">
            <EditableText propKey={`description`}>
              {description}
            </EditableText>
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/20 pl-6">
              <dt className="TEXT-CONTENT text-sm leading-6">
                <EditableText propKey={`stats_${index}_name`}>{stat.name}</EditableText>
              </dt>
              <dd className="TEXT-CONTENT order-first text-3xl font-semibold tracking-tight">
                <EditableText propKey={`stats_${index}_value`}>{stat.value}</EditableText>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Stats;