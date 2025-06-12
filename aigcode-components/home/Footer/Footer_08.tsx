import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ILinksItem {
  textAttr: string
  titleLink: string

}

export interface ISocialiconsItem {
  icon: string
  href: string
}

export interface IFooterProps {
  companyCopyright: string
  links: ILinksItem[]
  socialIcons: ISocialiconsItem[]
}

const Footer: React.FC<IFooterProps> = ({
  companyCopyright = "© 2023 Design Studio Works",
  links = [
    { textAttr: "About Us" ,titleLink:'/' },
    { textAttr: "Our Services" ,titleLink:'/' },
    { textAttr: "Privacy Policy" ,titleLink:'/' },
    { textAttr: "Terms Conditions" ,titleLink:'/' },
    { textAttr: "Support" ,titleLink:'/' },
  ],
  socialIcons = [
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-instagram", href: "#" },
  ],
}) =>{
  return (
    <section className="py-10 bg-black">
      <AnimateInView type="rise">
        <div className="mx-auto px-4 max-w-7xl py-10 flex flex-col items-center gap-12">

            <EditableText propKey="companyCopyright" className="DESC ml-2  text-sm text-white/60">{companyCopyright}</EditableText>


          <div className="flex flex-col gap-8 items-center md:flex-row">
            <ul className="flex flex-col items-center gap-8 sm:flex-row">
              {links.map((link, index) => (
                <li key={index}>
                  <EditableButton className="TEXT-LINK text-sm text-white hover:text-sky-500 focus:text-sky-500  dark:hover:text-sky-500 dark:focus:text-sky-500" href={link.titleLink}>
                    <EditableText  propKey={`links_${index}_textAttr`}>{link.textAttr}</EditableText>
                  </EditableButton>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-white/20 dark:bg-white/10 md:w-px md:h-6"></div>

            <ul className="flex items-center gap-8">
              {socialIcons.map((icon, index) => (
                <li key={index} >
                  <a href={icon.href}>
                  <EditableButton className="TEXT-LINK text-white">
                    <EditableIcon propKey={`socialIcons_${index}_icon`} icon={icon.icon} iconLibrary={"FontAwesome"} className="text-lg  hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-500 dark:focus:text-sky-500"/>
                  </EditableButton>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}


export default Footer;