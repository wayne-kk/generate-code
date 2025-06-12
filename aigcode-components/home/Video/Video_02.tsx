import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IVideoProps {
  title: string
  description: string
  videoUrl: string
}

const Video: React.FC<IVideoProps> = ({
  title = "Explore Our Design Studio Work",
  description = "Our team believes in delivering remarkable designs that can change the world. Explore some of our latest and most innovative work below.",
  videoUrl = `https://cdn.pixabay.com/video/2025/04/29/275633_large.mp4`
}) =>{
  return (
    <section className="w-full bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-6 md:w-1/2">
            <h1 className="TITLE-PRIMARY text-4xl text-center font-semibold text-slate-900 dark:text-white">
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <p className="DESC text-base text-center font-normal text-slate-700 dark:text-white/80">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
          <div className="mt-12 w-full lg:w-2/3">
            <AnimateInView type="rise">
              <div className="overflow-hidden rounded-lg shadow dark:bg-slate-600">
                <iframe
                  className="w-full aspect-video"
                  src={videoUrl}
                  title="Design Studio Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;