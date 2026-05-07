"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CallIcon,
  MapPinpoint02Icon,
  Menu04Icon,
} from "@hugeicons/core-free-icons";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // ── Entry animation on mount ──────────────────────────────────────
    gsap.fromTo(
      header,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      },
    );

    // ── Scroll-based hide / reveal ────────────────────────────────────
    const SCROLL_THRESHOLD = 60; // px scrolled before we react
    let hidden = false;

    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < SCROLL_THRESHOLD) {
          // Always show near the top
          if (hidden) {
            gsap.to(header, {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            });
            hidden = false;
          }
        } else if (delta > 6 && !hidden) {
          // Scrolling DOWN → hide
          gsap.to(header, {
            y: -90,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          });
          hidden = true;
        } else if (delta < -6 && hidden) {
          // Scrolling UP → reveal
          gsap.to(header, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
          hidden = false;
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-xl border bg-white/70 backdrop-blur-md px-6 py-3 shadow-sm">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <Navlinks />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="gap-2">
              <HugeiconsIcon
                icon={CallIcon}
                size={18}
                color="currentColor"
                strokeWidth={1.5}
              />
              Call Now
            </Button>
            <Button className="gap-2">
              <HugeiconsIcon
                icon={MapPinpoint02Icon}
                size={18}
                color="currentColor"
                strokeWidth={1.5}
              />
              Directions
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <HugeiconsIcon
                  icon={Menu04Icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.5}
                />
              </SheetTrigger>

              <SheetContent side="right" className="w-full">
                <div className="flex flex-col h-full p-4">
                  <Logo />

                  <Navlinks className="flex justify-center h-auto flex-1 flex-col gap-8 text-lg" />

                  <div className="flex flex-col gap-3 pt-6">
                    <Button variant="outline" className="gap-2 w-full">
                      <HugeiconsIcon
                        icon={CallIcon}
                        size={18}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                      Call Now
                    </Button>
                    <Button className="gap-2 w-full">
                      <HugeiconsIcon
                        icon={MapPinpoint02Icon}
                        size={18}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                      Directions
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
