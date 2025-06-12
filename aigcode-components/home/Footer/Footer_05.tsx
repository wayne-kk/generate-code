import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ILinksItem {
  href: string
  title: string
  propKey: string
}

export interface ISocialmediaItem {
  href: string
  icon: string
  propKey: string
}


export interface IFooterProps {
  links: ILinksItem[]
  socialMedia: ISocialmediaItem[]
  copyrightText: string
}

const Footer: React.FC<IFooterProps> = ({
  links = [
    { href: `#`, title: `text=About Us`, propKey: `links_0_title` },
    { href: `#`, title: `text=Our Services`, propKey: `links_1_title` },
    { href: `#`, title: `text=Portfolio`, propKey: `links_2_title` },
    { href: `#`, title: `text=Support`, propKey: `links_3_title` },
    { href: `#`, title: `text=Contact`, propKey: `links_4_title` },
  ],
  socialMedia = [
    { href: `#`, icon: `fa-brands fa-twitter`, propKey: `socialMedia_twitter` },
    { href: `#`, icon: `fa-brands fa-facebook-f`, propKey: `socialMedia_facebook` },
    { href: `#`, icon: `fa-brands fa-instagram`, propKey: `socialMedia_instagram` },
    { href: `#`, icon: `fa-brands fa-github`, propKey: `socialMedia_github` },
  ],
  copyrightText = `© 2023 Design Studio. All Rights Reserved.`,
}) =>{
  return (
    <footer className="py-10 bg-white dark:bg-slate-800">
      <AnimateInView type="rise">
        <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col items-center gap-16">
          <ul className="w-full grid grid-cols-2 text-center  gap-6 md:grid-cols-5">
            {links.map((link, index) => (
              <li key={link.propKey} >
                <a  href={link.href}>
                <EditableButton
                  className="TEXT-LINK inline-flex text-lg font-medium text-slate-900 dark:text-slate-50 hover:text-sky-400 focus:text-sky-500 dark:hover:text-sky-400 dark:focus:text-sky-500"
                >
                  <EditableText propKey={`links_${index}_title`}>{link.title}</EditableText>
                </EditableButton>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            <ul className="flex items-center justify-center gap-6">
              {socialMedia.map((social, index )=> (
                <li key={social.icon}>
                  <a  href={social.href}>
                  <EditableButton
                    className="inline-flex items-center justify-center w-10 h-10 text-slate-900 transition-all duration-200 rounded-full hover:bg-sky-400 hover:text-slate-50 focus:outline-none focus:bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:hover:bg-sky-400 dark:focus:bg-sky-500 dark:text-slate-50"
                  >
                    <EditableIcon propKey={`socialMedia_${index}_icon`} icon={social.icon} iconLibrary="FontAwesome" className="text-xl"/>
                  </EditableButton>
                  </a>
                </li>
              ))}
            </ul>

            <p className="DESC text-base font-normal text-center text-slate-600 dark:text-white/80">
              <EditableText propKey="copyrightText">{copyrightText}</EditableText>
            </p>
          </div>
        </div>
      </AnimateInView>
    </footer>
  );
}

export default Footer;