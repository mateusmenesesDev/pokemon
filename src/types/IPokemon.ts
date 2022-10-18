export default interface IPokemon {
    name:string,
    id:number
    types:[{type:{name:''}}],
    image?: string,
    stats:[
        {base_stat:number, stat:{name:string}}
    ]
}