import React from 'react';
import EditableText from '@ui/EditableText';

export interface IStatsItem {
  id: number
  name: string
  value: string
}

export interface IStatsProps {
  title: string
  description: string
  stats: IStatsItem[]
}

const Stats: React.FC<IStatsProps> = ({
  title = "Empowering Creative Minds Globally",
  description = "Join a community where your creative work is valued and make your mark in the digital world.",
  stats = [
    { id: 1, name: "Active Projects", value: "15,000+" },
    { id: 2, name: "Satisfied Clients", value: "10,000+" },
    { id: 3, name: "Design Awards", value: "500+" },
    { id: 4, name: "Team Members", value: "120+" },
  ],
}) =>{

  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white/90"><EditableText propKey={`title`}>{title}</EditableText></h2>
            <p className="DESC mt-4 text-lg leading-8 text-slate-600 dark:text-white/70"><EditableText propKey={`description`}>{description}</EditableText></p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex flex-col bg-slate-50 p-8 dark:bg-slate-600">
                <dt className="TEXT-CONTENT text-sm font-semibold leading-6 text-slate-600 dark:text-white/70"><EditableText propKey={`stats_${index}_name`}>{stat.name}</EditableText></dt>
                <dd className="TEXT-CONTENT order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white/90"><EditableText propKey={`stats_${index}_value`}>{stat.value}</EditableText></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Stats;