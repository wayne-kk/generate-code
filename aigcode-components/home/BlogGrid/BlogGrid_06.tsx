import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IIPostsItemAuthor {
  name: string
  imageUrl: string
}

export interface IPostsItem {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  author: IIPostsItemAuthor
}

export interface IBlogGridProps {
  title: string
  description: string
  posts: IPostsItem[]
  onItemClick?: (item: IPostsItem, index: number) => void // 新增
}

const BlogGrid: React.FC<IBlogGridProps> = ({
  title = "From the Design Studio",
  description = "Discover insights and stories from our design journey.",
  posts = [
    {
      id: 1,
      title: 'Innovative Design Solutions',
      description: 'Explore cutting-edge design trends and learn how to integrate them into your projects for maximum impact.',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      date: 'Apr 10, 2023',
      datetime: '2023-04-10',
      author: {
        name: 'Alex Johnson',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      id: 2,
      title: 'Maximizing User Experience',
      description: 'Dive into the world of UX design and discover strategies for creating more engaging and user-friendly digital experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      date: 'Mar 23, 2023',
      datetime: '2023-03-23',
      author: {
        name: 'Samantha Lee',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      id: 3,
      title: 'Sustainable Design Practices',
      description: 'Learn about sustainable design and how to incorporate eco-friendly practices into your projects for a greener future.',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      date: 'Feb 15, 2023',
      datetime: '2023-02-15',
      author: {
        name: 'Michael Brown',
        imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
  ],
  onItemClick = (post = {
    id: 1,
    title:  'Innovative Design Solutions',
    description:  'Explore cutting-edge design trends and learn how to integrate them into your projects for maximum impact.',
    imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    date:'Apr 10, 2023',
    datetime:  '2023-04-10',
    author : {
      name: 'Alex Johnson',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
  },index = 0) => {}, // 新增
}) =>{
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90">
            <EditableText propKey={`title`}>{title}</EditableText>
          </h2>
          <p className="DESC mt-3 text-base font-normal text-slate-700 dark:text-white/70">
            <EditableText propKey={`description`}>{description}</EditableText>
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {posts.map((post, index) => (
            <AnimateInView key={post.id} type="rise">
              <div
                className="relative flex flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-b from-black  px-8 pb-8 pt-48 cursor-pointer"
                onClick={() => onItemClick(post, index)} // 新增
              >
                <div className=" z-[1]">
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-white/60">
                    <time dateTime={post.datetime} className="mr-8">
                      <EditableText propKey={`posts_${index}_date`}>{post.date}</EditableText>
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <div className="flex items-center gap-2.5 text-white/60">
                        <EditableImg propKey={`posts_${index}_author_imageUrl`} className="IMAGE h-6 w-6 flex-none rounded-full bg-white/10 object-cover aspect-[1/1]" src={post.author.imageUrl} alt={`posts_${index}_author_imageUrl`} />
                        <EditableText propKey={`posts_${index}_author_name`}>{post.author.name}</EditableText>
                      </div>
                    </div>
                  </div>
                  <h3 className="TITLE-SECONDARY mt-3 text-lg font-semibold leading-6 text-white">
                      <EditableText propKey={`posts_${index}_title`}>{post.title}</EditableText>
                  </h3>
                  <p className="DESC mt-1 text-sm font-normal leading-5 text-white/60">
                    <EditableText propKey={`posts_${index}_description`}>{post.description}</EditableText>
                  </p>
                </div>
                <EditableImg propKey={`posts_${index}_imageUrl`} className="IMAGE absolute inset-0 h-auto w-full object-cover rounded-lg bg-slate-100 z-0 aspect-[4/3]" src={post.imageUrl} alt={`posts_${index}_imageUrl`} />
                <div className="absolute inset-0  pointer-events-none bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0  pointer-events-none rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10" />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;