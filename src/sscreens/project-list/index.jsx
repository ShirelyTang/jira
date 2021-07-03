import React, {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {cleanObject} from "../../utils";
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () =>{
    const [param, setParam] = useState({
        name:'',
        personId: '',
    })
    const [uses, setUses] = useState([])
    const [list, setList] = useState([])

    useEffect(()=>{
        console.log('apiUrl',apiUrl)
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async(response)=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])

    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async(response)=>{
            if(response.ok){
                setUses(await response.json())
            }
        })
    },[])
    return(
        <div>
            <SearchPanel  uses={uses} param={param} setParam={setParam}/>
            <List uses={uses} list={list}/>
        </div>
    )
}