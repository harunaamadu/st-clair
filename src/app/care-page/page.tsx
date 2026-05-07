"use client";

import { useState, useRef, useEffect } from "react";
import {
  Suit01Icon,
  Shirt01Icon,
  Dress03Icon,
  JoggerPantsIcon,
  WashingMachineIcon,
  DropletIcon,
  Sun02Icon,
  Alert02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import gsap from "gsap";

type Fabric = {
  name: string;
  Icon: IconSvgElement;
  color: string;
  tips: { wash: string; dry: string; warning: string };
};

const fabrics: Fabric[] = [
  {
    name: "Cotton",
    Icon: Shirt01Icon,
    color: "bg-sky-50 border-sky-200 text-sky-700",
    tips: {
      wash: "Wash with warm water (30–40°C)",
      dry: "Tumble dry on medium heat",
      warning: "May shrink if overheated",
    },
  },
  {
    name: "Wool",
    Icon: Suit01Icon,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    tips: {
      wash: "Cold wash or hand wash only",
      dry: "Air dry flat — never hang",
      warning: "Avoid heat to prevent irreversible shrinking",
    },
  },
  {
    name: "Silk",
    Icon: Dress03Icon,
    color: "bg-rose-50 border-rose-200 text-rose-700",
    tips: {
      wash: "Hand wash in cold water",
      dry: "Air dry flat away from sunlight",
      warning: "Very delicate — avoid machine wash entirely",
    },
  },
  {
    name: "Denim",
    Icon: JoggerPantsIcon,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    tips: {
      wash: "Cold wash inside out",
      dry: "Air dry preferred to preserve shape",
      warning: "Color may bleed — wash separately",
    },
  },
  {
    name: "Polyester",
    Icon: WashingMachineIcon,
    color: "bg-violet-50 border-violet-200 text-violet-700",
    tips: {
      wash: "Warm wash (40°C max)",
      dry: "Low heat tumble dry",
      warning: "Avoid high heat — causes permanent damage",
    },
  },
];

export default function CareGuidePage() {
  const [selected, setSelected] = useState<Fabric>(fabrics[0]);

  // Refs for GSAP
  const headerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  // Page entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
      gsap.fromTo(
        selectorRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.3,
        }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.7 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Animate tips panel on fabric change
  const handleSelect = (fabric: Fabric) => {
    if (fabric.name === selected.name) return;

    // Fade out tips, swap, fade in
    gsap.fromTo(
      tipsRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );
    gsap.to(tipsRef.current, {
      opacity: 0,
      y: -8,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setSelected(fabric);
        gsap.fromTo(
          tipsRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <main className="relative min-h-screen bg-linear-to-b from-secondary/10 to-white py-20 pt-32">
      {/* FIX: fixed-width centering wrapper — prevents any resizing on selection */}
      <div className="mx-auto w-full max-w-3xl px-4">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Laundry guide
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-stone-900">
            Fabric Care Guide
          </h1>
          <p className="mt-3 text-stone-500 max-w-sm mx-auto">
            Not sure how to wash your clothes? Pick a fabric and we'll walk you through it.
          </p>
        </div>

        {/* Fabric Selector */}
        <div
          ref={selectorRef}
          className="grid grid-cols-5 gap-3 mb-10"
        >
          {fabrics.map((fabric) => {
            const isActive = selected.name === fabric.name;
            return (
              <button
                key={fabric.name}
                onClick={() => handleSelect(fabric)}
                className={`flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 p-4 transition-colors duration-200 opacity-0 ${
                  isActive
                    ? "bg-stone-900 border-stone-900 text-white shadow-lg"
                    : "bg-white border-stone-200 text-stone-600 hover:border-stone-400 hover:shadow-sm"
                }`}
              >
                <HugeiconsIcon icon={fabric.Icon} size={24} color="currentColor" strokeWidth={1.5} />
                <span className="text-xs font-medium">{fabric.name}</span>
              </button>
            );
          })}
        </div>

        {/* Info Card — fixed width via parent, no internal width changes */}
        <div ref={cardRef} className="rounded-3xl border border-stone-200 bg-white shadow-sm overflow-hidden opacity-0">

          {/* Card Header */}
          <div className="px-8 py-6 border-b border-stone-100 flex items-center gap-4 min-h-22">
            <div className={`w-12 h-12 rounded-xl border-2 shrink-0 flex items-center justify-center transition-colors duration-300 ${selected.color}`}>
              <HugeiconsIcon icon={selected.Icon} size={22} color="currentColor" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider font-medium">
                Currently viewing
              </p>
              <h2 className="font-heading text-xl font-semibold text-stone-900">
                {selected.name} Care Instructions
              </h2>
            </div>
          </div>

          {/* Tips Grid — animated on swap */}
          <div ref={tipsRef} className="grid grid-cols-3 gap-px bg-stone-100">
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-3">
                <HugeiconsIcon icon={DropletIcon} size={15} color="currentColor" strokeWidth={1.5} />
                <span className="text-xs font-semibold uppercase tracking-wider">Washing</span>
              </div>
              <p className="font-medium text-stone-900 text-sm leading-relaxed">{selected.tips.wash}</p>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <HugeiconsIcon icon={Sun02Icon} size={15} color="currentColor" strokeWidth={1.5} />
                <span className="text-xs font-semibold uppercase tracking-wider">Drying</span>
              </div>
              <p className="font-medium text-stone-900 text-sm leading-relaxed">{selected.tips.dry}</p>
            </div>

            <div className="bg-red-50 p-6">
              <div className="flex items-center gap-2 text-red-500 mb-3">
                <HugeiconsIcon icon={Alert02Icon} size={15} color="currentColor" strokeWidth={1.5} />
                <span className="text-xs font-semibold uppercase tracking-wider">Warning</span>
              </div>
              <p className="font-medium text-red-700 text-sm leading-relaxed">{selected.tips.warning}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 py-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              Rather skip the hassle? Drop it off and we'll handle everything.
            </p>
            <button className="inline-flex items-center gap-2 rounded-xl bg-stone-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-stone-700 transition-colors shrink-0">
              Let us handle it
              <HugeiconsIcon icon={ArrowRight01Icon} size={15} color="currentColor" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}