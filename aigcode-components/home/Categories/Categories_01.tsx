import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';

export interface ICategoriesItem {
  title: string
  description: string
  imageUrl: string
  buttonText: string
  buttonIcon: string
}

export interface ICategoriesProps {
  categories: ICategoriesItem[]
  onCategoryClick?: (category: ICategoriesItem, index: number) => void
}

const Categories: React.FC<ICategoriesProps> = ({
  categories = [
    {
      title: 'Modern Design Collection',
      description:
        'Discover contemporary styles that bring out your unique taste in our Modern Design Collection.',
      imageUrl: 'https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Explore Now',
      buttonIcon: 'fa-solid fa-arrow-right',
    },
    {
      title: 'Innovative Workspace Essentials',
      description:
        'Elevate your productivity with our Innovative Workspace Essentials, tailored for the creative mind.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Explore Now',
      buttonIcon: 'fa-solid fa-arrow-right',
    },
  ],
  onCategoryClick,
}) => {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 py-10 rounded-lg  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 text-center rounded-lg sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:text-left">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => {
                if (onCategoryClick) {
                  onCategoryClick(category, index);
                }
              }}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (onCategoryClick) {
                    onCategoryClick(category, index);
                  }
                }
              }}
            >
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg ">
                <AnimateInView type="rise">
                  <EditableImg
                    propKey={`categories_${index}_imageUrl`}
                    className="object-cover w-full rounded-lg  h-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-3 aspect-[1/1]"
                    src={category.imageUrl}
                    alt={category.title}
                  />
                </AnimateInView>
              </div>
              <div className="absolute inset-0 rounded-lg  bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white/90">
                  <EditableText propKey={`categories_${index}_title`}>{category.title}</EditableText>
                </h3>
                <p className="mt-2 text-sm lg:text-base font-normal text-white/90">
                  <EditableText propKey={`categories_${index}_description`}>{category.description}</EditableText>
                </p>
                <p className="inline-flex items-center mt-4 text-sm lg:text-base font-bold text-white/90 relative group-hover:underline">
                  <EditableText propKey={`categories_${index}_buttonText`}>{category.buttonText}</EditableText>
                  <EditableIcon propKey={`categories_${index}_buttonIcon`} icon={category.buttonIcon} iconLibrary={"FontAwesome"} className="text-base text-white/90 ml-2 transition-all duration-200 group-hover:translate-x-1"/>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;