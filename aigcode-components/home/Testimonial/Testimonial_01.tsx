import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialsItem {
  quote: string
  name: string
  role: string
  imageUrl: string
}

export interface ITestimonialProps {
  testimonials: ITestimonialsItem[]
}

const Testimonial: React.FC<ITestimonialProps> = ({
  testimonials = [
    {
      quote: `Design Studio has transformed our web presence. The speed and ease of updates have greatly enhanced our workflow.`,
      name: `Devon Lane`,
      role: `President of Sales`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    },
    {
      quote: `Their innovative approach and attention to detail have made a significant difference in our user experience.`,
      name: `Ronald Richards`,
      role: `Marketing Coordinator`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    },
    {
      quote: `Design Studio's commitment to quality is unmatched. Our website has never been better!`,
      name: `Jane Cooper`,
      role: `Dog Trainer`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    },
  ],
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="px-4 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateInView type="rise" key={`testimonials_${index}`}>
              <div className="w-full h-full flex flex-col bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 rounded-md">
                <div className="flex flex-col justify-between flex-1 p-8">
                  <blockquote>
                    <p className="DESC text-lg text-slate-900 dark:text-white/80">
                      <EditableText propKey={`testimonials_${index}_quote`}>{testimonial.quote}</EditableText>
                    </p>
                  </blockquote>

                  <div className="mt-8">
                    <div className="w-full h-0 mb-8 border-t-2 border-black/10 dark:border-white/10 border-dotted"></div>
                    <div className="flex items-center gap-3">
                      <EditableImg propKey={`testimonials_${index}_imageUrl`} className="IMAGE flex-shrink-0 object-cover w-10 h-10 rounded-full aspect-[1/1]" src={testimonial.imageUrl} alt={testimonial.imageUrl} />
                      <div className="flex flex-col">
                        <p className="TITLE-PRIMARY text-base font-semibold text-slate-900 dark:text-white/80">
                          <EditableText propKey={`testimonials_${index}_name`}>{testimonial.name}</EditableText>
                        </p>
                        <p className="TITLE-SECONDARY text-base text-slate-600 dark:text-slate-400">
                          <EditableText propKey={`testimonials_${index}_role`}>{testimonial.role}</EditableText>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testimonial;