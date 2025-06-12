import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';


interface Author {
  name: string;
  username: string;
  imageUrl: string;
  verify: boolean;
}

interface AuthorsProps {
  title: string;
  description: string;
  verifyIcon: string;
  authors: Author[];
}

const IMAGE_CLASSES = "rounded-full h-14 w-14 object-cover aspect-[1/1]";
const VERIFY_ICON_CLASS = "text-base text-blue-600 dark:text-blue-600";

const Authors: React.FC<AuthorsProps> = ({
  title = 'Our Best Designers',
  description = 'Meet the creative minds behind our most acclaimed designs.',
  verifyIcon = "fa-solid fa-circle-check",
  authors = [
    {
      name: 'VisionaireXXX',
      username: '@brunaramalho',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1669077046863-cd277345fd31?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: true,
    },
    {
      name: 'EdgeThinker',
      username: '@andrebiachi',
      imageUrl: 'https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: false,
    },
    {
      name: 'ArtSpecter',
      username: '@pedrogadelha',
      imageUrl: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: true,
    },
    {
      name: 'GlamSpotter',
      username: '@carolfernandes',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673375651830-3e9a83284a21?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: false,
    },
    {
      name: 'StructureSurfer',
      username: '@isabellasava',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668535612734-22813711ca2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: true,
    },
    {
      name: 'InnovateEcho',
      username: '@izabellarodrigues',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668166518904-06cf40dd8063?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: false,
    },
    {
      name: 'Nature\'sBrush',
      username: '@alexandreestolano',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668166518904-06cf40dd8063?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verify: true,
    },
  
  ],
}:AuthorsProps) => {
  return (
    <section className="py-10 bg-slate-50 py-20 md:py-24 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-4 text-base font-normal text-slate-700 dark:text-slate-300">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12 sm:mt-16 lg:mt-20 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-12 sm:gap-y-10">
          {authors.map((author, index) => (
            <AnimateInView key={index} type="rise">
              <div className="relative sm:flex sm:items-center">
                <div className="relative inline-flex shrink-0">
                  <EditableImg
                    propKey={`authors_${index}_imageUrl`}
                    className={`IMAGE ${IMAGE_CLASSES}`}
                    src={author.imageUrl || ''}
                    alt=""
                  />
                  {author.verify && (
                    <div className="absolute bottom-0 right-0">
                      <EditableIcon 
                        propKey="verifyIcon" 
                        icon={verifyIcon} 
                        iconLibrary="FontAwesome" 
                        className={VERIFY_ICON_CLASS}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-2 sm:flex-1 sm:mt-0 sm:ml-4">
                  <p className="DESC text-base font-semibold text-gray-900 dark:text-white">
                    <EditableButton className="relative">
                      <EditableText propKey={`authors_${index}_name`}>
                        {author.name}
                      </EditableText>
                      <span className="absolute inset-0" aria-hidden="true"></span>
                    </EditableButton>
                  </p>
                  <p className="TEXT-CONTENT mt-0.5 text-sm font-medium text-gray-500 dark:text-slate-400">
                    <EditableText propKey={`authors_${index}_username`}>
                      {author.username}
                    </EditableText>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Authors;