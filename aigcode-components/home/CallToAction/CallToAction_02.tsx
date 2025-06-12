import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionProps {
  images: string[]
  title: string
  description: string
  buttonTextAttrLabel: string
  buttonTextAttrLink: string
  buttonIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  images = [
    `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  ],
  title = `Join 5,482 other creators`,
  description = `Explore our community and connect with like-minded creators from around the globe. Enhance your skills and share your projects.`,
  buttonTextAttrLabel = `Get instant access`,
  buttonTextAttrLink = '/',
  buttonIcon = `fa-solid fa-user-plus`,
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex items-center justify-center">
            {images.map((image, index) => (
              <AnimateInView key={index} type="rise">
                <div className={`overflow-hidden rounded-full ${index === 1 ? 'relative w-28 h-28 border-8 border-black/10 dark:border-white/10' : 'w-20 h-20'} ${index === 1 ? '' : `${index === 0 ? '-mr-6' : '-ml-6'} bg-slate-100`}`}>
                  <EditableImg propKey={`images_${index}`} className="w-[6rem] h-[6rem] aspect-[1/1] object-cover rounded-full bg-slate-200" src={image} alt={`image_${index}`} />
                </div>
              </AnimateInView>
            ))}
          </div>

          <AnimateInView type="rise">
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="mt-10 max-w-2xl mx-auto text-lg text-slate-600 dark:text-white/70">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </AnimateInView>

          <AnimateInView type="rise">
            <EditableButton className="inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextAttrLink}>
              <EditableIcon propKey="buttonIcon" icon={buttonIcon} iconLibrary="FontAwesome" className="mr-2 text-sm text-white" />
              <EditableText propKey="buttonTextAttrLabel">{buttonTextAttrLabel}</EditableText>
            </EditableButton>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}


export default CallToAction;