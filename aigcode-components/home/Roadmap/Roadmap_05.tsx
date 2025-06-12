import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import AnimateInView from '@ui/AnimateInView';

interface PhaseItem {
  id: string | number
  text: string;
  icon: string
}

interface Phase {
  name: string 
  items: PhaseItem[]
}

interface RoadmapProps {
  title?: string;
  description?: string;
  phases?: Phase[];
}
const Roadmap:React.FC<RoadmapProps>=({
  title = `Full Roadmap`,
  description = `In a creative design studio, our team explores various solutions responsibly`,
  phases = [
    {
      name: `Launch`,
      items: [
        { id: 1, text: `Launching Time`, icon: 'fa-solid fa-check' },
        { id: 2, text: `Social Media Kickoff`, icon: 'fa-solid fa-check' },
        { id: 3, text: `Giveaways & Promotions`, icon: 'fa-solid fa-check' },
      ],
    },
    {
      name: `Investment`,
      items: [
        { id: 1, text: `Publish Whitepaper`, icon: 'fa-solid fa-check' },
        { id: 2, text: `Official Website Launch`, icon: 'fa-solid fa-check' },
        { id: 3, text: `Strategic Advertising`, icon: 'fa-solid fa-check' },
      ],
    },
    {
      name: `Growth`,
      items: [
        { id: 1, text: `Opening Collections`, icon: 'fa-solid fa-check' },
        { id: 2, text: `Influencer Marketing`, icon: 'fa-solid fa-check' },
        { id: 3, text: `Public Product Release`, icon: 'fa-solid fa-check' },
      ],
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-slate-900 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <h1 className="TITLE-PRIMARY text-4xl font-semibold text-white">
            <EditableText propKey="title">{title}</EditableText>
          </h1>
          <p className="DESC mx-auto mt-4 text-base font-normal text-white/70 dark:text-slate-300 lg:mx-0 lg:mt-0 max-w-xs">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <div className="mt-12 lg:px-0">
          <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 lg:divide-y-0 lg:divide-x lg:grid-cols-3 rounded-xl">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.name} className="p-6 sm:p-8 lg:px-10">
                <p className="DESC text-sm font-semibold uppercase tracking-wide text-white/50">
                  <EditableText propKey={`phases_${phaseIndex}_name`}>{phase.name}</EditableText>
                </p>
                <p className="TITLE-SECONDARY mt-3 text-xl font-bold text-white">
                  <EditableText propKey={`phases_${phaseIndex}_name`}>{phase.name}</EditableText>
                </p>

                <ul className="mt-7 space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={item.id} className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                      <EditableIcon propKey={`phases_${phaseIndex}_items_${itemIndex}_icon`} icon={item.icon} iconLibrary="FontAwesome" className="text-xl text-white" />
                      <span className="TEXT-CONTENT flex-1 ml-2 text-base font-medium text-white">
                        <EditableText propKey={`phases_${phaseIndex}_items_${itemIndex}_text`}>{item.text}</EditableText>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap
