import React from 'react'

const serviceList = (props) => {
    const rows = props.services.map((service) => {
        return (<tr>
            <td>{service.name}</td>
            <td>{service.description}</td>
            <td>{service.timeType}</td>
            <td>{service.rate}</td>
            <td>{service.limit}</td>
            <td><button onClick={() => props.updateHandler(service.id)}>Update</button><button onClick={() => props.deleteHandler(service.id)}>Delete</button></td>
        </tr>)
    })

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Description</th>
                <th>Time Type</th>
                <th>Rate</th>
                <th>Limit</th>
                <th>Action</th>
            </thead>
            {rows}
        </table>
    )
}

export default serviceList
