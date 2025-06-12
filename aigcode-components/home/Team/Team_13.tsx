import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IPeopleItem {
  name: string
  role: string
  imageUrl: string
  location: string
}

export interface ITeamProps {
  title: string
  description: string
  people: IPeopleItem[]
}

const Team: React.FC<ITeamProps> = ({
  title = 'Meet Our Creative Team',
  description = 'Our team consists of passionate designers, developers, and creators dedicated to crafting unique digital experiences.',
  people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,leader',
      location: 'Toronto, Canada',
    },
    {
      name: 'Jordan Silva',
      role: 'Lead Designer',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,designer',
      location: 'New York, USA',
    },
    {
      name: 'Casey Li',
      role: 'Senior Developer',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,developer',
      location: 'San Francisco, USA',
    },
    {
      name: 'Alexa Richardson',
      role: 'Marketing Director',
      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,marketer',
      location: 'London, UK',
    },
  ],
}) =>{
  return (
    <div className="w-full bg-gradient-to-b bg-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="TITLE-PRIMARY text-2xl font-extrabold text-white/90 md:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-6 text-base font-normal text-white/70">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person, index) => (
            <AnimateInView key={person.name} type="rise">
              <li>
                <EditableImg propKey={`people_${index}_imageUrl`} className="IMAGE aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.imageUrl} />
                <h3 className="TITLE-SECONDARY mt-6 text-lg font-semibold leading-8 tracking-tight text-white/90">
                  <EditableText propKey={`people_${index}_name`}>{person.name}</EditableText>
                </h3>
                <p className="DESC text-base leading-7 text-white/70">
                  <EditableText propKey={`people_${index}_role`}>{person.role}</EditableText>
                </p>
                <p className="TEXT-CONTENT text-sm leading-6 text-white/50">
                  <EditableText propKey={`people_${index}_location`}>{person.location}</EditableText>
                </p>
              </li>
            </AnimateInView>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Team;