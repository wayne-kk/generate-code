import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';
import { Input } from '@ui/input';

export interface IGalleryImagesItem {
  url: string;
  name: string;
}

export interface IGalleryProps {
  title: string;
  description: string;
  images: IGalleryImagesItem[];
  showSearch?: boolean;
  searchTitle?: string;
  searchDescription?: string;
  searchPlaceholder?: string;
}

const Gallery: React.FC<IGalleryProps> = ({
  title = "Innovative Designs",
  description = "Explore our unique and creative design gallery that showcases our expertise in bringing ideas to life.",
  images = [
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Creative Expansion" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Artistic Visualization" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Conceptual Studio" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Project Implementation" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Innovative Development" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Technology Startup" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Cybersecurity Insights" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Virtual Reality Experiences" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Sustainable Energy" },
    { url: "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", name: "Artificial Intelligence" }
  ],
  showSearch = true,
  searchTitle = "Quick Search",
  searchDescription = "Find what you need instantly.",
  searchPlaceholder = "Search...",
}) => {
  const [search, setSearch] = React.useState('');

  // 搜索过滤
  const filteredImages = React.useMemo(() => {
    if (!search.trim()) return images;
    return images.filter(img =>
      img.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, images]);

  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10">
      <AnimateInView type="rise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 搜索框 */}
          {showSearch && (
            <div className="mb-10">
              <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="TITLE-PRIMARY text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    <EditableText propKey="searchbox_title">{searchTitle}</EditableText>
                  </h2>
                  <p className="DESC font-normal text-slate-700 dark:text-slate-400">
                    <EditableText propKey="searchbox_description">{searchDescription}</EditableText>
                  </p>
                </div>
                <Input
                  className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 dark:text-slate-500 bg-white dark:bg-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-5 py-3 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={search}
                  placeholder={searchPlaceholder}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey={"title"}>{title}</EditableText>
              </h2>
              <p className="DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80">
                <EditableText propKey={"description"}>{description}</EditableText>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x">
            {filteredImages.length > 0 ? (
              filteredImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden snap-start scroll-ml-0 shrink-0">
                  <EditableImg propKey={`images_${index}_url`} className="IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100" src={image.url} alt={image.name} />
                  <p className="TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80">
                    <EditableText propKey={`images_${index}_name`}>{image.name}</EditableText>
                  </p>
                </div>
              ))
            ) : (
              <div className="w-full text-center text-slate-400 dark:text-slate-500 py-20">
                No results found.
              </div>
            )}
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};

export default Gallery;
