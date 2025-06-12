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
  sectionSubtitle: string
  description: string
}

const Stats: React.FC<IStatsProps> = ({
  stats = [
    { id: 1, name: 'Innovative Projects', value: '8,000+' },
    { id: 2, name: 'Satisfied Clients', value: '3,000+' },
    { id: 3, name: 'Professional Awards', value: '150+' },
    { id: 4, name: 'Years of Service', value: '10+' },
  ],
  backgroundImageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", // Adjusted the resolution
  sectionTitle = "Our Achievements",
  sectionSubtitle = "Dedication and Excellence",
  description = "At our studio, we're committed to pushing the boundaries of design to create outstanding solutions for our clients. Our team's dedication has been recognized worldwide.",
}) =>{
  return (
    <div className="w-full mx-auto max-w-7xl py-10 px-4 bg-white dark:bg-slate-800 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
      <EditableImg
        propKey={"backgroundImageUrl"}
        className="IMAGE w-full h-auto object-cover bg-slate-100 aspect-[16/9] md:aspect-[1/1] "
        src={backgroundImageUrl}
        alt={backgroundImageUrl}
      />


      <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
        <h2 className="TITLE-PRIMARY text-base font-semibold leading-8 text-sky-600 dark:text-white/80">
          <EditableText propKey={"sectionTitle"}>{sectionTitle}</EditableText>
        </h2>
        <p className="TITLE-SECONDARY mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white/80 sm:text-4xl">
          <EditableText propKey={"sectionSubtitle"}>{sectionSubtitle}</EditableText>
        </p>
        <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/80">
          <EditableText propKey={"description"}>{description}</EditableText>
        </p>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-black/20 dark:border-white/20 pl-6">
              <dt className="TEXT-CONTENT text-sm leading-6 text-slate-600 dark:text-white/80">
                <EditableText propKey={`stats_${index}_name`}>{stat.name}</EditableText>
              </dt>
              <dd className="TEXT-CONTENT order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white/80">
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