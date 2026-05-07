import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className? : string
  span? : string
}

const Logo = ({span, className}: LogoProps) => {
  return (
    <Link href="/" className={`flex flex-col leading-tighter group ${className}`}>
      <span className="font-semibold font-heading text-lg md:text-2xl group-hover:text-primary transition-colors ease-in-out">
        St. Clair
      </span>
      <span className={cn("text-[10px]", span)}>Laundry</span>
    </Link>
  );
};

export default Logo;
