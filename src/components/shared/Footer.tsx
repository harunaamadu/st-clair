"use client";

import { useRef, useState } from "react";
import {
  Mail01Icon,
  ArrowRight01Icon,
  InstagramIcon,
  Facebook01Icon,
  TiktokIcon,
  WashingMachineIcon,
  Location01Icon,
  Call02Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Logo from "./Logo";
import Link from "next/link";

const navLinks = {
  Services: [
    "Wash & Fold",
    "Dry Cleaning",
    "Ironing",
    "Express Laundry",
    "Bulk Orders",
  ],
  Company: ["About Us", "Our Story", "Locations", "Careers", "Contact"],
  Support: ["FAQ", "Care Guide", "Pricing", "Report", "Locations"],
};

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: Facebook01Icon, label: "Facebook" },
  { icon: TiktokIcon, label: "TikTok" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* ── Decorative background bubbles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-105 aspect-square rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute top-10 right-0 w-90 aspect-square rounded-full bg-primary-foreground/5 blur-2xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-50 rounded-full bg-primary-foreground/3 blur-3xl" />

        {/* Subtle dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Newsletter Banner ── */}
        <div className="border-b border-primary-foreground/15 py-14 md:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left copy */}
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                  Newsletter
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight">
                Fresh tips, straight
                <br />
                to your inbox.
              </h2>
              <p className="mt-3 text-primary-foreground/60 text-sm leading-relaxed">
                Laundry hacks, seasonal care guides, and exclusive offers — no
                spam, ever.
              </p>
            </div>

            {/* Right — input */}
            <div className="w-full lg:w-auto lg:min-w-105">
              {submitted ? (
                <div className="flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl px-6 py-4">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">You're on the list!</p>
                    <p className="text-primary-foreground/50 text-xs mt-0.5">
                      We'll be in touch soon.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="your@email.com"
                    className="w-full rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/35 px-5 py-4 pr-36 text-sm focus:outline-none focus:border-primary-foreground/50 focus:bg-primary-foreground/15 transition-all duration-200"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-1.5 inline-flex items-center gap-2 rounded-xl bg-primary-foreground text-primary text-xs font-semibold px-4 py-2.5 hover:opacity-90 active:scale-95 transition-all duration-150"
                  >
                    Subscribe
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={13}
                      color="currentColor"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              )}
              <p className="mt-2.5 text-primary-foreground/55 text-xs pl-1">
                Join 2,400+ customers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* ── Main footer grid ── */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo mark */}
            <Logo />

            <p className="text-primary-white/55 text-sm leading-relaxed max-w-55 mt-2">
              Premium laundry care for everyday life. Clean clothes, zero
              stress.
            </p>

            {/* Contact info */}
            <ul className="mt-7 space-y-3">
              {[
                {
                  icon: Location01Icon,
                  text: "1059 St. Clair Ave W, Toronto, ON M6E 1A6, Canada",
                },
                { icon: Call02Icon, text: "(+1) 647-581-0669" },
                { icon: Clock01Icon, text: "Mon - Sun · 7 AM - 10 PM" },
              ].map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2.5 text-primary-foreground/90 text-xs"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={13}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-7">
              {socials.map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-150"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/90 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="/not-found"
                      className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors duration-150 hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-primary-foreground/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/90 text-xs">
            ©{new Date().getFullYear()} St. Clair Laundry. All rights reserved.
          </p>

          <p className="text-primary-foreground/55 text-xs">
            Designed and Developed by{" "}
            <Link
              href="https://www.facebook.com/harunaamadu95"
              className="underline text-primary-foreground/90 hover:text-primary-foreground/90 text-xs transition-colors duration-150"
              target="_blank"
            >
              Haruna Amadu
            </Link>
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-primary-foreground/55 hover:text-primary-foreground/90 text-xs transition-colors duration-150"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
