import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IPeopleItem {
  name: string
  role: string
  imageUrl: string
  icon1: string
  icon2: string
}

export interface ITeamProps {
  title: string
  description: string
  people: IPeopleItem[]
}

const Team: React.FC<ITeamProps> = ({
  title = 'Our Creative Minds',
  description = 'Discover the talented team that brings our design studio to life.',
  people = [
    {
      name: 'Whitney Francis',
      role: 'Creative Director',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,creative',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,design',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
    {
      name: 'Floyd Miles',
      role: 'Visual Artist',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,art',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
  ],
}) =>{
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-slate-800 relative">
      <div className="max-w-7xl mx-auto text-center">
        <AnimateInView type="rise">
          <h2 className="TITLE-PRIMARY text-2xl font-extrabold text-slate-900 dark:text-white/80 md:text-4xl"><EditableText propKey="title">{title}</EditableText></h2>
          <p className="DESC mt-4 text-lg leading-8 text-slate-700 dark:text-white/60"><EditableText propKey="description">{description}</EditableText></p>
        </AnimateInView>
        <ul
          role="list"
          className="mx-auto mt-20 flex justify-center flex-wrap max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none"
        >
          {people.map((person, index) => (
            <AnimateInView key={index} type="rise">
              <li className="w-full">
                <EditableImg propKey={`people_${index}_imageUrl`} className="IMAGE mx-auto h-56 w-56 rounded-full object-cover aspect-[1/1]" src={person.imageUrl} alt={person.imageUrl} />
                <h3 className="TITLE-SECONDARY mt-6 text-base font-semibold leading-7 tracking-tight text-slate-900 dark:text-white/80"><EditableText propKey={`people_${index}_name`}>{person.name}</EditableText></h3>
                <p className="DESC text-sm leading-6 text-slate-600 dark:text-white/60"><EditableText propKey={`people_${index}_role`}>{person.role}</EditableText></p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <span className="text-slate-400 hover:text-slate-500 dark:hover:text-white/60">
                      <EditableIcon propKey={`people_${index}_icon1`} icon={person.icon1} iconLibrary="FontAwesome" className="text-xl" />
                      <span className="sr-only">X</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-400 hover:text-slate-500 dark:hover:text-white/60">
                      <EditableIcon propKey={`people_${index}_icon2`} icon={person.icon2} iconLibrary="FontAwesome" className="text-xl" />
                      <span className="sr-only">LinkedIn</span>
                    </span>
                  </li>
                </ul>
              </li>
            </AnimateInView>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Team;