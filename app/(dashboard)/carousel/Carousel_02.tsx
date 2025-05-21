'use client'
import AnimateInView from '@/_components/@base/AnimateInView';
import EditableButton from '@/_components/@base/EditableButton';
import EditableIcon from '@/_components/@base/EditableIcon';
import EditableImg from '@/_components/@base/EditableImg';
import EditableText from '@/_components/@base/EditableText';
import React from 'react';


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
        {
            src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
            label: '合作伙伴A',
            description: '与我们共同研发航天新技术。'
        },
        {
            src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
            label: '合作伙伴B',
            description: '助力企业拓展国际市场。'
        },
        {
            src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
            label: '合作伙伴C',
            description: '推动航天产业链协同发展。'
        }
    ],
    interval = 1000
}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const goToSlide = (index: number) => setActiveIndex(index);

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
                                key={_.label || _.src}
                                type="button"
                                onClick={() => goToSlide(index)}
                                className={`mx-1 h-1 rounded w-10 flex-initial cursor-pointer border-0 bg-black/10 dark:bg-white/10 p-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-40"
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            ></EditableButton>
                        ))}
                    </div>

                    <div className="relative w-full overflow-hidden">
                        {images.map((image, index) => {
                            const key = image.label || image.src;
                            return (
                                <AnimateInView key={image.src} type="rise">
                                    <div
                                        className={`float-left w-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block" : "hidden"
                                            }`}
                                    >
                                        <EditableImg propKey={key} className="IMAGE block w-full aspect-video rounded-lg object-cover bg-slate-100" src={image.src} alt="" />
                                        <div className="absolute px-6 inset-x-0 bottom-5 hidden py-5 text-center text-white/90 md:block">
                                            <h1 className="TITLE-PRIMARY text-4xl font-bold mb-3"><EditableText propKey={`images_${index}_label`}>{image.label}</EditableText></h1>
                                            <p className="DESC"><EditableText propKey={`images_${index}_description`}>{image.description}</EditableText></p>
                                        </div>
                                    </div>
                                </AnimateInView>
                            )
                        }
                        )}
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