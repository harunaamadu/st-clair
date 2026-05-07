import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navlinks = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("text-sm hidden md:flex items-center gap-8", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-medium text-stone-700 hover:text-primary transition-colors ease-in-out"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;
