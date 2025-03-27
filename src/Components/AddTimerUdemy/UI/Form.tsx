import { type ComponentPropsWithoutRef, type FormEvent, forwardRef, useRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown)=>void
}

const Form = forwardRef(function Form({onSave, children, ...otherProps}: FormProps, ref){

    const form = useRef<HTMLFormElement>(null)

    function handleFormSubmission(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        // formData.forEach((key, value)=>{
        //     console.log(key, value)
        // })

        const data = Object.fromEntries(formData)
        onSave(data)

        form.current?.reset()
    }
    return(
        <form onSubmit={handleFormSubmission} {...otherProps} ref={form}>
            {children}
        </form>
    )
})

export default Form