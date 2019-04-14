import React from 'react'

const serviceList = (props) => {
    const rows = props.services.map((service) => {
        return (<tr>
            <td>service.name</td>
            <td>service.description</td>
            <td>service.timeType</td>
            <td>service.rate</td>
            <td>service.limit</td>
        </tr>)
    })

    return (
        <table>
            {rows}
        </table>
    )
}

export default serviceList
