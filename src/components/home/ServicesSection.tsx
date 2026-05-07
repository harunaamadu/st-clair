"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../ui/section-title";

// ─── types ────────────────────────────────────────────────────────────────────
interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  accent: string;         // Tailwind text colour class
  accentBg: string;       // Tailwind bg colour class (light)
  badge?: string;
}

// ─── data ─────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    number: "01",
    title: "Wash & Fold",
    tagline: "Designed to save you time",
    description:
      "Drop off your laundry and we handle everything — sorted, washed at the right temperature, dried, and neatly folded. Ready same day or next day.",
    features: ["Sorted by colour & fabric", "Eco-friendly detergents", "Same-day available", "Per-lb pricing"],
    cta: "Book a Drop-off",
    href: "#contact",
    accent: "text-sky-500",
    accentBg: "bg-sky-50",
  },
  {
    number: "02",
    title: "Self-Serve",
    tagline: "Our team is ready to assist",
    description:
      "Use our high-capacity, high-efficiency machines at your own pace. Touchless payment, loyalty points, and end-of-cycle alerts via text or email.",
    features: ["Touchless card & app payment", "Loyalty reward points", "Cycle-complete alerts", "Large-capacity drums"],
    cta: "Get Directions",
    href: "#contact",
    accent: "text-slate-700",
    accentBg: "bg-slate-50",
  },
  {
    number: "03",
    title: "Dry Cleaning",
    tagline: "Professional garment care",
    description:
      "Delicate fabrics, suits, dresses, and specialty items cleaned with precision. Expert pressing and packaging included.",
    features: ["Suits & formal wear", "Delicate & silk fabrics", "Expert pressing", "Garment bag included"],
    cta: "Get in Touch",
    href: "#contact",
    accent: "text-amber-500",
    accentBg: "bg-amber-50",
    badge: "Coming Soon",
  },
];

// ─── animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
};

// ─── service card ─────────────────────────────────────────────────────────────
function ServiceCard({ s, index }: { s: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-shadow duration-500"
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full ${s.accentBg} relative overflow-hidden`}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={inView ? { x: "0%" } : { x: "-100%" }}
          transition={{ duration: 0.9, delay: index * 0.12 + 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className={`absolute inset-0 ${s.accent.replace("text-", "bg-")}`}
        />
      </div>

      <div className="flex flex-col flex-1 p-8 lg:p-10">
        {/* Number + badge row */}
        <div className="flex items-center justify-between mb-6">
          <span className={`font-mono text-xs font-bold tracking-widest ${s.accent} opacity-60`}>
            {s.number}
          </span>
          {s.badge && (
            <span className="text-[10px] font-semibold tracking-wider uppercase bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
              {s.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-1 leading-tight"
        >
          {s.title}
        </h3>
        <p className={`text-xs font-semibold tracking-wide uppercase mb-5 ${s.accent}`}>
          {s.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {s.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-10 flex-1">
          {s.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
              <span className={`mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center rounded-full ${s.accentBg}`}>
                <svg viewBox="0 0 12 12" fill="none" className={`w-2.5 h-2.5 ${s.accent.replace("text-", "stroke-")}`} strokeWidth={2.5}>
                  <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={s.href}
          className={`
            inline-flex items-center gap-2 self-start text-sm font-semibold
            px-5 py-2.5 rounded-xl border transition-all duration-200
            hover:-translate-y-0.5 active:scale-95
            ${s.accent} border-current hover:opacity-80
          `}
        >
          {s.cta}
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" strokeWidth={2}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── section ──────────────────────────────────────────────────────────────────
export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        {/* ── Section header ──────────────────────────────────────────────── */}
        <SectionTitle
            eyebrow="What we offer"
            title="Our<br />Services"
            description="Meeting your every laundry need — we value your time as much as you do."
            inView={inView}
        />

        {/* ── Cards grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.number} s={s} index={i} />
          ))}
        </div>

        {/* ── Bottom strip ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-slate-100 rounded-2xl px-8 py-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-sky-500" strokeWidth={1.8}>
                <path d="M12 6v6l4 2M12 2a10 10 0 100 20A10 10 0 0012 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-slate-700 text-sm font-medium">
              Not sure which service fits?{" "}
              <span className="text-slate-400 font-normal">We'll help you figure it out.</span>
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" strokeWidth={2}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}