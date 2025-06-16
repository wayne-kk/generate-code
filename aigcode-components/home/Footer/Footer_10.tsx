import React from 'react';
import { 
  Brain, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  LucideIcon
} from 'lucide-react';

type SocialLink = {
  icon: LucideIcon;
  href: string;
}

type ContactInfo = {
  address: string;
  email: string;
  phone: string;
}

type FooterBrand = {
  name: string;
  description: string;
  logo: LucideIcon;
}

type FooterSection = {
  title: string;
  links: string[];
}

type FooterProps = {
  className?: string;
  brand?: FooterBrand;
  socialLinks?: SocialLink[];
  sections?: FooterSection[];
  contact?: ContactInfo;
} & React.HTMLAttributes<HTMLElement>

const defaultBrand: FooterBrand = {
  name: "Chillbion",
  description: "Helping startups transform ideas into reality with cutting-edge technology solutions.",
  logo: Brain
};

const defaultSocialLinks: SocialLink[] = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" }
];

const defaultSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      "MVP Development",
      "Full-Stack Development",
      "AI Solutions",
      "LLM Applications",
      "Data Engineering"
    ]
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Team",
      "Case Studies",
      "Blog",
      "Careers"
    ]
  }
];

const defaultContact: ContactInfo = {
  address: "Dhaka, Bangladesh",
  email: "contact@chillbion.com",
  phone: "+1 (800) 123-4567"
};

const Footer_10: React.FC<FooterProps> = ({
  className,
  brand = defaultBrand,
  socialLinks = defaultSocialLinks,
  sections = defaultSections,
  contact = defaultContact,
  ...props
}) => {
  return (
    <footer className={`relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-12 overflow-hidden ${className}`} {...props}>
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <brand.logo className="h-6 w-6" />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                {brand.name}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              {brand.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/90 border border-black/10 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                {contact.address}
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer_10;