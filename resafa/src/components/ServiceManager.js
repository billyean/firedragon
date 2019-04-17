import React, {useState} from 'react'
import Service from './Service'
import ServiceList from "./ServiceList";

const serviceManager =  () => {
    const [serviceList, setServiceList] = useState({services: [
            {
                id: 1,
                name: 'Massage',
                description: 'Massage',
                timeType: '60, 90',
                rate: '2.30',
                limit: 'Unlimited'
            },
            {
                id: 2,
                name: 'Massage1',
                description: 'Massage1',
                timeType: '90, 180',
                rate: '3.30',
                limit: '1'
            }
        ]})

    const [changingService, setChangingService] = useState({
        id: 0,
        name: '',
        description: '',
        timeType: '',
        rate: '',
        limit: '',
        show: '1'
    })

    const divstyle = {
        padding: '40px'
    }

    const showUpdate = (id) => {
        let updateService = serviceList.services.find(service => service.id === id)
        setChangingService({
            ...updateService,
            show: '3'
        })
    }

    const deleteService = (id) => {
        setServiceList({
            services: serviceList.services.filter(service => service.id !== id)
        })
    }

    const createService = () => {
        const topId = Math.max(serviceList.services.map(service => service.id))
        alert(changingService.name)
        let newService = Object.assign({}, {
            id: topId + 1,
            name: changingService.name,
            description: changingService.description,
            timeType: changingService.timeType,
            rate: changingService.rate,
            limit: changingService.limit
        })
        alert(newService.name)
        let services = serviceList.services
        services.push(newService)
        setServiceList({
            services
        })
    }

    const updateService = () => {

    }

    const showCreation = () => {
        setChangingService({
            ...changingService,
            show: '2'
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
            <Service serviceState={changingService} setService={setChangingService} cancelCreation={cancelCreation}
                     createService={createService} updateService={updateService}/>
        </div>

    )
}

export default serviceManager;
