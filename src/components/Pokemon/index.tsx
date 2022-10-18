import IPokemon from "../../types/IPokemon";
import { Input } from "../Input";
import { Status } from "./Status";


export function Pokemon({name='Informe', types, image}:IPokemon){
    return (
        <div className="flex justify-around gap-[50px] max-w-[100%] m-[50px] max-h-[80%] mb-[100px]  pt-[100px] pb-[100px] bg-gradient-to-r from-red-500 to-yellow-500  border-8">
            <div className="flex flex-col items-center justify-center max-w-[30%] m-[50px]">
                <img src={image} alt="" className="w-[100%] min-w-[200px]"/> 
            </div>
            <div className="bg-white shadow-2xl rounded-md py-[30px] flex-1 m-[50px] p-[140px]">
                {types.map(pokemonType=>(<h4>{pokemonType.type.name}</h4>))}
                <p>Description</p>
                <div>
                    <h4>Status</h4>
                    <Status/>
                </div>
            </div>
        </div>
    )
}