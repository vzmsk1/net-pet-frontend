import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface ITextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  heading: string;
  errorMsg: string;
}
