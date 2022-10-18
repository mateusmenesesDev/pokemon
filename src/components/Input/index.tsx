import { ChangeEvent, SetStateAction } from "react"

interface props{
    name: string,
    setInputName: React.Dispatch<SetStateAction<string>>
}
export function Input({name, setInputName}:props){
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setInputName(event.target.value)
    }
    return (
        <div>
            <label>
                Pesquise o seu Pokemon
                <input type='text' value={name} onChange={handleChange}/>
            </label>
        </div>
    )
}