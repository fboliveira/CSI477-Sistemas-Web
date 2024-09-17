import { ChangeEventHandler } from "react"

interface InputInterface {
    label: string
    name: string
    placeholder?: string
    value?:string
    setValue: ChangeEventHandler<HTMLInputElement>
}

export default function Input( 
    {
        label, name, placeholder,
        value, setValue
    } : InputInterface ) {

    return (

        <div>
        
            <label 
                htmlFor={name}
                className="
                   font-bold
                "
            >{ label }</label>
            <input 
                type="text" 
                name={name} 
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={setValue}

                className="
                    w-full
                    border
                    rounded
                    bg-transparent
                    text-base
                    text-gray-900
                    font-medium
                    placeholder:text-gray-400
                    outline
                    outline-gray-300
                    focus:ring-2
                    focus:ring-blue-500
                "

            />
        
        </div>

    )

}