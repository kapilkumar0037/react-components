import type { RangeProps } from "../shared/types";

export const Range = ({label, min, max, step, onChange}: RangeProps) => {
  return (
    <>
      <label htmlFor="customRange1" className="form-label">
        {label}
      </label>
      <input type="range" className="form-range" min={min?? 0} max={max?? 10} step={step} onChange={onChange} id="customRange1"></input>
    </>
  );
};
