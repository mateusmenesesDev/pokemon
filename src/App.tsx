import axios from 'axios'
import { useEffect, useState } from 'react'
import { pokemonCalls } from './api/pokemon'
import { Input } from './components/Input'
import { Pokemon } from './components/Pokemon'
import IPokemon from './types/IPokemon'




function App() {
  const[pokemon, setPokemon] = useState<IPokemon|null>(null)
  const[inputName, setInputName] = useState('')
  
  async function loadPokemon(){
    const pokemon = await pokemonCalls.getPokemon(inputName)
    setPokemon(pokemon)
  }
  
  useEffect(()=>{
    loadPokemon()
    console.log(pokemon)
  },[inputName])
    return (
      <div className="h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center">
        {pokemon && 
          <Pokemon name={pokemon.name} id={pokemon.id} types={pokemon.types} image={pokemon.image}/>

        }
        
        <Input name={inputName} setInputName={setInputName}/>
      </div>
  );
}

export default App;
