import React, {useState} from 'react'

const service = (props) => {
    const [serviceState, setService] = useState({
        name: props.name,
        description: props.description,
        timeType: props.timeType,
        rate: props.rate,
        limit: props.limit
    })

    const divstyle = {
        padding: '40px'
    }

    return (
        <div style={divstyle}>
            <p>
                <label>Name : </label>
                <input type="text" name="name" value={serviceState.name} onChange={(event) => setService({
                    name: event.target.value,
                    description: serviceState.description,
                    timeType: serviceState.timeType,
                    rate: serviceState.rate,
                    limit: serviceState.limit,
                })} />
            </p>
            <p>
                <label>Description : </label>
                <input type="text" name="description" value={serviceState.description} onChange={(event) => setService({
                    name: serviceState.name,
                    description: event.target.value,
                    timeType: serviceState.timeType,
                    rate: serviceState.rate,
                    limit: serviceState.limit,
                })} />
            </p>
            <p>
                <label>Time Type : </label>
                <input type="text" name="timeType" value={serviceState.timeType} onChange={(event) => setService({
                    name: serviceState.name,
                    description: serviceState.description,
                    timeType: event.target.value,
                    rate: serviceState.rate,
                    limit: serviceState.limit,
                })} />
            </p>
            <p>
                <label>Rate : </label>
                <input type="text" name="rate" value={serviceState.rate} onChange={(event) => setService({
                    name: serviceState.name,
                    description: serviceState.description,
                    timeType: serviceState.timeType,
                    rate: event.target.value,
                    limit: serviceState.limit,
                })} />
            </p>
            <p>
                <label>Limit : </label>
                <input type="text" name="limit" value={serviceState.limit} onChange={(event) => setService({
                    name: serviceState.name,
                    description: serviceState.description,
                    timeType: serviceState.timeType,
                    rate: serviceState.rate,
                    limit: event.target.value,
                })} />
            </p>
        </div>
    );
}

export default service
