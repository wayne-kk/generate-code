import React from 'react';

type Feature = {
  text: string;
  included: boolean;
};

type PricingCardProps = {
  title: string;
  description?: string;
  price?: string;
  features?: Feature[];
  buttonText: string;
  buttonUrl: string;
  buttonColorClass?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const PricingComponent: React.FC<{
  headingTitle?: string;
  headingSubtitleFlexible?: string;
  headingSubtitle?: string;
  headingSubtitleUnderlineSrc?: string;
  headingDescription?: string;
  cards?: PricingCardProps[];
}> = ({
  headingTitle = 'Pricing',
  headingSubtitleFlexible = 'Flexible',
  headingSubtitle = 'License Options',
  headingSubtitleUnderlineSrc = 'https://keenthemes.com/metronic/assets/media/misc/frameworks-title-underline.svg',
  headingDescription = 'Choose the right license for your needs\nand enjoy lifetime free updates',
  cards = [
    {
      title: 'Regular License',
      description: 'Use, by you or one client, in a single end product for which end users are not charged.',
      price: '49$',
      features: [
        { text: 'Premium support', included: true },
        { text: 'Unlimited developers', included: true },
        { text: 'Lifetime free updates', included: true },
        { text: 'Full source code', included: true },
        { text: 'Figma design file', included: true },
        { text: 'Refund guarantee', included: true },
        { text: 'Paying end users(SaaS)', included: false },
      ],
      buttonText: 'Purchase Metronic',
      buttonUrl: 'https://1.envato.market/Vm7VRE',
      buttonColorClass: 'bg-[#009ef7] hover:bg-[#0095e8] focus:ring-2 focus:ring-[#009ef7]/30',
    },
    {
      title: 'Extended License',
      description: 'Use by you or your one client in a single end product for which end users can be charged.',
      price: '969$',
      features: [
        { text: 'Premium support', included: true },
        { text: 'Unlimited developers', included: true },
        { text: 'Lifetime free updates', included: true },
        { text: 'Full source code', included: true },
        { text: 'Figma design file', included: true },
        { text: 'Refund guarantee', included: true },
        { text: 'Paying end users(SaaS)', included: true },
      ],
      buttonText: 'Purchase Metronic',
      buttonUrl: 'https://1.envato.market/daX0Ej',
      buttonColorClass: 'bg-[#009ef7] hover:bg-[#0095e8] focus:ring-2 focus:ring-[#009ef7]/30',
    },
    {
      title: 'Custom License',
      description:
        'Using Metronic for large-scale enterprise projects and need a custom license model? Contact us to obtain a tailored license that fits your business needs.',
      price: undefined,
      features: undefined,
      buttonText: 'Contact Us',
      buttonUrl: 'https://keenthemes.com/contact',
      buttonColorClass: 'bg-[#3cd256] hover:bg-[#2eb24a] focus:ring-2 focus:ring-[#3cd256]/30',
      imageSrc: 'https://keenthemes.com/metronic/assets/media/illustrations/misc/contact.svg',
      imageAlt: 'Contact Illustration',
    },
  ],
}) => {
  return (
    <section
      className="w-full bg-transparent text-[#181c32] text-[13px] px-0 pt-[32.5px] pb-[65px] min-h-[821px]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1260px] mx-auto">
        {/* Heading */}
        <header className="flex flex-col items-center mb-10 lg:mb-[60px]">
          <h1 id="pricing-heading" className="text-[#181c32] text-[32px] leading-[40px] font-semibold mb-2 text-center">
            {headingTitle}
          </h1>
          <div className="relative flex items-end mb-4">
            <span className="text-[40px] leading-[48px] font-extrabold text-[#181c32] mr-2">
              <span className="relative inline-block">
                <span className="px-1">{headingSubtitleFlexible}</span>
                <img
                  className="absolute left-0 bottom-0 w-full h-[7px] pointer-events-none"
                  src={headingSubtitleUnderlineSrc}
                  alt=""
                  style={{ minWidth: 80, maxWidth: 160 }}
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="text-[40px] leading-[48px] font-extrabold text-[#181c32]">{headingSubtitle}</span>
          </div>
          <div className="text-[#a1a5b7] text-[18px] leading-[28px] font-medium text-center whitespace-pre-line mt-1">
            {headingDescription}
          </div>
        </header>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
          {cards.map(
            (
              {
                title = '',
                description = '',
                price,
                features,
                buttonText = '',
                buttonUrl = '',
                buttonColorClass = '',
                imageSrc,
                imageAlt,
              },
              idx
            ) => (
              <article
                key={idx}
                className="bg-white border border-[#f1f1f2] rounded-[16px] p-8 flex flex-col h-full shadow-none transition-all duration-200 hover:shadow-[0_8px_32px_0_rgba(24,28,50,0.06)]"
                aria-labelledby={`pricing-card-title-${idx}`}
              >
                <h2
                  id={`pricing-card-title-${idx}`}
                  className="text-[#181c32] font-semibold text-[22px] leading-[28px] mb-2"
                >
                  {title}
                </h2>
                {description && <p className="text-[#7e8299] text-[16px] leading-[24px] mb-6">{description}</p>}
                {price && <div className="text-[#181c32] font-bold text-[40px] leading-[48px] mb-6">{price}</div>}
                {features && (
                  <ul className="flex flex-col gap-2 mb-8">
                    {features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center text-[16px] leading-[24px]">
                        {feature.included ? (
                          <svg
                            className="w-5 h-5 text-[#3cd256] mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <circle cx="10" cy="10" r="10" fill="#E6F9F0" />
                            <path
                              d="M7 10.5l2 2 4-4"
                              stroke="#3cd256"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-[#f1416c] mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <circle cx="10" cy="10" r="10" fill="#fde7ea" />
                            <path
                              d="M7.5 12.5l5-5M12.5 12.5l-5-5"
                              stroke="#f1416c"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-[#181c32]' : 'text-[#f1416c]'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {imageSrc && (
                  <div className="flex justify-center mb-8">
                    <img src={imageSrc} alt={imageAlt} className="h-[170px] object-contain" loading="lazy" />
                  </div>
                )}
                <div className="mt-auto">
                  <a
                    href={buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center text-white font-semibold rounded-[8px] py-[14px] text-[16px] leading-[24px] transition-colors duration-150 ${buttonColorClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                    aria-label={buttonText}
                  >
                    {buttonText}
                  </a>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
