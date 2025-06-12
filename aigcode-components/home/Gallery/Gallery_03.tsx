import React from 'react';
import { Input } from '@ui/input';
import EditableIcon from '@ui/EditableIcon';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IGalleryinfoItem {
  imageUrl: string
  name: string
  category: string
}

export interface IGalleryProps {
  title: string
  description: string
  galleryInfo: IGalleryinfoItem[]
  showSearch?: boolean
  searchTitle?: string
  searchDescription?: string
  searchPlaceholder?: string
}

const Gallery: React.FC<IGalleryProps> = ({
  title = `Design Studio Essentials`,
  description = `Enhance your creative environment with our curated selection of design studio essentials.`,
  galleryInfo = [
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Creative Workspace`,
      category: `Studio Design`,
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Graphic Tools`,
      category: `Graphic Design`,
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Artistic Space`,
      category: `Art Studio`,
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Modern Interior`,
      category: `Interior Design`,
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Architect's Desk`,
      category: `Architecture`,
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`,
      name: `Creative Tools`,
      category: `Design Accessories`,
    },
  ],
  showSearch = true,
  searchTitle = "Quick Search",
  searchDescription = "Find what you need instantly.",
  searchPlaceholder = "Search...",
}) => {
  const [search, setSearch] = React.useState('');

  // 过滤画廊内容
  const filteredGallery = React.useMemo(() => {
    if (!search.trim()) return galleryInfo;
    const s = search.trim().toLowerCase();
    return galleryInfo.filter(
      item =>
        item.name.toLowerCase().includes(s) ||
        item.category.toLowerCase().includes(s)
    );
  }, [search, galleryInfo]);

  return (
    <section className="bg-white dark:bg-slate-800 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
        {/* 搜索框（可选） */}
        {showSearch && (
          <AnimateInView type="rise">
            <div className="w-full flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="TITLE-PRIMARY text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  <EditableText propKey="searchbox_title">{searchTitle}</EditableText>
                </h2>
                <p className="DESC font-normal text-slate-700 dark:text-slate-400">
                  <EditableText propKey="searchbox_description">{searchDescription}</EditableText>
                </p>
              </div>
              <div className="relative w-full max-w-xl">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <EditableIcon icon="fa-solid fa-search" />
                </div>
                <Input
                  className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 dark:text-slate-500 bg-white dark:bg-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-10 py-3 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={search}
                  placeholder={searchPlaceholder}
                  onChange={e => setSearch(e.target.value)}
                />
                {search && (
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    onClick={() => setSearch('')}
                  >
                    <EditableIcon icon="fa-solid fa-times" />
                  </button>
                )}
              </div>
            </div>
          </AnimateInView>
        )}

        {/* 标题与描述 */}
        <AnimateInView type="rise">
          <div className="w-full flex flex-col gap-6 text-center md:text-left">
            <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50">
              <EditableText propKey={"title"}>{title}</EditableText>
            </h2>
            <p className="DESC font-normal text-slate-700 dark:text-slate-400">
              <EditableText propKey={"description"}>
                {description}
              </EditableText>
            </p>
          </div>
        </AnimateInView>

        {/* 画廊内容 */}
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-6">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((info, index) => (
              <AnimateInView type="rise" key={index}>
                <div className="relative group">
                  <div className="overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                    <EditableImg
                      propKey={`galleryInfo_${index}_imageUrl`}
                      className="IMAGE object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110 aspect-[3/4]"
                      src={info.imageUrl}
                      alt={info.name}
                    />
                    <div className="absolute z-20 flex flex-col justify-center items-center">
                      <h3 className="TITLE-SECONDARY text-base font-bold text-white">
                        <EditableText propKey={`galleryInfo_${index}_name`}>{info.name}</EditableText>
                      </h3>
                      <p className="DESC text-sm font-medium text-gray-300">
                        <EditableText propKey={`galleryInfo_${index}_category`}>{info.category}</EditableText>
                      </p>
                    </div>
                    <div className="absolute z-10 inset-0 bg-black/20 pointer-events-none"></div>
                  </div>
                </div>
              </AnimateInView>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-400 py-12">
              No results found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
