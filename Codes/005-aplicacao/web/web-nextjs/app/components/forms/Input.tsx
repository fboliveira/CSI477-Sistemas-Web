import { ChangeEventHandler } from "react"

interface InputInterface {

    name: string
    label: string
    placeholder?: string
    value?: string
    setValue : ChangeEventHandler<HTMLInputElement>

}

export default function Input({
    name, label, placeholder, value, setValue
} : InputInterface) {

    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type="text"
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={setValue}
            />
        </>
    )

}