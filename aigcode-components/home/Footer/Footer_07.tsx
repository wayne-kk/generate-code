import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface INavigationitemsItem {
  textAttr: string
  titleLink: string

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
    { textAttr: "About Us",titleLink:'/' },
    { textAttr: "Our Services",titleLink:'/' },
    { textAttr: "Projects",titleLink:'/' },
    { textAttr: "Careers",titleLink:'/' },
  ],
  socialMediaItems = [
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-instagram", href: "#" },
    { icon: "fa-brands fa-github", href: "#" },
  ],
  copyrightText = "© Design Studio 2023, All Rights Reserved",
}) =>{
  return (
    <section className="bg-black px-6 py-20 md:px-8">
      <AnimateInView type="rise">
      <div className=" mx-auto max-w-7xl flex flex-col  gap-16">
            <ul className="w-full flex items-center justify-center gap-8">
              {navigationItems.map((item,index) => (
                <li key={item.textAttr}>
                  <EditableButton
                    className="TEXT-LINK font-semibold  text-slate-50  hover:text-sky-400  dark:hover:text-sky-400 focus:text-sky-500 dark:focus:text-sky-500"
                    href={item.titleLink}
                  >
                    <EditableText  propKey={`navigationItems_${index}_textAttr`}>{item.textAttr}</EditableText>
                  </EditableButton>
                </li>
              ))}
            </ul>


          <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <ul className="flex items-center gap-8 ">
                {socialMediaItems.map((item,index) => (
                  <li key={item.icon} >
                     <a href={item.href}>
                    <EditableButton
                      className="TEXT-LINK text-slate-50 hover:text-sky-400 dark:hover:text-sky-400  dark:focus:text-slate-500"
                    >
                      <EditableIcon  propKey={`socialMediaItems_${index}_icon`} icon={item.icon} iconLibrary={"FontAwesome"} className="text-lg"/>
                    </EditableButton>
                    </a>
                  </li>
                ))}
              </ul>

            </div>
            <p className="text-sm  lg:mt-0 text-white/60">
              <EditableText propKey={"copyrightText"}>{copyrightText}</EditableText>
            </p>

          </div>
      </div>
      </AnimateInView>
    </section>
  )
}

export default Footer;