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
                        id: props.serviceState.id,
                        name: event.target.value,
                        description: props.serviceState.description,
                        timeType: props.serviceState.timeType,
                        rate: props.serviceState.rate,
                        limit: props.serviceState.limit,
                        show: props.serviceState.show
                    })}/>
                </p>
                <p>
                    <label>Description : </label>
                    <input type="text" name="description" value={props.serviceState.description} onChange={(event) => props.setService({
                        id: props.serviceState.id,
                        name: props.serviceState.name,
                        description: event.target.value,
                        timeType: props.serviceState.timeType,
                        rate: props.serviceState.rate,
                        limit: props.serviceState.limit,
                        show: props.serviceState.show
                    })}/>
                </p>
                <p>
                    <label>Time Type : </label>
                    <input type="text" name="timeType" value={props.serviceState.timeType} onChange={(event) => props.setService({
                        id: props.serviceState.id,
                        name: props.serviceState.name,
                        description: props.serviceState.description,
                        timeType: event.target.value,
                        rate: props.serviceState.rate,
                        limit: props.serviceState.limit,
                        show: props.serviceState.show
                    })}/>
                </p>
                <p>
                    <label>Rate : </label>
                    <input type="text" name="rate" value={props.serviceState.rate} onChange={(event) => props.setService({
                        id: props.serviceState.id,
                        name: props.serviceState.name,
                        description: props.serviceState.description,
                        timeType: props.serviceState.timeType,
                        rate: event.target.value,
                        limit: props.serviceState.limit,
                        show: props.serviceState.show
                    })}/>
                </p>
                <p>
                    <label>Limit : </label>
                    <input type="text" name="limit" value={props.serviceState.limit} onChange={(event) => props.setService({
                        id: props.serviceState.id,
                        name: props.serviceState.name,
                        description: props.serviceState.description,
                        timeType: props.serviceState.timeType,
                        rate: props.serviceState.rate,
                        limit: event.target.value,
                        show: props.serviceState.show
                    })}/>
                </p>
                {props.serviceState.show === '2' && <p><button onClick={props.createService}>Create</button></p>}
                {props.serviceState.show === '3' && <p><button onClick={props.updateService}>Update</button></p>}
                <p><button onClick={props.cancelCreation}>Cancel</button></p>
            </div>
    )
}

export default service
