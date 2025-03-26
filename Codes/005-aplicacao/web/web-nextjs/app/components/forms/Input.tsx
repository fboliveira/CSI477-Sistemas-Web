import { ChangeEventHandler } from "react";

interface InputInterface {
    label: string
    name: string
    placeholder?: string
    value?: string
    setValue : ChangeEventHandler<HTMLInputElement>
}

export default function Input(
    {
        label, name, placeholder, value, setValue
    } : InputInterface) {

    return(
        <div>
            <label 
                htmlFor={name}
                className="block text-sm/6 font-medium text-gray-900"
                >{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={setValue}
                className="w-full 
                border
                rounded
                bg-transparent
                text-base
                font-medium
                text-gray-900
                outline
                outline-gray-300
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-blue-500
                sm:text-sm"
                />
        </div>

    );

}