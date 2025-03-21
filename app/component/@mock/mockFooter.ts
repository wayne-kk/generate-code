export const footer = {
    "code": "function Footer_05({\n  links = [\n    { href: `#`, title: `About Us`, propKey: `links_0_title` },\n    { href: `#`, title: `Our Services`, propKey: `links_1_title` },\n    { href: `#`, title: `Portfolio`, propKey: `links_2_title` },\n    { href: `#`, title: `Support`, propKey: `links_3_title` },\n    { href: `#`, title: `Contact`, propKey: `links_4_title` },\n  ],\n  socialMedia = [\n    { href: `#`, icon: `fa-brands fa-twitter`, propKey: `socialMedia_twitter` },\n    { href: `#`, icon: `fa-brands fa-facebook-f`, propKey: `socialMedia_facebook` },\n    { href: `#`, icon: `fa-brands fa-instagram`, propKey: `socialMedia_instagram` },\n    { href: `#`, icon: `fa-brands fa-github`, propKey: `socialMedia_github` },\n  ],\n  copyrightText = `© 2023 Design Studio. All Rights Reserved.`,\n}) {\n  return (\n    <footer className=\"py-10 bg-white dark:bg-slate-800\">\n      <AnimateInView type=\"rise\">\n        <div className=\"px-4 mx-auto max-w-7xl py-10 flex flex-col items-center gap-16\">\n          <ul className=\"w-full grid grid-cols-2 text-center  gap-6 md:grid-cols-5\">\n            {links.map((link, index) => (\n              <li key={link.propKey} href={link.href}>\n                <EditableButton\n                  className=\"TEXT-LINK inline-flex text-lg font-medium text-slate-900 dark:text-slate-50 hover:text-sky-400 focus:text-sky-500 dark:hover:text-sky-400 dark:focus:text-sky-500\"\n                >\n                  <EditableText propKey={`links_${index}_title`}>{link.title}</EditableText>\n                </EditableButton>\n              </li>\n            ))}\n          </ul>\n\n          <div className=\"flex flex-col gap-6\">\n            <ul className=\"flex items-center justify-center gap-6\">\n              {socialMedia.map((social, index )=> (\n                <li key={social.icon} href={social.href}>\n                  <EditableButton\n                    className=\"inline-flex items-center justify-center w-10 h-10 text-slate-900 transition-all duration-200 rounded-full hover:bg-sky-400 hover:text-slate-50 focus:outline-none focus:bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:hover:bg-sky-400 dark:focus:bg-sky-500 dark:text-slate-50\"\n                  >\n                    <EditableIcon propKey={`socialMedia_${index}_icon`} icon={social.icon} iconLibrary=\"FontAwesome\" className=\"text-xl\"/>\n                  </EditableButton>\n                </li>\n              ))}\n            </ul>\n\n            <p className=\"DESC text-base font-normal text-center text-slate-600 dark:text-white/80\">\n              <EditableText propKey=\"copyrightText\">{copyrightText}</EditableText>\n            </p>\n          </div>\n        </div>\n      </AnimateInView>\n    </footer>\n  );\n}",
    "name": "Footer_05",
    "props": {
        "links": [
            {
                "href": "page-1",
                "title": "首页",
                "propKey": "links_0_title"
            },
            {
                "href": "services",
                "title": "服务",
                "propKey": "links_1_title"
            },
            {
                "href": "about-us",
                "title": "关于我们",
                "propKey": "links_2_title"
            },
            {
                "href": "#",
                "title": "案例展示",
                "propKey": "links_3_title"
            },
            {
                "href": "#",
                "title": "联系我们",
                "propKey": "links_4_title"
            }
        ],
        "socialMedia": [
            {
                "href": "#",
                "icon": "fa-brands fa-twitter",
                "propKey": "socialMedia_twitter"
            },
            {
                "href": "#",
                "icon": "fa-brands fa-facebook-f",
                "propKey": "socialMedia_facebook"
            },
            {
                "href": "#",
                "icon": "fa-brands fa-instagram",
                "propKey": "socialMedia_instagram"
            },
            {
                "href": "#",
                "icon": "fa-brands fa-linkedin",
                "propKey": "socialMedia_linkedin"
            }
        ],
        "copyrightText": "© 2023 专业团队官网. 保留所有权利。"
    },
    "id": "YCKQkJEJ_jf8_mHiOvEgv"
}