import type { ChangeEvent } from "react";

export interface ISelectProps {
  heading: string;
  name: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: ISelectOptionProps[];
  errorMsg: string;
}

interface ISelectOptionProps {
  id: string;
  value: string;
}
