"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DESKTOP_BG = "/images/laundry-desktop.png"; // wide landscape shot
const MOBILE_BG = "/images/laundry-mobile.png"; // portrait shot

export default function Hero() {
  return (
    <section className="min-h-screen md:min-w-7xl flex overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16">
        {/* ── Content ───────────────────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-0 md:min-h-screen md:flex md:items-center">
          <div className="max-w-md">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Professional Laundry Service
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Clean clothes.
              <br />
              <span className="text-secondary">No hassle.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-sm"
            >
              Drop off, wash &amp; fold, or self-serve. Your laundry done right,
              every time. Fast machines, touchless payment, cycle alerts.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm shadow-lg shadow-sky-900/30"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 text-sm backdrop-blur-sm"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              style={{ originX: 0 }}
              className="mt-12 mb-8 h-px w-16 bg-white/30"
            />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex items-center gap-8"
            >
              {[
                { value: "24h", label: "Turnaround" },
                { value: "4.9★", label: "Rating" },
                { value: "12k+", label: "Customers" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-white font-bold text-xl leading-none">
                    {s.value}
                  </span>
                  <span className="text-slate-400 text-xs mt-1 tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Background images ─────────────────────────────────────────────── */}
        {/* Desktop */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url('${DESKTOP_BG}')` }}
        />
        {/* Mobile */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-top"
          style={{ backgroundImage: `url('${MOBILE_BG}')` }}
        />

        {/* ── Overlay ───────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 block md:hidden bg-linear-to-t from-black/90 via-black/50 to-black/10" />

        {/* ── Scroll hint ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-stone-200 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-stone-200 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
