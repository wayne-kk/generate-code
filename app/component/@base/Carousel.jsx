import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 必须导入样式



const Carousel = ({
  autoplay = true,
  cellAlign = "center",
  wrapAround = true,
  withoutControls = true,
  cellSpacing = 16,
  slidesToShow = 2,
  speed = 800,
  children,
}) => {
  // 从子集获取所有的图片项
  const images = React.Children.toArray(children);

  return (
    <ResponsiveCarousel
      autoplay={autoplay}
      centerMode={true}
      centerSlidePercentage={100 / slidesToShow}
      infiniteLoop={wrapAround}
      showArrows={!withoutControls}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={true}
      emulateTouch={true}
      autoPlay={autoplay}
      interval={3000}
      transitionTime={speed}
      cellSpacing={cellSpacing}
      className="carousel-container"
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item relative group w-full h-[20rem] overflow-hidden bg-origin-content rounded-2xl md:h-[35rem] md:mt-0 md:rounded-3xl">
          {image}
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel