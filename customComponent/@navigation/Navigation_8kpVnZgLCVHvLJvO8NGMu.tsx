
import React from "react";
import AnimateInView from "../@base/AnimateInView";
import EditableButton from "../@base/EditableButton";
import EditableIcon from "../@base/EditableIcon";
import EditableImg from "../@base/EditableImg";
import EditableText from "../@base/EditableText";
import Overflow from "../@base/Overflow";
import Marquee from "../@base/Marquee";
import { getComConfigByType, getCompTypeOptions } from "../config";
import { motion } from "framer-motion";
import {
  UICompBuilder,
  withDefault,
  withExposingConfigs,
  StringControl,
  jsonArrayControl,
  ArrayStringControl,
  ArrayNumberControl,
  jsonObjectControl,
  Section,
  Dropdown,
  globalEventEmitter
} from "lowcoder-sdk";
export const Navigation_8kpVnZgLCVHvLJvO8NGMu_childrenMap = {
type: withDefault(StringControl, "Navigation_8kpVnZgLCVHvLJvO8NGMu"),
logo:withDefault(StringControl, "https://cdn.wegic.ai/assets/onepage/thread/icon/default.png"),
siteTitle:withDefault(StringControl, "MetaMystic"),
navItems:withDefault(ArrayStringControl, JSON.stringify(["text=%E9%A6%96%E9%A1%B5&link=home","text=%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC&link=about-us","text=%E6%9C%8D%E5%8A%A1%E4%B8%8E%E4%BA%A7%E5%93%81&link=services-products"])),
primaryButton:jsonObjectControl({"icon":"fa-solid fa-arrow-right","textAttr":"text=Contact us","textColor":"#000000"}),
}
export function Navigation_8kpVnZgLCVHvLJvO8NGMu({
  logo = 'https://cdn.wegic.ai/assets/onepage/thread/icon/default.png',
  navItems = [
    'text=Home&link=/home',
    'text=About&link=/about',
    'text=Service&link=/service',
    'text=Case&link=/case',
    'text=Blog&link=/blog',
    'text=Contact&link=/contact',
    'text=Location&link=/location',
    'text=Map&link=/map',
  ],
  primaryButton = {
    icon: 'fa-solid fa-arrow-right',
    textAttr: 'Contact us',
    textColor: 'black',
  },
  secondaryButton,
  fixedTop = false,
  logoSize = 40,
  showButton = true,
  maxCount = 7,
}) {
  const NAV_GAP = React.useMemo(() => 64, []);
  const LOGO_MAX_WIDTH = React.useMemo(() => 300, []);
  const MOBILE_WIDTH = React.useMemo(() => 768, []);
  const MIN_PAGE_WIDTH = React.useMemo(() => 300, []);
  const viewportId = React.useMemo(() => window?.siteEngine?.scrollContainerId || 'preview-viewport', []);
  const [viewportHeight, setViewportHeight] = React.useState(0);
  const [mobileMode, setMobileMode] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const moreButtonRef = React.useRef(null);
  const [moreListVisible, setMoreListVisible] = React.useState(false);
  const mobileListRef = React.useRef(null);
  const [mobileListVisible, setMobileListVisible] = React.useState(false);
  const [mobileEntryVisible, setMobileEntryVisible] = React.useState(false);
  const lastScrollTopRef = React.useRef(0);
  const buttonVisible = showButton && (secondaryButton || primaryButton);
  const layoutObject = React.useMemo(() => {
    const layout = {
      logoSize: 0,
      navHeight: 0,
      buttonHeight: 0,
      buttonPX: 0,
      fontSize: 0,
      dropDownHeight: 0,
      dropDownPaddingLeft: 0,
      dropDownPaddingRight: 0,
      mobileNavHeight: 56,
      mobileNavItemHeight: 56,
      mobileFontSize: 14,
      mobileIconSize: 20,
    };

    if (logoSize < 48) {
      layout.fontSize = 14;
      layout.dropDownHeight = 48;
      layout.dropDownPaddingLeft = 12;
      layout.dropDownPaddingRight = 48;
    } else if (logoSize >= 48 && logoSize < 64) {
      layout.fontSize = 15;
      layout.dropDownHeight = 64;
      layout.dropDownPaddingLeft = 20;
      layout.dropDownPaddingRight = 80;
    } else if (logoSize >= 64) {
      layout.fontSize = 16;
      layout.dropDownHeight = 64;
      layout.dropDownPaddingLeft = 20;
      layout.dropDownPaddingRight = 80;
    }

    if (mobileMode) {
      if (logoSize < 56) {
        layout.logoSize = 32;
        layout.mobileNavHeight = 56;
        layout.mobileFontSize = 14;
        layout.mobileIconSize = 20;
      } else {
        layout.logoSize = 48;
        layout.mobileNavHeight = 72;
        layout.mobileFontSize = 16;
        layout.mobileIconSize = 24;
      }
    } else {
      layout.logoSize = logoSize;
      if (logoSize < 56) {
        layout.navHeight = logoSize + 24;
      } else if (logoSize >= 56 && logoSize < 64) {
        layout.navHeight = logoSize + 40;
      } else {
        layout.navHeight = 120;
      }
    }

    /** button */
    if (logoSize < 48) {
      layout.buttonHeight = 40;
      layout.buttonPX = 20;
    } else if (logoSize >= 48 && logoSize < 56) {
      layout.buttonHeight = 48;
      layout.buttonPX = 20;
    } else {
      layout.buttonHeight = 56;
      layout.buttonPX = 28;
    }

    return layout;
  }, [logoSize, mobileMode]);
  const [isOverWidthLogo, setIsOverWidthLogo] = React.useState(false);
  const logoRectRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const buttonContainerRef = React.useRef(null);
  const [pageWidth, setPageWidth] = React.useState(0);
  const [minPageWidth, setMinPageWidth] = React.useState(MIN_PAGE_WIDTH);
  const [skeletonMinWidth, setSkeletonMinWidth] = React.useState(MIN_PAGE_WIDTH);
  const [logoWidth, setLogoWidth] = React.useState(0);
  const [buttonContainerWidth, setButtonContainerWidth] = React.useState(0);
  const [minLimit, setMinLimit] = React.useState(false);
  const [leftLimit, setLeftLimit] = React.useState(false);
  const [rightLimit, setRightLimit] = React.useState(false);
  const center = React.useMemo(() => !leftLimit && !rightLimit, [leftLimit, rightLimit]);

  const handlePageWidthUpdate = React.useCallback(() => {
    if (mobileMode || !logoWidth) {
      return;
    }
    const contentWidth = contentRef.current?.clientWidth || 0;
    const leftRestWidth = contentWidth / 2 - logoWidth - NAV_GAP;
    const rightRestWidth = contentWidth / 2 - buttonContainerWidth - NAV_GAP;
    const pageItemWidth = Math.max(Math.min(leftRestWidth, rightRestWidth) * 2, minPageWidth);
    const newMinLimit = logoWidth + NAV_GAP + minPageWidth + NAV_GAP + buttonContainerWidth > contentWidth;

    const newSkeletonMinWidth = newMinLimit ? minPageWidth : Math.max(contentWidth - logoWidth - buttonContainerWidth - NAV_GAP * 2, minPageWidth);

    const leftLimit = contentWidth / 2 - logoWidth - NAV_GAP < minPageWidth / 2;
    const rightLimit = contentWidth / 2 - buttonContainerWidth - NAV_GAP < minPageWidth / 2;
    setLeftLimit(leftLimit);
    setRightLimit(rightLimit);
    setMinLimit(newMinLimit);
    setPageWidth(pageItemWidth);
    setSkeletonMinWidth(newSkeletonMinWidth);
  }, [minPageWidth, mobileMode, logoWidth, buttonContainerWidth]);

  React.useEffect(() => {
    handlePageWidthUpdate();
  }, [logoSize, isOverWidthLogo, navItems, showButton, primaryButton, secondaryButton, handlePageWidthUpdate]);

  React.useEffect(() => {
    setMinPageWidth(MIN_PAGE_WIDTH);
  }, [navItems]);

  /** navigation ResizeObserver start */
  const handleViewportWidthChange = React.useCallback(
    throttle((entries) => {
      const entry = entries[0];
      const rect = entry.contentRect;
      const width = Math.min(window.innerWidth, rect.width);
      const height = Math.min(window.innerHeight, rect.height);
      setViewportHeight(height);
      if (width > MOBILE_WIDTH) {
        mobileMode && setMobileMode(false);
        handlePageWidthUpdate();
      } else {
        !mobileMode && setMobileMode(true);
      }
    }, 32),
    [mobileMode, handlePageWidthUpdate]
  );

  React.useEffect(() => {
    const scrollDom = document.getElementById(viewportId);
    const observer = new ResizeObserver(handleViewportWidthChange);
    observer.observe(scrollDom);

    return () => {
      observer.disconnect();
    };
  }, [viewportId, handleViewportWidthChange]);
  /** navigation ResizeObserver end */

  /** logo ResizeObserver start */
  const handleLogoWidthChange = React.useCallback(
    throttle((entries) => {
      const entry = entries[0];
      const rect = entry.contentRect;
      rect.width && setLogoWidth(rect.width);
    }, 32),
    []
  );

  React.useEffect(() => {
    if (!logoRef.current || mobileMode) {
      return;
    }
    const observer = new ResizeObserver(handleLogoWidthChange);
    observer.observe(logoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [mobileMode, handleLogoWidthChange]);
  /** logo ResizeObserver end */

  /** button ResizeObserver start */
  const handleButtonWidthChange = React.useCallback(
    throttle((entries) => {
      const entry = entries[0];
      const rect = entry.contentRect;
      rect.width && setButtonContainerWidth(rect.width);
    }, 32),
    []
  );

  React.useEffect(() => {
    if (!buttonContainerRef.current || mobileMode || minLimit || !buttonVisible) {
      return;
    }
    const observer = new ResizeObserver(handleButtonWidthChange);
    observer.observe(buttonContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [mobileMode, handleButtonWidthChange, minLimit, buttonVisible]);
  /** button ResizeObserver end */

  React.useEffect(() => {
    if (!mobileMode) {
      setMobileListVisible(false);
    } else {
      setMoreListVisible(false);
    }
  }, [mobileMode]);

  const handleCloseMoreList = (e) => {
    if (moreButtonRef.current?.contains(e.target)) {
      return;
    }
    if (moreListVisible) {
      setMoreListVisible(false);
    }
  };

  React.useEffect(() => {
    moreListVisible && window.addEventListener('click', handleCloseMoreList);
    return () => {
      window.removeEventListener('click', handleCloseMoreList);
    };
  }, [moreListVisible]);

  React.useEffect(() => {
    const handleScroll = throttle((e) => {
      if (fixedTop || !e.target) {
        return;
      }
      if (mobileListVisible) {
        setMobileListVisible(false);
      }
      const viewportHeight = window.innerHeight;
      const scrollTop = e.target.scrollTop;
      if (lastScrollTopRef.current < scrollTop) {
        if (scrollTop >= viewportHeight / 2) {
          !hidden && setHidden(true);
        } else {
          hidden && setHidden(false);
        }
      } else {
        hidden && setHidden(false);
      }
      lastScrollTopRef.current = scrollTop;
    }, 32);

    let scrollContainer = window?.document.getElementById(viewportId);
    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [hidden, fixedTop, mobileListVisible]);

  React.useEffect(() => {
    let count = navItems.length;
    if (showButton) {
      if (primaryButton) count++;
      if (secondaryButton) count++;
    }

    setMobileEntryVisible(count > 1);
    count <= 1 && setMobileListVisible(false);
  }, [primaryButton, secondaryButton, navItems, showButton]);

  /** update logo mode start */
  const handleImageAspectRatioUpdate = () => {
    if (!logoRectRef.current) {
      return;
    }
    const currentAspectRatio = LOGO_MAX_WIDTH / layoutObject.logoSize;
    const { naturalWidth, naturalHeight } = logoRectRef.current;
    const aspectRatio = naturalWidth / naturalHeight;
    setIsOverWidthLogo(aspectRatio > currentAspectRatio);
  };

  React.useEffect(() => {
    if (logoRectRef.current?.logo === logo) {
      handleImageAspectRatioUpdate();
      return;
    }

    const image = new Image();
    image.onload = () => {
      logoRectRef.current = {
        logo,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      };
      handleImageAspectRatioUpdate();
    };

    image.src = logo;
  }, [logo, layoutObject]);
  /** update logo mode end */

  const renderNavItem = (item, index) => {
    return (
      <EditableButton
        key={item}
        style={{ fontSize: layoutObject.fontSize }}
        className={`${
          index ? 'ml-8' : ''
        } py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-50 dark:text-white dark:hover:text-white/60`}
      >
        <EditableText propKey={`navItems_${index}`}>{item}</EditableText>
      </EditableButton>
    );
  };

  const renderMoreListItems = (items, startIndex = 0) => {
    return items.map((item, index) => (
      <EditableButton
        key={item}
        style={{
          height: layoutObject.dropDownHeight,
          paddingLeft: layoutObject.dropDownPaddingLeft,
          paddingRight: layoutObject.dropDownPaddingRight,
          fontSize: layoutObject.fontSize,
        }}
        className="flex-shrink-0 w-full h-full text-black whitespace-nowrap cursor-pointer text-left dark:text-white dark:hover:text-white/60 rounded-md hover:bg-[#0000000f] transition-colors"
        onClick={() => setMoreListVisible(false)}
      >
        <EditableText propKey={`navItems_${startIndex + index}`}>{item}</EditableText>
      </EditableButton>
    ));
  };

  const renderRest = (omittedItems) => (
    <div className="relative ml-8">
      <motion.button
        ref={moreButtonRef}
        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
        onClick={() => setMoreListVisible(!moreListVisible)}
        whileTap={{ scale: 0.9 }}
        style={{ fontSize: layoutObject.fontSize }}
      >
        <svg
          style={{ transform: 'translateY(2px)' }}
          className="hover:transition-all hover:scale-110 text-black dark:text-white "
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="10" r="1.5" fill="currentColor" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          <circle cx="17" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </motion.button>
      {moreListVisible && (
        <AnimatePresence>
          <motion.div
            style={{
              boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
              fontSize: layoutObject.fontSize,
            }}
            className={`max-h-96 overflow-auto overscroll-contain absolute z-40 top-full right-0 flex flex-col p-1 rounded-md bg-white border border-[#0000000a] dark:border-white/10 dark:bg-black`}
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
          >
            {renderMoreListItems(omittedItems, navItems.length - omittedItems.length)}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );

  const handleOverflowUpdate = (widths, overflow) => {
    if (mobileMode) {
      return;
    }

    if (widths.length >= 2) {
      const firstItemWidth = widths[0];
      const restItemWidth = overflow ? widths[widths.length - 1] : 72;
      setMinPageWidth(firstItemWidth + restItemWidth);
    } else if (navItems.length === 1 && widths.length && widths[0]) {
      setMinPageWidth(widths[0]);
    } else setMinPageWidth(MIN_PAGE_WIDTH);
  };

  const renderNavList = (items) => {
    return (
      <div
        className={`${buttonVisible ? 'absolute' : 'flex flex-1 flex-shrink'} ${
          center ? (buttonVisible ? 'left-1/2 -translate-x-1/2' : '') : leftLimit || minLimit ? `left-[${logoWidth + NAV_GAP}px]` : `right-[${buttonContainerWidth + NAV_GAP}px]`
        } ${moreListVisible ? '' : 'overflow-hidden'}`}
        style={{ width: buttonVisible ? pageWidth : undefined, minWidth: buttonVisible ? minPageWidth : undefined }}
      >
        <Overflow
          data={items}
          style={{ height: layoutObject.logoSize }}
          className={`flex items-center ${buttonVisible ? 'justify-center' : 'justify-end'} flex-shrink flex-1`}
          renderItem={renderNavItem}
          maxCount={maxCount}
          minCount={1}
          renderRest={renderRest}
          onUpdate={handleOverflowUpdate}
        />
      </div>
    );
  };

  const handleMobileButtonClick = (e) => {
    mobileListVisible && setMobileListVisible(false);
  };

  const renderContent = () => {
    if (mobileMode) {
      return (
        <div className="flex flex-col h-full w-full">
          <div
            className="relative flex flex-shrink-0 z-40 w-full pl-4 justify-between items-center overflow-hidden md:hidden"
            style={{
              height: layoutObject.mobileNavHeight,
              fontSize: layoutObject.mobileFontSize,
            }}
          >
            <EditableImg
              propKey="logo"
              style={{
                height: isOverWidthLogo ? undefined : layoutObject.logoSize,
              }}
              className={`${isOverWidthLogo ? `!w-[${LOGO_MAX_WIDTH}px]` : `!w-auto`} !max-w-[${LOGO_MAX_WIDTH}px] object-cover flex-shrink min-w-0`}
              src={logo}
              alt="logo"
            />
            <motion.button
              className={`${!mobileEntryVisible ? 'hidden' : ''} flex justify-center items-center text-black flex-shrink-0`}
              onClick={() => setMobileListVisible(!mobileListVisible)}
              whileTap={{ scale: 0.9 }}
              style={{
                width: layoutObject.mobileNavHeight,
                height: layoutObject.mobileNavHeight,
                fontSize: layoutObject.mobileFontSize,
              }}
            >
              {mobileListVisible ? (
                <svg width={layoutObject.mobileIconSize} height={layoutObject.mobileIconSize} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L16 4.25115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 4L16 15.7489" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width={layoutObject.mobileIconSize} height={layoutObject.mobileIconSize} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5L16.375 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 10H16.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 15H16.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </motion.button>
          </div>
          {mobileListVisible && (
            <div
              ref={mobileListRef}
              className="relative z-50 flex flex-grow flex-shrink flex-col rounded-b-3xl shadow-xl overflow-hidden md:hidden"
              style={{ fontSize: layoutObject.mobileFontSize }}
            >
              <motion.nav
                className={`w-full h-full flex flex-col rounded-b-3xl`}
                animate={{
                  y: [20, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="flex flex-col flex-grow flex-shrink overflow-auto overscroll-contain">
                  {navItems.map((item, navIndex) => (
                    <EditableButton
                      style={{
                        height: layoutObject.mobileNavItemHeight,
                        maxHeight: layoutObject.mobileNavItemHeight,
                        fontSize: layoutObject.mobileFontSize,
                      }}
                      key={item}
                      onClick={handleMobileButtonClick}
                      className="w-full flex-grow-0 flex-shrink-0 text-black whitespace-nowrap cursor-pointer group/navItem duration-50 dark:text-white dark:hover:text-white/60 select-none"
                    >
                      <EditableText propKey={`navItems_${navIndex}`} className={'group-hover/navItem:scale-105 transition-all '}>
                        {item}
                      </EditableText>
                    </EditableButton>
                  ))}
                </div>
                <div className={`${showButton ? '' : 'hidden'} w-full h-fit flex-shrink-0 flex items-center justify-between overflow-hidden gap-5 px-5 py-[10px]`}>
                  {secondaryButton && (
                    <EditableButton
                      onClick={handleMobileButtonClick}
                      style={{
                        height: layoutObject.mobileNavItemHeight,
                        fontSize: layoutObject.mobileFontSize,
                      }}
                      className={`BTN-SECONDARY overflow-hidden px-10 flex-1 group/nav whitespace-nowrap font-normal text-black flex justify-center gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300`}
                    >
                      <EditableText className="overflow-hidden text-ellipsis" propKey="secondaryButton_textAttr">
                        {secondaryButton.textAttr}
                      </EditableText>
                      <EditableIcon
                        propKey="secondaryButton_icon"
                        icon={secondaryButton.icon}
                        iconLibrary="FontAwesome"
                        className=" text-black group-hover/nav:translate-x-1 transition-all"
                      />
                    </EditableButton>
                  )}
                  {primaryButton && (
                    <EditableButton
                      onClick={handleMobileButtonClick}
                      style={{
                        height: layoutObject.mobileNavItemHeight,
                        color: primaryButton.textColor ? primaryButton.textColor : 'black',
                        fontSize: layoutObject.mobileFontSize,
                      }}
                      className={`BTN-PRIMARY overflow-hidden px-10 flex-1 group/nav whitespace-nowrap font-normal flex justify-center gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300`}
                    >
                      <EditableText className="overflow-hidden text-ellipsis" propKey="primaryButton_textAttr">
                        {primaryButton.textAttr}
                      </EditableText>
                      <EditableIcon
                        propKey="primaryButton_icon"
                        icon={primaryButton.icon}
                        iconLibrary="FontAwesome"
                        style={{
                          color: primaryButton.textColor ? primaryButton.textColor : 'black',
                        }}
                        className=" group-hover/nav:translate-x-1 transition-all"
                      />
                    </EditableButton>
                  )}
                </div>
              </motion.nav>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        style={{
          height: layoutObject.navHeight,
        }}
        className="relative w-full hidden gap-16 md:flex justify-between items-center"
      >
        <div className={`w-fit h-full flex flex-shrink-0 items-center justify-start`} ref={logoRef} style={{ maxWidth: LOGO_MAX_WIDTH }}>
          <EditableImg
            propKey="logo"
            style={{
              height: isOverWidthLogo ? undefined : layoutObject.logoSize,
            }}
            className={`${isOverWidthLogo ? `!w-[${LOGO_MAX_WIDTH}px]` : `!w-auto`} !max-w-[${LOGO_MAX_WIDTH}px] object-cover flex-shrink-0 min-w-0`}
            src={logo}
            alt="logo"
          />
        </div>

        {renderNavList(navItems)}
        {buttonVisible && <div className="flex flex-shrink flex-1" style={{ minWidth: leftLimit || rightLimit ? skeletonMinWidth : undefined }}></div>}

        {buttonVisible && (
          <div className={`w-fit h-full flex items-center justify-end overflow-hidden gap-3 ${minLimit ? 'flex-shrink' : 'flex-shrink-0'}`} ref={buttonContainerRef}>
            {secondaryButton && (
              <EditableButton
                style={{
                  height: layoutObject.buttonHeight,
                  fontSize: layoutObject.fontSize,
                }}
                className={`BTN-SECONDARY max-w-[180px] w-fit px-5 group/nav whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300`}
              >
                <EditableText className="overflow-hidden text-ellipsis" propKey="secondaryButton_textAttr">
                  {secondaryButton.textAttr}
                </EditableText>
                <EditableIcon
                  propKey="secondaryButton_icon"
                  icon={secondaryButton.icon}
                  iconLibrary="FontAwesome"
                  className="text-sm text-black group-hover/nav:translate-x-1 transition-all"
                />
              </EditableButton>
            )}
            {primaryButton && (
              <EditableButton
                style={{
                  height: layoutObject.buttonHeight,
                  color: primaryButton.textColor ? primaryButton.textColor : 'black',
                  padding: `0 ${layoutObject.buttonPX}px`,
                  fontSize: layoutObject.fontSize,
                }}
                className={`BTN-PRIMARY max-w-[180px] w-fit  group/nav  whitespace-nowrap font-normal flex gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300`}
              >
                <EditableText className="overflow-hidden text-ellipsis" propKey="primaryButton_textAttr">
                  {primaryButton.textAttr}
                </EditableText>
                <EditableIcon
                  propKey="primaryButton_icon"
                  icon={primaryButton.icon}
                  iconLibrary="FontAwesome"
                  style={{
                    color: primaryButton.textColor ? primaryButton.textColor : 'black',
                  }}
                  className="text-sm group-hover/nav:translate-x-1 transition-all"
                />
              </EditableButton>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      style={{
        transitionTimingFunction: 'cubic-bezier(.165,.84,.44,1)',
        transitionDuration: '300ms',
        fontSize: layoutObject.fontSize,
        height: mobileMode && mobileListVisible ? viewportHeight - 48 : 'auto',
      }}
      className={`fixed z-40 left-6 right-6 rounded-3xl border border-transparent md:border-black/10 md:rounded-full bg-[#ffffffe0] backdrop-blur-sm md:px-8 md:transition-all max-w-[1376px] m-auto ${
        fixedTop || !hidden ? 'top-6' : 'top-[-130px]'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full h-full" ref={contentRef}>
        {renderContent()}
      </div>
    </section>
  );
}
  export function Navigation_8kpVnZgLCVHvLJvO8NGMu_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('Navigation')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('Navigation')[value].exposingConfigs);
              }}
            />
           {children.fixedTop?.propertyView({ label: 'fixedTop' })}
{children.logo?.propertyView({ label: 'logo' })}
{children.logoSize?.propertyView({ label: 'logoSize' })}
{children.siteTitle?.propertyView({ label: 'siteTitle' })}
{children.navItems?.propertyView({ label: 'navItems' })}
{children.showButton?.propertyView({ label: 'showButton' })}
{children.primaryButton?.propertyView({ label: 'primaryButton' })}
{children.version?.propertyView({ label: 'version' })}

        </Section>
    );
} 
export const Navigation_8kpVnZgLCVHvLJvO8NGMu_Builder = new UICompBuilder(Navigation_8kpVnZgLCVHvLJvO8NGMu_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('Navigation')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(Navigation_8kpVnZgLCVHvLJvO8NGMu_PropertyViewFn)
  .build();


export const Navigation_8kpVnZgLCVHvLJvO8NGMu_ExposingConfigs = withExposingConfigs(Navigation_8kpVnZgLCVHvLJvO8NGMu_Builder, [])