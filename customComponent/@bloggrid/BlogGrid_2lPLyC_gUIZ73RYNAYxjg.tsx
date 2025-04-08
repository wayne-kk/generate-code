
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
export const BlogGrid_2lPLyC_gUIZ73RYNAYxjg_childrenMap = {
type: withDefault(StringControl, "BlogGrid_2lPLyC_gUIZ73RYNAYxjg"),
posts:jsonArrayControl([{"id":1,"title":"探索Web3设计的无限可能","description":"了解MetaMystic如何通过创新设计和尖端技术，赋能您的品牌在Web3世界中占据领先地位。","imageUrl":"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/5e1a61e5-6a67-44f7-9c67-72e5d9acf24f.jpeg?oldPrompt=a high-tech research lab with advanced equipment, glowing neon lights, and a clean, futuristic aesthetic, representing the company's cutting-edge developments, (sci-fi:1.3), (modern:1.2), -[people], -[mess]","date":"2023-10-01","datetime":"2023-10-01","category":{"titleAttr":"text=设计趋势&link="},"author":{"name":"李华","role":"首席设计师","imageUrl":"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/9a390f2c-aced-4b3a-9893-24e9ac396897.jpeg?oldPrompt=A futuristic corporate boardroom with holographic displays showing data analytics, surrounded by sleek metallic surfaces and glowing blue accents, conveying a sense of technological advancement and innovation"}},{"id":2,"title":"如何在Web3时代提升用户体验","description":"我们分享了在未来科技中提升用户体验的关键策略，助力您的业务获得更高的用户满意度。","imageUrl":"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/05e32541-6be0-4c42-8de4-dcdbd9adc3c5.jpeg?oldPrompt=a futuristic corporate boardroom with holographic displays, sleek furniture, and a mysterious ambiance, showcasing the company's innovative technology and modern design, (mysterious:1.3), (sci-fi:1.2), -[people], -[clutter]","date":"2023-10-15","datetime":"2023-10-15","category":{"titleAttr":"text=用户体验&link="},"author":{"name":"王敏","role":"资深用户体验专家","imageUrl":"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/72d608aa-1323-4532-94d6-660720d62ea5.jpeg?oldPrompt=A group of diverse professionals collaborating in a high-tech workspace with augmented reality interfaces and floating digital screens, emphasizing teamwork and cutting-edge solutions"}}]),
blogTitle:withDefault(StringControl, "最新动态"),
blogSubtitle:withDefault(StringControl, "深入了解MetaMystic的最新资讯和行业洞察，助您在Web3领域抢占先机。"),
}
export function BlogGrid_2lPLyC_gUIZ73RYNAYxjg({
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
  export function BlogGrid_2lPLyC_gUIZ73RYNAYxjg_PropertyViewFn(children: any) {
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
export const BlogGrid_2lPLyC_gUIZ73RYNAYxjg_Builder = new UICompBuilder(BlogGrid_2lPLyC_gUIZ73RYNAYxjg_childrenMap, (props: any) => {
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
}).setPropertyViewFn(BlogGrid_2lPLyC_gUIZ73RYNAYxjg_PropertyViewFn)
  .build();


export const BlogGrid_2lPLyC_gUIZ73RYNAYxjg_ExposingConfigs = withExposingConfigs(BlogGrid_2lPLyC_gUIZ73RYNAYxjg_Builder, [])