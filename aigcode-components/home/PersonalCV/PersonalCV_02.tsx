import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ISociallinksItem {
  platform: string
  url: string
  icon: string
}

export interface IPersonalCVProps {
  title: string
  descriptionParagraphs: string[]
  imageUrl: string
  socialLinks: ISociallinksItem[]
}

const PersonalCV: React.FC<IPersonalCVProps> = ({
  title = 'I\'m John Doe, a Creative Designer based in San Francisco.',
  descriptionParagraphs = [
    'Creating has been my passion since I was a child. I built my first website at the age of 10 and haven\'t stopped designing and coding since.',
    'Beyond the digital world, I find inspiration in urban architecture, modern art, and nature. These elements influence my approach to design - where functionality meets aesthetic.',
    'With over a decade of experience, I\'ve had the privilege to work for startups and large corporations, crafting user interfaces, brand identities, and interactive experiences.',
    'At my studio, PixelCraft, we believe in designing a future where technology enhances creativity, making design more intuitive and accessible to all.',
  ],
  imageUrl = "https://plus.unsplash.com/premium_photo-1664281095505-6b631bea83de?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  socialLinks = [
    { platform: 'twitter', url: '#', icon: 'fa-brands fa-twitter' },
    { platform: 'Instagram', url: '#', icon: 'fa-brands fa-instagram' },
    { platform: 'GitHub', url: '#', icon: 'fa-brands fa-github' },
    { platform: 'LinkedIn', url: '#', icon: 'fa-brands fa-linkedin' },
    { platform: 'Email', url: 'mailto:john@apple.com', icon: 'fa-solid fa-envelope' },
  ],
}) =>{
  return (
    // 外层全宽背景色容器
    <div className="w-full bg-white dark:bg-slate-800">
      <div className="mx-auto w-full max-w-7xl py-16 md:py-20 lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <AnimateInView type="rise">
                    <EditableImg propKey="imageUrl" className="IMAGE w-[20rem] h-[20rem] aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800" src={imageUrl} alt={imageUrl} style={{ color: 'transparent' }} />
                  </AnimateInView>
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="TITLE-PRIMARY text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl dark:text-slate-100">
                  <EditableText propKey="title">{title}</EditableText>
                </h1>
                <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p key={index} className="DESC">
                      <EditableText propKey={`descriptionParagraphs_${index}`}>{paragraph}</EditableText>
                    </p>
                  ))}
                </div>
              </div>
              <div className="lg:pl-20">
                <ul role="list" className="gap-3 flex flex-col">
                  {socialLinks.map((link, index) => (
                    <li key={index} className="flex">
                      <EditableButton className="BTN-SECONDARY group flex text-sm font-medium text-slate-800 transition hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-500">
                        <EditableIcon propKey={`socialLinks_${index}_icon`} icon={link.icon} iconLibrary="FontAwesome" className="h-5 w-5 flex-none text-slate-500 transition group-hover:text-sky-500" />
                        <span className="ml-4"><EditableText propKey={`socialLinks_${index}_platform`}>{link.platform}</EditableText></span>
                      </EditableButton>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalCV;