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
        <div>
            {stats?.map(stat => (
                <div className="flex gap-[10px] mt-[20px] mb-[20px]">
                    <div className='flex-2 w-[115px]'>
                        <p>{stat.stat.name}</p>
                    </div>
                    <input type="range" max="200" className="min-w-[200px] flex-1" value={stat.base_stat}/>
                    <p>{stat.base_stat}</p>
                </div>
            ))}
        </div>
    )
}