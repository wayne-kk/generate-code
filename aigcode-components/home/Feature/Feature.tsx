import React from 'react';

export interface FeatureComponentProps {
  subtitle?: string;
  title?: string;
  description?: string;
  calIframeSrc?: string;
  calIframeTitle?: string;
}

const FeatureComponent: React.FC<FeatureComponentProps> = ({
  subtitle = '📆 Schedule a Demo',
  title = 'Tailored AI Agents For Your Growth',
  description = 'Watch a live demonstration of how our AI agents work together to generate leads, nurture relationships, and drive growth - all managed through simple conversations with your personal AI assistants',
  calIframeSrc = 'https://app.cal.com/team/revscale/demo/embed?embed=demo&layout=month_view&embedType=inline',
  calIframeTitle = 'Book a call',
}) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', 'demo', { origin: 'https://cal.com' });
        // @ts-ignore
        window.Cal.ns.demo('inline', {
          elementOrSelector: '#my-cal-inline',
          config: { layout: 'month_view' },
          calLink: 'team/revscale/demo',
        });
        // @ts-ignore
        window.Cal.ns.demo('ui', {
          cssVarsPerTheme: {
            light: { 'cal-brand': '#477DA7' },
            dark: { 'cal-brand': '#AEE4E6' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-[#fafafa] flex flex-col items-center px-2 sm:px-4 md:px-12 lg:px-[320px] py-0 text-[#333] font-sans"
      aria-label="Schedule Demo Section"
    >
      <header className="w-full flex flex-col items-center mt-4 mb-0">
        <div className="flex justify-center">
          <span
            className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-[#e5e7eb] text-xs font-medium text-[#444] shadow-sm mb-8 select-none transition
              hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#477DA7] focus:ring-offset-2"
            tabIndex={0}
            aria-label={subtitle}
          >
            {subtitle}
          </span>
        </div>
        <h1
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold text-center leading-[1.05] tracking-tight mb-6 text-[#111] break-words"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
        >
          {title}
        </h1>
        <p className="max-w-2xl text-center text-base md:text-lg text-[#333] mb-12 leading-relaxed">{description}</p>
      </header>
      <section className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <div
            className="rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden shadow-sm"
            style={{ minHeight: 480 }}
          >
            <div
              id="my-cal-inline"
              className="w-full h-full overflow-scroll"
              style={{
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
                background: 'transparent',
              }}
              aria-label="Calendar Booking"
            >
              <cal-inline
                data-layout="month_view"
                style={{
                  maxHeight: 'inherit',
                  height: 'inherit',
                  minHeight: 'inherit',
                  display: 'flex',
                  position: 'relative',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
                className="light"
                loading="done"
              >
                <iframe
                  className="cal-embed"
                  name="cal-embed=demo"
                  title={calIframeTitle}
                  data-cal-link="team/revscale/demo"
                  src={calIframeSrc}
                  style={{
                    height: 460,
                    width: '100%',
                    border: 'none',
                    background: 'transparent',
                  }}
                  allow="clipboard-write"
                  aria-label={calIframeTitle}
                />
              </cal-inline>
              <style>
                {`.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}`}
              </style>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeatureComponent;
