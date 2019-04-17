import React, {useState} from 'react'
import Service from './Service'
import ServiceList from "./ServiceList";

const serviceManager =  () => {
    const [serviceList, setServiceList] = useState({services: [
            {
                id: '1',
                name: 'Massage',
                description: 'Massage',
                timeType: '60, 90',
                rate: '2.30',
                limit: 'Unlimited'
            },
            {
                id: '2',
                name: 'Massage1',
                description: 'Massage1',
                timeType: '90, 180',
                rate: '3.30',
                limit: '1'
            }
        ]})

    const [changingService, setChangingService] = useState({
        id: '',
        name: '',
        description: '',
        timeType: '',
        rate: '',
        limit: '',
        show: false
    })

    const divstyle = {
        padding: '40px'
    }

    const showUpdate = (id) => {
        let updateService = serviceList.services.find(service => service.id === id)
        setChangingService({
            ...updateService,
            show: true
        })
    }

    const deleteService = (id) => {
        setServiceList({
            services: serviceList.services.filter(service => service.id !== id)
        })
    }

    const showCreation = () => {
        setChangingService({
            ...changingService,
            show: true
        })
    }

    const cancelCreation = () => {
        setChangingService({
            id: '',
            name: '',
            description: '',
            timeType: '',
            rate: '',
            limit: '',
            show: false
        })
    }

    return (
        <div style={divstyle}>
            <ServiceList services={serviceList.services} deleteHandler={deleteService} updateHandler={showUpdate}/>
            <button onClick={showCreation}>Create Service</button>
            <Service name={changingService.name} description={changingService.description}
                     timeType={changingService.timeType} rate={changingService.rate} limit={changingService.limit} show={changingService.show} cancelCreation={cancelCreation}/>
        </div>

    )
}

export default serviceManager;
