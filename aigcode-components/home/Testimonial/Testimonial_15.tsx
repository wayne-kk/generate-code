import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IITestimonialsItemAuthor {
  name: string
  handle: string
  imageUrl: string
}

export interface ITestimonialsItem {
  body: string
  author: IITestimonialsItemAuthor
}

export interface ITestimonialProps {
  title: string
  subTitle: string
  testimonials: ITestimonialsItem[]
}

const Testimonial: React.FC<ITestimonialProps> = ({
  title = "Our Clients' Experiences",
  subTitle = "Design Studio Success Stories",
  testimonials = [
    {
      body: 'Our projects reflect our dedication to innovating design and executing with precision.',
      author: {
        name: 'Taylor Swift',
        handle: '@taylorswift',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'The passion and creativity of our team shine through in every detail of our work.',
      author: {
        name: 'Chris Evans',
        handle: '@chrisevans',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'We pride ourselves on delivering exceptional service and exceeding client expectations.',
      author: {
        name: 'Emma Watson',
        handle: '@emmawatson',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'Innovative solutions and creative approaches are at the heart of what we do.',
      author: {
        name: 'Robert Downey Jr.',
        handle: '@robertdowneyjr',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'Our commitment to quality ensures your projects stand out in the market.',
      author: {
        name: 'Scarlett Johansson',
        handle: '@scarlettjohansson',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'We transform your ideas into reality with our bespoke design solutions.',
      author: {
        name: 'Tom Holland',
        handle: '@tomholland',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      body: 'Your vision, our expertise. Together, we create extraordinary results.',
      author: {
        name: 'Zendaya',
        handle: '@zendaya',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    }
  ]
}) =>{
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="TITLE-SECONDARY text-lg font-semibold text-sky-500 dark:text-slate-200"><EditableText propKey={`subTitle`}>{subTitle}</EditableText></span>
          <h1 className="TITLE-PRIMARY mt-2 text-4xl font-bold text-slate-900 dark:text-slate-50"><EditableText propKey={`title`}>{title}</EditableText></h1>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={`testimonial_${index}`} className="flex-1 min-w-[250px] max-w-[320px]">
              <figure className="rounded-2xl bg-slate-50 p-8 text-sm leading-6 dark:bg-slate-700">
                <blockquote className="DESC text-slate-900 dark:text-slate-200">
                  <EditableText propKey={`testimonials_${index}_body`}>{testimonial.body}</EditableText>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <EditableImg propKey={`testimonials_${index}_author_imageUrl`} className="IMAGE h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600 object-cover aspect-[1/1]" src={testimonial.author.imageUrl} alt={testimonial.author.imageUrl} />
                  <div>
                    <p className="TEXT-CONTENT font-semibold text-slate-900 dark:text-slate-50"><EditableText propKey={`testimonials_${index}_author_name`}>{testimonial.author.name}</EditableText></p>
                    <p className="TEXT-CONTENT text-black/60 dark:text-white/60"><EditableText propKey={`testimonials_${index}_author_handle`}>{testimonial.author.handle}</EditableText></p>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;