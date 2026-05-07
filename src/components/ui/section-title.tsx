// components/ui/section-title.tsx

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  inView?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  inView = true,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-10",
        alignClass,
        className,
      )}
    >
      <div>
        {eyebrow && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sky-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className={`text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tighter ${titleClassName}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className={`text-slate-500 text-sm leading-relaxed mt-4 ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
