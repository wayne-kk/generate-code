import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialsItem {
  quote: string
  name: string
  age: string
  location: string
  avatarUrl: string
}

export interface ITestimonialProps {
  title: string
  testimonials: ITestimonialsItem[]
}

const Testimonial: React.FC<ITestimonialProps> = ({
  title = `Hear From Our Happy Clients`,
  testimonials = [
    {
      quote: `The design workshop transformed our vision into reality.`,
      name: `Dianne Russell`,
      age: `26 years old`,
      location: `New York`,
      avatarUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    },
    {
      quote: `Their creativity and attention to detail is unmatched.`,
      name: `Theresa Webb`,
      age: `23 years old`,
      location: `London`,
      avatarUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
    },
  ]
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col items-center gap-16">
        <AnimateInView type="rise">
          <div className="text-center">
            <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
          </div>
        </AnimateInView>

        <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimateInView type="rise">
              <div key={index}>
                <p className="DESC text-lg font-semibold text-slate-900 dark:text-white">
                  <EditableText propKey={`testimonials_${index}_quote`}>
                    {testimonial.quote}
                  </EditableText>
                </p>
                <div className="relative mt-6 overflow-hidden rounded-lg">
                  <EditableImg
                    propKey={`testimonials_${index}_avatarUrl`}
                    className="IMAGE rounded-lg bg-slate-100 dark:bg-slate-900 w-full h-auto aspect-[16/9] object-cover"
                    src={testimonial.avatarUrl}
                    alt={testimonial.avatarUrl}
                  />
                </div>

                <div className="flex items-center justify-between mt-5">
                  <p className="TEXT-CONTENT text-base font-bold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`testimonials_${index}_name`}>
                      {testimonial.name}
                    </EditableText>
                  </p>
                  <p className="TEXT-CONTENT flex gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <EditableText propKey={`testimonials_${index}_age`}>
                      {testimonial.age}
                    </EditableText>
                    <EditableText propKey={`testimonials_${index}_location`}>
                      {testimonial.location}
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


export default Testimonial;