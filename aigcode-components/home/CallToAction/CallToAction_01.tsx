import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';

export interface ICallToActionFeaturesItem {
  icon: string
  title: string
  description: string
}

export interface ICallToActionProps {
  title: string
  description: string
  features: ICallToActionFeaturesItem[]
  buttonTextLabel: string
  buttonTextLink: string
  buttonIcon: string
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title = `Get full access to Creative Studio`,
  description = `Discover our extensive library of design assets. Perfect for all your creative projects.`,
  features = [
    { icon: `fa-solid fa-check-circle`, title: `Extensive Library`, description: `Over 10,000+ assets` },
    { icon: `fa-solid fa-image`, title: `Regular Updates`, description: `Weekly new additions` },
    { icon: `fa-solid fa-user-friends`, title: `Community Support`, description: `Active community` },
  ],
  buttonTextLabel = `Get instant access`,
  buttonTextLink = '/instantaccess',
  buttonIcon = `fa-solid fa-user-plus`,
}) => {
  // 检测系统主题
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // 检查系统主题
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(matchMedia.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    matchMedia.addEventListener('change', handler);

    return () => {
      matchMedia.removeEventListener('change', handler);
    };
  }, []);

  return (
    <section className={`py-10 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="flex flex-col items-center px-4 py-10 mx-auto max-w-7xl gap-16">
        <AnimateInView type="rise">
          <div className="max-w-4xl mx-auto text-left flex flex-col gap-6 md:text-center">
            <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white/90">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <p className="DESC text-base text-slate-600 dark:text-white/70">
              <EditableText propKey="description">{description}</EditableText>
            </p>
          </div>
        </AnimateInView>

        <div className="w-full grid items-center grid-cols-1 gap-14 md:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateInView key={index} type="rise">
              <div className="flex gap-4">
                <EditableIcon propKey={`features_${index}_icon`} icon={feature.icon} iconLibrary="FontAwesome" className="text-sky-500 text-xl text-sky-500"/>
                <div className="flex flex-col gap-2">
                  <h3 className="TITLE-SECONDARY text-xl font-semibold text-slate-900 dark:text-white/90">
                    <EditableText propKey={`features_${index}_title`}>{feature.title}</EditableText>
                  </h3>
                  <p className="DESC text-base text-slate-600 dark:text-white/70">
                    <EditableText propKey={`features_${index}_description`}>{feature.description}</EditableText>
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView type="rise">
          <EditableButton className="BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500" href={buttonTextLink}>
            <EditableIcon propKey="buttonIcon" icon={buttonIcon} iconLibrary="FontAwesome" className="mr-2 text-xl text-white"/>
            <EditableText propKey="buttonTextLabel">{buttonTextLabel}</EditableText>
          </EditableButton>
        </AnimateInView>
      </div>
    </section>
  );
}

export default CallToAction;