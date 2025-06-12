import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import AnimateInView from '@ui/AnimateInView';

interface SkillItem {
  title: string;
  description: string;
  icon: string;
}

interface SkillsProps {
  title?: string;
  description?: string;
  skills?: SkillItem[];
}

const Skills: React.FC<SkillsProps>=({ title = 'link=&target=_blank&text=Experi%C3%AAncias%20Passadas',
  description = 'link=&target=_blank&text=Mais%20de%20200%20empresas%2C%20200%20fam%C3%ADlias%2C%201.000%20pessoas%20com%20o%20patrim%C3%B4nio%20protegido%20e%20bilh%C3%B5es%20em%20valor%20de%20mercado.%20', skills = [{ title: 'link=&target=_blank&text=Planejamento%20Patrimonial', description: 'Providing expert legal advice and support for businesses of all sizes.', icon: 'fa-solid fa-building' }, { title: 'link=&target=_blank&text=Organiza%C3%A7%C3%A3o%20Societ%C3%A1ria', description: 'Offering compassionate and comprehensive legal services for family matters.', icon: 'fa-solid fa-heart' }, { title: 'link=&target=_blank&text=Governan%C3%A7a%20Corporativa', description: 'Defending your rights with assertive and knowledgeable representation.', icon: 'fa-solid fa-shield-alt' }, { title: 'link=&target=_blank&text=Contratos%20Empresariais', description: 'Guiding you through complex real estate transactions with ease.', icon: 'fa-solid fa-home' }, { title: 'link=&target=_blank&text=Propriedade%20Intelectual', description: 'Protecting your innovations with expert IP legal services.', icon: 'fa-solid fa-lightbulb' }, {
    title: 'link=&target=_blank&text=Experi%C3%AAncia%20Pessoal%3A%20M%26A', description: 'link=&target=_blank&text=Al%C3%A9m%20de%20atuar%20em%20dezenas%20de%20M%26A%20de%20clientes%2C%20os%20s%C3%B3cios%20da%20Pimenta%20J%C3%BAdice%20j%C3%A1%20venderam%20duas%20empresas%20pr%C3%B3prias.%20',
    icon: 'fa-solid fa-balance-scale'
  }] }:SkillsProps)=> {
  return (
    <div className="w-full bg-white dark:bg-slate-800">
      <section className="w-full max-w-7xl mx-auto py-20 px-4 flex flex-col items-center">
        <h1 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white">
          <EditableText propKey="title">{title}</EditableText>
        </h1>
        <p className="DESC text-base max-w-xl text-center mt-4 mb-12 font-normal text-slate-700 dark:text-white/80">
          <EditableText propKey="description">{description}</EditableText>
        </p>
        <AnimateInView type="rise">
          <div className="w-full flex flex-wrap -m-4">
            {skills.map((skill, index) => (
              <div key={index} className="w-full flex flex-col p-4 md:w-1/3">
                <div className="w-full p-6 rounded-lg border border-black/10 dark:border-white/10">
                  <EditableIcon propKey={`skills_${index}_icon`} icon={skill.icon} iconLibrary="FontAwesome" className="text-xl mb-4 dark:text-white/80"></EditableIcon>
                  <h3 className="TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/80">
                    <EditableText propKey={`skills_${index}_title`}>{skill.title}</EditableText>
                  </h3>
                  <p className="TEXT-CONTENT leading-relaxed text-base font-normal text-slate-700 dark:text-white/80">
                    <EditableText propKey={`skills_${index}_description`}>{skill.description}</EditableText>
                  </p>

                </div>

              </div>
            ))}
          </div>
        </AnimateInView>
      </section>
    </div>
  );
}

export default Skills