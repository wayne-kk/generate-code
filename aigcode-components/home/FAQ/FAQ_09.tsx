import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/accordion";
import { Button } from "@ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: "What makes your platform unique?",
    answer: "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options that make business operations smoother and more efficient."
  },
  {
    question: "How does the pricing work?",
    answer: "We offer flexible pricing tiers designed to scale with your business needs. Each plan includes core features with additional capabilities as you grow."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive 24/7 support through multiple channels including live chat, email, and phone support to ensure your business runs smoothly."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features so you can experience the platform before making a commitment."
  },
  {
    question: "How secure is your platform?",
    answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards to protect your data."
  },
  {
    question: "Can I integrate with existing tools?",
    answer: "Absolutely! Our platform offers seamless integrations with popular business tools and APIs to connect with your existing workflow."
  },
  {
    question: "Do you offer training and onboarding?",
    answer: "Yes, we provide comprehensive onboarding sessions, training materials, and ongoing support to ensure your team gets the most out of our platform."
  },
  {
    question: "What if I need to cancel my subscription?",
    answer: "You can cancel your subscription at any time with no penalties. We also offer flexible payment options and can discuss custom solutions for your needs."
  }
];

function FAQ_09({
  badge = "FAQ",
  title = "This is the start of something new",
  description = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  buttonText = "Any questions? Reach out",
  onButtonClick = () => console.log("Contact button clicked"),
  items = defaultItems
}: FAQProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {title}
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  {description}
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline" onClick={onButtonClick}>
                  {buttonText} <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ_09;
