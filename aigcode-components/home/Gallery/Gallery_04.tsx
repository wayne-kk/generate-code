import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';
import { Input } from '@ui/input';
import EditableIcon from '@ui/EditableIcon';

export interface IGalleryImagesItem {
  src: string;
  title: string;
  tag: string;
}

export interface ICategoriesItem {
  name: string;
  images: IGalleryImagesItem[];
}

export interface IGalleryProps {
  categories?: ICategoriesItem[];
  showSearch?: boolean;
  searchTitle?: string;
  searchDescription?: string;
  searchPlaceholder?: string;
}

const defaultCategories: ICategoriesItem[] = [
  {
    name: 'Web Design',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Landing Page Design',
        tag: 'Web',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'WordPress Theme',
        tag: 'Template',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Responsive Layouts',
        tag: 'Responsive',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'User Experience Project',
        tag: 'UX',
      },
    ],
  },
  {
    name: 'Graphic Design',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Marketing Poster',
        tag: 'Graphic',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Corporate Branding',
        tag: 'Branding',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Digital Illustrations',
        tag: 'Art',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Print Design Suite',
        tag: 'Print',
      },
    ],
  },
  {
    name: 'UI/UX',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Dashboard UI Kit',
        tag: 'UI/UX',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Mobile App Interfaces',
        tag: 'Mobile',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Wireframing Sessions',
        tag: 'Wireframe',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'UX Design Workshop',
        tag: 'Workshop',
      },
    ],
  },
  {
    name: 'Photography',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Nature and Wildlife',
        tag: 'Photo',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Urban City Life',
        tag: 'Urban',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Portrait Photography',
        tag: 'Portrait',
      },
      {
        src: 'https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Landscape Views',
        tag: 'Landscape',
      },
    ],
  },
];

const Gallery: React.FC<IGalleryProps> = ({
  categories = defaultCategories,
  showSearch = true,
  searchTitle = 'Quick Search',
  searchDescription = 'Find what you need instantly.',
  searchPlaceholder = 'Search...',
}) => {
  // 如果 categories 为空数组，设置默认值
  const initialCategory = categories.length > 0 ? categories[0] : { name: '', images: [] };

  const [activeCategory, setActiveCategory] = React.useState(initialCategory);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredImages, setFilteredImages] = React.useState<IGalleryImagesItem[]>(activeCategory.images);

  // 搜索过滤逻辑
  React.useEffect(() => {
    if(!activeCategory.name && categories.length > 0)
    {setActiveCategory(categories[0])}
    
    if (!showSearch || !searchValue.trim()) {
      setFilteredImages(activeCategory.images);
    } else {
      const keyword = searchValue.trim().toLowerCase();
      setFilteredImages(
        activeCategory.images.filter(
          img =>
            img.title.toLowerCase().includes(keyword) ||
            img.tag.toLowerCase().includes(keyword)
        )
      );
    }
  }, [searchValue, activeCategory, showSearch, categories]);

  // 切换分类时重置搜索
  React.useEffect(() => {
    setFilteredImages(activeCategory.images);
    setSearchValue('');
  }, [activeCategory]);

  // 处理回车键事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800">
      <div className="w-full max-w-7xl mx-auto py-20 px-4">
        {/* 搜索框区域 */}
        {showSearch && (
          <section className="mb-10">
            <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="TITLE-PRIMARY text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  <EditableText propKey="searchbox_title">{searchTitle}</EditableText>
                </h2>
                <p className="DESC font-normal text-slate-700 dark:text-slate-400">
                  <EditableText propKey="searchbox_description">{searchDescription}</EditableText>
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <EditableIcon icon="fa-solid fa-search" />
                </div>
                <Input
                  className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-slate-500 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-10 py-3 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={searchValue}
                  placeholder={searchPlaceholder}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {searchValue && (
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    onClick={() => setSearchValue('')}
                  >
                    <EditableIcon icon="fa-solid fa-times" />
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 分类切换 */}
        <div>
          <ul className="filter-options flex flex-wrap justify-start gap-2 mb-6">
            {categories.map((category, index) => (
              <li key={category.name} className="inline-block">
                <EditableButton
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIndex(index);
                  }}
                  className={`inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-100 rounded-full text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600  dark:border-slate-800 ${
                    activeCategory.name === category.name
                      ? 'bg-sky-50 border-sky-200 text-sky-600 dark:bg-white'
                      : 'text-slate-900 hover:bg-sky-400 dark:text-slate-200 dark:hover:text-white'
                  }`}
                >
                  <EditableText propKey={`categories_${index}_name`}>{category.name}</EditableText>
                </EditableButton>
              </li>
            ))}
          </ul>
        </div>

        {/* 图片展示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.length === 0 ? (
            <div className="col-span-full text-center text-slate-400 py-12">
              <span>No results found.</span>
            </div>
          ) : (
            filteredImages.map((image, index) => (
              <AnimateInView type="rise" key={image.src + index}>
                <div className="relative overflow-hidden rounded-lg shadow-lg group bg-slate-100 dark:bg-slate-900">
                  <EditableImg
                    propKey={`categories_${activeIndex}_images_${index}_src`}
                    className="transition-transform object-cover w-full h-auto aspect-[4/3] duration-500 ease-in-out transform group-hover:scale-110"
                    src={image.src}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute flex pointer-events-none items-center gap-1.5 bottom-0 left-0 p-6 z-10 bg-gradient-to-t from-black w-full" />
                  <div className="absolute flex items-center gap-1.5 bottom-0 left-0 p-4 z-20">
                    <p className="TITLE-PRIMARY text-white text-lg font-semibold">
                      <EditableText propKey={`categories_${activeIndex}_images_${index}_title`}>{image.title}</EditableText>
                    </p>
                    <p className="DESC text-xs inline-flex p-1.5 rounded font-medium bg-white/20 text-white">
                      <EditableText propKey={`categories_${activeIndex}_images_${index}_tag`}>{image.tag}</EditableText>
                    </p>
                  </div>
                </div>
              </AnimateInView>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
