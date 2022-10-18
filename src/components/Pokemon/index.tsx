import IPokemon from "../../types/IPokemon";


export function Pokemon({name, id, types}:IPokemon){
    return (
        <div className="">
            <img src='' alt="" className="w-[300px]"/>
            <h3>{name}</h3>
            {types.map(pokemonType=>(<h4>{pokemonType.type.name}</h4>))}
            <p>Description</p>
        </div>
    )
}