import React from 'react';

interface PricingComponentProps {
  subtitle?: string;
  title?: string;
  description?: string;
  addressTitle?: string;
  address?: string;
  phoneTitle?: string;
  phone?: string;
  phoneHref?: string;
  emailTitle?: string;
  email?: string;
  emailHref?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  phoneNumberLabel?: string;
  phoneNumberPlaceholder?: string;
  subjectLabel?: string;
  subjectPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitText?: string;
  successMessage?: string;
  errorMessage?: string;
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  subtitle = 'Contact',
  title = 'Let’s Talk',
  description = "There are multiple ways to connect with our team (live chat, schedule call, email). If you'd rather fill out the contact form below, someone will still get back to you within 1-2 business days. Looking forward to hearing from you!",
  addressTitle = 'Address',
  address = '200 E Las Olas Blvd Suite 1400\nFort Lauderdale, FL 33301',
  phoneTitle = 'Phone',
  phone = '+1 (561) 722 5755',
  phoneHref = 'tel:835:2175550113',
  emailTitle = 'Email',
  email = 'sales@getrevscale.com',
  emailHref = 'mailto:info@nexa.com',
  nameLabel = 'Name',
  namePlaceholder = 'Enter your name',
  emailLabel = 'Email',
  emailPlaceholder = 'Email address',
  phoneNumberLabel = 'Phone Number',
  phoneNumberPlaceholder = 'Enter your number',
  subjectLabel = 'Subject',
  subjectPlaceholder = 'Type your subject',
  messageLabel = 'Your Message',
  messagePlaceholder = 'Write here',
  submitText = 'Send Message',
  successMessage = 'Thank you! Your submission has been received!',
  errorMessage = 'Oops! Something went wrong while submitting the form.',
}) => {
  const [formState, setFormState] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('success');
  };

  return (
    <div className="min-h-screen bg-[#f7f6f5] text-[#333] flex flex-col items-center px-2 md:px-8">
      <div className="w-full max-w-[1200px] mx-auto pt-2 pb-0">
        <div className="flex flex-col items-center">
          <div className="mb-4 mt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#e5e5e5] text-xs font-medium tracking-tight">
              {subtitle}
            </span>
          </div>
          <h1 className="text-[64px] leading-[1.05] font-black text-center mt-2 mb-6 tracking-tight">{title}</h1>
          <p className="text-center text-[16px] leading-[1.4] max-w-[700px] mx-auto mb-12 font-normal">{description}</p>
        </div>
        <form className="w-full bg-transparent" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-[16px] font-normal mb-2">
                {nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={namePlaceholder}
                maxLength={256}
                className="w-full rounded-[10px] border border-[#f0eeee] bg-[#faf9f8] px-5 py-4 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-[#bdbdbd] shadow-none"
                autoComplete="name"
                aria-label={nameLabel}
              />
            </div>
            <div>
              <label htmlFor="Email" className="block text-[16px] font-normal mb-2">
                {emailLabel}
              </label>
              <input
                id="Email"
                name="Email"
                type="email"
                placeholder={emailPlaceholder}
                maxLength={256}
                className="w-full rounded-[10px] border border-[#f0eeee] bg-[#faf9f8] px-5 py-4 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-[#bdbdbd] shadow-none"
                autoComplete="email"
                aria-label={emailLabel}
              />
            </div>
            <div>
              <label htmlFor="Number" className="block text-[16px] font-normal mb-2">
                {phoneNumberLabel}
              </label>
              <input
                id="Number"
                name="Number"
                type="number"
                placeholder={phoneNumberPlaceholder}
                maxLength={256}
                className="w-full rounded-[10px] border border-[#f0eeee] bg-[#faf9f8] px-5 py-4 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-[#bdbdbd] shadow-none"
                autoComplete="tel"
                aria-label={phoneNumberLabel}
              />
            </div>
            <div>
              <label htmlFor="Subject" className="block text-[16px] font-normal mb-2">
                {subjectLabel}
              </label>
              <input
                id="Subject"
                name="Subject"
                type="text"
                placeholder={subjectPlaceholder}
                maxLength={256}
                className="w-full rounded-[10px] border border-[#f0eeee] bg-[#faf9f8] px-5 py-4 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-[#bdbdbd] shadow-none"
                aria-label={subjectLabel}
              />
            </div>
          </div>
          <div className="mb-10">
            <label htmlFor="field" className="block text-[16px] font-normal mb-2">
              {messageLabel}
            </label>
            <textarea
              id="field"
              name="field"
              maxLength={5000}
              placeholder={messagePlaceholder}
              className="w-full rounded-[10px] border border-[#f0eeee] bg-[#faf9f8] px-5 py-4 text-[16px] font-normal min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-[#bdbdbd] shadow-none"
              aria-label={messageLabel}
            ></textarea>
          </div>
          <div className="flex justify-center mb-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-7 py-2.5 rounded-[8px] bg-[#120c07] text-white font-medium text-[16px] shadow-none hover:bg-[#222] transition border border-[#120c07] focus:outline-none focus:ring-2 focus:ring-black active:bg-[#333] active:border-[#333]"
              aria-label={submitText}
            >
              {submitText}
              <span className="inline-block">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
          {formState === 'success' && (
            <div className="mt-4 text-green-600 text-center text-[16px] font-medium" role="status">
              {successMessage}
            </div>
          )}
          {formState === 'error' && (
            <div className="mt-4 text-red-600 text-center text-[16px] font-medium" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 mt-20 mb-4">
          <div className="flex-1 min-w-[220px]">
            <div className="mb-2 text-[16px] font-normal">{addressTitle}</div>
            <div className="font-semibold text-[16px] whitespace-pre-line leading-[1.4]">{address}</div>
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="mb-2 text-[16px] font-normal">{phoneTitle}</div>
            <a
              href={phoneHref}
              className="font-semibold text-[16px] leading-[1.4] hover:underline focus:underline transition-colors"
              aria-label={phone}
            >
              {phone}
            </a>
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="mb-2 text-[16px] font-normal">{emailTitle}</div>
            <a
              href={emailHref}
              className="font-semibold text-[16px] leading-[1.4] hover:underline focus:underline transition-colors break-all"
              aria-label={email}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
