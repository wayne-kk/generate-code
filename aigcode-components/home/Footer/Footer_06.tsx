import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICompanysectionsItem {
  titleAttr: string
  titleLink: string

}

export interface ISociallinksItem {
  icon: string
  url: string
}

export interface IFooterProps {
  companySections: ICompanysectionsItem[]
  socialLinks: ISociallinksItem[]
  footerText: string
}

const Footer: React.FC<IFooterProps> = ({
  companySections = [
    { titleAttr: `Company`,titleLink:'/' },
    { titleAttr: `Help`,titleLink:'/' },
    { titleAttr: `Resources` ,titleLink:'/'},
    { titleAttr: `Extra Links`,titleLink:'/' },
  ],
  socialLinks = [
    { icon: `fa-brands fa-twitter`, url: `#` },
    { icon: `fa-brands fa-facebook-f`, url: `#` },
    { icon: `fa-brands fa-instagram`, url: `#` },
    { icon: `fa-brands fa-github`, url: `#` },
  ],
  footerText = `© Design Studio 2023, All Rights Reserved`,
}) =>{
  return (
    <section className="w-full bg-gray-900 dark:bg-gray-900 py-20 px-6 md:px-8">
     <AnimateInView type="rise">
      <div className="mx-auto max-w-7xl w-full flex flex-col gap-12">
          <div className="w-full flex flex-wrap gap-10 items-center justify-center">
            {companySections.map((section, index) => (
              <div key={section.titleAttr}>
                <EditableButton className="TITLE-PRIMARY text-base font-semibold text-slate-50" href={section.titleLink}>
                  <EditableText propKey={`companySections_${index}_titleAttr`}>{section.titleAttr}</EditableText>
                </EditableButton>
              </div>
            ))}
          </div>
          <hr className="w-full border-white/10"/>
          <div className="flex flex-col items-center gap-6 justify-between md:flex-row">
            <ul className="flex items-center space-x-6">
              {socialLinks.map((social, socialIndex) => (
                <li key={social.icon} >
                  <a href={social.url}>
                  <EditableButton className="TEXT-LINK text-base  hover:text-sky-400 focus:text-sky-500 text-slate-50 dark:hover:text-sky-400 dark:focus:text-sky-500">
                    <EditableIcon propKey={`socialLinks_${socialIndex}_icon`} icon={social.icon} iconLibrary="FontAwesome"  className="text-lg"/>
                  </EditableButton>
                  </a>
                </li>
              ))}
            </ul>
            <p className="DESC text-sm text-center text-white/60">
              <EditableText propKey="footerText">{footerText}</EditableText>
            </p>
          </div>
      </div>
      </AnimateInView>
    </section>
  );
}

export default Footer;