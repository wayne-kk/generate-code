import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IPeopleItem {
  name: string
  role: string
  imageUrl: string
}

export interface ITeamProps {
  title: string
  description: string
  people: IPeopleItem[]
}

const Team: React.FC<ITeamProps> = ({
  title = "Our Creative Minds",
  description = "Meet the innovative and dedicated team behind our design studio. Together, we bring your visions to life.",
  people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Jordan Runolfsdottir",
      role: "Chief Design Officer",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Darcy Lueilwitz",
      role: "Head of Operations",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Jerome Bell",
      role: "CTO",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
  ],
}) =>{
  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white/90">
            <EditableText propKey={`title`}>{title}</EditableText>
          </h2>
          <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/90">
            <EditableText propKey={`description`}>{description}</EditableText>
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person, index) => (
            <li key={index}>
              <AnimateInView type="rise">
                <div className="flex items-center gap-x-6">
                  <EditableImg
                    propKey={`people_${index}_imageUrl`}
                    className="IMAGE h-16 w-16 rounded-full object-cover bg-slate-100 aspect-[1/1]"
                    src={person.imageUrl}
                    alt={`people_${index}_image`}
                  />
                  <div>
                    <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 tracking-tight text-slate-900 dark:text-white/90">
                      <EditableText propKey={`people_${index}_name`}>{person.name}</EditableText>
                    </h3>
                    <p className="DESC text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">
                      <EditableText propKey={`people_${index}_role`}>{person.role}</EditableText>
                    </p>
                  </div>
                </div>
              </AnimateInView>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;