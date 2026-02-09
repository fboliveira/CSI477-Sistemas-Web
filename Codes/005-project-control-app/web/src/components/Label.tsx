interface LabelInterface {
    id: string;
    description: string
}

export default function Label( {id, description} : LabelInterface  ) {

    return (
          <label
            htmlFor={id}
            className="text-xl font-medium leading-none text-slate-700"
          >
            {description}
          </label>          
    )

}