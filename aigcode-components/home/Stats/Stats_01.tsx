import React from 'react';
import EditableText from '@ui/EditableText';

export interface IStatsItem {
  number: string
  label: string
  detail: string
}

export interface IStatsProps {
  title: string
  description: string
  stats: IStatsItem[]
}

const Stats: React.FC<IStatsProps> = ({
  title = "Our Impact in Numbers",
  description = "Discover how our innovative approaches have paved the way for creative solutions and lasting partnerships.",
  stats = [
    { number: "6+", label: "Years of Creativity", detail: "Crafting digital experiences" },
    { number: "4821", label: "Projects Completed", detail: "Delivering exceptional results" },
    { number: "37+", label: "Dedicated Experts", detail: "Collaborating for success" }
  ]
}) =>{

  return (
    <section className="py-10 bg-slate-50 sm:py-16 lg:py-24 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h2>
          <p className="DESC mt-3 text-base font-normal text-slate-700 dark:text-slate-300 md:mt-8">
            <EditableText propKey={"description"}>{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center md:grid-cols-3 md:gap-x-8 lg:mt-24">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="TITLE-SECONDARY text-7xl font-bold">
                <EditableText propKey={`stats_${index}_number`} className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">{stat.number}</EditableText>
              </h3>
              <p className="TEXT-CONTENT mt-4 text-lg font-semibold text-slate-900 dark:text-slate-200">
                <EditableText propKey={`stats_${index}_label`}>{stat.label}</EditableText>
              </p>
              <p className="DESC text-sm font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                <EditableText propKey={`stats_${index}_detail`}>{stat.detail}</EditableText>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Stats;