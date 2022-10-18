import IPokemon from "../../types/IPokemon";
import { Input } from "../Input";


export function Pokemon({name, id, types, image}:IPokemon){
    return (
        <div className="">
            <div className="">
                <img src={image} alt="" className="w-[300px]"/>
                <h3>{name}</h3>
                {types.map(pokemonType=>(<h4>{pokemonType.type.name}</h4>))}
                <p>Description</p>
            </div>
        </div>
    )
}