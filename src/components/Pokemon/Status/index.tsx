import { useState } from 'react'
import './index.css'
export function Status(){
    const [hp,setHp] = useState<number>(0)
    return (
        <div className="">
            <div className="flex justify-between gap-[20px] mt-[20px] mb-[20px]">
                <p>HP</p>
                <input type="range" max="200" className="max-w-[100%] min-w-[200px]"/>
                {hp}
            </div>
            <div className="flex justify-between gap-[20px] mt-[20px] mb-[20px]">
                <p>ATK</p>
                <input type="range" max="200" className="max-w-[100%] min-w-[200px]"/>
                {hp}
            </div>
            <div className="flex justify-between gap-[20px] mt-[20px] mb-[20px]">
                <p>DEF</p>
                <input type="range" max="200" className="max-w-[100%] min-w-[200px]"/>
                {hp}
            </div>

        </div>
    )
}