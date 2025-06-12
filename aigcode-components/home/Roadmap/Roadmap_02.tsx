import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import AnimateInView from '@ui/AnimateInView';

interface PhaseItem {
  text: string;
  icon: string
}

interface Phase {
  name: string;
  title: string;
  items: PhaseItem[];
}

interface RoadmapProps {
  title?: string;
  description?: string;
  phases?: Phase[];
}
const Roadmap: React.FC<RoadmapProps> = ({
  title = 'Our Studio Roadmap',
  description = 'Explore the journey and future plans of our design studio',
  phases = [
    {
      name: 'Phase 1',
      title: 'Conceptualization',
      items: [
        {
          text: 'Brand Strategy',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Design Workshops',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Concept Designs',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Client Feedback',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Final Adjustments',
          icon: 'fa-solid fa-circle-check',
        },
      ],
    },
    {
      name: 'Phase 2',
      title: 'Design Development',
      items: [
        {
          text: 'UI/UX Design',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Interactive Prototypes',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'User Testing',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Design Iteration',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Design Handoff',
          icon: 'fa-solid fa-circle-check',
        },
      ],
    },
    {
      name: 'Phase 3',
      title: 'Implementation',
      items: [
        {
          text: 'Frontend Development',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Backend Integration',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Performance Optimization',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Quality Assurance',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Project Launch',
          icon: 'fa-solid fa-circle-check',
        },
      ],
    },
    {
      name: 'Phase 4',
      title: 'Growth & Support',
      items: [
        {
          text: 'User Analytics',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Continuous Updates',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Technical Support',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'Brand Scaling',
          icon: 'fa-solid fa-circle-check',
        },
        {
          text: 'New Features Integration',
          icon: 'fa-solid fa-circle-check',
        },
      ],
    },
  ],
}) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/80">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-4 text-base font-medium text-slate-500 dark:text-white/60">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <AnimateInView type="rise">
          <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-10  sm:mt-16 lg:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <div key={index}>
                <p className="TITLE-SECONDARY text-sm font-semibold tracking-wide uppercase text-slate-400  dark:text-white/60">
                  <EditableText propKey={`phases_${index}_name`}>{phase.name}</EditableText>
                </p>

                <div className="relative mt-2 ">

                  <div className="relative flex justify-start ">
                    <span className="pr-5 text-xl font-bold text-slate-900  dark:text-white/80">
                      <EditableText propKey={`phases_${index}_title`}>{phase.title}</EditableText>
                    </span>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden bg-white rounded-lg dark:bg-slate-600 border border-black/10">
                  <div className="px-4 py-5 sm:p-6">
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <EditableIcon propKey={`phases_${index}_items_${itemIndex}_icon`} icon={item.icon}  className="text-sky-500 dark:text-sky-400 text-base" />
                          <span className="TEXT-CONTENT ml-2 text-base font-medium text-slate-900 dark:text-white/80">
                            <EditableText propKey={`phases_${index}_items_${itemIndex}_text`}>{item.text}</EditableText>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
export default Roadmap