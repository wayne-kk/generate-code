"use client";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@ui/button";
import { Badge } from "@ui/badge";

// 信息描述相关props类型
type HeroContent = {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  images?: {
    topLeft?: string;
    right?: string;
    bottomLeft?: string;
  };
};

type HeroProps = {
  content?: HeroContent;
};

const defaultContent: HeroContent = {
  badgeText: "We're live!",
  title: "This is the start of something!",
  description: "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  primaryButton: {
    text: "Sign up here",
    icon: <MoveRight className="w-4 h-4" />,
  },
  secondaryButton: {
    text: "Jump on a call",
    icon: <PhoneCall className="w-4 h-4" />,
  },
  images: {
    topLeft: "https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    right: "https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    bottomLeft: "https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
};

function Hero_43({ content = defaultContent }: HeroProps) {
  return (
    <div className="w-full px-20 py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">{content.badgeText}</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                {content.title}
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                {content.description}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {content.secondaryButton && (
                <Button 
                  size="lg" 
                  className="gap-4" 
                  variant="outline"
                  onClick={content.secondaryButton.onClick}
                >
                  {content.secondaryButton.text} {content.secondaryButton.icon}
                </Button>
              )}
              {content.primaryButton && (
                <Button 
                  size="lg" 
                  className="gap-4"
                  onClick={content.primaryButton.onClick}
                >
                  {content.primaryButton.text} {content.primaryButton.icon}
                </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {content.images?.topLeft && (
              <div className="bg-muted rounded-md aspect-square" style={{ backgroundImage: `url(${content.images.topLeft})` }}></div>
            )}
            {content.images?.right && (
              <div className="bg-muted rounded-md row-span-2" style={{ backgroundImage: `url(${content.images.right})` }}></div>
            )}
            {content.images?.bottomLeft && (
              <div className="bg-muted rounded-md aspect-square" style={{ backgroundImage: `url(${content.images.bottomLeft})` }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_43;
