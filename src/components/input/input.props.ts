import type { ChangeEvent, HTMLInputAutoCompleteAttribute } from "react";

export interface IInputProps {
  type: string;
  id?: string;
  ref?: string;
  name: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  value: string | number;
  heading: string;
  errorMsg?: string;
  checked?: boolean;
  title?: string;
}
