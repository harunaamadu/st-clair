"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  Cancel01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

// ─── types ────────────────────────────────────────────────────────────────────
type Billing = "monthly" | "annual";

interface PriceTier {
  price: number | null;
  display?: string;
  unit: string;
  note: string;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  icon: React.ReactNode;
  name: string;
  tag: string;
  monthly: PriceTier;
  annual: PriceTier;
  features: PlanFeature[];
  cta: string;
  href: string;
  featured?: boolean;
  badge?: string;
  badgeVariant?: "blue" | "amber";
}

// ─── icons (inline SVG, no external dep) ─────────────────────────────────────
const IconWasher = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    strokeWidth={1.6}
    stroke="currentColor"
  >
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <circle cx="12" cy="13" r="4" />
    <path d="M6 7h.01M9 7h.01" strokeLinecap="round" />
  </svg>
);
const IconShirt = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    strokeWidth={1.6}
    stroke="currentColor"
  >
    <path
      d="M3 6l4-3 5 3 5-3 4 3-3 4h-2v10H6V10H4L3 6z"
      strokeLinejoin="round"
    />
  </svg>
);
const IconHanger = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    strokeWidth={1.6}
    stroke="currentColor"
  >
    <path
      d="M12 4a2 2 0 011.5 3.3L21 14H3l7.5-6.7A2 2 0 0112 4z"
      strokeLinejoin="round"
    />
    <path d="M12 4V2" strokeLinecap="round" />
  </svg>
);

// ─── data ─────────────────────────────────────────────────────────────────────
const plans: Plan[] = [
  {
    id: "self",
    icon: <IconWasher />,
    name: "Self-Serve",
    tag: "You run the machines",
    monthly: {
      price: null,
      display: "$3.50",
      unit: "/ load",
      note: "From $3.50 per load",
    },
    annual: {
      price: null,
      display: "$3.50",
      unit: "/ load",
      note: "From $3.50 per load",
    },
    features: [
      { text: "High-capacity machines", included: true },
      { text: "Touchless payment", included: true },
      { text: "Loyalty reward points", included: true },
      { text: "Cycle-complete alerts", included: true },
      { text: "Pickup & delivery", included: false },
      { text: "Dedicated attendant", included: false },
    ],
    cta: "Get Directions",
    href: "#contact",
  },
  {
    id: "washfold",
    icon: <IconShirt />,
    name: "Wash & Fold",
    tag: "We handle everything",
    monthly: { price: 1.89, unit: "/ lb", note: "Min. 10 lbs per order" },
    annual: {
      price: 1.59,
      unit: "/ lb",
      note: "Billed annually · min. 10 lbs",
    },
    features: [
      { text: "Sorted by colour & fabric", included: true },
      { text: "Eco-friendly detergents", included: true },
      { text: "Same-day available", included: true },
      { text: "Neatly folded & bagged", included: true },
      { text: "Free pickup & delivery", included: true },
      { text: "Dedicated attendant", included: false },
    ],
    cta: "Book a Drop-off",
    href: "#contact",
    featured: true,
    badge: "Most popular",
    badgeVariant: "blue",
  },
  {
    id: "dry",
    icon: <IconHanger />,
    name: "Dry Cleaning",
    tag: "Specialty garment care",
    monthly: {
      price: null,
      display: "From $8",
      unit: "/ item",
      note: "Pricing varies by garment",
    },
    annual: {
      price: null,
      display: "From $8",
      unit: "/ item",
      note: "Pricing varies by garment",
    },
    features: [
      { text: "Suits & formal wear", included: true },
      { text: "Delicate & silk fabrics", included: true },
      { text: "Expert pressing", included: true },
      { text: "Garment bag included", included: true },
      { text: "Free pickup & delivery", included: true },
      { text: "Dedicated attendant", included: true },
    ],
    cta: "Get in Touch",
    href: "#contact",
    badge: "Coming soon",
    badgeVariant: "amber",
  },
];

