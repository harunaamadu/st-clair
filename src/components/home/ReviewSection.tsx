"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, QuoteDownIcon } from "@hugeicons/core-free-icons";
import SectionTitle from "../ui/section-title";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const reviews = [
  {
    source: "Google User",
    name: "SELAHADIN H.",
    text: "One of the cleanest and nicest laundromats I\’ve been to. The place is bright, modern, and very well organized with clean machines, large folding tables, carts, TV, ATM, and vending machines. It feels comfortable and safe. The owner is incredibly friendly and welcoming, which makes a big difference. I truly enjoy coming here and highly recommend it to anyone looking for a great laundry place.",
    rating: 5,
  },
  {
    source: "Google User",
    name: "Romina S.",
    text: "The best laundry in the area! So clean and well taken care of.  I come from further away because the cleanliness is amazing.  The owner is the sweetest lady and so hard working it shows she cares. If I could give more stars I would.",
    rating: 5,
  },
  {
    source: "Google User",
    name: "Kanthan A.",
    text: "I love coming here to do my laundry! The owner is very knowledgeable about the machine and the quality of the washer. She educated me on which machine is best for which clothes and blankets. She makes washing clothes a fun time pass, with her experience of knowledge! I admire the way she connects with her clients on a human level rather than a business perspective. I definitely recommend this location for your laundries.",
    rating: 5,
  },
  {
    source: "Google User",
    name: "Broa S.",
    text: "What an interesting experience. Owner was super helpful and the place was well kept and clean as a whistle.",
    rating: 5,
  },
  {
    source: "Google User",
    name: "Berhane G.",
    text: "I just wanted to say that I really appreciate how clean you keep this place. The machines always work perfectly, and it makes my laundry day much smoother. Great service!",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          size={14}
          strokeWidth={1.5}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-stone-200 fill-stone-200"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
  inView,
}: {
  review: (typeof reviews)[0];
  index: number;
  inView: boolean;
}) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="h-full"
    >
      <div className="group h-full flex flex-col bg-white border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-stone-200 transition-all duration-300">
        {/* Top row: stars + quote icon */}
        <div className="flex items-center justify-between mb-5">
          <StarRating rating={review.rating} />
          <HugeiconsIcon
            icon={QuoteDownIcon}
            size={20}
            strokeWidth={1.5}
            className="text-stone-200 group-hover:text-sky-200 transition-colors duration-300"
          />
        </div>

        {/* Review text */}
        <blockquote className="flex-1 text-stone-600 text-sm leading-relaxed line-clamp-4 mb-6">
          "{review.text}"
        </blockquote>

        {/* Divider */}
        <div className="h-px w-full bg-stone-100 mb-4" />

        {/* Footer: avatar + name */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-sky-600 tracking-wide">
              {initials}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-stone-800 leading-tight">
              {review.name}
            </span>
            <span className="text-xs text-stone-400 mt-0.5">
              {review.source}
            </span>
          </div>

          {/* Google G */}
          <div className="ml-auto">
            <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [api, setApi] = React.useState<any>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5500, stopOnInteraction: true, stopOnMouseEnter: true }),
  );
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!reviews.length) return null;

  return (
    <section id="reviews" className="py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col w-full md:justify-between gap-6 mb-10">
          <SectionTitle
            eyebrow="Customer reviews"
            title={"What our customers\n<br/>are saying"}
            description="Real feedback from people who trust us with their laundry every week."
            inView={inView}
          />

          {/* Aggregate rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="shrink-0 flex items-center gap-4 bg-white border border-stone-100 rounded-2xl px-6 py-4 shadow-sm self-start md:self-auto w-fit mx-auto"
          >
            <div className="text-center">
              <p
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                4.9
              </p>
              <StarRating rating={5} />
              <p className="text-xs text-stone-400 mt-1">on Google</p>
            </div>
            <div className="h-10 w-px bg-stone-100" />
            <div className="text-center">
              <p
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                50+
              </p>
              <p className="text-xs text-stone-400 mt-1.5">Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 max-w-[88svw] lg:max-w-full">
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ReviewCard review={review} index={i} inView={inView} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                  <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === activeIndex ? "w-8 bg-primary" : "w-2 bg-stone-300",
                )}
                />
            ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 h-10 w-10 rounded-xl border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all" />
              <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 h-10 w-10 rounded-xl border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
