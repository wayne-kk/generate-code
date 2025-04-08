
import React from "react";
import AnimateInView from "../@base/AnimateInView";
import EditableButton from "../@base/EditableButton";
import EditableIcon from "../@base/EditableIcon";
import EditableImg from "../@base/EditableImg";
import EditableText from "../@base/EditableText";
import Overflow from "../@base/Overflow";
import Marquee from "../@base/Marquee";
import { getComConfigByType, getCompTypeOptions } from "../config";
import { motion } from "framer-motion";
import {
  UICompBuilder,
  withDefault,
  withExposingConfigs,
  StringControl,
  jsonArrayControl,
  ArrayStringControl,
  ArrayNumberControl,
  jsonObjectControl,
  Section,
  Dropdown,
  globalEventEmitter
} from "lowcoder-sdk";
export const BlogGrid_LarywuRVLs7j5519uM2Gm_childrenMap = {
type: withDefault(StringControl, "BlogGrid_LarywuRVLs7j5519uM2Gm"),
posts:jsonArrayControl([{"id":1,"title":"The Evolution of Anime Storytelling","description":"Dive into the rich history of anime and discover how its narratives have evolved over the decades.","imageUrl":"https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=3803&description=Women+writing.","date":"Oct 10, 2023","datetime":"2023-10-10","category":{"titleAttr":"text=Anime History&link="},"author":{"name":"Hiroshi Tanaka","role":"Anime Historian","imageUrl":"https://images.unsplash.com/photo-1516220362602-dba5272034e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=656&description=close-up+photo+of+persons+eye"}},{"id":2,"title":"Top 10 Anime Characters of All Time","description":"Explore the most iconic characters that have defined the anime industry.","imageUrl":"https://images.unsplash.com/photo-1534993458408-84f38c5f9d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&w=3803&description=brown+signage","date":"Oct 15, 2023","datetime":"2023-10-15","category":{"titleAttr":"text=Character Spotlight&link="},"author":{"name":"Akira Matsumoto","role":"Anime Critic","imageUrl":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjYxNjF8&ixlib=rb-4.0.3&q=80&h=657&description=No+woman+ever+ages+beyond+eighteen+in+her+heart."}}]),
blogTitle:withDefault(StringControl, "Anime Insights & Updates"),
blogSubtitle:withDefault(StringControl, "Stay informed with the latest anime news, reviews, and behind-the-scenes content."),
}
export function BlogGrid_LarywuRVLs7j5519uM2Gm({
  posts = [
    {
      id: 1,
      title: 'Elevate Your Brand with Our Design Studio',
      description:
        'Discover how our design studio can transform your brand identity with innovative and creative solutions tailored to your business needs.',
      imageUrl:
        'https://source.unsplash.com/random/3803x2802/?studio,brand',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { titleAttr: 'text=Branding&link=/' },
      author: {
        name: 'Alexa Richardson',
        role: 'Lead Designer',
        imageUrl:
          'https://source.unsplash.com/random/656x656/?face,designer',
      },
    },
    {
      id: 2,
      title: 'Maximizing Web Presence with Innovative Design',
      description:
        'Learn how our strategic design approach can enhance your website\'s user experience and engagement, driving more traffic and conversions.',
      imageUrl:
        'https://source.unsplash.com/random/3803x2803/?website,creative',
      date: 'Apr 10, 2023',
      datetime: '2023-04-10',
      category: { titleAttr: 'text=Web Design&link=/' },
      author: {
        name: 'Jordan Lee',
        role: 'Web Developer',
        imageUrl:
          'https://source.unsplash.com/random/656x657/?face,web',
      },
    }
  ],
  blogTitle = 'From the blog',
  blogSubtitle = 'Explore insightful articles to propel your business forward with our expert guidance.'
}) {
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
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1fr] lg:grid-cols-[0.4fr_1fr]">
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
  export function BlogGrid_LarywuRVLs7j5519uM2Gm_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('BlogGrid')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('BlogGrid')[value].exposingConfigs);
              }}
            />
           {children.posts?.propertyView({ label: 'posts' })}
{children.blogTitle?.propertyView({ label: 'blogTitle' })}
{children.blogSubtitle?.propertyView({ label: 'blogSubtitle' })}

        </Section>
    );
} 
export const BlogGrid_LarywuRVLs7j5519uM2Gm_Builder = new UICompBuilder(BlogGrid_LarywuRVLs7j5519uM2Gm_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('BlogGrid')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(BlogGrid_LarywuRVLs7j5519uM2Gm_PropertyViewFn)
  .build();


export const BlogGrid_LarywuRVLs7j5519uM2Gm_ExposingConfigs = withExposingConfigs(BlogGrid_LarywuRVLs7j5519uM2Gm_Builder, [])