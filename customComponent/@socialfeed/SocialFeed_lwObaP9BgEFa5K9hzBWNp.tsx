
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
export const SocialFeed_lwObaP9BgEFa5K9hzBWNp_childrenMap = {
type: withDefault(StringControl, "SocialFeed_lwObaP9BgEFa5K9hzBWNp"),
feedTitle:withDefault(StringControl, "Share Your Original Characters"),
feedDescription:withDefault(StringControl, "Connect with fellow creators by sharing your original characters, unique IP concepts, and creative storylines. Build and protect your anime universe together!"),
postButtonAttr:withDefault(StringControl, "text=Post Your Content&link="),
commentPlaceholder:withDefault(StringControl, "Write a comment and join the conversation..."),
shareButtonAttr:withDefault(StringControl, "text=Share&link="),
likeButtonAttr:withDefault(StringControl, "text=Like&link="),
feedItems:jsonArrayControl([{"userName":"CreatorStudio","postText":"Meet 'Akira', my original character from 'Crystal Warriors'. All rights reserved - please respect IP!","postImageUrl":"https://images.unsplash.com/photo-1508858627235-801debd2be27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjcyMzR8&ixlib=rb-4.0.3&q=80&w=1280&description=shallow+focus+photography+of+liquor+bottles+inside+a+bucket+filled+with+ice","likesCount":120,"comments":[{"userName":"IPProtector","commentText":"Great character design! Have you registered the copyright?"},{"userName":"AnimeCreator","commentText":"Love the unique design elements. Very distinctive IP!"}]},{"userName":"StoryMaster","postText":"Introducing 'Nova', the protagonist of my upcoming series 'Stellar Legacy'. Copyright protected.","postImageUrl":"https://images.unsplash.com/photo-1677627004049-e028e214a388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDM2NjcyMzR8&ixlib=rb-4.0.3&q=80&w=1280&description=a+table+topped+with+lots+of+crafting+supplies","likesCount":250,"comments":[{"userName":"RightsDefender","commentText":"Amazing original character! Make sure to document all your creation process."},{"userName":"CreativeMind","commentText":"The character design is so unique! Definitely stands out as original IP."}]}]),
}
export function SocialFeed_lwObaP9BgEFa5K9hzBWNp({feedTitle="Share Your Original Characters",feedDescription="Connect with fellow creators by sharing your original characters, unique IP concepts, and creative storylines. Build and protect your anime universe together!",postButtonAttr="text=Post Your Content&link=",commentPlaceholder="Write a comment and join the conversation...",shareButtonAttr="text=Share&link=",likeButtonAttr="text=Like&link=",feedItems=[{"userName":"CreatorStudio","postText":"Meet 'Akira', my original character from 'Crystal Warriors'. All rights reserved - please respect IP!","postImageUrl":"https://source.unsplash.com/1280x720/?character,design","likesCount":120,"comments":[{"userName":"IPProtector","commentText":"Great character design! Have you registered the copyright?"},{"userName":"AnimeCreator","commentText":"Love the unique design elements. Very distinctive IP!"}]},{"userName":"StoryMaster","postText":"Introducing 'Nova', the protagonist of my upcoming series 'Stellar Legacy'. Copyright protected.","postImageUrl":"https://source.unsplash.com/1280x720/?anime,character","likesCount":250,"comments":[{"userName":"RightsDefender","commentText":"Amazing original character! Make sure to document all your creation process."},{"userName":"CreativeMind","commentText":"The character design is so unique! Definitely stands out as original IP."}]}]}) {
  const [activeComment, setActiveComment] = React.useState(-1);
  const [likedPosts, setLikedPosts] = React.useState({});

  const handleLike = (index) => {
    setLikedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleComment = (index) => {
    setActiveComment(activeComment === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <EditableText propKey={`feedTitle`}>{feedTitle}</EditableText>
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            <EditableText propKey={`feedDescription`}>{feedDescription}</EditableText>
          </p>
        </div>

        <div className="space-y-8">
          {feedItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <EditableIcon propKey={`feedItems_${index}_userIcon`} icon="fa-solid fa-user" iconLibrary="FontAwesome" className="text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      <EditableText propKey={`feedItems_${index}_userName`}>{item.userName}</EditableText>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-800 dark:text-gray-200">
                  <EditableText propKey={`feedItems_${index}_postText`}>{item.postText}</EditableText>
                </p>
              </div>
              
              <div className="relative aspect-[16/9]">
                <EditableImg
                  propKey={`feedItems_${index}_postImageUrl`}
                  src={item.postImageUrl}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex space-x-4">
                  <EditableButton
                    className={`flex items-center space-x-2 ${likedPosts[index] ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => handleLike(index)}
                  >
                    <EditableIcon propKey={`feedItems_${index}_likeIcon`} icon="fa-solid fa-heart" iconLibrary="FontAwesome" className="text-xl" />
                    <span><EditableText propKey={`feedItems_${index}_likesCount`}>{item.likesCount}</EditableText></span>
                  </EditableButton>
                  
                  <EditableButton
                    className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
                    onClick={() => toggleComment(index)}
                  >
                    <EditableIcon propKey={`feedItems_${index}_commentIcon`} icon="fa-solid fa-comment" iconLibrary="FontAwesome" className="text-xl" />
                    <span><EditableText propKey={`feedItems_${index}_comments_length`}>{item.comments.length}</EditableText></span>
                  </EditableButton>
                </div>

                <EditableButton className="text-gray-500 dark:text-gray-400">
                  <EditableIcon propKey={`feedItems_${index}_shareIcon`} icon="fa-solid fa-share" iconLibrary="FontAwesome" className="text-xl" />
                </EditableButton>
              </div>

              {activeComment === index && (
                <div className="p-4 bg-gray-50 dark:bg-slate-600">
                  {item.comments.map((comment, commentIndex) => (
                    <div key={commentIndex} className="mb-4 last:mb-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-500 flex items-center justify-center">
                            <EditableIcon propKey={`feedItems_${index}_comments_${commentIndex}_userCommentIcon`} icon="fa-solid fa-user" iconLibrary="FontAwesome" className="text-gray-500 dark:text-gray-400 text-sm" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            <EditableText propKey={`feedItems_${index}_comments_${commentIndex}_userName`}>{comment.userName}</EditableText>
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <EditableText propKey={`feedItems_${index}_comments_${commentIndex}_commentText`}>{comment.commentText}</EditableText>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  export function SocialFeed_lwObaP9BgEFa5K9hzBWNp_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('SocialFeed')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('SocialFeed')[value].exposingConfigs);
              }}
            />
           {children.feedTitle?.propertyView({ label: 'feedTitle' })}
{children.feedDescription?.propertyView({ label: 'feedDescription' })}
{children.postButtonAttr?.propertyView({ label: 'postButtonAttr' })}
{children.commentPlaceholder?.propertyView({ label: 'commentPlaceholder' })}
{children.shareButtonAttr?.propertyView({ label: 'shareButtonAttr' })}
{children.likeButtonAttr?.propertyView({ label: 'likeButtonAttr' })}
{children.feedItems?.propertyView({ label: 'feedItems' })}

        </Section>
    );
} 
export const SocialFeed_lwObaP9BgEFa5K9hzBWNp_Builder = new UICompBuilder(SocialFeed_lwObaP9BgEFa5K9hzBWNp_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('SocialFeed')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(SocialFeed_lwObaP9BgEFa5K9hzBWNp_PropertyViewFn)
  .build();


export const SocialFeed_lwObaP9BgEFa5K9hzBWNp_ExposingConfigs = withExposingConfigs(SocialFeed_lwObaP9BgEFa5K9hzBWNp_Builder, [])