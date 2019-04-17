import React, {useState} from 'react'
import Service from './Service'

const serviceManager =  () => {
    const [creating, setCreating] = useState({
        name: 'Massage',
        description: 'Massage',
        timeType: '60, 90',
        rate: '2.30',
        limit: 'Unlimited',
        show: false
    })

    const divstyle = {
        padding: '40px'
    }

    const showCreation = () => {
        setCreating({
            ...creating,
            show: true
        })
    }

    const cancelCreation = () => {
        setCreating({
            ...creating,
            show: false
        })
    }

    return (
        <div style={divstyle}>
            <button onClick={showCreation}>Create Service</button>
            <button onClick={cancelCreation}>Cancel</button>
            <Service name={creating.name} description={creating.description}
                     timeType={creating.timeType} rate={creating.rate} limit={creating.limit} show={creating.show} />
        </div>

    )
}

export default serviceManager;
