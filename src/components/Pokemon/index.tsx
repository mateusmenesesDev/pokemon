import IPokemon from "../../types/IPokemon";
import { Input } from "../Input";
import { Stats } from "./Stats";


export function Pokemon({name='Informe', types, image, stats}:IPokemon){
    console.log('teste',stats, types)
    return (
        <div className="flex justify-around gap-[50px] max-w-[100%]">
            <div className="flex flex-col items-center justify-center max-w-[30%] m-[50px]">
                <img src={image} alt="" className="w-[100%] min-w-[200px]"/> 
            </div>
            <div className="bg-white shadow-2xl rounded-md py-[30px] flex-1 m-[50px] p-[140px]">
                {types.map(pokemonType=>(<h4>{pokemonType.type.name}</h4>))}
                <p>Description</p>
                <div>
                    <h4>stats</h4>
                    <Stats stats={stats}/>
                </div>
            </div>
        </div>
    )
}