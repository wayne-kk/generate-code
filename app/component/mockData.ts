export const blockMaps = {
  "iXLv1-24NGi-WmNGbCKD8": {
    code: 'function LullabiesAndWhispers({\n    title = "Lullabies and Whispers with GPT-4o",\n    description = "A new flagship model which can reason across audio, vision, and text in real-time.",\n    videoUrl = "https://www.youtube.com/embed/2Djt1WWch20?si=43aJqThPy8isgQai&start=12"\n}) {\n    return (\n        <section className="w-full bg-white dark:bg-slate-800">\n            <div className="max-w-7xl mx-auto py-20 px-4">\n                <div className="w-full flex flex-col items-center">\n                    <div className="w-full flex flex-col gap-6 md:w-1/2">\n                        <h1 className="text-4xl text-center font-semibold text-slate-900 dark:text-white">\n                            {title}\n                        </h1>\n                        <p className="text-base text-center font-normal text-slate-700 dark:text-white/80">\n                            {description}\n                        </p>\n                    </div>\n                    <div className="mt-12 w-full lg:w-2/3">\n                        <div className="overflow-hidden rounded-lg shadow dark:bg-slate-600">\n                            <iframe\n                                className="w-full aspect-video"\n                                src={videoUrl}\n                                title="YouTube video player"\n                                frameBorder="0"\n                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n                                referrerPolicy="strict-origin-when-cross-origin"\n                                allowFullScreen\n                            ></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    );\n}',
    name: "LullabiesAndWhispers",
    props: {
      title: "Lullabies and Whispers with GPT-4o",
      description:
        "A new flagship model which can reason across audio, vision, and text in real-time.",
      videoUrl:
        "https://www.youtube.com/embed/2Djt1WWch20?si=43aJqThPy8isgQai&start=12",
    },
  },

  RA2tD4jO_5hvTbBSQRjv3: {
    code: 'function PowerOfGPTSection({\n    title = "Unlock the Power of GPT-4o",\n    subTitle = "Revolutionize Your Workflow",\n    description = "Bring more smart and advanced tools for free.",\n    features = [\n        {\n            name: "Enhanced Multimodal Capabilities",\n            description: "GPT-4o handles images better, translating and explaining them. Future updates will support real-time voice and video interactions.",\n            icon: "fa-solid fa-brain"\n        },\n        {\n            name: "Enhanced Language Support",\n            description: "GPT-4o supports over 50 languages with faster and more accurate responses, making advanced AI more accessible globally.",\n            icon: "fa-solid fa-headphones"\n        },\n        {\n            name: "Free Access with Limitations",\n            description: "GPT-4o is available to all users, with free access having usage limits. Plus and Team users get higher message limits.",\n            icon: "fa-solid fa-earth-americas"\n        }\n    ],\n    imageUrl = "https://cdn.wegic.ai/assets/onepage/img/b54f3a60-6a68-4cd6-8ef6-a114ac128ec0.jpg"\n}) {\n    const [hovered, setHovered] = React.useState(false);\n\n    return (\n        <div className="overflow-hidden bg-slate-800 py-16 sm:py-20">\n            <div className="mx-auto max-w-7xl px-6 lg:px-8">\n                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">\n                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">\n                        <div className="lg:max-w-lg">\n                            <h2 className="text-base font-semibold leading-7 text-white">{title}</h2>\n                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{subTitle}</p>\n                            <p className="mt-6 text-lg leading-8 text-white">{description}</p>\n                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">\n                                {features.map((feature, index) => (\n                                    <div key={feature.name} className="relative pl-9">\n                                        <div className="flex items-center font-semibold text-white">\n                                            <i className={`${feature.icon} absolute left-1 top-1 text-white`} aria-hidden="true"></i>\n                                            <p>{feature.name}</p>\n                                        </div>\n                                        <p className="mt-1">{feature.description}</p>\n                                    </div>\n                                ))}\n                            </dl>\n                        </div>\n                    </div>\n                    <div className="flex items-start justify-end lg:order-first">\n                        <img\n                            className="w-full aspect-[4/3] md:aspect-[1/1] flex items-start justify-end lg:order-first object-cover rounded-lg transform transition-transform duration-500"\n                            src={imageUrl}\n                            alt="Power of GPT-4o"\n                            onMouseEnter={() => setHovered(true)}\n                            onMouseLeave={() => setHovered(false)}\n                            style={{ transform: hovered ? \'translateY(-10px)\' : \'translateY(0)\' }}\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    );\n}',
    name: "PowerOfGPTSection",
    props: {
      title: "Unlock the Power of GPT-4o",
      subTitle: "Revolutionize Your Workflow",
      description: "Bring more smart and advanced tools for free.",
      features: [
        {
          name: "Enhanced Multimodal Capabilities",
          description:
            "GPT-4o handles images better, translating and explaining them. Future updates will support real-time voice and video interactions.",
          icon: "fa-solid fa-brain",
        },
        {
          name: "Enhanced Language Support",
          description:
            "GPT-4o supports over 50 languages with faster and more accurate responses, making advanced AI more accessible globally.",
          icon: "fa-solid fa-headphones",
        },
        {
          name: "Free Access with Limitations",
          description:
            "GPT-4o is available to all users, with free access having usage limits. Plus and Team users get higher message limits.",
          icon: "fa-solid fa-earth-americas",
        },
      ],
      imageUrl:
        "https://cdn.wegic.ai/assets/onepage/img/fdff74eb-e375-4415-9b08-10600debbaab.jpg",
    },
  },
  _UFal6sp92HIcNwEr5f2T: {
    code: `
    function FeatureSection({
        title = "Discover GPT-4o's Cutting-Edge Features",
        description = "Dive into the latest advancements of GPT-4o, showcasing its unparalleled capabilities in transforming your digital experiences.",
        images = [
            {
                url: "https://cdn.wegic.ai/assets/onepage/img/dcb916f9-bf97-46dc-a66c-e245669cc284.jpg",
                hoverText: "link=&target=_blank&text=Emotional exchange"
            },
            {
                url: "https://cdn.wegic.ai/assets/onepage/img/1ecd91c9-f349-4695-9dfc-c706e9b043e5.jpg",
                hoverText: "link=&target=_blank&text=Visual content"
            },
            {
                url: "https://cdn.wegic.ai/assets/onepage/img/dfd8a66b-0fe5-4440-a705-598b6fc5ead4.jpg",
                hoverText: "link=&target=_blank&text=Multilingual"
            }
        ]
    }) {
        const [imageList, setImageList] = React.useState(images);
    
        return (
            <section className="py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
                            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white/90">{title}</h2>
                            <p className="mt-6 text-base font-medium text-slate-900 dark:text-white/80">{description}</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 pb-2 mt-8 sm:mt-12 flex-wrap">
                        {imageList.map((image, index) => (
                            <div key={index} className="relative overflow-hidden snap-start scroll-ml-6 shrink-0 group w-[18.75rem] h-[25rem]">
                                <img
                                    className="w-full h-full object-cover rounded-lg bg-slate-100 transition-transform duration-500 group-hover:translate-y-[-10px]"
                                    src={image.url}
                                    alt={image.hoverText}
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-white text-lg font-semibold">{image.hoverText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    `,
    name: "FeatureSection",
    props: {
      title: "Discover GPT-4o's Cutting-Edge Features",
      description:
        "Dive into the latest advancements of GPT-4o, showcasing its unparalleled capabilities in transforming your digital experiences.",
      images: [
        {
          url: "https://cdn.wegic.ai/assets/onepage/img/dcb916f9-bf97-46dc-a66c-e245669cc284.jpg",
          hoverText: "link=&target=_blank&text=Emotional exchange",
        },
        {
          url: "https://cdn.wegic.ai/assets/onepage/img/1ecd91c9-f349-4695-9dfc-c706e9b043e5.jpg",
          hoverText: "link=&target=_blank&text=Visual content",
        },
        {
          url: "https://cdn.wegic.ai/assets/onepage/img/dfd8a66b-0fe5-4440-a705-598b6fc5ead4.jpg",
          hoverText: "link=&target=_blank&text=Multilingual",
        },
      ],
    },
  },
  jKfUlfav4EiYAOan4jxMn: {
    code: `function App({
    titleLine1 = "link=&target=_blank&text=Chat GPT-4o Desktop Application Download for Mac",
    description = "link=&target=_blank&text=Introducing GPT-4o and more tools to ChatGPT free users",
    button1Text = "link=https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg&target=_self&text=Download Now",
    button1Link = "https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",
    backgroundImage = "https://source.unsplash.com/random/1200x800/?background,2",
    videoUrl = "https://cdn.pixabay.com/video/2021/02/25/66262-516980798_large.mp4"
}) {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    return (
        <div className="relative bg-white dark:bg-slate-800 overflow-hidden flex items-center justify-center min-h-screen">
            <video
                autoPlay
                muted
                loop
                className="absolute z-0 w-full h-full object-cover"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>

            <main className="container mx-auto px-6 py-12 relative z-10">
                <div className="relative text-center">
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold tracking-tight text-white dark:text-white/80 sm:text-6xl leading-[1] mb-4 max-w-3xl mx-auto">
                            <EditableText propKey="titleLine1">
                                {titleLine1}
                            </EditableText>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white dark:text-white/60 sm:max-w-md lg:max-w-none mx-auto">
                            <EditableText propKey="description">
                                {description}
                            </EditableText>
                        </p>
                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
                            <EditableButton
                                className="inline-flex items-center justify-center text-black bg-white font-medium py-2 xl:py-3 px-6 focus:outline-none rounded-lg text-sm sm:text-base 2xl:text-lg transition-transform duration-500 transform hover:scale-105"
                                link={button1Link}
                            >
                                <EditableText propKey="button1Text">
                                    {button1Text}
                                </EditableText>
                            </EditableButton>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}`,
    name: "App",
    props: {},
  },
  kHAczcxnrUpdr0KGjF9vu: {
    code: `
      function FeatureSection({
          title = "About ChatGPT-Download for Mac",
          description = "Discover the exceptional capabilities and features of GPT-4o software, designed to enhance your productivity and streamline your workflow.",
          subTitle = "Empowering Your Mac",
          featureList = [
              {
                  icon: "fa-solid fa-bolt",
                  title: "Lightning Fast Performance",
                  description: "Experience unparalleled speed and efficiency with GPT-4o, optimized for Mac."
              },
              {
                  icon: "fa-solid fa-brain",
                  title: "Advanced AI Capabilities",
                  description: "Leverage cutting-edge AI technology to tackle complex tasks with ease."
              },
              {
                  icon: "fa-solid fa-shield-alt",
                  title: "Top-Notch Security",
                  description: "Enjoy robust security features that protect your data and ensure privacy."
              }
          ],
          imageUrl = "https://cdn.wegic.ai/assets/onepage/img/df8881ba-007a-453e-a19e-db1f618063a0.jpg"
      }) {
          const [isFeatureLoaded, setIsFeatureLoaded] = React.useState(false);
      
          return (
              <section className="py-16 bg-white dark:bg-slate-800">
                  <div className="container mx-auto px-6">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-black dark:text-white">{title}</h2>
                          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{description}</p>
                      </div>
                      <div className="flex justify-center mb-12">
                          <img src={imageUrl} alt="GPT-4o Software" className="w-full h-auto rounded-lg shadow-xl" />
                      </div>
                      <div className="text-center mb-12">
                          <h3 className="text-2xl font-semibold text-black dark:text-white">{subTitle}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {featureList.map((feature, index) => (
                              <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg">
                                  <i className={\`\${feature.icon} text-4xl text-blue-500\`} />
                                  <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">{feature.title}</h4>
                                  <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{feature.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
          );
      }
      `,
    props: {},
    name: "FeatureSection",
  },
};

export const blockChildren = [
  "jKfUlfav4EiYAOan4jxMn",
  "_UFal6sp92HIcNwEr5f2T",
  "RA2tD4jO_5hvTbBSQRjv3",
  "iXLv1-24NGi-WmNGbCKD8",
];
