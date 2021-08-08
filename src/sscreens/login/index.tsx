import React, {FormEvent} from "react";
const apiUrl = process.env.REACT_APP_API_URL
//鸭子类型： 面向接口编而不是面向对象编程

export const LoginScreen = () => {
   const login = (param:{username: string, password:string}) => {
       console.log('---',param)
       fetch(`${apiUrl}/login`,{
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(param)
       }).then(async (response)=>{

       })
   }
    const  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()//阻止表单提交的默认行为
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value

        login({username, password})
     }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor={"userName"}>用户名</label>
            <input type={"userName"} id={"userName"}/>
        </div>
        <div>
            <label htmlFor={"password"}>密码</label>
            <input type={"password"} id={"password"}/>
        </div>
        <button type={"submit"}>登录</button>
    </form>
}