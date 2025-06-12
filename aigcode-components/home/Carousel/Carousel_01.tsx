import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ISlidesItem {
  imageUrl: string
  title: string
  description: string
}

export interface ICarouselProps {
  slides: ISlidesItem[]
  interval: number
  prevSlideIcon: string
  nextSlideIcon: string
}

const Carousel_01: React.FC<ICarouselProps> = ({
  slides = [
    { imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'Innovative Designs', description: 'Creating visually stunning designs that stand out.' },
    { imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'Creative Solutions', description: 'Thinking outside the box to solve complex problems.' },
    { imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'Professional Studio', description: 'A team of professionals ensuring top quality work.' },
  ],
  interval = 5000,
  prevSlideIcon = 'fa-solid fa-chevron-right',
  nextSlideIcon = 'fa-solid fa-chevron-right',
}) =>{
  const [currentSlide, setCurrentSlide] = React.useState(0);

  function nextSlide() {
    setCurrentSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  }

  function prevSlide() {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  }

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full dark:bg-slate-800">
      <div className="max-w-7xl w-full mx-auto py-20 px-4">
        <div className="relative group w-full h-80 flex justify-center items-center rounded-2xl overflow-hidden">
          {slides.map((slide, index) => (
            <AnimateInView key={index} type="rise">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={index !== currentSlide}
              >
                <div className="absolute bottom-10 left-10 text-left z-50">
                  <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-white/90 dark:text-white/90">
                    <EditableText propKey={`slides_${index}_title`}>{slide.title}</EditableText>
                  </h2>
                  <p className="DESC text-base font-normal text-white/70 dark:text-white/70 mt-2">
                    <EditableText propKey={`slides_${index}_description`}>{slide.description}</EditableText>
                  </p>
                </div>
                <EditableImg propKey={`slides_${index}_imageUrl`} className="IMAGE w-full h-full object-cover rounded-lg bg-black/10 dark:bg-white/10" src={slide.imageUrl} alt={slide.title} />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-600 opacity-50"></div>
              </div>
            </AnimateInView>
          ))}
          <EditableButton className="absolute left-2 group-hover:opacity-100 opacity-0 hover:scale-105 transition top-1/2 w-10 h-10 flex items-center justify-center left-0 transform -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg focus:outline-none" onClick={prevSlide}>
            <EditableIcon propKey="prevSlideIcon" icon={prevSlideIcon} iconLibrary="FontAwesome" className="text-black text-base" />
          </EditableButton>
          <EditableButton className="absolute right-2 group-hover:opacity-100 opacity-0 hover:scale-105 transition top-1/2 w-10 h-10 flex items-center justify-center right-0 transform -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg focus:outline-none" onClick={nextSlide}>
            <EditableIcon propKey="nextSlideIcon" icon={nextSlideIcon} iconLibrary="FontAwesome" className="text-black text-base" />
          </EditableButton>
        </div>
      </div>
    </div>
  );
}


export default Carousel_01;