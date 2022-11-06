import React from 'react';
import appointment from '../../images/appointment.png';
import doctor from '../../images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (

        <section className='flex justify-center items-center my-24' style={{ background: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-200px]" src={doctor} alt="" />
            </div>
            <div className='flex-1 sm:p-12'>
                <h1 className="text-xl  text-primary font-bold">Appointment</h1>
                <h1 className="text-4xl text-white">Make an appointment Today</h1>
                <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;