import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IITestimonialPropsBackgroundcolor {
  colorA: string
  colorB: string
}

export interface ITestimonialProps {
  testimonialText: string
  authorName: string
  authorTitle: string
  backgroundImageUrl: string
  backgroundColor: IITestimonialPropsBackgroundcolor
}

const Testimonial: React.FC<ITestimonialProps> = ({
  testimonialText = "Our design studio focuses on delivering exceptional creative solutions. Our commitment to quality and innovation has been instrumental in crafting memorable experiences.",
  authorName = "Alex Johnson",
  authorTitle = "Creative Director at DesignStudio",
  backgroundImageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  backgroundColor = {
    colorA: "#ff4694",
    colorB: "#776fff"
  }
}) =>{
  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20 dark:bg-slate-900">
          <EditableImg
            propKey={"backgroundImageUrl"}
            className="IMAGE absolute inset-0 z-[1] opacity-30 h-full w-full object-cover"
            src={backgroundImageUrl}
            alt={backgroundImageUrl}
          />
          <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-[0.45]`}
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-25`}
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <figure>
              <blockquote className="DESC text-lg font-semibold text-white/90 sm:text-xl sm:leading-8">
                <EditableText propKey={"testimonialText"}>{testimonialText}</EditableText>
              </blockquote>
              <figcaption className="mt-6 text-base text-white/90 ">
                <div className="font-semibold"><EditableText propKey={"authorName"}>{authorName}</EditableText></div>
                <div className="mt-1"><EditableText propKey={"authorTitle"}>{authorTitle}</EditableText></div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Testimonial;