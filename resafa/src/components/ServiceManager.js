import React, {useState} from 'react'
import Service from './Service'
import ServiceList from "./ServiceList";

const serviceManager =  () => {
    const [creating, setCreating] = useState({
        name: '',
        description: '',
        timeType: '',
        rate: '',
        limit: '',
        show: false
    })

    const [list, setList] = useState({services: [
        {
            name: 'Massage',
            description: 'Massage',
            timeType: '60, 90',
            rate: '2.30',
            limit: 'Unlimited'
        },
        {
            name: 'Massage1',
            description: 'Massage1',
            timeType: '90, 180',
            rate: '3.30',
            limit: '1'
        }
    ]})

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
            <ServiceList services={list.services}/>
            <button onClick={showCreation}>Create Service</button>
            <Service name={creating.name} description={creating.description}
                     timeType={creating.timeType} rate={creating.rate} limit={creating.limit} show={creating.show} cancelCreation={cancelCreation}/>
        </div>

    )
}

export default serviceManager;
