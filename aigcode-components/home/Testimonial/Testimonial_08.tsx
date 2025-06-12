import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialProps {
  testimonialText: string
  reviewerImageUrl: string
  reviewerName: string
  reviewerRole: string
}

const Testimonial: React.FC<ITestimonialProps> = ({
  testimonialText = "Our design studio brings your visions to life with creativity, design, and technology. We strive for excellence in every project.",
  reviewerImageUrl = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  reviewerName = "Alex Doe",
  reviewerRole = "Creative Director at Innovate Design",
}) =>{
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 lg:px-8 dark:bg-slate-800">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.sky.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.sky.700),theme(colors.slate.800))] dark:opacity-40" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-slate-800 dark:shadow-sky-900/30 dark:ring-sky-800" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-slate-200">
            <EditableText propKey={`testimonialText`} className="DESC">{testimonialText}</EditableText>
          </blockquote>
          <figcaption className="mt-10">
            <EditableImg propKey={`reviewerImageUrl`} className="IMAGE mx-auto h-10 w-10 rounded-full bg-slate-100 object-cover dark:bg-slate-800 aspect-[1/1]" src={reviewerImageUrl} alt={reviewerImageUrl} />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <EditableText propKey={`reviewerName`} className="TITLE-PRIMARY font-semibold text-gray-900 dark:text-slate-50">{reviewerName}</EditableText>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900 dark:fill-gray-200">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <EditableText propKey={`reviewerRole`} className="TITLE-SECONDARY text-gray-600 dark:text-slate-400">{reviewerRole}</EditableText>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}


export default Testimonial;