import React, {} from "react";

export const SearchPanel = ({param, setParam, uses}) => {
    return(
        <form>
            <div>
                <input type={'text'} value={param.name} onChange={evt=> setParam({...param, name: evt.target.value})}/>
                <select
                    value={param.personId}
                    onChange={evt => setParam({
                        ...param,
                        personId: evt.target.value
                    })}
                >
                    <option value={''}>负责人</option>
                    {
                        uses.map(use =><option key={use.id} value={use.id}>{use.name}</option>)
                    }
                </select>
            </div>
        </form>
    )
}