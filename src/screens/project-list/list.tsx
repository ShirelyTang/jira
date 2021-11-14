import React from "react";
import {User} from "./search-panel";

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: string;
    organization: string;
}


interface ListProps {
    list: Project[],
    users: User[],
}


export  const List = ({users, list}: ListProps) => {
    return(
        <table>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
            <tbody>
            {
                list.map(project =>
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find(user => user.id === project.personId)?.name || ''}</td>
                    </tr>
                )
            }
            </tbody>
        </table>

    )
}