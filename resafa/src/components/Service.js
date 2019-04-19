import React from 'react'

const service = (props) => {
    const divtopstyle = {
        paddingTop: '40px'
    }

    return (
        props.serviceState.show !== '1'  && <div className={divtopstyle}>
                <p>
                    <label>Name : </label>
                    <input type="text" name="name" value={props.serviceState.name} onChange={(event) => props.setService({
                        ...props.serviceState,
                        name: event.target.value
                    })}/>
                </p>
                <p>
                    <label>Description : </label>
                    <input type="text" name="description" value={props.serviceState.description} onChange={(event) => props.setService({
                        ...props.serviceState,
                        description: event.target.value
                    })}/>
                </p>
                <p>
                    <label>Time Type : </label>
                    <input type="text" name="timeType" value={props.serviceState.timeType} onChange={(event) => props.setService({
                        ...props.serviceState,
                        timeType: event.target.value
                    })}/>
                </p>
                <p>
                    <label>Rate : </label>
                    <input type="text" name="rate" value={props.serviceState.rate} onChange={(event) => props.setService({
                        ...props.serviceState,
                        rate: event.target.value
                    })}/>
                </p>
                <p>
                    <label>Limit : </label>
                    <input type="text" name="limit" value={props.serviceState.limit} onChange={(event) => props.setService({
                        ...props.serviceState,
                        limit: event.target.value
                    })}/>
                </p>
                {props.serviceState.show === '2' && <p><button onClick={props.createService}>Create</button></p>}
                {props.serviceState.show === '3' && <p><button onClick={props.updateService}>Update</button></p>}
                <p><button onClick={props.cancelCreation}>Cancel</button></p>
            </div>
    )
}

export default service
