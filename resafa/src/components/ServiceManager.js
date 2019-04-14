import React from 'react'
import Service from './Service'

const serviceManager =  () => {
    return (
        <Service name='Massage' description='Massage'
            timeType='60, 90' rate='2.30' limit='Unlimited' />
    );
}

export default serviceManager;
