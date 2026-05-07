import { ReactNode } from "react";

export interface NavlinkProps {
  name: string;
  href: string;
  icon?: ReactNode;
  label?: string;
  isExternal?: boolean;
  isDisabled?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

export interface NavlinksProps {
  className?: string;
  linkClassName?: string;
  orientation?: "horizontal" | "vertical";
  showIcons?: boolean;
  activeHref?: string;
}