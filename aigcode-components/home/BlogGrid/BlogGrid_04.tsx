import React from 'react';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IIPostsItemCategory {
  title: string
}

export interface IIPostsItemAuthor {
  name: string
  role: string
  imageUrl: string
}

export interface IPostsItem {
  id: number
  title: string
  description: string
  date: string
  datetime: string
  category: IIPostsItemCategory
  author: IIPostsItemAuthor
}

export interface IBlogGridProps {
  posts: IPostsItem[]
  blogTitle: string
  blogSubtitle: string
  onPostClick?: (item: IPostsItem, index: number) => void
}

const BlogGrid: React.FC<IBlogGridProps> = ({
  posts = [
    {
      id: 1,
      title: 'Elevate Your Online Presence',
      description:
        'Discover strategies to enhance your website\'s engagement and retention rates, directly from our experts.',
      date: 'Apr 10, 2023',
      datetime: '2023-04-10',
      category: { title: 'Web Design' },
      author: {
        name: 'Jane Doe',
        role: 'Lead Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      id: 2,
      title: 'Maximizing User Experience',
      description:
        'Learn the key principles of user-centered design to create more intuitive and engaging digital products.',
      date: 'Mar 29, 2023',
      datetime: '2023-03-29',
      category: { title: 'UX Design' },
      author: {
        name: 'John Smith',
        role: 'UX Specialist',
        imageUrl:
          'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      id: 3,
      title: 'Innovative Branding Strategies',
      description:
        'Explore cutting-edge branding techniques that can set your business apart in a crowded digital landscape.',
      date: 'Feb 20, 2023',
      datetime: '2023-02-20',
      category: { title: 'Branding'},
      author: {
        name: 'Emily Rivera',
        role: 'Brand Manager',
        imageUrl:
          'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
  ],
  blogTitle = 'From the blog',
  blogSubtitle = 'Learn how to grow your business with our expert advice.',
  onPostClick
}) =>{
  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"><EditableText propKey={`blogTitle`}>{blogTitle}</EditableText></h2>
          <p className="DESC mt-2 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <EditableText propKey={`blogSubtitle`}>{blogSubtitle}</EditableText>
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-black/10 dark:border-white/10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between cursor-pointer"
              onClick={() => onPostClick && onPostClick(post, index)}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onPostClick && onPostClick(post, index);
                }
              }}
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-slate-500 dark:text-slate-400">
                  <EditableText propKey={`posts_${index}_date`}>{post.date}</EditableText>
                </time>
                <p className="relative z-10 rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1.5 font-medium text-black/60 dark:text-white/90 ">
                  <EditableText propKey={`posts_${index}_category_title`}>{post.category.title}</EditableText>
                </p>
              </div>
              <div className="group relative">
                <h3 className="TITLE-SECONDARY mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-slate-50 group-hover:text-gray-600 dark:group-hover:text-slate-300">
                    <EditableText propKey={`posts_${index}_title`}>{post.title}</EditableText>
                </h3>
                <p className="DESC mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                  <EditableText propKey={`posts_${index}_description`}>{post.description}</EditableText>
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <EditableImg propKey={`posts_${index}_author_imageUrl`} className="IMAGE h-10 w-10 aspect-[1/1] rounded-full bg-slate-100 dark:bg-slate-700 object-cover" src={post.author.imageUrl} alt={post.author.name} />
                <div className="text-sm leading-6">
                  <p className="TEXT-CONTENT font-semibold text-gray-900 dark:text-slate-50">
                      <EditableText propKey={`posts_${index}_author_name`}>{post.author.name}</EditableText>
                  </p>
                  <p className="DESC text-gray-600 dark:text-slate-400">
                    <EditableText propKey={`posts_${index}_author_role`}>{post.author.role}</EditableText>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogGrid;