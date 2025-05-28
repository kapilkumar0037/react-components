export type ButtonProps = {
  label: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
};
