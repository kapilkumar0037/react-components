import type { CheckboxProps } from "../shared/types";

export const Checkbox = ({checked, label, onChange}: CheckboxProps) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="checkDefault"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor="checkDefault">
        {label}
      </label>
    </div>
  );
};
