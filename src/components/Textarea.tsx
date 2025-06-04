import type { TextareaProps } from "../shared/types";

export const Textarea = ({label, placeholder, onChange, rows, value}: TextareaProps) => {
  return (
    <div>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
