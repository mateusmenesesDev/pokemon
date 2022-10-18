import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pokemon } from './components/Pokemon'
import IPokemon from './types/IPokemon'




function App() {
  const[pokemon, setPokemon] = useState<IPokemon|null>(null)
  const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
  })

  const getPokemon = async ()=>{
    const response = await pokemonApi.get('meganium')
    const pokemon:IPokemon = response.data
    setPokemon(pokemon)    
  }
  const basePokemonImage = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${String(pokemon?.id).padStart(3,'0')}.png`
  console.log(basePokemonImage)
  useEffect(()=>{
    getPokemon()
  },[])
    return (
      <div className="h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        {pokemon && 
          <Pokemon name={pokemon.name} id={pokemon.id} types={pokemon.types} />
        }
      </div>
  );
}

export default App;
