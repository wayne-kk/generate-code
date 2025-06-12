import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionFeaturesItem {
  icon: string
  text: string
}

export interface ICallToActionProps {
  title: string
  description: string
  features: ICallToActionFeaturesItem[]
  imageUrl: string
  buttonTextLabel: string
  buttonTextLink: string
  buttonIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Enhance Your Creative Projects with Our Design Studio App`,
  description = `Our design studio offers intuitive tools and features to bring your creative visions to life. Get the app and start crafting stunning designs today!`,
  features = [
    { icon: `fa-solid fa-check`, text: `Easy transactions` },
    { icon: `fa-solid fa-check`, text: `Received money` },
    { icon: `fa-solid fa-check`, text: `Flexible for use` },
    { icon: `fa-solid fa-check`, text: `Record documents` },
  ],
  imageUrl = `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  buttonTextLabel = `Get instant access`,
  buttonTextLink = '/instantaccess',
  buttonIcon = `fa-solid fa-user-plus`,
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 items-center gap-16 md:grid-cols-2 ">
        <div className=" flex flex-col gap-14">
          <AnimateInView type="rise">
            <div className="flex flex-col gap-6">
              <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>
          </AnimateInView>

          <AnimateInView type="rise">
            <div className="inline-grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div className="flex items-center" key={index}>
                  <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="text-lg text-sky-500"/>
                  <span className="ml-3 TEXT-CONTENT text-lg font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`features_${index}_text`}>{feature.text}</EditableText>
                  </span>
                </div>
              ))}
            </div>
          </AnimateInView>

          <AnimateInView type="rise">
            <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextLink}>
              <EditableIcon propKey="buttonIcon" icon={buttonIcon} iconLibrary="FontAwesome" className="mr-2 text-lg text-white"/>
              <EditableText propKey="buttonTextLabel">{buttonTextLabel}</EditableText>
            </EditableButton>
          </AnimateInView>
        </div>

        <AnimateInView type="rise">
          <EditableImg propKey="imageUrl" className="IMAGE w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-lg bg-black/10 dark:bg-white/10" src={imageUrl} alt={imageUrl} />
        </AnimateInView>

      </div>
    </section>
  );
}

export default CallToAction;