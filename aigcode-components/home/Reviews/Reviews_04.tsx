import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface IReviewsItem {
  name: string
  role: string
  image: string
  feedback: string
  rating: string[]
}

export interface IReviewsProps {
  title: string
  description: string
  reviews: IReviewsItem[]
}

const Reviews: React.FC<IReviewsProps> = ({
  title = 'Customer\'s Review',
  description = 'This is just a simple text made for this unique and awesome template, you can replace it with any text.',
  reviews = [
    {
      name: 'Olivia Stanton',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=1000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      feedback: 'Before exploring The Art of Iconology, my perspective on iconography was fairly basic. This book has not only enhanced my skills but has inspired a whole new wave of creativity in our projects. A must-read for any designer!',
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
    },
    {
      name: 'Ethan Parker',
      role: 'Design Lead',
      image: 'https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      feedback: 'Our design process was transformed with the adoption of the VectorStream software suite. What once felt like a chore is now an exciting journey of visual storytelling. Every design team needs this tool in their arsenal.',
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
    },
    {
      name: 'Sophia Larson',
      role: 'Head of UX',
      image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      feedback: 'I\'m impressed with the intuitiveness of the CanvasFlow app. As a UX professional, watching our user satisfaction metrics soar has been a delightful experience. It\'s nice to see our financials are also benefiting from this investment.',
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
    },
    {
      name: 'Derek Schmidt',
      role: 'Product Manager',
      image: 'https://plus.unsplash.com/premium_photo-1664281095505-6b631bea83de?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      feedback: 'Reaching out for support with RenderPro was effortless. The quick turnaround and expert advice saved our product launch and put my mind at ease. I appreciate a company that stands confidently behind its service.',
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
    },
    {
      name: 'Amelia Davis',
      role: 'Brand Strategist',
      image: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      feedback: 'I never expected an out-of-office reply to solve my query, but here we are. ImageMint\'s guide on sustainable branding practices arrived just in time to revamp our strategy. Kudos to the team for such responsive communication despite your staff\'s retreat.',
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
    },
  ],
}) =>{
  return (
    <div className=" dark:bg-slate-800">
      <div className=" max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            <EditableText propKey="title">{title}</EditableText>
          </h3>
          <p className="DESC mt-4 text-center  text-slate-700 dark:text-white/70 lg:text-lg ">
            <EditableText propKey="description">
              {description}
            </EditableText>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {reviews.map((review, index) => (
            <AnimateInView type="rise" key={`review_${index}`}>
              <div className="w-full h-full">
                <div className="rounded-xl h-full flex flex-col gap-8 shadow dark:shadow-gray-800 p-8 bg-white dark:bg-slate-900">
                  <div className="flex items-center pb-8 border-b border-black/10 dark:border-white/10">
                    <EditableImg
                      propKey={`reviews_${index}_image`}
                      className="IMAGE h-14 w-14 rounded-full shadow dark:shadow-gray-800 object-cover aspect-[1/1]"
                      src={review.image}
                    />
                    <div className="pl-3">
                      <EditableButton className="TEXT-LINK text-lg font-semibold text-sky-600 hover:text-sky-700 dark:hover:text-white duration-500">
                        <EditableText propKey={`reviews_${index}_name`}>{review.name}</EditableText>
                      </EditableButton>
                      <p className="text-slate-500 dark:text-white/90">
                        <EditableText propKey={`reviews_${index}_role`}>{review.role}</EditableText>
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-6">
                    <p className="TEXT-CONTENT text-slate-500 dark:text-white/90">
                      <EditableText propKey={`reviews_${index}_feedback`}>{review.feedback}</EditableText>
                    </p>
                    <ul className="flex items-center gap-2">
                      {review.rating.map((icon, iconIndex) => (
                        <EditableIcon propKey={`reviews_${index}_rating_${iconIndex}`} icon={icon} iconLibrary="FontAwesome" className="text-amber-400 text-xl" />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Reviews;