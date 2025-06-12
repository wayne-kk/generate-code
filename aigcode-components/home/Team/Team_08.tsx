import React from 'react';
import EditableButton from '@ui/EditableButton';
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

const Team: React.FC<ITeamProps> = ({ title = 'Meet Our Creative Team', 
  description = 'A dynamic group of creatives who are passionate about design and innovation.',
   people = [{ name: 'Leonard Krasner', role: 'Senior Designer', imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,creative', icon1: 'fa-brands fa-x-twitter', icon2: 'fa-brands fa-linkedin' }, { name: 'Alyssa Atkinson', role: 'Graphic Designer', imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,art', icon1: 'fa-brands fa-x-twitter', icon2: 'fa-brands fa-linkedin' }, { name: 'Jordan Jackson', role: 'UI/UX Designer', imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,technology', icon1: 'fa-brands fa-x-twitter', icon2: 'fa-brands fa-linkedin' }] }) =>{
  return (
    <div className="w-full bg-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-4 text-lg leading-8 text-white/60">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {people.map((person, index) => (
            <div key={index} className="rounded-2xl p-10 bg-slate-800 flex-1 min-w-[240px] max-w-xs">
              <EditableImg propKey={`people_${index}_imageUrl`} className="IMAGE w-full aspect-square rounded-full object-cover" src={person.imageUrl} alt={`people_${index}_imageUrl`} />
              <h3 className="TITLE-SECONDARY mt-6 text-base text-center font-semibold leading-7 tracking-tight text-white">
                <EditableText propKey={`people_${index}_name`}>{person.name}</EditableText>
              </h3>
              <p className="DESC text-sm leading-6 text-center text-white/60">
                <EditableText propKey={`people_${index}_role`}>{person.role}</EditableText>
              </p>
              <ul className="mt-6 flex justify-center gap-x-6">
                <li>
                  <EditableButton className="TEXT-LINK text-white/60 hover:text-white/70">
                    <EditableIcon propKey={`people_${index}_icon1`} icon={person.icon1} iconLibrary="FontAwesome" className="text-lg" />
                  </EditableButton>
                </li>
                <li>
                  <EditableButton className="TEXT-LINK text-white/60 hover:text-white/70">
                    <EditableIcon propKey={`people_${index}_icon2`} icon={person.icon2} iconLibrary="FontAwesome" className="text-lg" />
                  </EditableButton>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;