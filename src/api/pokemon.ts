import axios from "axios"
import IPokemon from "../types/IPokemon"

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
  })



export const pokemonCalls = {
    getPokemon: async ()=>{
        const response = await pokemonApi.get('charmander')
        const pokemon:IPokemon = response.data
        const basePokemonImage = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${String(pokemon?.id).padStart(3,'0')}.png`
        pokemon.image = basePokemonImage
        return (pokemon)  
    }
}