import axios from 'axios'
import { useEffect, useState } from 'react'
import { pokemonCalls } from './api/pokemon'
import { Pokemon } from './components/Pokemon'
import IPokemon from './types/IPokemon'




function App() {
  const[pokemon, setPokemon] = useState<IPokemon|null>(null)
  
  async function loadPokemon(){
    const pokemon = await pokemonCalls.getPokemon()
    setPokemon(pokemon)
  }
  
  useEffect(()=>{
    loadPokemon()
  },[])
    return (
      <div className="h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        {pokemon && 
          <Pokemon name={pokemon.name} id={pokemon.id} types={pokemon.types} image={pokemon.image}/>
        }
      </div>
  );
}

export default App;
