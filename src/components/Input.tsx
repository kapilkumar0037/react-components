import type { InputProps } from "../shared/types";

export const Input = ({
  value,
  className= "form-control",
  disabled,
  name,
  placeholder,
  type = "text",
  label,
  onChange,
}: InputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="form-label">
          Email address
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={className}
        disabled={disabled}
      />
    </>
  );
};
