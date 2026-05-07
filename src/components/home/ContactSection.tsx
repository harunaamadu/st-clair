"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";

// ─── types ────────────────────────────────────────────────────────────────────
interface InfoTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href?: string;
  delay: number;
  inView: boolean;
}

// ─── inline SVG icons ─────────────────────────────────────────────────────────
const IconPin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="w-5 h-5"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="w-5 h-5"
  >
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      strokeLinejoin="round"
    />
  </svg>
);
const IconClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="w-5 h-5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" strokeLinejoin="round" />
  </svg>
);
const IconSend = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path
      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── info tile ────────────────────────────────────────────────────────────────
function InfoTile({
  icon,
  label,
  value,
  sub,
  href,
  delay,
  inView,
}: InfoTileProps) {
  const inner = (
    <div className="flex items-start gap-4 group">
      <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-stone-800">{value}</p>
        {sub && <p className="text-xs text-stone-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {href ? (
        <a href={href} className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}

// ─── contact form ─────────────────────────────────────────────────────────────
function ContactForm({ inView }: { inView: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full border-b border-b-stone-600 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 transition-all duration-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 lg:p-10"
    >
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center gap-4 py-12 text-center"
        >
          <div className="h-14 w-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6 text-sky-500"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4
            className="text-lg font-bold text-stone-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Message sent!
          </h4>
          <p className="text-sm text-stone-500 max-w-xs">
            Thanks for reaching out. We'll get back to you within one business
            day.
          </p>
          <button
            onClick={() => {
              setSent(false);
              setForm({ name: "", email: "", title: "", message: "" });
            }}
            className="mt-2 text-xs font-semibold text-sky-500 hover:text-sky-700 underline underline-offset-4"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <>
          <h3
            className="text-2xl font-bold text-stone-900 mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Send us a message
          </h3>
          <p className="text-sm text-stone-400 mb-8">
            We usually respond within a few hours.
          </p>

          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Name*
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Jane Smith"
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Email*
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="jane@email.com"
                  className={inputCls}
                />
              </div>
            </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  value={form.title}
                  onChange={handle}
                  placeholder="Type subject here"
                  className={inputCls}
                />
              </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Message*
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                required
                rows={5}
                placeholder="How can we help you?"
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-md shadow-sky-200"
            >
              <IconSend /> Send Message
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
}

// ─── section ──────────────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-stone-50 py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <SectionTitle
          eyebrow="Get in touch"
          title={"We'd love\nto <br/ >hear from you"}
          description="Questions, special requests, or just want to say hello — we're here."
          inView={inView}
        />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Info tiles */}
            <div className="flex flex-col gap-7">
              <InfoTile
                icon={<IconPin />}
                label="Location"
                value="1059 St. Clair Ave W, Toronto, ON M6E 1A6, Canada"
                sub="Free parking available"
                delay={0.1}
                inView={inView}
              />
              <InfoTile
                icon={<IconPhone />}
                label="Phone"
                value="(+1) 647-581-0669"
                href="tel:+16475810669"
                delay={0.2}
                inView={inView}
              />
              <InfoTile
                icon={<IconMail />}
                label="Email"
                value="hello@stclairlaundry.ca"
                href="mailto:hello@stclairlaundry.ca"
                delay={0.3}
                inView={inView}
              />
              <InfoTile
                icon={<IconClock />}
                label="Hours"
                value="Mon &dash; Sun · 7 AM &dash; 10 PM"
                sub="Last wash accepted at 9 PM"
                delay={0.4}
                inView={inView}
              />
            </div>

            {/* Map embed placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.53235714523!2d-79.44151012378745!3d43.678694771100886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351966b21d9f%3A0x554cd0364f4ed8d6!2sSt.Clair%20Coin%20Laundry!5e0!3m2!1sen!2sgh!4v1778082533832!5m2!1sen!2sgh"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
