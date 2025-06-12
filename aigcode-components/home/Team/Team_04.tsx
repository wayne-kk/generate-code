import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ISocialsItem {
  name: string
  icon: string
}

export interface ITeammembersItem {
  name: string
  role: string
  bio: string
  imageUrl: string
  socials: ISocialsItem[]
}

export interface ITeamProps {
  title: string
  description: string
  teamMembers: ITeammembersItem[]
}

const defaultTeamMembers: ITeammembersItem[] = [
  {
    name: `Cymone Magdalina`,
    role: `Chef`,
    bio: `Passionate about confectionery and creating delightful tastes.`,
    imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    socials: [
      { name: `Twitter`, icon: `fa-brands fa-twitter` },
      { name: `LinkedIn`, icon: `fa-brands fa-linkedin-in` },
    ],
  },
  {
    name: `Sophia Ella`,
    role: `Professional Baker`,
    bio: `Dedicated to the art of baking and pastry perfection.`,
    imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    socials: [
      { name: `Twitter`, icon: `fa-brands fa-twitter` },
      { name: `LinkedIn`, icon: `fa-brands fa-linkedin-in` },
    ],
  },
  {
    name: `Hyeon Vivek`,
    role: `Cooking Teacher`,
    bio: `Inspiring budding chefs with innovative cooking techniques.`,
    imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    socials: [
      { name: `Twitter`, icon: `fa-brands fa-twitter` },
      { name: `LinkedIn`, icon: `fa-brands fa-linkedin-in` },
    ],
  },
];

const Team: React.FC<ITeamProps> = ({
  title = 'Meet Our Creative Team',
  description = `We bring a crafted and inspired approach to every project we work on.`,
  teamMembers = defaultTeamMembers,
}) => {
  return (
    <section className="py-10 bg-slate-900 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="TITLE-PRIMARY text-5xl font-extrabold text-white/90 dark:text-white/90">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h1>
          <p className="DESC mt-6 text-lg font-normal text-white/80 dark:text-white/80">
            <EditableText propKey={"description"}>{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 mx-auto mt-12  md:mt-16 md:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <AnimateInView key={member.name} type="rise">
              <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
                <span className="absolute flex bg-gradient-to-t from-slate-800 w-full h-full">
                </span>
                <EditableImg
                  propKey={`teamMembers_${index}_imageUrl`}
                  className="IMAGE rounded-lg bg-slate-100 w-full h-full object-cover aspect-[3/4]"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <div className="absolute inset-x-0 bottom-0">
                  <div className="px-8">
                    <p className="TITLE-SECONDARY text-xl font-semibold text-white md:text-2xl">
                      <EditableText propKey={`teamMembers_${index}_name`}>{member.name}</EditableText>
                    </p>
                    <p className="DESC text-lg italic text-white/90 mt-3 md:text-xl">
                      <EditableText propKey={`teamMembers_${index}_role`}>{member.role}</EditableText>
                    </p>
                    <p className="TEXT-CONTENT text-base font-normal text-white/80 mt-2 md:lg">
                      <EditableText propKey={`teamMembers_${index}_bio`}>{member.bio}</EditableText>
                    </p>
                  </div>

                  <div className="border-t mt-6 border-black/20 dark:border-white/20 divide-x divide-black/20 dark:divide-white/20 flex">
                    {member.socials.map((social, socialIndex) => (
                      <EditableButton
                        key={social.name}
                        className="BTN-SECONDARY flex items-center justify-center w-full px-4 py-3 hover:bg-slate-600 dark:hover:bg-slate-600 transition-all duration-200"
                      >
                        <span className="sr-only">{social.name}</span>
                        <EditableIcon propKey={`teamMembers_${index}_socials_${socialIndex}_icon`} icon={social.icon} iconLibrary={"FontAwesome"} className="text-xl text-white/90 dark:text-white/90"/>
                      </EditableButton>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;