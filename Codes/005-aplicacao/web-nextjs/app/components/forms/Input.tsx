import { ChangeEventHandler, FormEventHandler } from "react";

interface InputInterface {
    name: string
    placeholder?: string
    value?: string
    setValue : ChangeEventHandler<HTMLInputElement>
}

export default function Input(
    {
        name, placeholder, value, setValue
    } : InputInterface) {

    return(

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

    );

}