// ─── plan card ────────────────────────────────────────────────────────────────
function PlanCard({
  plan,
  billing,
  index,
  inView,
}: {
  plan: Plan;
  billing: Billing;
  index: number;
  inView: boolean;
}) {
  const tier = plan[billing];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={`
        relative flex flex-col bg-white rounded-2xl overflow-hidden
        transition-shadow duration-300 hover:shadow-lg hover:shadow-stone-200/70
        ${
          plan.featured
            ? "border-2 border-secondary shadow-md shadow-sky-100"
            : "border border-stone-100"
        }
      `}
    >
      {/* Sliding top accent */}
      {plan.featured && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          style={{ originX: 0 }}
          className="h-0.5 w-full bg-sky-500"
        />
      )}

      <div className="flex flex-col flex-1 p-7 lg:p-8">
        {/* Badge */}
        <div className="h-7 mb-5">
          {plan.badge && (
            <span
              className={`
              text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full
              ${
                plan.badgeVariant === "amber"
                  ? "bg-amber-100 text-amber-800"
                  : "bg-secondary/25 text-primary"
              }
            `}
            >
              {plan.badge}
            </span>
          )}
        </div>

        {/* Icon + name */}
        <div
          className={`mb-3 ${plan.featured ? "text-sky-600" : "text-stone-400"}`}
        >
          {plan.icon}
        </div>
        <h3
          className="text-2xl font-bold font-heading text-stone-800 leading-tight mb-1"
        >
          {plan.name}
        </h3>
        <p className="text-xs text-stone-400 mb-5">{plan.tag}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-1">
          {tier.price !== null ? (
            <>
              <span className="text-base font-semibold text-stone-800 self-start mt-1">
                $
              </span>
              <span className="text-4xl font-bold text-stone-800 leading-none">
                {tier.price.toFixed(2)}
              </span>
              <span className="text-sm text-stone-400">{tier.unit}</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-stone-900 leading-none">
              {tier.display}
            </span>
          )}
        </div>
        <p className="text-xs text-stone-400 mb-6">{tier.note}</p>

        {/* Divider */}
        <div className="h-px w-full bg-stone-100 mb-5" />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1 mb-7">
          {plan.features.map((f) => (
            <li
              key={f.text}
              className={`flex items-start gap-2.5 text-sm ${
                f.included ? "text-stone-600" : "text-stone-300"
              }`}
            >
              <span className={f.included ? "text-sky-500" : "text-stone-300"}>
                {f.included ? (
                  <HugeiconsIcon
                    icon={Tick01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                ) : (
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                )}
              </span>
              {f.text}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={plan.href}
          className={`
            inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl
            text-sm font-semibold transition-all duration-200
            hover:-translate-y-0.5 active:scale-95
            ${
              plan.featured
                ? "bg-primary hover:brightness-90 text-white shadow-md shadow-sky-200"
                : "border border-stone-300 text-stone-600 hover:bg-stone-50"
            }
          `}
        >
          {plan.cta}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={16}
            color="currentColor"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── calculator ───────────────────────────────────────────────────────────────
function Calculator({ billing }: { billing: Billing }) {
  const [lbs, setLbs] = useState(15);
  const [visits, setVisits] = useState(4);
  const rate = billing === "annual" ? 1.59 : 1.89;
  const total = Math.round(lbs * visits * rate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="mt-10 bg-stone-50 border border-slate-100 rounded-2xl p-7 lg:p-8"
    >
      <h3
        className="text-lg font-bold font-heading text-slate-900 mb-6 flex items-center gap-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-sky-500"
          strokeWidth={1.8}
          stroke="currentColor"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
        </svg>
        Estimate your cost
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-500">Laundry weight</label>
            <span className="text-sm font-semibold text-slate-900">
              {lbs} lbs
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={lbs}
            onChange={(e) => setLbs(Number(e.target.value))}
            className="w-full accent-secondary"
          />
          <div className="flex justify-between text-xs text-slate-300 mt-1">
            <span>5 lbs</span>
            <span>50 lbs</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-500">Visits per month</label>
            <span className="text-sm font-semibold text-stone-900">
              {visits}×
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={visits}
            onChange={(e) => setVisits(Number(e.target.value))}
            className="w-full accent-secondary"
          />
          <div className="flex justify-between text-xs font-mono text-stone-600 mt-1">
            <span>1×</span>
            <span>12×</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-stone-600 border-t border-stone-200 pt-5">
        <div>
          <p className="text-sm text-stone-800">Estimated monthly total</p>
          <p className="text-xs mt-0.5">
            Wash & Fold · ${rate.toFixed(2)}/lb · {lbs} lbs × {visits} visits
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold font-mono text-primary">
            ${total.toLocaleString()}
          </p>
          <p className="text-xs">/ month</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── section ──────────────────────────────────────────────────────────────────
export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="bg-background py-24 md:py-32 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={headRef}
        >
          <SectionTitle
            eyebrow="Simple pricing"
            title="Pay for what<br/>you need"
            description="No hidden fees. No subscriptions required. Choose a plan or pay per use."
            inView={headInView}
          />
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 shrink-0 mb-3"
        >
          {billing === "annual" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-semibold bg-secondary/25 text-primary px-3 py-1 rounded-full"
            >
              Save up to 20%
            </motion.span>
          )}
          <div className="flex items-center gap-1 bg-stone-100 rounded-full p-1">
            {(["monthly", "annual"] as Billing[]).map((b) => (
              <Button
                variant="ghost"
                key={b}
                onClick={() => setBilling(b)}
                className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize
                ${
                  billing === b
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200"
                    : "text-stone-500 hover:text-stone-700"
                }
                `}
              >
                {b}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              billing={billing}
              index={i}
              inView={cardsInView}
            />
          ))}
        </div>

        {/* Calculator */}
        <Calculator billing={billing} />
      </div>
    </section>
  );
}
