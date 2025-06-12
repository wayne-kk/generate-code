import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IIPostsItemCategory {
  titleAttr: string
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
  posts: IPostsItem[]
  blogTitle: string
  blogSubtitle: string
  onItemClick?: any; // 新增
}

const BlogGrid: React.FC<IBlogGridProps> = ({
  posts = [
    {
      id: 1,
      title: 'Elevate Your Brand with Our Design Studio',
      description:
        'Discover how our design studio can transform your brand identity with innovative and creative solutions tailored to your business needs.',
      imageUrl:
        'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { titleAttr: 'text=Branding&link=/' },
      author: {
        name: 'Alexa Richardson',
        role: 'Lead Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    },
    {
      id: 2,
      title: 'Maximizing Web Presence with Innovative Design',
      description:
        'Learn how our strategic design approach can enhance your website\'s user experience and engagement, driving more traffic and conversions.',
      imageUrl:
        'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      date: 'Apr 10, 2023',
      datetime: '2023-04-10',
      category: { titleAttr: 'text=Web Design&link=/' },
      author: {
        name: 'Jordan Lee',
        role: 'Web Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    }
  ],
  blogTitle = 'From the blog',
  blogSubtitle = 'Explore insightful articles to propel your business forward with our expert guidance.',
  onItemClick, // 新增
}) =>{
  return (
    <div className="bg-white py-16 sm:py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white/90">
            <EditableText propKey={`blogTitle`}>{blogTitle}</EditableText>
          </h2>
          <p className="DESC mt-2 text-lg leading-8 text-slate-700 dark:text-white/80">
            <EditableText propKey={`blogSubtitle`}>{blogSubtitle}</EditableText>
          </p>
          <div className="mt-10 space-y-16 lg:mt-16 lg:space-y-20">
            {posts.map((post, index) => (
              <AnimateInView key={post.id} type="rise">
                <div
                  className="relative grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1fr] lg:grid-cols-[0.4fr_1fr] cursor-pointer"
                  onClick={() => onItemClick?.(post, index)}
                  tabIndex={onItemClick ? 0 : undefined}
                  role={onItemClick ? "button" : undefined}
                  style={onItemClick ? { outline: 'none' } : undefined}
                >
                  <EditableImg propKey={`posts_${index}_imageUrl`} className="IMAGE rounded-lg bg-slate-100  w-full h-full object-cover aspect-[16/10]  md:aspect-[1/1]" src={post.imageUrl} />
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-slate-500 dark:text-white/80">
                        <EditableText propKey={`posts_${index}_date`}>{post.date}</EditableText>
                      </time>
                      <EditableButton
                        className="TEXT-LINK relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-sky-500 hover:bg-slate-100 dark:bg-slate-600 dark:text-white/80 dark:hover:bg-slate-700"
                      >
                        <EditableText propKey={`posts_${index}_category_titleAttr`}>{post.category.titleAttr}</EditableText>
                      </EditableButton>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="TITLE-SECONDARY mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600 dark:text-white/90 dark:group-hover:text-white/80">
                          <EditableText propKey={`posts_${index}_title`}>{post.title}</EditableText>
                      </h3>
                      <p className="DESC mt-5 text-sm leading-6 text-slate-600 dark:text-white/80">
                        <EditableText propKey={`posts_${index}_description`}>{post.description}</EditableText>
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-black/10 dark:border-white/10 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <EditableImg propKey={`posts_${index}_author_imageUrl`} className="IMAGE h-10 w-10 rounded-full bg-slate-50 object-cover" src={post.author.imageUrl} />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-slate-900 dark:text-white/90">
                            <EditableText propKey={`posts_${index}_author_name`}>{post.author.name}</EditableText>
                          </p>
                          <p className="text-slate-600 dark:text-white/80">
                            <EditableText propKey={`posts_${index}_author_role`}>{post.author.role}</EditableText>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid;