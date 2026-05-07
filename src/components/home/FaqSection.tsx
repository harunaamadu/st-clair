"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqsProps {
  id: string;
  q: string;
  a: string;
}

const faqs: FaqsProps[] = [
  {
    id: "item-1",
    q: "What are your opening hours?",
    a: "We are open daily from 6:00 AM until late evening, seven days a week including public holidays.",
  },
  {
    id: "item-2",
    q: "Do you offer wash & fold services?",
    a: "Yes, simply drop off your laundry and we'll take care of the rest — washed, dried, and neatly folded.",
  },
  {
    id: "item-3",
    q: "What payment methods do you accept?",
    a: "We accept coins and other supported in-store payment options for your convenience.",
  },
  {
    id: "item-4",
    q: "Is the laundromat clean and safe?",
    a: "Absolutely. We maintain a clean, safe, and welcoming environment for all customers at all times.",
  },
  {
    id: "item-5",
    q: "Do you provide detergents?",
    a: "Yes, detergents and laundry essentials are available for purchase in-store.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-stone-50" id="faq">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Got questions?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-stone-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-stone-500 text-base max-w-md mx-auto">
            Everything you need to know before your first visit.
          </p>
        </div>

        {/* Accordion - I will add collapsible later*/}
        <Accordion
          className="divide-y divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden shadow-sm min-w-full w-150"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white px-6 data-[state=open]:bg-blue-50/40 transition-colors duration-200"
            >
              <AccordionTrigger className="py-5 text-left text-stone-800 font-medium text-base hover:no-underline hover:text-blue-700 transition-colors">
                <span className="flex items-center gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-stone-600 text-sm leading-relaxed pl-9">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer nudge */}
        <p className="text-center text-stone-400 text-sm mt-8">
          Still have questions?{" "}
          <a href="#contact" className="text-blue-600 hover:underline font-medium">
            Get in touch
          </a>
        </p>

      </div>
    </section>
  );
}