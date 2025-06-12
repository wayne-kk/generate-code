import React from 'react';
import EditableText from '@ui/EditableText';

export interface IStatsItem {
  number: string
  label: string
}

export interface IStatsProps {
  title: string
  description: string
  stats: IStatsItem[]
}

const Stats: React.FC<IStatsProps> = ({
  title = `We Measure Success By the Numbers`,
  description = `Our Design Studio is dedicated to elevating brands with aesthetics and functionality, delivering unforgettable digital identities tailored to each client's needs.`,
  stats = [
    { number: '40K+', label: 'Happy customers' },
    { number: '85%', label: 'Client retention rate' },
    { number: '70K+', label: 'Projects delivered' },
    { number: '30+', label: 'Industry accolades' }
  ]
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col max-w-6xl gap-12 mx-auto lg:items-center lg:justify-between lg:flex-row">
          <div className="lg:max-w-md xl:max-w-xl">
            <h1 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
              <EditableText propKey={"title"}>{title}</EditableText>
            </h1>
            <p className="DESC mt-4 text-base font-normal leading-7 text-slate-700 dark:text-white/80 lg:text-lg lg:mt-6 lg:leading-8">
              <EditableText propKey={"description"}>{description}</EditableText>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-0">
            {stats.map((stat, index) => (
              <div key={index} className={`pt-4 dark:border-white/10 pr-4 pb-8 pl-8 sm:pl-12 sm:pt-12 sm:pr-6 ${index >= 2 ? 'border-t border-black/10' : ''} ${index % 2 !== 0 ? 'border-l border-black/10' : ''}`}>
                <p className="TEXT-CONTENT text-5xl font-semibold tracking-tight text-slate-900 dark:text-white/90">
                  <EditableText propKey={`stats_${index}_number`}>{stat.number}</EditableText>
                </p>
                <h3 className="TITLE-SECONDARY mt-3 text-lg font-semibold text-sky-600 dark:text-sky-200">
                  <EditableText propKey={`stats_${index}_label`}>{stat.label}</EditableText>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Stats;