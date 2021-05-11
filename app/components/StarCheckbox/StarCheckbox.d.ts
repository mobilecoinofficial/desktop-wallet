export interface StarCheckboxProps {
  children?: unknown;
  display?: string;
  field: {
    checked: boolean;
    name: string;
    onBlur: () => void;
    onChange: () => void;
    value: boolean;
  };
  form?: unknown;
  type?: string;
}
