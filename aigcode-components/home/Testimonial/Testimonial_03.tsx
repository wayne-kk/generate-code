import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialProps {
  testimonial: string
  author: string
  position: string
  imageUrl: string
}

const Testimonial: React.FC<ITestimonialProps> = ({
  testimonial = `As the Project Manager at the design studio's official website, I had the privilege of collaborating with Jenny Wilson, whose talent and expertise greatly contributed to the success of our project. Her exceptional ability to coordinate and manage teams left a lasting impression.`,
  author = `Jenny Wilson`,
  position = `UX Designer at Microsoft`,
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800 ">
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col items-center justify-center gap-16 md:flex-row">
        <AnimateInView type="rise">
          <div className="relative w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 dark:bg-slate-700 rounded-full -bottom-2 -right-1"></div>
            <EditableImg propKey="imageUrl" className="IMAGE relative object-cover w-48 h-48 rounded-full bg-slate-100 aspect-[1/1]" src={imageUrl} alt={imageUrl} />
          </div>
        </AnimateInView>

        <div className="w-full h-full flex flex-col justify-between gap-6">
          <AnimateInView type="rise">
            <p className="DESC text-xl text-slate-900 dark:text-white">
              <EditableText propKey="testimonial">{testimonial}</EditableText>
            </p>
          </AnimateInView>
          <AnimateInView type="rise">
            <div className="flex flex-col gap-1.5">
              <p className="TITLE-PRIMARY text-lg font-semibold text-slate-900 dark:text-white">
                <EditableText propKey="author">{author}</EditableText>
              </p>
              <p className="TITLE-SECONDARY text-base text-slate-600 dark:text-slate-400">
                <EditableText propKey="position">{position}</EditableText>
              </p>
            </div>
          </AnimateInView>
        </div>

      </div>
    </section>
  );
}


export default Testimonial;