import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IMembersItem {
  name: string
  role: string
  imageUrl: string
}

export interface ITeamProps {
  title: string
  description: string
  members: IMembersItem[]
  seeAllMembersText: string
  seeAllMembersIcon: string
}

const Team: React.FC<ITeamProps> = ({
  title = "Meet Our Creative Minds",
  description = "Our team provides the creativity and technical expertise to ensure your project's success.",
  members = [
    {
      name: "Albert Flores",
      role: "VP of Sales",
      imageUrl: "https://source.unsplash.com/random/900x900/?portrait,professional",
    },
    {
      name: "Theresa Webb",
      role: "Business Development Manager",
      imageUrl: "https://source.unsplash.com/random/900x900/?corporate,business",
    },
    {
      name: "Savannah Nguyen",
      role: "Director of Product",
      imageUrl: "https://source.unsplash.com/random/900x900/?creative,director",
    },
    {
      name: "Daniel Murphy",
      role: "Business Analyst",
      imageUrl: "https://source.unsplash.com/random/900x900/?analyst,finance",
    },
    {
      name: "Darrell Steward",
      role: "Director of Sales",
      imageUrl: "https://source.unsplash.com/random/900x900/?executive,leader",
    }
  ],
  seeAllMembersText = "See All Members",
  seeAllMembersIcon = "fa-solid fa-arrow-right-long",
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="overflow-hidden bg-slate-100 dark:bg-slate-600 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 px-8 py-12 text-center lg:text-left">
              <h1 className="TITLE-PRIMARY text-5xl font-extrabold text-slate-900 dark:text-white/90">
                <EditableText propKey={"title"}>{title}</EditableText>
              </h1>
              <p className="DESC mt-4 text-base font-normal leading-7 text-slate-700 dark:text-white/70 lg:text-lg lg:mt-6 lg:leading-8">
                <EditableText propKey={"description"}>{description}</EditableText>
              </p>
            </div>

            {members.map((member, index) => (
              <div className={`${index >= 2 ? "lg:order-3" : null}`} key={member.name}>
                <AnimateInView type="rise">
                  <div className="relative overflow-hidden lg:order-2 group">
                    <EditableImg propKey={`members_${index}_imageUrl`} className="IMAGE object-cover w-full h-full aspect-[1/1] transition-all duration-200 group-hover:scale-110" src={member.imageUrl} alt={member.name} />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                      <div className="scale-90 sm:scale-100">
                        <p className="DESC text-base font-semibold text-white">
                          <EditableText propKey={`members_${index}_name`}>{member.name}</EditableText>
                        </p>
                        <p className="DESC mt-1 text-sm font-normal text-gray-300">
                          <EditableText propKey={`members_${index}_role`}>{member.role}</EditableText>
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
              </div>
            ))}
            <div className="flex items-end justify-start px-8 py-8">
              <EditableButton className="BTN-SECONDARY inline-flex items-center gap-1 text-sm font-semibold text-sky-600 dark:text-slate-200 hover:text-sky-700 dark:hover:text-white hover:underline">
                <EditableText propKey={"seeAllMembersText"}>{seeAllMembersText}</EditableText>
                <EditableIcon propKey={"seeAllMembersIcon"} icon={seeAllMembersIcon} iconLibrary={"FontAwesome"} className="TEXT-LINK ml-1 text-sky-600 dark:text-slate-200 hover:text-sky-700 dark:hover:text-white transition-all duration-200"/>
              </EditableButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Team;