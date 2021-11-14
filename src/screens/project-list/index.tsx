import React, {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {cleanObject, useDebounce, useMount} from "../../utils";
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () =>{
    const [param, setParam] = useState({
        name:'',
        personId: '',
    })
    const [uses, setUses] = useState([])
    const [list, setList] = useState([])
    const debouncedParam = useDebounce(param, 2000)


    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async(response)=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debouncedParam])

    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async(response)=>{
            if(response.ok){
                setUses(await response.json())
            }
        })
    })
    return(
        <div>
            <SearchPanel  users={uses} param={param} setParam={setParam}/>
            <List users={uses} list={list}/>
        </div>
    )
}