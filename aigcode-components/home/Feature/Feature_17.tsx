import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IFeatureProps {
  title: string
  mainHeading: string
  description: string
  buttonTextAttr: string
  buttonTextLink: string
  testimonial: string
  testimonialAuthor: string
  testimonialAuthorImage: string
  imageUrl: string
}

const Feature: React.FC<IFeatureProps> = ({
  title = `Deploy faster`,
  mainHeading = `A better workflow`,
  description = `Discover a more efficient approach to design with our integrated tools and services. Streamline your projects from concept to completion.`,
  buttonTextAttr = `Get started`,
  buttonTextLink = '/',
  testimonial = `The intuitive design and seamless workflow have significantly enhanced our team's productivity. Highly recommend for any design-focused projects.`,
  testimonialAuthor = `Maria Hill – Marketing Manager`,
  testimonialAuthorImage = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
}) =>{
  return (
    <div className="w-full bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto h-fit max-h-[520px] grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="TITLE-PRIMARY text-base font-semibold leading-7 text-sky-600 dark:text-slate-200"><EditableText propKey="title">{title}</EditableText></h2>
              <p className="TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                <EditableText propKey="mainHeading">{mainHeading}</EditableText>
              </p>
              <p className="DESC mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <EditableText propKey="description">{description}</EditableText>
              </p>
              <div className="mt-16">
                <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextLink}>
                  <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
                </EditableButton>
              </div>
              <figure className="mt-16 border-l border-black/10 dark:border-white/10 pl-8 text-slate-700 dark:text-slate-300">
                <blockquote className="TEXT-CONTENT text-base leading-7">
                  <EditableText propKey="testimonial">{testimonial}</EditableText>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <EditableImg propKey="testimonialAuthorImage" className="IMAGE h-6 w-6 flex-none rounded-full object-cover aspect-[1/1]" src={testimonialAuthorImage} alt={testimonialAuthorImage} />
                  <div>
                    <EditableText propKey="testimonialAuthor">{testimonialAuthor}</EditableText>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <EditableImg
            propKey="imageUrl"
            className="IMAGE w-full h-auto rounded-xl shadow-2xl border border-black/10  md:-ml-4 lg:ml-0 object-cover  aspect-[1/1]"
            src={imageUrl}
            alt={imageUrl}
          />
        </div>
      </div>
    </div>
  );
}


export default Feature;