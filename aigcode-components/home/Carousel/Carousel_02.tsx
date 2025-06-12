import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICarouselImagesItem {
  src: string
  label: string
  description: string
}

export interface ICarouselProps {
  prevSlideIcon: string
  nextSlideIcon: string
  buttonPrevious: string
  buttonNext: string
  images: ICarouselImagesItem[]
  interval: number
}

const Carousel_02: React.FC<ICarouselProps> = ({
  prevSlideIcon = 'fa-solid fa-chevron-left',
  nextSlideIcon = 'fa-solid fa-chevron-right',
  buttonPrevious = "Previous",
  buttonNext = "Next",
  images = [
    { src: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", label: "Design Your Workspace", description: "Create an inspiring space that matches your creative workflow." },
    { src: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", label: "Collaborative Meetings", description: "Brainstorm and collaborate with your team in a comfortable setting." },
    { src: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", label: "Innovative Solutions", description: "Drive innovation with our state-of-the-art design studio." }
  ],
  interval = 10000
}) =>{
  const [activeIndex, setActiveIndex] = React.useState(0);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const goToSlide = (index:number) => setActiveIndex(index);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className="w-full dark:bg-slate-800">
      <div className="max-w-7xl w-full mx-auto py-20 px-4">
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto mb-4 flex list-none justify-center p-0">
            {images.map((_, index) => (
              <EditableButton
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`mx-1 h-1 rounded w-10 flex-initial cursor-pointer border-0 bg-black/10 dark:bg-white/10 p-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-40"
                  }`}
                aria-label={`Slide ${index + 1}`}
              ></EditableButton>
            ))}
          </div>

          <div className="relative w-full overflow-hidden">
            {images.map((image, index) => (
              <AnimateInView key={image.src} type="rise">
                <div
                  className={`float-left w-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block" : "hidden"
                    }`}
                >
                  <EditableImg propKey={`images_${index}_src`} className="IMAGE block w-full aspect-video rounded-lg object-cover bg-slate-100" src={image.src} alt="" />
                  <div className="absolute px-6 inset-x-0 bottom-5 hidden py-5 text-center text-white/90 md:block">
                    <h1 className="TITLE-PRIMARY text-4xl font-bold mb-3"><EditableText propKey={`images_${index}_label`}>{image.label}</EditableText></h1>
                    <p className="DESC"><EditableText propKey={`images_${index}_description`}>{image.description}</EditableText></p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>

          <EditableButton
            className="BTN-SECONDARY absolute bottom-0 left-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90"
            type="button"
            onClick={goPrev}
          >
            <EditableIcon propKey={"prevSlideIcon"} icon={prevSlideIcon} iconLibrary={"FontAwesome"} className="text-xl text-white/90"></EditableIcon>
            <span className="sr-only">
                <EditableText propKey={`buttonPrevious`}>{buttonPrevious}</EditableText>
            </span>
          </EditableButton>
          <EditableButton
            className="BTN-SECONDARY absolute bottom-0 right-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90"
            type="button"
            onClick={goNext}
          >
            <EditableIcon propKey={"nextSlideIcon"} icon={nextSlideIcon} iconLibrary={"FontAwesome"} className="text-xl text-white/90"></EditableIcon>
            <span className="sr-only">
                <EditableText propKey={`buttonNext`}>{buttonNext}</EditableText>
            </span>
          </EditableButton>
        </div>
      </div>
    </div>
  )
}

export default Carousel_02;