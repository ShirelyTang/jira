import React from "react";

export  const List = ({uses, list}) => {
    return(
        <table>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
            <tbody>
            {
                list.map(project =>
                    <tr>
                        <td>{project.name}</td>
                        <td>{uses.find(user => user.id === project.personId)?.name || ''}</td>
                    </tr>
                )
            }
            </tbody>
        </table>

    )
}