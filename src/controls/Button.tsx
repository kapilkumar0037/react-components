import type { ButtonProps } from "../shared/types"

export const Button = ({className, label, type, onClick}: ButtonProps)=> {
    const fixedClass = 'btn';
    return (
        <button className={`${fixedClass} ${className}`} type={type} onClick={onClick}>
            {label}
        </button>
    )
}