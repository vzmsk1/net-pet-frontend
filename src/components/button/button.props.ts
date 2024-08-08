import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLProps,
  ReactNode,
} from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  link?: string;
  children: ReactNode;
}
