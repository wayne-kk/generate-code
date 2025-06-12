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
  title = 'Meet Our Creative Team',
  description = 'Our team consists of passionate designers.',
  people = [
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      name: 'Linda Nguyen',
      role: 'Creative Director',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      name: 'James Johnson',
      role: 'Lead Developer',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
  ],
}) =>{
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-6 text-base font-normal text-slate-700 dark:text-white/90">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-20 gap-8">
          {people.map((person, index) => (
            <AnimateInView type="rise" key={index}>
              <div className="text-center">
                <EditableImg
                  propKey={`people_${index}_imageUrl`}
                  className="IMAGE mx-auto h-24 w-24 rounded-full bg-slate-100 object-cover aspect-[1/1]"
                  src={person.imageUrl}
                  alt={`${person.name}`}
                />
                <h3 className="TITLE-SECONDARY mt-6 text-lg font-semibold text-slate-900 dark:text-white/90">
                  <EditableText propKey={`people_${index}_name`}>{person.name}</EditableText>
                </h3>
                <p className="TEXT-CONTENT text-sm font-normal text-slate-700 dark:text-white/90">
                  <EditableText propKey={`people_${index}_role`}>{person.role}</EditableText>
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Team;