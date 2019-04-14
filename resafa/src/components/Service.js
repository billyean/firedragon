import {React, useState} from 'react'

const service = (props) => {
    const [serviceState, setService] = useState({
        name: props.name,
        description: props.description,
        timeType: props.timtType,
        rate: props.rate,
        limit: props.limit
    })

    return (
        <div>
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
        </div>
    );
}

export default service
