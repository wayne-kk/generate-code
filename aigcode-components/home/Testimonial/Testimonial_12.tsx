import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialsItem {
  name: string
  position: string
  quote: string
  imageUrl: string
}

export interface ITestimonialProps {
  testimonials: ITestimonialsItem[]
}

const Testimonial: React.FC<ITestimonialProps> = ({
  testimonials = [
    {
      name: "Judith Black",
      position: "CEO of Tuple",
      quote: `Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
              arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
              ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.`,
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Joseph Rodriguez",
      position: "CEO of Reform",
      quote: `Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
              reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
              dolor nisi ullamco.`,
      imageUrl: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
  ]
}) =>{
  return (
    <section className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={`testimonial_${index}`} className={`flex flex-col ${index % 2 === 0 ? 'pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20' : 'border-t border-black/10 dark:border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20'}`}>
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="DESC text-lg leading-8 text-slate-900 dark:text-white/80">
                  <EditableText propKey={`testimonials_${index}_quote`}>{testimonial.quote}</EditableText>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <EditableImg
                    propKey={`testimonials_${index}_imageUrl`}
                    className="IMAGE h-14 w-14 rounded-full bg-slate-100 object-cover aspect-square"
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                  />
                  <div className="text-base">
                    <div className="TITLE-PRIMARY font-semibold text-slate-900 dark:text-white/80"><EditableText propKey={`testimonials_${index}_name`}>{testimonial.name}</EditableText></div>
                    <div className="TITLE-SECONDARY mt-1 text-slate-500 dark:text-white/80"><EditableText propKey={`testimonials_${index}_position`}>{testimonial.position}</EditableText></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testimonial;