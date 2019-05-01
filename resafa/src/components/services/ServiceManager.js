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
        cancelCreation()
    }

    const createService = () => {
        const topId = Math.max(...serviceList.services.map(service => service.id))
        let newService = {...changingService, id: topId + 1}
        delete newService.show
        let services = [...serviceList.services, newService]
        setServiceList({
            services
        })
        cancelCreation()
    }

    const updateService = () => {
        let updateService = {...changingService}
        delete updateService.show
        let services = [...serviceList.services]
        const updateIndex = services.findIndex(s => s.id === changingService.id)
        services.splice(updateIndex, 1, updateService)

        setServiceList({
            services: services
        })
        cancelCreation()
    }

    const showCreation = () => {
        setChangingService({
            id: '',
            name: '',
            description: '',
            timeType: '',
            rate: '',
            limit: '',
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
            show: '1'
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
