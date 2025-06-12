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
  title = 'Meet Our Creative Team',
  description = 'Our team consists of passionate designers, developers, and creatives dedicated to making your vision come to life.',
  people = [
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
    {
      name: 'John Doe',
      role: 'Graphic Designer',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      icon1: 'fa-brands fa-x-twitter',
      icon2: 'fa-brands fa-linkedin',
    },
  ],
}) =>{
  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-white/90 sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/80">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person, index) => (
            <AnimateInView key={index} type="rise">
              <li>
                <EditableImg
                  propKey={`people_${index}_imageUrl`}
                  className="IMAGE aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt={`people_${index}`}
                />
                <h3 className="TITLE-SECONDARY mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-white/90">
                  <EditableText propKey={`people_${index}_name`}>{person.name}</EditableText>
                </h3>
                <p className="TEXT-CONTENT text-base leading-7 text-slate-600 dark:text-white/80">
                  <EditableText propKey={`people_${index}_role`}>{person.role}</EditableText>
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <span className="TEXT-LINK text-slate-400 hover:text-slate-500 dark:hover:text-white">
                      <EditableIcon propKey={`people_${index}_icon1`} icon={person.icon1} iconLibrary="FontAwesome" className="text-xl text-slate-900 dark:text-white/90" />
                    </span>
                  </li>
                  <li>
                    <span className="TEXT-LINK text-slate-400 hover:text-slate-500 dark:hover:text-white">
                      <EditableIcon propKey={`people_${index}_icon2`} icon={person.icon2} iconLibrary="FontAwesome" className="text-xl text-slate-900 dark:text-white/90" />
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