import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';

export interface IVideoProps {
  title: string
  description: string
  videosUrl: string
}

const Video: React.FC<IVideoProps> = ({
  title = `Explore Our Design Studio Work`,
  description = `Our team believes in delivering remarkable designs that can change the world. Explore some of our latest and most innovative work below.`,
  videosUrl = `https://cdn.pixabay.com/video/2025/04/29/275633_large.mp4`
}) =>{
  return (
    <div className={`w-full dark:bg-slate-800`}>
      <div className={`max-w-7xl mx-auto py-20 px-4`}>
        <div className={`flex w-full flex-col md:flex-row gap-10 items-center`}>
          <div className="w-full flex flex-col gap-6 md:w-1/2">
            <h1 className={`TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white`}>
              <EditableText propKey={`title`}>{title}</EditableText>
            </h1>
            <p className="DESC text-base font-normal text-slate-700 dark:text-white/70">
              <EditableText propKey={`description`}>{description}</EditableText>
            </p>
          </div>
          <div className={`w-full md:w-1/2 mt-6 md:mt-0`}>
            <AnimateInView type="rise">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-video">
                  <iframe
                    className={`IMAGE w-full h-full`}
                    src={videosUrl}
                    title="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;