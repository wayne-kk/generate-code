import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import EditableButton from '@ui/EditableButton';

interface JobListingsProps {
  title?: string;
  description?: string;
  members?: Array<{
    companyIcon: string;
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    jobType: string;
    location: string;
    path: string;
    locationIcon: string;
    jobTypeIcon: string;
  }>;
}
const JobListings:React.FC<JobListingsProps>=({
  title = `Open Positions`,
  description = `We're currently looking for talented software engineers and designers to join our team and help us achieve our mission.`,
  members = [
    {
      companyIcon: `fa-brands fa-google`,
      companyName: `Google`,
      jobTitle: `Full stack engineer`,
      jobDescription: `Join our team to create innovative solutions that empower individuals and organizations.`,
      jobType: `Full-time`,
      location: `Remotely`,
      path: `javascript:void(0)`,
      locationIcon: "fa-solid fa-location-dot",
      jobTypeIcon: "fa-solid fa-briefcase"
    },
    {
      companyIcon: `fa-brands fa-github`,
      companyName: `Github`,
      jobTitle: `Web tools manager`,
      jobDescription: `Help us build the future of web tooling and contribute to our open-source projects.`,
      jobType: `Part-time`,
      location: `USA, New York City`,
      path: `javascript:void(0)`,
      locationIcon: "fa-solid fa-location-dot",
      jobTypeIcon: "fa-solid fa-briefcase"
    },
    {
      companyIcon: `fa-brands fa-figma`,
      companyName: `Figma`,
      jobTitle: `UI/UX Designer`,
      jobDescription: `Design seamless user experiences and collaborate with cross-functional teams to bring ideas to life.`,
      jobType: `Full-time`,
      location: `Mauritania`,
      path: `javascript:void(0)`,
      locationIcon: "fa-solid fa-location-dot",
      jobTypeIcon: "fa-solid fa-briefcase"
    },
  ]
}:JobListingsProps)=> {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-20 px-4 dark:bg-slate-900">
        <div className="max-w-md">
          <h1 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 mb-6 dark:text-white">
            <EditableText propKey={`title`}>{title}</EditableText>
          </h1>
          <p className="DESC text-base font-normal text-slate-700 dark:text-slate-400">
            <EditableText propKey={`description`}>
              {description}
            </EditableText>
          </p>
        </div>
        <ul className="mt-12 space-y-3 divide-y divide-black/10 dark:divide-white/10">
          {members.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-5 duration-150 hover:border-black/10 dark:hover:border-white/10 dark:border-slate-700 hover:rounded-xl hover:bg-gray-50 dark:hover:bg-slate-600"
            >
              <EditableButton href={item.path} className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="IMAGE bg-white w-14 h-14 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center dark:bg-slate-800">
                    <EditableIcon propKey={`members_${idx}_companyIcon`} icon={item.companyIcon} iconLibrary={"FontAwesome"} className="text-xl text-black dark:text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-left text-sky-600 font-medium">
                      <EditableText propKey={`members_${idx}_companyName`}>
                        {item.companyName}
                      </EditableText>
                    </span>
                    <h3 className="TITLE-SECONDARY text-lg text-left font-semibold text-slate-900 dark:text-slate-200">
                      <EditableText propKey={`members_${idx}_jobTitle`}>
                        {item.jobTitle}
                      </EditableText>
                    </h3>
                  </div>
                </div>
                <p className="DESC text-left text-slate-700 dark:text-slate-400">
                  <EditableText propKey={`members_${idx}_jobDescription`}>
                    {item.jobDescription}
                  </EditableText>
                </p>
                <div className="text-sm text-slate-700 dark:text-slate-400 flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <EditableIcon propKey={`members_${idx}_jobTypeIcon`} icon={item.jobTypeIcon} iconLibrary={"FontAwesome"} className="text-lg text-black dark:text-white" />
                    <EditableText propKey={`members_${idx}_jobType`}>
                      {item.jobType}
                    </EditableText>
                  </span>
                  <span className="flex items-center gap-2">
                    <EditableIcon propKey={`members_${idx}_locationIcon`} icon={item.locationIcon} iconLibrary={"FontAwesome"} className="text-lg text-black dark:text-white" />
                    <EditableText propKey={`members_${idx}_location`}>
                      {item.location}
                    </EditableText>
                  </span>
                </div>
              </EditableButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default JobListings
