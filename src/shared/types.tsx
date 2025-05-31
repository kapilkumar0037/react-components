export type ButtonProps = {
  label: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
};

export type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
};

export type CheckboxProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
    checked?: boolean;
  };

export type SelectProps = {
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: Array<IOption>;
  label?: string;
};

export interface IOption {
    value: string;
    label: string;
}
