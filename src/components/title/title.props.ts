import type { ReactNode } from "react";

export interface ITitleProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
  hasAnim?: boolean;
}
