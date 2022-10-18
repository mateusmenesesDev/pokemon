import { useState } from 'react'
import './index.css'

interface stats {
    stats:[{
    base_stat: number;
    stat: {
        name: string;
    };
}] | undefined
}
export function Stats({stats}:stats){
    // const [hp,setHp] = useState<number>(0)
    console.log(stats)
    return (
        <div className="">
            {stats?.map(stat => (
                <div className="flex justify-between gap-[20px] mt-[20px] mb-[20px]">
                    <p>{stat.stat.name}</p>
                    <input type="range" max="200" className="w-[85%] min-w-[200px]" value={stat.base_stat}/>
                    <p>{stat.base_stat}</p>
                </div>
            ))}
        </div>
    )
}