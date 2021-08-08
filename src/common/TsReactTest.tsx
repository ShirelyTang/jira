import React, {useState} from "react";
import {useMount} from "../utils";
import {useArray} from "./utils";


// export const TsReactTest = () => {
//     const persons: { name: string, age: number }[] = [
//         {name: 'jsck', age: 25},
//         {name: 'ma', age: 22},
//     ]
//     const {value} = useArray()
//     useMount(()=>{
//         console.log()
//     })
//     return(
//         <div>
//             <button>add Join</button>
//             <button>remove</button>
//             <button>clear</button>
//             {
//                 value.map((persons, index)=>{
//                    return (
//                        <div>
//                            <span>{index}</span>
//                            <span>{persons.name}</span>
//                            <span>{persons.age}</span>
//                        </div>
//                    )
//                 })
//             }
//         </div>
//     )
// }