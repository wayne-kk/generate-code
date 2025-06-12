import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICategoriesItem {
  name: string
  imageUrl: string
}

export interface ICategoriesProps {
  title: string
  description: string
  categories: ICategoriesItem[]
  allCategoriesText: string
  allCategoriesLink: string
  allCategoriesTextIcon: string
  onCategoryClick?: (category: ICategoriesItem, index: number) => void
  onAllCategoriesClick?: () => void
}


const Categories: React.FC<ICategoriesProps> = ({
  title = 'Explore Our Services',
  description = 'Select from our broad range of creative offerings',
  categories = [
    { name: 'Brand', imageUrl: 'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Web', imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Advertising', imageUrl: 'https://plus.unsplash.com/premium_photo-1671638543170-8a1b232c11b9?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Social-Media', imageUrl: 'https://plus.unsplash.com/premium_photo-1683583961441-511f9498e6ed?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Photography', imageUrl: 'https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Video', imageUrl: 'https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  allCategoriesText = 'View All Services',
  allCategoriesLink = '/',
  allCategoriesTextIcon = 'fa-solid fa-arrow-right',
  onCategoryClick,
  onAllCategoriesClick,
}) =>{
  return (
    <section className="py-10 bg-white dark:bg-slate-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col  gap-6">
          <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white/90">
            <EditableText propKey="title">{title}</EditableText>
          </h2>
          <p className="DESC text-base font-normal text-slate-700 dark:text-white/70">
            <EditableText propKey="description">{description}</EditableText>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-16 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((category, index) => (
            <AnimateInView key={index} type="rise">
              <div
                className="min-h-full relative rounded-lg border border-black/5 hover:shadow-lg transition-all duration-300 dark:bg-slate-700"
                onClick={() => onCategoryClick?.(category, index)}
                style={{ cursor: onCategoryClick ? 'pointer' : undefined }}
              >
                <div className="p-6">
                  <EditableImg propKey={`categories_${index}_imageUrl`} className="IMAGE w-24 h-24 mx-auto rounded-full bg-slate-100 aspect-[1/1] object-cover" src={category.imageUrl} alt={category.name} />
                  <p className="mt-5 text-base font-bold  text-center text-slate-900 dark:text-white/90">
                    <EditableButton className="text-inherit bg-transparent">
                      <EditableText propKey={`categories_${index}_name`}>
                        {category.name}
                      </EditableText>
                    </EditableButton>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
        <div className="mt-8 text-center">
          <EditableButton
            className="BTN-PRIMARY inline-flex items-center px-6 py-2 xl:py-3 text-sm sm:text-base 2xl:text-lg text-slate-900 bg-white font-medium border border-black/10 dark:border-white/10 focus:outline-none hover:bg-slate-100 rounded-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white"
            onClick={onAllCategoriesClick}
            href={allCategoriesLink}
          >
            <EditableText propKey="allCategoriesText">{allCategoriesText}</EditableText>
            <EditableIcon
              propKey="allCategoriesTextIcon"
              icon={allCategoriesTextIcon}
              iconLibrary="FontAwesome"
              className="text-base text-slate-900 dark:text-white ml-1.5"
            />
          </EditableButton>
        </div>
      </div>
    </section>
  );
}

export default Categories;