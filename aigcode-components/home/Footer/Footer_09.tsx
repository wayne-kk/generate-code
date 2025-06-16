"use client";

import * as React from "react";
import { cn } from "@ui/utils";
import {
  Blocks,
  CreditCard,
  Webhook,
  CodeXml,
  Scale,
  Handshake,
  Twitter,
  Github,
  MessageCircle,
} from "lucide-react";

type SocialLink = {
  name: string;
  href: string;
}

type FooterLink = {
  name: string;
  Icon: React.ElementType;
  href?: string;
}

type FooterColumn = {
  title: string;
  links: FooterLink[];
}

type FooterBrand = {
  name: string;
  description: string;
}

type FooterProps = {
  className?: string;
  brand?: FooterBrand;
  socialLinks?: SocialLink[];
  columns?: FooterColumn[];
  copyright?: string;
} & React.HTMLAttributes<HTMLDivElement>

const defaultBrand: FooterBrand = {
  name: "webtics",
  description: "Track and monitor your website traffic.",
};

const defaultSocialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://x.com/raymethula",
  },
  {
    name: "Github",
    href: "https://github.com/serafimcloud",
  },
  {
    name: "Discord",
    href: "#",
  },
];

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      {
        name: "Features",
        Icon: Blocks,
        href: "#features",
      },
      {
        name: "Pricing",
        Icon: CreditCard,
        href: "#pricing",
      },
      {
        name: "Integrations",
        Icon: Webhook,
        href: "#integrations",
      },
      {
        name: "API Documentation",
        Icon: CodeXml,
        href: "/docs/api",
      },
    ],
  },
  {
    title: "Compare",
    links: [
      {
        name: "Plausible",
        Icon: Twitter,
        href: "/compare/plausible",
      },
      {
        name: "Matomo",
        Icon: Github,
        href: "/compare/matomo",
      },
      {
        name: "Google Analytics",
        Icon: MessageCircle,
        href: "/compare/google-analytics",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        Icon: Scale,
        href: "/legal/privacy",
      },
      {
        name: "Terms of Service",
        Icon: Handshake,
        href: "/legal/terms",
      },
    ],
  },
];

const defaultCopyright = "webtics Inc. © 2024";

const Footer_09 = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ 
    className, 
    brand = defaultBrand,
    socialLinks = defaultSocialLinks,
    columns = defaultColumns,
    copyright = defaultCopyright,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-24", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-xl font-semibold">
                {brand.name}
              </a>
              <p className="text-sm text-foreground/60">
                {brand.description}
              </p>

              <p className="text-sm font-light text-foreground/55 mt-3.5">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-foreground/90"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
              {columns.map(({ title, links }) => (
                <div key={title} className="last:mt-12 md:last:mt-0">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group"
                        >
                          <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-20 border-t pt-6 pb-8">
              <p className="text-xs text-foreground/55">{copyright}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Footer_09;