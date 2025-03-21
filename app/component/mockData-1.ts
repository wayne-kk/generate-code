export const blockMaps = {
    "uZIb79HUBPJXPQ1CGF91j": {
        "code": "function Hero_25({title=\"引领专业创新，成就卓越未来\",description=\"我们致力于提供最专业的服务，助力客户实现创新与突破。探索我们的核心价值，开启您的成功之旅。\",images=[{\"src\":\"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/0c1318e7-6663-436e-abbf-1c002d411ca7.jpeg?oldPrompt=创新项目展示,团队成员使用先进设备工作,高科技实验室环境,中性色调,专业气质\",\"title\":\"专业会议\",\"subTitle\":\"高效协作，共创未来\",\"icon\":\"fa-solid fa-handshake\"},{\"src\":\"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/4f3d0f71-019b-433e-861f-57cc82d33fb2.jpeg?oldPrompt=客户会议场景,团队与客户进行专业交流,现代会议室,自然光线,信任氛围\",\"title\":\"技术创新\",\"subTitle\":\"前沿科技，驱动发展\",\"icon\":\"fa-solid fa-lightbulb\"},{\"src\":\"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/d5f39573-507e-406b-9588-0f1b370b379e.jpeg?oldPrompt=专业团队在工作室内协作讨论,现代办公环境,明亮光线,中性色调,专注氛围\",\"title\":\"团队合作\",\"subTitle\":\"携手共进，共创辉煌\",\"icon\":\"fa-solid fa-users\"},{\"src\":\"https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/da7bb6be-a1ea-40d3-af0a-7b38935bfcf6.jpeg?oldPrompt=团队培训场景,专业讲师进行知识分享,现代培训室,中性色调,学习氛围\",\"title\":\"领导力\",\"subTitle\":\"战略思维，引领方向\",\"icon\":\"fa-solid fa-chart-line\"}],primaryButton={\"icon\":\"fa-solid fa-arrow-right\",\"textAttr\":\"text=联系我们&link=/contact\"},secondaryButton={\"textAttr\":\"text=了解更多&link=/about-us\"},features=[{\"icon\":\"fa-solid fa-check\",\"text\":\"专业服务\"},{\"icon\":\"fa-solid fa-star\",\"text\":\"创新方案\"},{\"icon\":\"fa-solid fa-trophy\",\"text\":\"卓越成果\"}],socialIcons=[{\"icon\":\"fa-brands fa-x-twitter\",\"link\":\"https://twitter.com\"},{\"icon\":\"fa-brands fa-linkedin\",\"link\":\"https://linkedin.com\"}]}) {\n  const variants = {\n    visible: { opacity: 1, y: 0 },\n    hidden: { opacity: 0, y: 50 },\n  };\n\n  return (\n    <section className=\"w-full px-6 py-24 bg-white dark:bg-black md:px-8 md:py-32\">\n      <div className=\"relative w-full h-full mx-auto max-w-7xl flex-col  md:flex-row  md:h-[35rem]\">\n        <div className=\"w-full flex flex-col gap-10\">\n          <motion.h1\n            className=\"TITLE-PRIMARY z-20 w-full text-5xl font-semibold text-slate-900 dark:text-slate-50 md:w-3/5 md:text-6xl md:mt-10\"\n            initial=\"hidden\"\n            whileInView=\"visible\"\n            variants={variants}\n            transition={{ duration: 0.5, delay: 0.2 }}\n            viewport={{ once: true }}\n          >\n            <EditableText propKey=\"title\">{title}</EditableText>\n          </motion.h1>\n          <motion.p\n            className=\"DESC z-20 w-full text-lg text-slate-600 dark:text-slate-400 md:w-2/5\"\n            initial=\"hidden\"\n            whileInView=\"visible\"\n            variants={variants}\n            transition={{ duration: 0.6, delay: 0.2 }}\n            viewport={{ once: true }}\n          >\n            <EditableText propKey=\"description\">{description}</EditableText>\n          </motion.p>\n          <motion.ul\n            className=\"z-20 w-full flex gap-8 items-center md:w-2/5 md:mt-6\"\n            initial=\"hidden\"\n            whileInView=\"visible\"\n            variants={variants}\n            transition={{ duration: 0.7, delay: 0.2 }}\n            viewport={{ once: true }}\n          >\n            {features.map((feature, index) => (\n              <li key={index} className=\"flex gap-2.5 items-center\">\n                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary=\"FontAwesome\" className=\"text-zinc-900 dark:text-zinc-50 md:text-xl text-xl\" />\n                <label className=\"text-slate-900 uppercase dark:text-salte-50 md:text-xl\">\n                  <EditableText propKey={`features_${index}_text`}>\n                    {feature.text}\n                  </EditableText>\n                </label>\n              </li>\n            ))}\n          </motion.ul>\n          <motion.div\n            className=\"z-20 w-full mt-6 flex flex-col gap-6 md:w-2/5 md:mt-14\"\n            initial=\"hidden\"\n            whileInView=\"visible\"\n            variants={variants}\n            transition={{ duration: 0.8, delay: 0.2 }}\n            viewport={{ once: true }}\n          >\n            <div className=\"flex items-center gap-6\">\n              <EditableButton className=\"BTN-PRIMARY w-fit h-12 whitespace-nowrap px-6 group font-semibold text-sm text-white uppercase flex gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300 md:h-14 md:text-base md:px-8\">\n                <EditableText propKey=\"primaryButton_textAttr\">\n                  {primaryButton.textAttr}\n                </EditableText>\n                <EditableIcon propKey=\"primaryButton_icon\" icon={primaryButton.icon} iconLibrary=\"FontAwesome\" className=\"group-hover:translate-x-1 transition-all text-xl\" />\n              </EditableButton>\n              <EditableButton className=\"BTN-SECONDARY w-fit h-12 whitespace-nowrap px-6 font-semibold text-sm uppercase flex gap-2 items-center rounded-full border border-slate-900 dark:border-slate-50 text-slate-900 bg-white/5 backdrop-blur-md hover:text-slate-50 hover:bg-slate-900 hover:border-slate-900 hover:transition-all hover:duration-300 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 md:px-8 md:h-14 md:text-base\">\n                <EditableText propKey=\"secondaryButton_textAttr\">\n                  {secondaryButton.textAttr}\n                </EditableText>\n              </EditableButton>\n            </div>\n            <div className=\"flex items-center gap-4\">\n              {socialIcons.map((social, index) => (\n                <EditableButton key={index} className=\"w-10 h-10 flex items-center justify-center rounded-full border border-slate-900 dark:border-slate-50 text-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-50 dark:hover:text-slate-900 transition-all duration-300\">\n                  <EditableIcon\n                    propKey={`socialIcons_${index}_icon`}\n                    icon={`icon=${social.icon}&link=${social.link}&target=_blank`}\n                    iconLibrary=\"FontAwesome\"\n                    className=\"text-xl\"\n                  />\n                </EditableButton>\n              ))}\n            </div>\n          </motion.div>\n        </div>\n\n        <div className=\"w-full md:absolute md:z-10 md:w-[60%] md:top-0 md:right-0 md:h-[35rem]\">\n          <div className=\"relative w-full h-full\">\n            <div className=\"absolute z-10 left-0 bg-gradient-to-r from-white w-1/4 h-full dark:from-black\"></div>\n            <Carousel\n              autoplay=\"true\"\n              cellAlign=\"center\"\n              wrapAround=\"true\"\n              withoutControls=\"true\"\n              cellSpacing={16}\n              slidesToShow={2}\n              speed={800}\n            >\n              {images.map((image, index) => (\n                <div className=\"IMAGE relative mt-16 group w-full h-[20rem] overflow-hidden bg-origin-content rounded-2xl md:h-[35rem] md:mt-0 md:rounded-3xl\">\n                  <EditableImg\n                    key={index}\n                    propKey={`images_${index}_src`}\n                    className=\"w-full h-full bg-zinc-200 dark:bg-zinc-700 object-cover transition-all ease-in-out duration-300 group-hover:scale-110\"\n                    src={image.src}\n                    alt={`images_${index}_src`}\n                  />\n                  <div className=\"absolute w-full h-1/2 bottom-0 flex items-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out\">\n                    <div className=\"w-10 h-10 ml-3 mb-3 flex items-center justify-center text-white text-xl rounded-xl backdrop-blur-lg bg-black/60 transition-all duration-300 md:w-14 md:h-14 md:rounded-2xl md:text-3xl md:ml-6 md:mb-6\">\n                      <EditableIcon propKey={`images_${index}_icon`} icon={image.icon} iconLibrary=\"FontAwesome\" className=\"text-white text-xl\" />\n                    </div>\n                    <div className=\"absolute w-32 left-[62px] mb-[16px] flex flex-col text-white text-xs truncate md:left-[96px] md:mb-7 md:text-base md:w-60\">\n                      <EditableText\n                        propKey={`images_${index}_title`}\n                        className=\"TITLE-PRIMARY font-semibold\"\n                      >\n                        {image.title}\n                      </EditableText>\n                      <EditableText propKey={`images_${index}_subTitle`} className=\"DESC\">\n                        {image.subTitle}\n                      </EditableText>\n                    </div>\n                  </div>\n                </div>\n              ))}\n            </Carousel>\n            <div className=\" absolute z-10 top-0 right-0 bg-gradient-to-l from-white  w-1/4 h-full dark:from-black\"></div>\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n}",
        "name": "Hero_25",
        "props": {
            "title": "引领专业创新，成就卓越未来",
            "description": "我们致力于提供最专业的服务，助力客户实现创新与突破。探索我们的核心价值，开启您的成功之旅。",
            "images": [
                {
                    "src": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/0c1318e7-6663-436e-abbf-1c002d411ca7.jpeg?oldPrompt=创新项目展示,团队成员使用先进设备工作,高科技实验室环境,中性色调,专业气质",
                    "title": "专业会议",
                    "subTitle": "高效协作，共创未来",
                    "icon": "fa-solid fa-handshake"
                },
                {
                    "src": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/4f3d0f71-019b-433e-861f-57cc82d33fb2.jpeg?oldPrompt=客户会议场景,团队与客户进行专业交流,现代会议室,自然光线,信任氛围",
                    "title": "技术创新",
                    "subTitle": "前沿科技，驱动发展",
                    "icon": "fa-solid fa-lightbulb"
                },
                {
                    "src": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/d5f39573-507e-406b-9588-0f1b370b379e.jpeg?oldPrompt=专业团队在工作室内协作讨论,现代办公环境,明亮光线,中性色调,专注氛围",
                    "title": "团队合作",
                    "subTitle": "携手共进，共创辉煌",
                    "icon": "fa-solid fa-users"
                },
                {
                    "src": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/da7bb6be-a1ea-40d3-af0a-7b38935bfcf6.jpeg?oldPrompt=团队培训场景,专业讲师进行知识分享,现代培训室,中性色调,学习氛围",
                    "title": "领导力",
                    "subTitle": "战略思维，引领方向",
                    "icon": "fa-solid fa-chart-line"
                }
            ],
            "primaryButton": {
                "icon": "fa-solid fa-arrow-right",
                "textAttr": "text=联系我们&link=/contact"
            },
            "secondaryButton": {
                "textAttr": "text=了解更多&link=/about-us"
            },
            "features": [
                {
                    "icon": "fa-solid fa-check",
                    "text": "专业服务"
                },
                {
                    "icon": "fa-solid fa-star",
                    "text": "创新方案"
                },
                {
                    "icon": "fa-solid fa-trophy",
                    "text": "卓越成果"
                }
            ],
            "socialIcons": [
                {
                    "icon": "fa-brands fa-x-twitter",
                    "link": "https://twitter.com"
                },
                {
                    "icon": "fa-brands fa-linkedin",
                    "link": "https://linkedin.com"
                }
            ]
        },
        "id": "uZIb79HUBPJXPQ1CGF91j"
    },
    "W4D3sfwRWEC9A7TijiyP8": {
        "code": "function Team_12({\n  title = 'Our Creative Minds',\n  description = 'Discover the talented team that brings our design studio to life.',\n  people = [\n    {\n      name: 'Whitney Francis',\n      role: 'Creative Director',\n      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,creative',\n      icon1: 'fa-brands fa-x-twitter',\n      icon2: 'fa-brands fa-linkedin',\n    },\n    {\n      name: 'Leonard Krasner',\n      role: 'Senior Designer',\n      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,design',\n      icon1: 'fa-brands fa-x-twitter',\n      icon2: 'fa-brands fa-linkedin',\n    },\n    {\n      name: 'Floyd Miles',\n      role: 'Visual Artist',\n      imageUrl: 'https://source.unsplash.com/random/1024x1024/?portrait,art',\n      icon1: 'fa-brands fa-x-twitter',\n      icon2: 'fa-brands fa-linkedin',\n    },\n  ],\n}) {\n  return (\n    <div className=\"w-full bg-white py-16 px-4 dark:bg-slate-800 relative\">\n      <div className=\"max-w-7xl mx-auto text-center\">\n        <AnimateInView type=\"rise\">\n          <h2 className=\"TITLE-PRIMARY text-2xl font-extrabold text-slate-900 dark:text-white/80 md:text-4xl\"><EditableText propKey=\"title\">{title}</EditableText></h2>\n          <p className=\"DESC mt-4 text-lg leading-8 text-slate-700 dark:text-white/60\"><EditableText propKey=\"description\">{description}</EditableText></p>\n        </AnimateInView>\n        <ul\n          role=\"list\"\n          className=\"mx-auto mt-20 flex justify-center flex-wrap max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none\"\n        >\n          {people.map((person, index) => (\n            <AnimateInView key={index} type=\"rise\">\n              <li className=\"w-full\">\n                <EditableImg propKey={`people_${index}_imageUrl`} className=\"IMAGE mx-auto h-56 w-56 rounded-full object-cover aspect-[1/1]\" src={person.imageUrl} alt={person.imageUrl} />\n                <h3 className=\"TITLE-SECONDARY mt-6 text-base font-semibold leading-7 tracking-tight text-slate-900 dark:text-white/80\"><EditableText propKey={`people_${index}_name`}>{person.name}</EditableText></h3>\n                <p className=\"DESC text-sm leading-6 text-slate-600 dark:text-white/60\"><EditableText propKey={`people_${index}_role`}>{person.role}</EditableText></p>\n                <ul role=\"list\" className=\"mt-6 flex justify-center gap-x-6\">\n                  <li>\n                    <span className=\"text-slate-400 hover:text-slate-500 dark:hover:text-white/60\">\n                      <EditableIcon propKey={`people_${index}_icon1`} icon={person.icon1} iconLibrary=\"FontAwesome\" className=\"text-xl\" />\n                      <span className=\"sr-only\">X</span>\n                    </span>\n                  </li>\n                  <li>\n                    <span className=\"text-slate-400 hover:text-slate-500 dark:hover:text-white/60\">\n                      <EditableIcon propKey={`people_${index}_icon2`} icon={person.icon2} iconLibrary=\"FontAwesome\" className=\"text-xl\" />\n                      <span className=\"sr-only\">LinkedIn</span>\n                    </span>\n                  </li>\n                </ul>\n              </li>\n            </AnimateInView>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n",
        "name": "Team_12",
        "props": {
            "title": "我们的专业团队",
            "description": "认识我们的精英团队，他们以专业知识和创新精神，为客户提供卓越服务。",
            "people": [
                {
                    "name": "张伟",
                    "role": "首席顾问",
                    "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/48fcc268-3f4c-49c2-ac17-bd1515bf35ae.jpeg?oldPrompt=团队成员在会议室内进行头脑风暴，使用白板展示创意想法，体现创新思维",
                    "icon1": "fa-brands fa-x-twitter",
                    "icon2": "fa-brands fa-linkedin"
                },
                {
                    "name": "李娜",
                    "role": "高级分析师",
                    "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/ebd0e959-355b-4314-80fb-b0ca4221d088.jpeg?oldPrompt=团队领导在办公桌前与团队成员进行一对一指导，展现领导力与专业指导能力",
                    "icon1": "fa-brands fa-x-twitter",
                    "icon2": "fa-brands fa-linkedin"
                },
                {
                    "name": "王强",
                    "role": "技术总监",
                    "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/94657c9d-27c1-482d-9c82-ab4fee9a2332.jpeg?oldPrompt=专业团队在现代化办公室中协作讨论，表情专注，展示专业能力与团队合作精神",
                    "icon1": "fa-brands fa-x-twitter",
                    "icon2": "fa-brands fa-linkedin"
                }
            ]
        },
        "id": "W4D3sfwRWEC9A7TijiyP8"
    },
    "ICQjSGM2JZGhM7CQ-447-": {
        "code": "function Gallery_01({\n  title = \"Innovative Designs\",\n  description = \"Explore our unique and creative design gallery that showcases our expertise in bringing ideas to life.\",\n  images = [\n    { url: \"https://source.unsplash.com/700x800/?design,creative\", name: \"Creative Expansion\" },\n    { url: \"https://source.unsplash.com/700x800/?artwork,visualization\", name: \"Artistic Visualization\" },\n    { url: \"https://source.unsplash.com/700x800/?studio,concept\", name: \"Conceptual Studio\" },\n    { url: \"https://source.unsplash.com/700x800/?project,implementation\", name: \"Project Implementation\" },\n    { url: \"https://source.unsplash.com/700x800/?innovation,development\", name: \"Innovative Development\" },\n    { url: \"https://source.unsplash.com/700x800/?technology,startup\", name: \"Technology Startup\" },\n    { url: \"https://source.unsplash.com/700x800/?cybersecurity\", name: \"Cybersecurity Insights\" },\n    { url: \"https://source.unsplash.com/700x800/?virtual,reality\", name: \"Virtual Reality Experiences\" },\n    { url: \"https://source.unsplash.com/700x800/?sustainable,energy\", name: \"Sustainable Energy\" },\n    { url: \"https://source.unsplash.com/700x800/?artificial,intelligence\", name: \"Artificial Intelligence\" }\n  ]\n}) {\n  return (\n    <section className=\"py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10\">\n      <AnimateInView type=\"rise\">\n        <div className=\"max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8\">\n          <div className=\"lg:flex lg:items-end lg:justify-between\">\n            <div className=\"max-w-md mx-auto text-center lg:text-left lg:mx-0\">\n              <h2 className=\"TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90\">\n                <EditableText propKey={\"title\"}>{title}</EditableText>\n              </h2>\n              <p className=\"DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80\">\n                <EditableText propKey={\"description\"}>{description}</EditableText>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div className=\"flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x\">\n          {images.map((image, index) => (\n            <div key={index} className=\"relative overflow-hidden snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6\">\n              <EditableImg propKey={`images_${index}_url`} className=\"IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100\" src={image.url} alt={image.name} />\n              <p className=\"TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80\">\n                <EditableText propKey={`images_${index}_name`}>{image.name}</EditableText>\n              </p>\n            </div>\n          ))}\n        </div>\n      </AnimateInView>\n    </section>\n  );\n}",
        "name": "Gallery_01",
        "props": {
            "title": "成功案例展示",
            "description": "浏览我们为客户提供的创新解决方案和卓越成果，见证我们的专业实力。",
            "images": [
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/070aabf4-6cb7-4e80-8a37-0ac0b1e80186.jpeg?oldPrompt=专业团队为客户提供创新解决方案的场景，展示高效工作流程和团队协作，突出专业与创新的氛围，强调成果与价值，无干扰元素，负面词：模糊、不专业",
                    "name": "商业成功"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/20272de7-c1c8-4170-8301-993a7a9427f3.jpeg?oldPrompt=团队内部会议的场景，展示讨论与决策的过程，强调专业与创新，无干扰元素，负面词：不协调、不专业",
                    "name": "技术创新"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/074e093e-74fe-4516-a449-d051132eacfc.jpeg?oldPrompt=团队协作的高效工作场景，展示专业工具和技术应用，突出创新与专业，无干扰元素，负面词：不协调、不专业",
                    "name": "团队协作"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/2d3d7226-af1d-448a-821b-2176f51d926d.jpeg?oldPrompt=项目实施的详细场景，展示技术应用和操作流程，强调专业与创新，无干扰元素，负面词：不清晰、不专业",
                    "name": "战略领导"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/4768ae65-2cc9-4e4e-a5f0-3e585cf70076.jpeg?oldPrompt=客户成功案例的具体实施场景，展示项目细节和成果，强调专业性与创新性，无干扰元素，负面词：杂乱、不清晰",
                    "name": "持续发展"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/9228d2c5-f985-4fe7-9e50-a51fabf43c36.jpeg?oldPrompt=客户与团队互动的场景，展示沟通与合作的细节，强调专业与创新，无干扰元素，负面词：不自然、不专业",
                    "name": "卓越成就"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/74520947-e028-4b27-9aec-1e85343db0c5.jpeg?oldPrompt=客户反馈与评价的场景，展示成功案例的影响和满意度，突出专业性与创新性，无干扰元素，负面词：不自然、不专业",
                    "name": "创新创意"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/2c8176e8-d80e-4b5e-9d2f-d30939bed1bd.jpeg?oldPrompt=项目成果展示的具体场景，展示成功案例的细节和影响，突出专业性与创新性，无干扰元素，负面词：不清晰、不专业",
                    "name": "未来科技"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/63c2e96f-5028-43f0-8b66-6bddb6f3bec8.jpeg?oldPrompt=团队培训与发展的场景，展示技能提升和知识分享，突出专业性与创新性，无干扰元素，负面词：不协调、不专业",
                    "name": "商业战略"
                },
                {
                    "url": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/094841e4-dde7-4837-b7a0-c344a55e03e8.jpeg?oldPrompt=客户项目启动的场景，展示规划与准备的过程，强调专业与创新，无干扰元素，负面词：不自然、不专业",
                    "name": "领导远见"
                }
            ]
        },
        "id": "ICQjSGM2JZGhM7CQ-447-"
    },
    "0t3rO536En8SFhSpcSEes": {
        "code": "function Testimonial_15({\n  title = \"Our Clients' Experiences\",\n  subTitle = \"Design Studio Success Stories\",\n  testimonials = [\n    {\n      body: 'Our projects reflect our dedication to innovating design and executing with precision.',\n      author: {\n        name: 'Taylor Swift',\n        handle: '@taylorswift',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?artist,creative',\n      },\n    },\n    {\n      body: 'The passion and creativity of our team shine through in every detail of our work.',\n      author: {\n        name: 'Chris Evans',\n        handle: '@chrisevans',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?actor,portrait',\n      },\n    },\n    {\n      body: 'We pride ourselves on delivering exceptional service and exceeding client expectations.',\n      author: {\n        name: 'Emma Watson',\n        handle: '@emmawatson',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?celebrity,smile',\n      },\n    },\n    {\n      body: 'Innovative solutions and creative approaches are at the heart of what we do.',\n      author: {\n        name: 'Robert Downey Jr.',\n        handle: '@robertdowneyjr',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?actor,smile',\n      },\n    },\n    {\n      body: 'Our commitment to quality ensures your projects stand out in the market.',\n      author: {\n        name: 'Scarlett Johansson',\n        handle: '@scarlettjohansson',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?actress,smile',\n      },\n    },\n    {\n      body: 'We transform your ideas into reality with our bespoke design solutions.',\n      author: {\n        name: 'Tom Holland',\n        handle: '@tomholland',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?celebrity,portrait',\n      },\n    },\n    {\n      body: 'Your vision, our expertise. Together, we create extraordinary results.',\n      author: {\n        name: 'Zendaya',\n        handle: '@zendaya',\n        imageUrl: 'https://source.unsplash.com/random/656x656/?actress,fashion',\n      },\n    }\n  ]\n}) {\n  return (\n    <div className=\"w-full bg-white py-16 px-4 dark:bg-slate-800\">\n      <div className=\"max-w-7xl mx-auto\">\n        <div className=\"text-center\">\n          <span className=\"TITLE-SECONDARY text-lg font-semibold text-sky-500 dark:text-slate-200\"><EditableText propKey={`subTitle`}>{subTitle}</EditableText></span>\n          <h1 className=\"TITLE-PRIMARY mt-2 text-4xl font-bold text-slate-900 dark:text-slate-50\"><EditableText propKey={`title`}>{title}</EditableText></h1>\n        </div>\n        <div className=\"mt-16 flex flex-wrap justify-center gap-8\">\n          {testimonials.map((testimonial, index) => (\n            <div key={`testimonial_${index}`} className=\"flex-1 min-w-[250px] max-w-[320px]\">\n              <figure className=\"rounded-2xl bg-slate-50 p-8 text-sm leading-6 dark:bg-slate-700\">\n                <blockquote className=\"DESC text-slate-900 dark:text-slate-200\">\n                  <EditableText propKey={`testimonials_${index}_body`}>{testimonial.body}</EditableText>\n                </blockquote>\n                <div className=\"mt-6 flex items-center gap-x-4\">\n                  <EditableImg propKey={`testimonials_${index}_author_imageUrl`} className=\"IMAGE h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600 object-cover aspect-[1/1]\" src={testimonial.author.imageUrl} alt={testimonial.author.imageUrl} />\n                  <div>\n                    <p className=\"TEXT-CONTENT font-semibold text-slate-900 dark:text-slate-50\"><EditableText propKey={`testimonials_${index}_author_name`}>{testimonial.author.name}</EditableText></p>\n                    <p className=\"TEXT-CONTENT text-black/60 dark:text-white/60\"><EditableText propKey={`testimonials_${index}_author_handle`}>{testimonial.author.handle}</EditableText></p>\n                  </div>\n                </div>\n              </figure>\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n}",
        "name": "Testimonial_15",
        "props": {
            "title": "客户评价",
            "subTitle": "听听我们的客户如何评价我们的专业服务",
            "testimonials": [
                {
                    "body": "专业团队官网为我们提供了卓越的咨询服务，帮助我们实现了业务增长。",
                    "author": {
                        "name": "陈先生",
                        "handle": "@chen",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/7b93815f-f64e-46fb-b780-a6a2f1d122db.jpeg?oldPrompt=客户在会议室讨论项目, 团队成员专注倾听, 白板上展示项目计划, 强调专业与创新, 负面词:杂乱, 不专业"
                    }
                },
                {
                    "body": "他们的创新方案为我们的技术转型提供了巨大帮助。",
                    "author": {
                        "name": "王女士",
                        "handle": "@wang",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/6b3f4823-088a-447d-b510-ddcaaffb7c86.jpeg?oldPrompt=专业团队与客户握手场景, 现代办公室背景, 表情真诚, 强调信任与合作关系, 场景细节清晰, 负面词:模糊, 不自然"
                    }
                },
                {
                    "body": "专业团队官网的服务让我们在市场竞争中占据了优势。",
                    "author": {
                        "name": "李先生",
                        "handle": "@li",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/08da4604-db0a-466e-99cf-b1274ed5a2fc.jpeg?oldPrompt=客户使用我们的服务, 展示具体成果, 场景为工作现场, 强调实际效果与客户满意度, 负面词:虚假, 不真实"
                    }
                },
                {
                    "body": "他们的团队非常专业，帮助我们解决了复杂的业务问题。",
                    "author": {
                        "name": "张女士",
                        "handle": "@zhang",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/43e7016e-bc87-4b50-ac0a-010ee862ea0e.jpeg?oldPrompt=客户与团队成员在咖啡厅轻松交谈, 环境温馨, 强调友好与长期合作关系, 负面词:不自然, 做作"
                    }
                },
                {
                    "body": "专业团队官网的咨询服务为我们的战略规划提供了宝贵建议。",
                    "author": {
                        "name": "刘先生",
                        "handle": "@liu",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/13b070ff-fd83-4855-99bc-e00c6e04b963.jpeg?oldPrompt=客户在团队协助下完成项目, 场景为项目交付现场, 强调团队协作与最终成果, 负面词:不协调, 不完整"
                    }
                },
                {
                    "body": "他们的创新思维和执行力令人印象深刻。",
                    "author": {
                        "name": "赵女士",
                        "handle": "@zhao",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/2e7a1e80-4f1f-49b1-827e-ff5e623dcd8c.jpeg?oldPrompt=客户在电脑前工作, 屏幕上显示我们的服务界面, 强调技术与服务的无缝对接, 负面词:过时, 不清晰"
                    }
                },
                {
                    "body": "专业团队官网的服务让我们在行业中脱颖而出。",
                    "author": {
                        "name": "孙先生",
                        "handle": "@sun",
                        "imageUrl": "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/89d3f7e3-97b6-45fc-b3e4-ad66a02ed2f2.jpeg?oldPrompt=客户与团队在户外进行团队建设活动, 场景为自然风光, 强调团队凝聚力与客户参与感, 负面词:不自然, 不相关"
                    }
                }
            ]
        },
        "id": "0t3rO536En8SFhSpcSEes"
    },
    "qcntIA9zd70YiFI201YJ_": {
        "code": "function LogoClouds_02({\n  title = \"Trusted by Innovative Design Studios\",\n  description = \"Our collaboration tools are used by leading design studios worldwide. Join us and transform the way you work.\",\n  buttonText = \"text=Get Started&link=/\",\n  contactText = \"text=Contact Us&link=/\",\n  buttonArrow = \"fa-solid fa-arrow-right\",\n  logos = [\n    \"https://www.uilogos.co/logos/type/acme-black.png\",\n    \"https://www.uilogos.co/logos/type/aven-black.png\",\n    \"https://www.uilogos.co/logos/type/fox-hub-black.png\",\n    \"https://www.uilogos.co/logos/type/goldline-black.png\",\n    \"https://www.uilogos.co/logos/type/muzica-black.png\",\n  ]\n}) {\n  return (\n    <div className=\"bg-white py-16 sm:py-20 dark:bg-slate-800\">\n      <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n        <div className=\"flex flex-col items-center gap-x-8 gap-y-16 lg:flex-row\">\n          <div className=\"mx-auto w-full max-w-xl lg:mx-0\">\n            <h2 className=\"TITLE-PRIMARY text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50\">\n              <EditableText propKey={\"title\"}>{title}</EditableText>\n            </h2>\n            <p className=\"DESC mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300\">\n              <EditableText propKey={\"description\"}>{description}</EditableText>\n            </p>\n            <div className=\"mt-8 flex items-center gap-x-6\">\n              <EditableButton className=\"BTN-PRIMARY rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600\">\n                <EditableText propKey={\"buttonText\"}>{buttonText}</EditableText>\n              </EditableButton>\n              <EditableButton className=\"BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold text-gray-900 dark:text-slate-200\">\n                <EditableText propKey={\"contactText\"}>{contactText}</EditableText>\n                <EditableIcon propKey={\"buttonArrow\"} icon={buttonArrow} iconLibrary=\"FontAwesome\" className=\"group-hover:translate-x-1 transition-all duration-300\" />\n              </EditableButton>\n            </div>\n          </div>\n          <div className=\"mx-auto gap-10 flex w-full max-w-xl flex-wrap items-center justify-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8\">\n            {logos.map((logo, index) => (\n              <AnimateInView key={index} type=\"rise\">\n                <EditableImg propKey={`logos_${index}`} className=\"IMAGE h-10 w-auto object-contain object-left\" src={logo} alt={`logo_${index}`} />\n              </AnimateInView>\n            ))}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}",
        "name": "LogoClouds_02",
        "props": {
            "title": "我们的合作伙伴",
            "description": "我们与众多知名企业建立了长期合作关系，共同推动行业发展。",
            "buttonText": "text=加入我们&link=/join-us",
            "contactText": "text=联系我们&link=/contact",
            "buttonArrow": "fa-solid fa-arrow-right",
            "logos": [
                "https://www.uilogos.co/logos/type/acme-black.png",
                "https://www.uilogos.co/logos/type/aven-black.png",
                "https://www.uilogos.co/logos/type/fox-hub-black.png",
                "https://www.uilogos.co/logos/type/goldline-black.png",
                "https://www.uilogos.co/logos/type/muzica-black.png"
            ]
        },
        "id": "qcntIA9zd70YiFI201YJ_"
    },
    "yMzjw8FIfdiTlZM4_wTyt": {
        "code": "function Contact_06({\n  title = \"Stay Connected\",\n  description = \"Our design studio thrives on collaboration and creativity. Let's start a conversation about your next big idea.\",\n  contactOptions = [\n    { type: \"Collaborate\", email: \"collaborate@designstudio.com\", phone: \"+1 (555) 905-2345\" },\n    { type: \"Press\", email: \"press@designstudio.com\", phone: \"+1 (555) 905-3456\" },\n    { type: \"Careers\", email: \"careers@designstudio.com\", phone: \"+1 (555) 905-4567\" },\n    { type: \"General Inquiry\", email: \"hello@designstudio.com\", phone: \"+1 (555) 905-5678\" }\n  ],\n  locations = [\n    { city: \"Los Angeles\", address: \"4556 Brendan Ferry, Los Angeles, CA 90210\" },\n    { city: \"New York\", address: \"886 Walter Street, New York, NY 12345\" },\n    { city: \"Toronto\", address: \"7363 Cynthia Pass, Toronto, ON N3Y 4H8\" },\n    { city: \"Chicago\", address: \"726 Mavis Island, Chicago, IL 60601\" }\n  ],\n  locationsTitle = \"Our Locations\",\n  locationsDescription = \"Discover our offices around the world.\"\n}) {\n  return (\n    <div className=\"bg-white py-16 sm:py-20 relative dark:bg-slate-800\">\n      <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n        <div className=\"mx-auto max-w-2xl space-y-16 divide-y divide-black/10 dark:divide-white/10 lg:mx-0 lg:max-w-none\">\n          <AnimateInView type=\"rise\">\n            <div className=\"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3\">\n              <div>\n                <h2 className=\"TITLE-PRIMARY text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50\"><EditableText propKey={`title`}>{title}</EditableText></h2>\n                <p className=\"DESC mt-4 leading-7 text-slate-600 dark:text-slate-300\"><EditableText propKey={`description`}>{description}</EditableText></p>\n              </div>\n              <div className=\"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8\">\n                {contactOptions.map((option, index) => (\n                  <div key={index} className=\"rounded-2xl bg-slate-50 p-10 dark:bg-slate-600\">\n                    <h3 className=\"TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200\"><EditableText propKey={`contactOptions_${index}_type`}>{option.type}</EditableText></h3>\n                    <div className=\"mt-3 space-y-1 text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                      <EditableButton className=\"TEXT-LINK font-semibold text-sky-400 hover:text-sky-300\"><EditableText propKey={`contactOptions_${index}_email`}>{option.email}</EditableText></EditableButton>\n                      <p className=\"mt-1\"><EditableText propKey={`contactOptions_${index}_phone`}>{option.phone}</EditableText></p>  \n                    </div>\n                  </div>\n                ))}\n              </div>\n            </div>\n          </AnimateInView>\n          <AnimateInView type=\"rise\">\n            <div className=\"grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3\">\n              <div>\n                <h2 className=\"TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50\"><EditableText propKey={`locationsTitle`}>{locationsTitle}</EditableText></h2>\n                <p className=\"DESC mt-4 leading-7 text-slate-600 dark:text-slate-300\"><EditableText propKey={`locationsTitle`}>{locationsDescription}</EditableText></p>\n              </div>\n              <div className=\"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8\">\n                {locations.map((location, index) => (\n                  <div key={index} className=\"rounded-2xl bg-slate-50 p-10 dark:bg-slate-600\">\n                    <h3 className=\"TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200\"><EditableText propKey={`locations_${index}_city`}>{location.city}</EditableText></h3>\n                   \n                      <p className=\"mt-3 space-y-1 text-sm not-italic leading-6 text-slate-600 dark:text-slate-400\"><EditableText propKey={`locations_${index}_address`}>{location.address}</EditableText></p>\n                  </div>\n                ))}\n              </div>\n            </div>\n          </AnimateInView>\n        </div>\n      </div>\n    </div>\n  );\n}",
        "name": "Contact_06",
        "props": {
            "title": "联系我们",
            "description": "我们期待与您合作，共同创造卓越成果。请随时与我们联系，了解更多信息。",
            "contactOptions": [
                {
                    "type": "业务咨询",
                    "email": "consulting@proteam.com",
                    "phone": "+86 123 4567 8901"
                },
                {
                    "type": "媒体合作",
                    "email": "media@proteam.com",
                    "phone": "+86 123 4567 8902"
                },
                {
                    "type": "职业发展",
                    "email": "careers@proteam.com",
                    "phone": "+86 123 4567 8903"
                },
                {
                    "type": "一般咨询",
                    "email": "info@proteam.com",
                    "phone": "+86 123 4567 8904"
                }
            ],
            "locations": [
                {
                    "city": "北京",
                    "address": "北京市朝阳区建国路88号"
                },
                {
                    "city": "上海",
                    "address": "上海市浦东新区世纪大道100号"
                },
                {
                    "city": "广州",
                    "address": "广州市天河区珠江新城华夏路8号"
                },
                {
                    "city": "深圳",
                    "address": "深圳市福田区深南大道6001号"
                }
            ],
            "locationsTitle": "我们的办公地点",
            "locationsDescription": "我们在全国主要城市设有办公室，随时为您提供服务。"
        },
        "id": "yMzjw8FIfdiTlZM4_wTyt"
    }
}
export const blockChildren = [
    "uZIb79HUBPJXPQ1CGF91j",
    "W4D3sfwRWEC9A7TijiyP8",
    "ICQjSGM2JZGhM7CQ-447-",
    "0t3rO536En8SFhSpcSEes",
    "qcntIA9zd70YiFI201YJ_",
    "yMzjw8FIfdiTlZM4_wTyt"
]