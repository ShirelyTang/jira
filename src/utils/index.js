export const isFalsy = (value) => value === 0 ? false : !value

//在一个函数，改变传入的对象本身是不好的
export const cleanObject = (object) => {
    console.log('object',object)

    const result = {...object}
    Object.keys(object).forEach(key =>{
        const value = object[key]
        console.log('result',result)
        if(isFalsy(value)){
            delete result[key]
        }
    })
    console.log('result2',1)
    return result
}