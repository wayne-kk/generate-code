import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IPostsItem {
  imageUrl: string
  category: string
  date: string
  titleAttr: string
  linkTextAttr: string
  linkIcon: string
}

export interface IBlogGridProps {
  title: string
  description: string
  posts: IPostsItem[]
  onPostClick?: (post: IPostsItem, index: number) => void
}

const BlogGrid: React.FC<IBlogGridProps> = ({
  title = 'Explore Our Latest Insights',
  description = 'Dive into articles and videos from our design studio to spark your creativity and enhance your projects.',
  posts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      category: 'Art & Design',
      date: 'March 15, 2023',
      titleAttr: 'text=Unleashing Creativity in Modern Art',
      linkTextAttr: 'text=Continue Reading&link=/',
      linkIcon : 'fa-solid fa-arrow-right'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      category: 'Tech Innovations',
      date: 'March 20, 2023',
      titleAttr: 'text=The Intersection of Technology and Design',
      linkTextAttr: 'text=Continue Reading&link=/',
      linkIcon : 'fa-solid fa-arrow-right'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      category: 'Strategy',
      date: 'March 25, 2023',
      titleAttr: 'text=Strategic Design for Business Growth',
      linkTextAttr: 'text=Continue Reading&link=/',
      linkIcon : 'fa-solid fa-arrow-right'
    },
  ],
  onPostClick,
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md md:mx-0">
          <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-slate-50 sm:text-4xl">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC mt-5 text-base font-normal leading-7 text-slate-500 dark:text-slate-400">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 md:max-w-none sm:mt-16">
          {posts.map((post, index) => (
            <AnimateInView key={index} type="rise">
              <div className="group">
                <div className="relative block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                  <EditableImg
                    propKey={`posts_${index}_imageUrl`}
                    className="IMAGE object-cover w-full h-full aspect-[1/1] transition-transform duration-200 group-hover:scale-110"
                    src={post.imageUrl}
                    alt={post.category}
                  />
                  <span className="absolute left-3 top-3 px-3 py-2 text-xs font-bold tracking-widest text-slate-900 uppercase bg-white rounded">
                    <EditableText propKey={`posts_${index}_category`}>{post.category}</EditableText>
                  </span>
                </div>
                <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-500">
                  <EditableText propKey={`posts_${index}_date`}>{post.date}</EditableText>
                </p>

                {/* 标题点击事件 */}
                <EditableButton
                  className="TEXT-LINK mt-4 text-xl text-left font-semibold text-slate-900 dark:text-slate-200 hover:text-sky-700 dark:hover:text-white"
                  onClick={() => onPostClick && onPostClick(post, index)}
                >
                  <EditableText propKey={`posts_${index}_titleAttr`}>{post.titleAttr}</EditableText>
                </EditableButton>

                <div className="mt-6">
                  {/* Continue Reading 按钮点击事件 */}
                  <EditableButton
                    className="BTN-SECONDARY inline-flex items-center pb-2 text-xs font-bold tracking-widest text-slate-900 uppercase border-black/10 dark:border-white/10 group hover:text-sky-700 dark:hover:text-white dark:text-slate-200"
                    onClick={() => onPostClick && onPostClick(post, index)}
                  >
                    <EditableText propKey={`posts_${index}_linkTextAttr`}>{post.linkTextAttr}</EditableText>
                    <EditableIcon propKey={`posts_${index}_linkIcon`} icon={post.linkIcon} iconLibrary="FontAwesome" className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </EditableButton>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;