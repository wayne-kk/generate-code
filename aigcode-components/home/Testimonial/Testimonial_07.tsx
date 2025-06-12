import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface ITestimonialsItem {
  img: string
  quote: string
  name: string
  role: string
}

export interface ITestimonialProps {
  testimonials: ITestimonialsItem[]
}

const Testimonial: React.FC<ITestimonialProps> = ({ testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    quote: 'The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it\'s great to select between formats.',
    name: 'Jessie J',
    role: 'Acme LTD',
  },
  {
    img: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    quote: 'Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.',
    name: 'Nick V',
    role: 'Malika Inc.',
  },
  {
    img: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    quote: 'The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.',
    name: 'Amelia W',
    role: 'Panda AI',
  },
] }) =>{
  const [active, setActive] = React.useState(0);
  const [autorotate, setAutorotate] = React.useState(true);
  const autorotateTiming = 7000;

  React.useEffect(() => {
    let autorotateInterval:any;
    if (autorotate) {
      autorotateInterval = setInterval(() => {
        setActive(currentActive => (currentActive + 1) % testimonials.length);
      }, autorotateTiming);
    }
    return () => clearInterval(autorotateInterval);
  }, [autorotate, testimonials.length]);

  const stopAutorotate = () => {
    setAutorotate(false);
  };

  return (
    <div className="relative dark:bg-slate-800">
      <section className="relative flex flex-col justify-center bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-20">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="relative h-32">
                <div className="absolute flex items-center justify-center bg-gradient-to-b rounded-full from-sky-500/10  top-0 left-1/2 -translate-x-1/2">
                  {testimonials.map((testimonial, index) => (
                    <EditableImg
                      propKey={`testimonials_${index}_img`}
                      key={index}
                      className="absolute w-16 h-16 top-0 -z-10 rounded-full  duration-700 object-cover aspect-[1/1] border border-black/10 dark:border-white/10"
                      src={testimonial.img}
                      alt={testimonial.name}
                      style={{ opacity: index === active ? 1 : 0 }}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-9">
                <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${active === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      style={{ position: active === index ? 'relative' : 'absolute' }}
                    >
                      <div className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
                        <EditableText propKey={`testimonials_${index}_quote`}>{testimonial.quote}</EditableText>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                  <EditableButton
                    key={index}
                    className={`inline-flex justify-center whitespace-nowrap rounded-full px-4 py-3 m-1.5 text-xs shadow-sm focus-visible:outline-none 
                  focus-visible:ring focus-visible:ring-sky-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index
                        ? 'bg-sky-500 text-white shadow-sky-950/10'
                        : 'bg-white dark:bg-slate-700 hover:bg-sky-100 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-300'
                    }`}
                    onClick={() => {
                      setActive(index);
                      stopAutorotate();
                    }}
                  >
                    <EditableText propKey={`testimonials_${index}_name`}>{testimonial.name}</EditableText> - <EditableText propKey={`testimonials_${index}_role`}>{testimonial.role}</EditableText>
                  </EditableButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Testimonial;