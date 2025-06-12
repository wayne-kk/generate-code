import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ITestimonialsItem {
  name: string
  role: string
  imageUrl: string
  iconPlay: string
}

export interface ITestimonialProps {
  title: string
  description: string
  testimonials: ITestimonialsItem[]
  iconArrow: string
  allReviewsTextAttr: string
  allReviewsTextLink: string
}

const Testimonial: React.FC<ITestimonialProps> = ({
  title = `Trusted by Design Studios Worldwide`,
  description = `Our commitment to excellence is reflected in the trust and satisfaction of our clients.`,
  testimonials = [
    {
      name: `Jordan Singer`,
      role: `UI/UX Designer`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      iconPlay: `fa-solid fa-play`,
    },
    {
      name: `Avery Stewart`,
      role: `Creative Director`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      iconPlay: `fa-solid fa-play`,
    },
    {
      name: `Riley Jones`,
      role: `Brand Strategist`,
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      iconPlay: `fa-solid fa-play`,
    },
  ],
  iconArrow = `fa-solid fa-arrow-right`,
  allReviewsTextAttr = `See all reviews by our customers`,
  allReviewsTextLink = '/',
}) =>{
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto px-4 py-10 max-w-7xl flex flex-col gap-20 items-center">
        <AnimateInView type="rise">
          <div className="mx-auto text-center max-w-2xl flex flex-col gap-6">
            <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="DESC text-base font-normal text-slate-600 dark:text-white/70">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateInView key={index} type="rise">
              <div className="relative overflow-hidden group rounded-2xl">
                <EditableImg
                  propKey={`testimonials_${index}_imageUrl`}
                  className="IMAGE object-cover w-full h-auto aspect-[4/3] md:aspect-[3/4] transition-all duration-200 group-hover:scale-110"
                  src={testimonial.imageUrl}
                  alt={testimonial.imageUrl}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="TEXT-CONTENT text-base font-semibold text-white">
                        <EditableText propKey={`testimonials_${index}_name`}>
                          {testimonial.name}
                        </EditableText>
                      </p>
                      <p className="DESC mt-1 text-sm font-normal text-white/70">
                        <EditableText propKey={`testimonials_${index}_role`}>
                          {testimonial.role}
                        </EditableText>
                      </p>
                    </div>

                    <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center h-14 w-14 text-white bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/20 transition-all duration-200 pointer-events-auto">
                      <EditableIcon propKey={`testimonials_${index}_iconPlay`} icon={testimonial.iconPlay} iconLibrary="FontAwesome" className="text-xl text-white" />
                    </EditableButton>

                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <div>
          <EditableButton className="BTN-SECONDARY inline-flex group items-center gap-2 text-base font-semibold text-sky-500 hover:text-sky-400 dark:hover:text-sky-400 transition-all duration-200 group" href={allReviewsTextLink}>
            <EditableText propKey="allReviewsTextAttr">{allReviewsTextAttr}</EditableText>
            <EditableIcon propKey="iconArrow" icon={iconArrow} iconLibrary="FontAwesome" className=" text-sky-500 group-hover:translate-x-1 transition-all duration-200 group-hover:text-sky-400 dark:group-hover:text-sky-400" />
          </EditableButton>
        </div>
      </div>
    </section>
  );
}


export default Testimonial;