import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialProps {
  imageUrl: string
  logo: string
  logoName: string
  testimonial1: string
  testimonial2: string
  authorName: string
}

const Testimonial: React.FC<ITestimonialProps> = ({
  imageUrl = `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
  logo = `fa-solid fa-wand-magic-sparkles`,
  logoName = `Design Studio`,
  testimonial1 = `The design studio's work was impeccable, and their attention to detail was outstanding. Their creative vision brought our project to life.`,
  testimonial2 = `Working with the studio was a breeze; they understood our needs and delivered exceptional designs that elevated our brand.`,
  authorName = `Leslie Alexander, Product Designer at Crowny`,
}) =>{
  return (
    <section className="bg-white dark:bg-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col-reverse items-center gap-16 md:flex-row ">
        <AnimateInView type="rise">
          <EditableImg propKey="imageUrl" className="IMAGE rounded-lg bg-slate-100 w-full h-auto aspect-[4/3] md:aspect-[3/4] object-cover" src={imageUrl} alt={imageUrl} />
        </AnimateInView>

        <AnimateInView type="rise">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <EditableIcon propKey={"logo"} icon={logo} iconLibrary={"FontAwesome"} className="text-slate-900 dark:text-white"></EditableIcon>
              <h2 className="TITLE-PRIMARY text-3xl font-semibold text-slate-900 dark:text-white">
                <EditableText propKey="logoName">{logoName}</EditableText>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <p className="DESC text-xl font-medium text-slate-900 dark:text-white/90">
                <EditableText propKey="testimonial1">{testimonial1}</EditableText>
              </p>
              <p className="DESC text-lg text-slate-700 dark:text-white/90">
                <EditableText propKey="testimonial2">{testimonial2}</EditableText>
              </p>
              <p className="DESC text-base font-semibold text-slate-500 dark:text-white/50">
                <EditableText propKey="authorName">{authorName}</EditableText>
              </p>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}

export default Testimonial;