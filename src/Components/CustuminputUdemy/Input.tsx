import {type ComponentPropsWithoutRef, forwardRef, HTMLElementType } from "react"

type InputPropsType = {
    id: string,
    label: string,
} & ComponentPropsWithoutRef<`input`>

const Input = forwardRef<HTMLInputElement, InputPropsType>(function Input({id, label, ...props}: InputPropsType, ref){

  
    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} />
        </p>
    )
})

export default Input