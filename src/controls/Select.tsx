import type { SelectProps } from "../shared/types";

export const Select = ({label, selectedValue, options, onChange}: SelectProps) => {
  return (
    <>
      <div>
      <label className="form-label">{label}</label>
      <select className="form-control" value={selectedValue} onChange={onChange}>
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
    </>
  );
};
