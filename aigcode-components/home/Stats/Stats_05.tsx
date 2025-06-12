import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IStatsItem {
  icon: string
  value: string
  label: string
}

export interface IStatsProps {
  title: string
  description: string
  stats: IStatsItem[]
}

const Stats: React.FC<IStatsProps> = ({
  title = "Design Studio Solutions",
  description = "Elevate your development with our design studio's innovative approach",
  stats = [
    { icon: "fa-solid fa-users", value: "430k", label: "Satisfied Clients" },
    { icon: "fa-solid fa-envelope", value: "149k", label: "Subscribers" },
    { icon: "fa-solid fa-dollar-sign", value: "$1M+", label: "Monthly Revenue" }
  ]
}) =>{
  return (
    <section className="py-12 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:max-w-xl lg:mx-auto sm:text-center">
          <h1 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h1>
          <p className="DESC mt-8 text-base font-normal text-slate-700 dark:text-white/90">
            <EditableText propKey={"description"}>{description}</EditableText>
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-8 md:grid-cols-3 md:gap-x-12">
          {stats.map((stat, index) => (
            <AnimateInView key={index} type="rise">
              <div className="overflow-hidden bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 rounded-2xl">
                <div className="p-6 lg:py-10 lg:px-9">
                  <EditableIcon propKey={`stats_${index}_icon`} icon={stat.icon} iconLibrary={"FontAwesome"} className="text-3xl text-slate-900 dark:text-white"/>
                  <p className="mt-24 text-5xl font-bold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`stats_${index}_value`}>{stat.value}</EditableText>
                  </p>
                  <p className="mt-4 text-lg font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`stats_${index}_label`}>{stat.label}</EditableText>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Stats;