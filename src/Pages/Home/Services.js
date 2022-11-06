import React from 'react';
import fluoride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            desciption: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            desciption: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            desciption: '',
            img: whitening
        },
    ];
    return (

        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {

                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;