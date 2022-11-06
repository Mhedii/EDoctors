import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard CardDetails="Starts from 9am to 5pm" bgColor="bg-gradient-to-r from-secondary to-primary" CardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard CardDetails="Basundhara Dhaka" bgColor="bg-accent" CardTitle="Our Locations" img={marker}></InfoCard>
            <InfoCard CardDetails="+8801788009922" bgColor="bg-gradient-to-r from-secondary to-primary" CardTitle="Contact Us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;