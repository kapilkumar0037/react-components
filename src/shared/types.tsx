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
