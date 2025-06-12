import React from 'react';
import EditableText from '@ui/EditableText';

export interface IStatsItem {
  id: number
  name: string
  value: string
}

export interface IStatsProps {
  stats: IStatsItem[]
}

const Stats: React.FC<IStatsProps> = ({
  stats = [
    { id: 1, name: 'Total Projects Completed', value: '1,200+' },
    { id: 2, name: 'Happy Clients Worldwide', value: '300+' },
    { id: 3, name: 'Awards and Recognitions', value: '50+' },
  ]
}) =>{
  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="DESC text-base leading-7 text-gray-600 dark:text-slate-400">
                <EditableText propKey={`stats_${index}_name`}>{stat.name}</EditableText>
              </dt>
              <dd className="TITLE-PRIMARY order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white/90 sm:text-5xl">
                <EditableText propKey={`stats_${index}_value`}>{stat.value}</EditableText>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}


export default Stats;