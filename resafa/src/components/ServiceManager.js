import React from 'react'
import service from './Service'

const serviceManager =  () => {
    return (
        <service name='Massage' description='Massage'
            time_type='60, 90' rate='2.30' limit='Unlimited'></service>
    );
}

export default serviceManager;
