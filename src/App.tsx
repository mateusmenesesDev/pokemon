import axios from 'axios'
import { useEffect, useState } from 'react'

interface Pokemon {
  name:'',
  id:number
  types:[{type:{name:''}}],
  sprites:{front_default:''}
}


function App() {
  const[pokemon, setPokemon] = useState<Pokemon|null>(null)
  const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
  })

  const getPokemon = async ()=>{
    const response = await pokemonApi.get('meganium')
    const pokemon:Pokemon = response.data
    setPokemon(pokemon)    
  }
  const basePokemonImage = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${String(pokemon?.id).padStart(3,'0')}.png`
  console.log(basePokemonImage)
  useEffect(()=>{
    getPokemon()
  },[])
    return (
    <div className="h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
      {pokemon && <div className="">
        <img src={basePokemonImage} alt="" className="w-[300px]"/>
        <h3>{pokemon.name}</h3>
        {pokemon.types.map(pokemonType=>(<h4>{pokemonType.type.name}</h4>))}
        <p>Description</p>
      </div>}
    </div>
  );
}

export default App;
