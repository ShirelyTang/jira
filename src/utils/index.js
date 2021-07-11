import {useEffect, useState} from "react";

export const isFalsy = (value) => value === 0 ? false : !value

//在一个函数，改变传入的对象本身是不好的
export const cleanObject = (object) => {

    const result = {...object}
    Object.keys(object).forEach(key =>{
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}

export  const useMount = (callback) => {
    useEffect(() => {
        callback()
    },[])
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
export const useDebounce = (value, delay) => {
    const[debouncedValue, setDebounceValue] = useState(value)
    //每次在value变化的时候都会新设置一个定时器， 在 delay 毫秒后就会set一个value
    useEffect(()=>{
        const timeout = setTimeout(()=> setDebounceValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        return ()=> clearTimeout(timeout)
    },[value, delay])
    return debouncedValue
}