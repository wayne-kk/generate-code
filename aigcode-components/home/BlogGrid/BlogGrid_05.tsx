import React from 'react';
import AnimateInView from '@ui/AnimateInView';
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
  imageUrl: string
  date: string
  datetime: string
  category: IIPostsItemCategory
  author: IIPostsItemAuthor
}

export interface IBlogGridProps {
  title: string
  intro: string
  posts: IPostsItem[]
  onPostClick?: (item: IPostsItem, index: number) => void // 新增
}

const BlogGrid: React.FC<IBlogGridProps> = ({
  title = "From Our Studio",
  intro = "Explore insights and stories from our design journey.",
  posts = [
    {
      id: 1,
      title: 'Elevate Your Brand Identity',
      description:
        'Discover strategies to enhance your brand\'s visibility and impact in the market. Dive into the art of branding with us.',
      imageUrl:
        'https://images.unsplash.com/photo-1746263658731-469853340643?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Apr 10, 2023',
      datetime: '2023-04-10',
      category: { title: 'Branding' },
      author: {
        name: 'Alexa Richardson',
        role: 'Lead Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1744043176705-6f61f70f1646?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 2,
      title: 'Maximize Web Presence',
      description:
        'Learn how to boost your website\'s performance and engagement. Join us for tips on effective web design and SEO.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1719955772913-c19f29dcc521?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Mar 22, 2023',
      datetime: '2023-03-22',
      category: { title: 'Web Design' },
      author: {
        name: 'Jordan Lee',
        role: 'Web Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1745679519301-4d612cdea170?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 3,
      title: 'Creative Photography Tips',
      description:
        'Explore creativity through the lens. Join our journey into the world of photography and visual storytelling.',
      imageUrl:
        'https://images.unsplash.com/photo-1746730341411-03b1f6b8f1f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
      date: 'Feb 18, 2023',
      datetime: '2023-02-18',
      category: { title: 'Photography' },
      author: {
        name: 'Samuel Adams',
        role: 'Photographer',
        imageUrl:
          'https://images.unsplash.com/photo-1746274394126-466da7ea18f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  ],
  onPostClick, // 新增
}) =>{
  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl dark:text-white/90"><EditableText propKey={`title`}>{title}</EditableText></h2>
          <p className="DESC mt-2 text-lg leading-8 text-slate-700 dark:text-white/90">
            <EditableText propKey={`intro`}>{intro}</EditableText>
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <AnimateInView key={post.id} type="rise">
              <article
                className="flex flex-col items-start justify-between cursor-pointer" // 增加 cursor-pointer
                onClick={() => onPostClick?.(post, index)} // 新增
              >
                <div className="relative w-full">
                  <EditableImg
                    propKey={`posts_${index}_imageUrl`}
                    className="IMAGE aspect-video w-full rounded-2xl bg-slate-100 object-cover"
                    src={post.imageUrl}
                    alt={`posts_${index}_imageUrl`}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-slate-500 dark:text-white/90">
                      <EditableText propKey={`posts_${index}_date`}>{post.date}</EditableText>
                    </time>
                    <p className="TEXT-LINK relative z-10 rounded-full bg-slate-100 px-3 py-1.5 font-medium text-black/60  dark:bg-slate-700 dark:text-white/90 ">
                      <EditableText propKey={`posts_${index}_category_title`}>{post.category.title}</EditableText>
                    </p>
                  </div>
                  <div className="group relative">
                    <h3 className="TITLE-SECONDARY mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600 dark:text-white/90">
                      <EditableText propKey={`posts_${index}_title`}>{post.title}</EditableText>
                    </h3>
                    <p className="DESC mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-white/90">
                      <EditableText propKey={`posts_${index}_description`}>{post.description}</EditableText>
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <EditableImg
                      propKey={`posts_${index}_author_imageUrl`}
                      className="IMAGE h-10 w-10 rounded-full bg-slate-100 object-cover"
                      src={post.author.imageUrl}
                      alt={`posts_${index}_author_imageUrl`}
                    />
                    <div className="text-sm leading-6">
                      <p className="TEXT-CONTENT font-semibold text-slate-900 dark:text-white/90">
                        <EditableText propKey={`posts_${index}_author_name`}>{post.author.name}</EditableText>
                      </p>
                      <p className="DESC text-slate-600 dark:text-white/90">
                        <EditableText propKey={`posts_${index}_author_role`}>{post.author.role}</EditableText>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;