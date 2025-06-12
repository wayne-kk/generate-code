import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IMembersItem {
  name: string
  role: string
  imageUrl: string
}

export interface ITeamProps {
  title: string
  description: string
  members: IMembersItem[]
}

const Team: React.FC<ITeamProps> = ({
  title = "Our Creative Minds",
  description = "The driving force behind our design studio's success",
  members = [
    {
      name: "Albert Flores",
      role: "Co-founder, Chairman, Executive Director",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
      name: "Kathryn Murphy",
      role: "Lead Designer",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
      name: "Jane Cooper",
      role: "Project Manager",
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    }
  ]
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h2>
          <p className="DESC mt-5 text-base font-normal text-slate-700 dark:text-white/90">
            <EditableText propKey={"description"}>{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 px-12 mt-12 mx-auto sm:px-0 sm:mt-16 sm:grid-cols-3 md:gap-x-8 xl:gap-x-36 lg:max-w-4xl xl:max-w-5xl">
          {members.map((member, index) => (
            <div key={member.name}>
              <AnimateInView type="rise">
                <EditableImg
                  propKey={`members_${index}_imageUrl`}
                  className="IMAGE w-full h-60 lg:h-80 object-cover rounded-lg bg-slate-100 aspect-[4/3]"
                  src={member.imageUrl}
                  alt={member.imageUrl}
                />
              </AnimateInView>
              <p className="TITLE-SECONDARY mt-5 text-lg font-bold text-slate-900 dark:text-white/90 sm:mt-10">
                <EditableText propKey={`members_${index}_name`}>{member.name}</EditableText>
              </p>
              <p className="DESC mt-2 text-sm font-normal text-slate-700 dark:text-white/90">
                <EditableText propKey={`members_${index}_role`}>{member.role}</EditableText>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Team;