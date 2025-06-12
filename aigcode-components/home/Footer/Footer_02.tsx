import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface INavigationitemsItem {
  title: string
  href: string
}

export interface ISocialmediaitemsItem {
  icon: string
  href: string
}

export interface IFooterProps {
  navigationItems: INavigationitemsItem[]
  socialMediaItems: ISocialmediaitemsItem[]
  copyrightText: string
}

const Footer: React.FC<IFooterProps> = ({
  navigationItems = [
    { title: 'About Us' , href: '/'},
    { title: 'Our Services' , href: '/'},
    { title: 'Projects' , href: '/'},
    { title: 'Careers' , href: '/'},
  ],
  socialMediaItems = [
    { icon: 'fa-brands fa-twitter', href: '/' },
    { icon: 'fa-brands fa-facebook', href: '/' },
    { icon: 'fa-brands fa-instagram', href: '/' },
    { icon: 'fa-brands fa-github', href: '/' },
  ],
  copyrightText = '© Design Studio 2023, All Rights Reserved',
}) =>{
  return (
    <section className="bg-slate-50 dark:bg-slate-800 px-6 py-20 md:px-8">
      <AnimateInView type="rise">
        <div className=" mx-auto max-w-7xl flex flex-col gap-20">
          <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
            <ul className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <li key={item.title} >
                  <EditableButton
                    className="TEXT-LINK font-semibold text-slate-900 dark:text-slate-50  hover:text-sky-400  dark:hover:text-sky-400 focus:text-sky-500 dark:focus:text-sky-500"
                    href={item.href}
                  >
                    <EditableText className='!cursor-pointer' propKey={`navigationItems_${index}_titleAttr`}>{item.title}</EditableText>
                  </EditableButton>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-8 ">
              {socialMediaItems.map((item, index) => (
                <li key={item.icon}>
                  <EditableButton
                    className="TEXT-LINK text-slate-900 dark:text-slate-50 hover:text-sky-400 dark:hover:text-sky-400  dark:focus:text-slate-500"
                    href={item.href}

                  >
                    <EditableIcon propKey={`socialMediaItems_${index}_icon`} icon={item.icon} iconLibrary="FontAwesome" className="text-lg" />
                  </EditableButton>
                </li>
              ))}
            </ul>

          </div>

          <p className="w-full text-sm text-center text-slate-600 lg:mt-0 dark:text-slate-400">
            <EditableText propKey="copyrightText">{copyrightText}</EditableText>
          </p>

        </div>
      </AnimateInView>
    </section>
  );
}

export default Footer;