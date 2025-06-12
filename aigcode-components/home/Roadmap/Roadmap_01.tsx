import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
interface PhaseItem {
  text: string;
  icon: string;
}

interface Phase {
  name: string;
  items: PhaseItem[];
}

interface RoadmapProps {
  title?: string;
  description?: string;
  phases?: Phase[];
}

const Roadmap: React.FC<RoadmapProps> = ({
  title = `Our Design Studio's Journey`,
  description = `Explore the stages of our creative evolution and our commitment to design excellence.`,
  phases = [
    {
      name: `1 Conceptualization`,
      items: [
        {
          text: `Brainstorming innovative ideas and blueprints for outstanding designs.`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Gathering inspiration and setting the foundation for our creative vision.`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
    {
      name: `2 Design Development`,
      items: [
        {
          text: `Refining ideas and transforming concepts into tangible designs.`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Iterating on design prototypes with precision and attention to detail.`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
    {
      name: `3 Execution & Delivery`,
      items: [
        {
          text: `Bringing designs to life with flawless execution and delivery.`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Ensuring each project is crafted to perfection and exceeds expectations.`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
    {
      name: `4 Expansion & Growth`,
      items: [
        {
          text: `Expanding our horizons by exploring new design territories.`,
          icon: `fa-solid fa-check`,
        },
        {
          text: `Adapting to emerging trends and incorporating them into our work.`,
          icon: `fa-solid fa-check`,
        },
      ],
    },
  ],
})=>{
  return (
    <section className="py-12 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-left sm:text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-4 text-base font-medium text-slate-700 dark:text-white/70">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <div key={index}>
              <h3 className="TITLE-SECONDARY text-lg font-bold text-slate-900 dark:text-white/80">
                <EditableText propKey={`phases_${index}_name`}>{phase.name}</EditableText>
              </h3>
              <hr className="mt-4 border-t-2 border-black/10 dark:border-white/10" />

              <ul className="mt-6 space-y-6">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <EditableIcon propKey={`phases_${index}_items_${itemIndex}_icon`} icon={item.icon} iconLibrary="FontAwesome" className="text-lg text-sky-500" />
                    <span className="TEXT-CONTENT ml-3 text-sm font-medium text-slate-700 dark:text-white/70">
                      <EditableText propKey={`phases_${index}_items_${itemIndex}_text`}>{item.text}</EditableText>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap