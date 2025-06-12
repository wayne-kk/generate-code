import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IEducationbackgroundItem {
  year: string
  degree: string
  description: string
}

export interface IWorkexperienceItem {
  year: string
  position: string
  description: string
}

export interface IProjectsItem {
  title: string
  description: string
}

export interface ISociallinksItem {
  platform: string
  url: string
}

export interface IPersonalCVProps {
  location: string
  phone: string
  email: string
  website: string
  role: string
  name: string
  bio: string
  educationBackground: IEducationbackgroundItem[]
  workExperience: IWorkexperienceItem[]
  projects: IProjectsItem[]
  socialLinks: ISociallinksItem[]
  imageUrl: string
  educationTitle: string
  workExperienceTitle: string
  projectsTitle: string
  socialTitle: string
}

const PersonalCV: React.FC<IPersonalCVProps> = ({
  location = "New York, USA",
  phone = "+10 123 456 789",
  email = "contact@designstudio.com",
  website = "https://designstudio.com",
  role = "Creative Director",
  name = "Alex Johnson",
  bio = "Leading a team of passionate designers and developers, I drive innovation and creativity at Design Studio, crafting unique digital experiences that stand out.",
  educationBackground = [
    {
      year: "2000-2005",
      degree: "Bachelor in Graphic Design, University London, UK",
      description: "Gained foundational skills in design principles, typography, and digital art, setting the stage for a career in creative design."
    },
    {
      year: "2005-2007",
      degree: "Master in Digital Media, University NY, USA",
      description: "Advanced my knowledge in digital media, focusing on interactive design and digital marketing strategies."
    },
    {
      year: "2007-2009",
      degree: "Professional Certificate in UI/UX, NY, USA",
      description: "Specialized in user interface and user experience design, enhancing my ability to create intuitive and visually appealing digital products."
    }
  ],
  workExperience = [
    {
      year: "2003-2008",
      position: "Lead Designer at Creative Solutions LLC",
      description: "Oversaw a team of designers, leading projects that pushed the boundaries of digital design and branding."
    },
    {
      year: "2008-2020",
      position: "Freelance Creative Consultant",
      description: "Collaborated with businesses around the globe, providing expert advice and creative direction for a diverse range of projects."
    },
    {
      year: "2010-2020",
      position: "Creative Director at Design Studio",
      description: "Guiding the creative vision of the studio, I lead projects that blend innovation with aesthetics, creating memorable brands and digital experiences."
    }
  ],
  projects = [
    {
      title: "E-commerce Redesign - Vue.js",
      description: "Revolutionized an online store's presence with a fresh design and intuitive navigation, enhancing user engagement and sales."
    },
    {
      title: "Mobile App for Event Planning - React Native",
      description: "Designed a mobile app that simplifies event planning, offering a seamless user experience from initial concept to day-of coordination."
    }
  ],
  socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/alexjohnson" },
    { platform: "Twitter", url: "https://twitter.com/alexjohnson" },
    { platform: "Facebook", url: "https://facebook.com/alexjohnson" }
  ],
  imageUrl = "https://plus.unsplash.com/premium_photo-1664281095505-6b631bea83de?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  educationTitle = "Education",
  workExperienceTitle = "Work Experience",
  projectsTitle = "Projects",
  socialTitle = "Social"
}) =>{
  return (
    <div className="min-h-screen min-w-[320px] bg-white text-gray-800 dark:bg-slate-800 dark:text-slate-200">
      <div className="container mx-auto max-w-screen-lg p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="p-5 text-left md:col-span-2 md:text-right">
            <AnimateInView type="rise">
              <EditableImg propKey={"imageUrl"} className="IMAGE inline-block md:w-2/3 rounded-lg bg-slate-100 object-cover w-[20rem] h-[20rem] aspect-[4/3]" src={imageUrl} alt="portrait" />
            </AnimateInView>
            <div className="mt-5 space-y-2">
              <EditableText propKey={`location`}>{location}</EditableText>
              <EditableText propKey={`phone`}>{phone}</EditableText>
              <EditableText propKey={`email`}>{email}</EditableText>
              <EditableText propKey={`website`}>{website}</EditableText>
            </div>
          </div>

          <div className="p-5 md:col-span-4">
            <h1 className="TITLE-PRIMARY text-xl font-semibold"><EditableText propKey={`role`}>{role}</EditableText></h1>
            <h2 className="TITLE-SECONDARY text-5xl font-bold leading-tight"><EditableText propKey={`name`}>{name}</EditableText></h2>
            <div className="my-5 h-[2px] rounded bg-black/10 dark:bg-white/10"></div>
            <p className="DESC text-lg leading-relaxed text-slate-600 dark:text-white/80"><EditableText propKey={`bio`}>{bio}</EditableText></p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-lg space-y-10 p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
            <h3 className="TITLE-PRIMARY text-lg font-bold uppercase"><EditableText propKey={`educationTitle`}>{educationTitle}</EditableText></h3>
          </div>
          <div className="space-y-6 px-5 py-2 md:col-span-4">
            {educationBackground.map((edu, index) => (
              <div key={`education_${index}`}>
                <h4 className="TITLE-SECONDARY mb-2 text-lg font-semibold text-sky-500"><EditableText propKey={`educationBackground_${index}_year`}>{edu.year}</EditableText></h4>
                <h5 className="DESC mb-1 font-bold"><EditableText propKey={`educationBackground_${index}_degree`}>{edu.degree}</EditableText></h5>
                <p className="TEXT-CONTENT leading-relaxed"><EditableText propKey={`educationBackground_${index}_description`}>{edu.description}</EditableText></p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
            <h3 className="TITLE-PRIMARY text-lg font-bold uppercase"><EditableText propKey={`workExperienceTitle`}>{workExperienceTitle}</EditableText></h3>
          </div>
          <div className="space-y-6 px-5 py-2 md:col-span-4">
            {workExperience.map((work, index) => (
              <div key={`work_${index}`}>
                <h4 className="TITLE-SECONDARY mb-2 text-lg font-semibold text-sky-500"><EditableText propKey={`workExperience_${index}_year`}>{work.year}</EditableText></h4>
                <h5 className="DESC mb-1 font-bold"><EditableText propKey={`workExperience_${index}_position`}>{work.position}</EditableText></h5>
                <p className="TEXT-CONTENT leading-relaxed"><EditableText propKey={`workExperience_${index}_description`}>{work.description}</EditableText></p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
            <h3 className="TITLE-PRIMARY text-lg font-bold uppercase"><EditableText propKey={`projectsTitle`}>{projectsTitle}</EditableText></h3>
          </div>
          <div className="space-y-6 px-5 py-2 md:col-span-4">
            {projects.map((project, index) => (
              <div key={`project_${index}`}>
                <h4 className="TITLE-SECONDARY mb-2 text-lg font-semibold text-sky-500"><EditableText propKey={`projects_${index}_title`}>{project.title}</EditableText></h4>
                <p className="TEXT-CONTENT leading-relaxed"><EditableText propKey={`projects_${index}_description`}>{project.description}</EditableText></p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
            <h3 className="TITLE-PRIMARY text-lg font-bold uppercase"><EditableText propKey={`socialTitle`}>{socialTitle}</EditableText></h3>
          </div>
          <div className="space-y-6 px-5 py-2 md:col-span-4">
            {socialLinks.map((link, index) => (
              <div key={`social_${index}`}>
                <h4 className="TITLE-SECONDARY mb-2 text-lg font-semibold text-sky-500"><EditableText propKey={`socialLinks_${index}_platform`}>{link.platform}</EditableText></h4>
                <h5 className="DESC mb-1 font-bold">
                  <a className="TEXT-LINK font-medium underline hover:text-opacity-75 dark:text-white" href={link.url}><EditableText propKey={`socialLinks_${index}_url`}>{link.url}</EditableText></a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default PersonalCV;