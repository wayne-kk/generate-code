import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';
import EditableButton from '@ui/EditableButton';


interface CommentType {
  userName: string;
  commentText: string;
}

interface FeedItemType {
  userName: string;
  postText: string;
  postImageUrl: string;
  likesCount: number;
  comments: CommentType[];
}

interface SocialFeedProps {
  feedTitle?: string;
  feedDescription?: string;
  postButtonAttr?: string;
  commentPlaceholder?: string;
  shareButtonAttr?: string;
  likeButtonAttr?: string;
  feedItems?: FeedItemType[];
}

const SocialFeed:React.FC<SocialFeedProps>=({
  feedTitle="Share Your Original Characters",
  feedDescription="Connect with fellow creators by sharing your original characters, unique IP concepts, and creative storylines. Build and protect your anime universe together!",postButtonAttr="text=Post Your Content&link=",commentPlaceholder="Write a comment and join the conversation...",shareButtonAttr="text=Share&link=",likeButtonAttr="text=Like&link=",feedItems=[{"userName":"CreatorStudio","postText":"Meet 'Akira', my original character from 'Crystal Warriors'. All rights reserved - please respect IP!",
    "postImageUrl":"https://plus.unsplash.com/premium_photo-1738597470422-6b9e1fb38fef?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","likesCount":120,"comments":[{"userName":"IPProtector","commentText":"Great character design! Have you registered the copyright?"},{"userName":"AnimeCreator","commentText":"Love the unique design elements. Very distinctive IP!"}]},{"userName":"StoryMaster","postText":"Introducing 'Nova', the protagonist of my upcoming series 'Stellar Legacy'. Copyright protected.",
  "postImageUrl":"https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","likesCount":250,"comments":[{"userName":"RightsDefender","commentText":"Amazing original character! Make sure to document all your creation process."},{"userName":"CreativeMind","commentText":"The character design is so unique! Definitely stands out as original IP."}]}]
  }:SocialFeedProps) =>{
    const [activeComment, setActiveComment] = React.useState<number>(-1);
    const [likedPosts, setLikedPosts] = React.useState<Record<number, boolean>>({});

  const handleLike = (index: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleComment = (index: number) => {
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
                    <span><EditableText propKey={`feedItems_${index}_likesCount`}>{String(item.likesCount)}</EditableText></span>
                  </EditableButton>
                  
                  <EditableButton
                    className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
                    onClick={() => toggleComment(index)}
                  >
                    <EditableIcon propKey={`feedItems_${index}_commentIcon`} icon="fa-solid fa-comment" iconLibrary="FontAwesome" className="text-xl" />
                    <span><EditableText propKey={`feedItems_${index}_comments_length`}>{String(item.comments.length)}</EditableText></span>
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
export default SocialFeed