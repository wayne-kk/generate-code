import { cn } from "@ui/utils"
import { Avatar, AvatarImage } from "@ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

const defaultTestimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

function Team_15({ 
  title = "Trusted by developers worldwide",
  description = "Join thousands of developers who are already building the future with our AI platform",
  testimonials = defaultTestimonials,
  className 
}: TestimonialsSectionProps) {
  
  const TestimonialCard = ({ 
    author,
    text,
    href,
    className: cardClassName
  }: {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
  }) => {
    const Card = href ? 'a' : 'div'
    
    return (
      <Card
        {...(href ? { href } : {})}
        className={cn(
          "flex flex-col rounded-lg border-t",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "p-4 text-start sm:p-6",
          "hover:from-muted/60 hover:to-muted/20",
          "max-w-[320px] sm:max-w-[320px]",
          "transition-colors duration-300",
          cardClassName
        )}
      >
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar} alt={author.name} />
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="text-md font-semibold leading-none">
              {author.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {author.handle}
            </p>
          </div>
        </div>
        <p className="sm:text-md mt-4 text-sm text-muted-foreground">
          {text}
        </p>
      </Card>
    )
  }

  return (
    <>
      <style jsx>{`
        .max-w-container {
          max-width: 1280px;
        }
        
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
      `}</style>
      
      <section className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}>
        <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              {title}
            </h2>
            <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
              {description}
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Team_15;