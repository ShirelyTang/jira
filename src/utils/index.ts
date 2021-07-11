import {useEffect, useState} from "react";

export const isFalsy = (value: unknown) => value === 0 ? false : !value

//在一个函数，改变传入的对象本身是不好的
// @ts-ignore
export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(object).forEach(key =>{
        // @ts-ignore
        const value = result[key]
        if(isFalsy(value)){
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}
//函数不返回任何值
export  const useMount = (callback:()=> void) => {
    useEffect(() => {
        callback()
    },[]);
}

// const debounce = (func,delay) =>{
//     let timeout;
//     return (...param) => {
//         console.log('11111111111')
//         if(timeout){
//             console.log('222222222')
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(()=>{
//             console.log('33333333333333333')
//             func(...param)
//         },delay)
//     }
// }

//第一个设置的timeOut被第二个清理， 第二个timeOut被第三个清理，只有最后一个会被留下来
export const useDebounce = <V> (value: V, delay?: number): any => {
    const[debouncedValue, setDebounceValue] = useState(value)
    //每次在value变化的时候都会新设置一个定时器， 在 delay 毫秒后就会set一个value
    useEffect(()=>{
        const timeout = setTimeout(()=> setDebounceValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        return ()=> clearTimeout(timeout)
    },[value, delay])
    return debouncedValue
}