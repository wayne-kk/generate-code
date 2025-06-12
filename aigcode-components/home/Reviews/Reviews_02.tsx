import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface IReviewsItem {
  rating: string[]
  aspect: string
  date: string
  text: string
  reviewer: string
  avatarUrl: string
}

export interface IReviewsProps {
  title: string
  reviewsCount: string
  reviews: IReviewsItem[]
}

const Reviews: React.FC<IReviewsProps> = ({
  title = `Reviews for Our Design Studio`,
  reviewsCount = `3 Reviews`,
  reviews = [
    {
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
      aspect: `Code Quality`,
      date: `March 14, 2021`,
      text: `Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly.`,
      reviewer: `Jerome Bell`,
      avatarUrl: `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=848&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
      aspect: `Design Quality`,
      date: `February 26, 2021`,
      text: `Awesome product and very Good customer support. Loved the UI kit design. Highly recommended.`,
      reviewer: `Albert Flores`,
      avatarUrl: `https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
      aspect: `Customer Support`,
      date: `February 08, 2021`,
      text: `Responsive and friendly support! They resolved my issues quickly and with a positive attitude.`,
      reviewer: `Ralph Edwards`,
      avatarUrl: `https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
  ],
}) =>{

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-slate-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full text-center lg:text-left">
          <h3 className="TITLE-PRIMARY text-4xl font-semibold font-normal text-slate-900 dark:text-slate-300">
            <EditableText propKey="title">{title}</EditableText>
          </h3>
          <p className="DESC mt-2 text-base font-medium text-slate-500 dark:text-slate-300">
            <EditableText propKey="reviewsCount">{reviewsCount}</EditableText>
          </p>
        </div>

        <ul className="space-y-6 mt-9">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="bg-white border border-black/10 dark:border-white/10 rounded-xl  dark:bg-slate-900"
            >
              <div className="px-6 py-5">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-px">
                    {review.rating.map((icon, iconIndex) => (
                          <EditableIcon key={iconIndex} propKey={`reviews_${index}_rating_${iconIndex}`} icon={icon} iconLibrary="FontAwesome" className="text-amber-500 text-lg" />
                        ))}
                    </div>
                    <span className="TEXT-CONTENT text-base flex gap-1 font-normal ml-1.5 text-slate-500 dark:text-white/70">
                      for <span className="font-bold text-slate-900 dark:text-white/70">
                        <EditableText propKey={`reviews_${index}_aspect`}>{review.aspect}</EditableText>
                      </span>
                    </span>
                  </div>
                  <p className="DESC text-sm mt-2.5 sm:mt-0 font-normal text-slate-500 dark:text-white/70">
                    <EditableText propKey={`reviews_${index}_date`}>{review.date}</EditableText>
                  </p>
                </div>

                <blockquote className="mt-4 sm:mt-6">
                  <p className="TEXT-CONTENT text-base font-normal leading-7 text-slate-600 dark:text-white/70">
                    <EditableText propKey={`reviews_${index}_text`}>{review.text}</EditableText>
                  </p>
                </blockquote>

                <div className="flex items-center mt-5 sm:mt-8">
                  <EditableImg
                    propKey={`reviews_${index}_avatarUrl`}
                    className="IMAGE flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-500 object-cover aspect-[1/1]"
                    src={review.avatarUrl}
                    alt={review.avatarUrl}
                  />
                  <span className="TEXT-CONTENT ml-2.5 text-sm font-bold text-slate-900 dark:text-white">
                    <EditableText propKey={`reviews_${index}_reviewer`}>{review.reviewer}</EditableText>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default Reviews;