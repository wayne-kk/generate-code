import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import gsap from 'gsap';

export interface IFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  statsIcon: string;
  statsNumber: string;
  statsText: string;
  buttonTextAttr: string;
  buttonTextAttrLink: string;
}

const Feature: React.FC<IFeatureProps> = ({
  title = `Grow Your Design Studio`,
  description = `Enhance your creative projects with exclusive resources from our design studio. Tailored assets to bring your visions to life.`,
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
  statsIcon = `fa-solid fa-message`,
  statsNumber = `2,984`,
  statsText = `Successful projects delivered this month`,
  buttonTextAttr = `Discover More`,
  buttonTextAttrLink = '/',
}) => {
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 0.9 },
        {
          scale: 1.05,
          duration: 3,
          ease: 'power3.out',
          yoyo: true,
          repeat: -1,
        }
      );
    }
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-100 via-sky-200 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:gap-x-10 gap-y-10 items-center">
          <div className="relative w-full flex justify-center md:order-2">
            <AnimateInView type="rise">
              <div ref={imageContainerRef} className="relative max-w-xs">
                <div className="overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <EditableImg
                    propKey="imageUrl"
                    className="object-cover w-full h-full aspect-[3/4]"
                    src={imageUrl}
                    alt={imageUrl}
                  />
                </div>

                <div ref={statsRef} className="absolute bottom-0 -left-20 sm:right-0 transform translate-y-1/2">
                  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-slate-600 dark:to-slate-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center">
                      <EditableIcon
                        propKey="statsIcon"
                        icon={statsIcon}
                        iconLibrary="FontAwesome"
                        className="text-4xl sm:text-5xl text-white"
                      />
                      <div className="ml-4">
                        <span className="block text-2xl sm:text-4xl font-bold text-black dark:text-white">
                          <EditableText propKey="statsNumber">{statsNumber}</EditableText>
                        </span>
                        <span className="block mt-1 text-sm font-medium text-amber-900 dark:text-slate-300">
                          <EditableText propKey="statsText">{statsText}</EditableText>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>

          <div className="md:order-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 dark:from-sky-300 dark:to-blue-500">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-700 dark:text-slate-300">
              <EditableText propKey="description">{description}</EditableText>
            </p>

            <EditableButton className="inline-flex mt-6 items-center justify-center text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 font-medium py-3 px-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" href={buttonTextAttrLink}>
              <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
            </EditableButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
