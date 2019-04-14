import React, {useState} from 'react'
import Service from './Service'

const serviceManager =  () => {
    const [creating, setCreating] = useState({
        name: 'Massage',
        description: 'Massage',
        timeType: '60, 90',
        rate: '2.30',
        limit: 'Unlimited',
        show: true
    })

    const divstyle = {
        padding: '40px'
    }

    const showCreation = () => {

    }

    return (
        <div style={divstyle}>
            <button onClick={showCreation}>Create Service</button>
            <Service name={creating.name} description={creating.description}
                     timeType={creating.timeType} rate={creating.rate} limit={creating.limit} />
        </div>

    );
}

export default serviceManager;
