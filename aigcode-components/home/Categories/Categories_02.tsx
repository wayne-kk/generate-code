import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';


export interface ICategoriesItem {
  name: string
  products: string
  imageUrl: string
  key: string
}

export interface ICategoriesProps {
  categories: ICategoriesItem[]
  title: string
  subtitle: string
  buttonTextAttr: string
  buttonTextAttrLink: string
  buttonIcon: string
  onCategoryClick?: (category: ICategoriesItem, index: number) => void
  onAllCategoriesClick?: () => void
}

const Categories: React.FC<ICategoriesProps> = ({
  categories = [
    {
      name: 'Innovative Designs',
      products: '2,345 Products',
      imageUrl: `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      key: 'design',
    },
    {
      name: 'Ergonomic Chairs',
      products: '1,234 Products',
      imageUrl: `https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      key: 'chairs',
    },
    {
      name: 'Modern Desks',
      products: '789 Products',
      imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      key: 'desks',
    },
    {
      name: 'Stylish Lamps',
      products: '567 Products',
      imageUrl: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      key: 'lamps',
    },
  ],
  title = 'Explore Our Categories',
  subtitle = 'Discover unique pieces to accent your workspace',
  buttonTextAttr = 'Browse All Categories',
  buttonTextAttrLink = '/',
  buttonIcon = 'fa-solid fa-arrow-right',
  onCategoryClick,
  onAllCategoriesClick,
}) => {
  return (
    <div className="w-full  dark:bg-slate-800 py-14">
      <section className="py-10 px-4 mx-auto max-w-7xl ">
        <div className="text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-bold text-slate-900 dark:text-white">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="TITLE-SECONDARY mt-6 text-base font-normal text-slate-700 dark:text-white/80">
            <EditableText propKey="subtitle">{subtitle}</EditableText>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8 w-full h-full text-center sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:mt-12">
          {categories.map((category, index) => (
            <AnimateInView key={category.key} type="rise">
              <div
                className="relative w-full h-full group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => onCategoryClick?.(category, index)}
              >
                <div className="absolute w-full h-full inset-0 ">
                  <EditableImg
                    propKey={`categories_${index}_imageUrl`}
                    className="IMAGE object-cover w-full h-full aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-900"
                    src={`${category.imageUrl}`}
                    alt={category.imageUrl}
                  />
                </div>

                <div className="relative p-6">
                  <span className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-bold text-gray-900 bg-white rounded opacity-100 group-hover:opacity-0">
                    <EditableText propKey={`categories_${index}_name`}>{category.name}</EditableText>
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black transition-all duration-300 opacity-0 group-hover:opacity-80">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 text-lg font-bold text-white">
                      <EditableButton className="TEXT-LINK">
                        <EditableText propKey={`categories_${index}_name`}>{category.name}</EditableText>
                      </EditableButton>
                    </span>
                    <span className="DESC mt-1.5 text-sm font-medium text-gray-200">
                      <EditableText propKey={`categories_${index}_products`}>{category.products}</EditableText>
                    </span>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView>
          <div className="mt-12 text-center">
            <EditableButton
              className="BTN-PRIMARY inline-flex gap-1 group text-sky-400 items-center justify-center px-6 py-2 text-sm font-medium  dark:text-sky-300 border border-sky-400 dark:border-sky-300 rounded-lg  dark:bg-slate-800 transition-colors duration-500"
              onClick={onAllCategoriesClick}
              href={buttonTextAttrLink}
            >
              <EditableText propKey="buttonTextAttr">{buttonTextAttr}</EditableText>
              <EditableIcon propKey="buttonIcon" icon={buttonIcon} className="group-hover:translate-x-1 transition-all duration-300" />
            </EditableButton>
          </div>
        </AnimateInView>
      </section>
    </div>
  );
}

export default Categories;