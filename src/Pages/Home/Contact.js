import React from 'react';
import appointment from '../../images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <div className='my-28 py-10' style={{ background: `url(${appointment})`, width: "100%" }}>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold '>Contact Us</h3>
                <p className='text-3xl text-white'>Stay connected with us</p>
            </div>
            {/* <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'> */}
            <div className='text-center justify-center'>

                <input type="text" placeholder="Email Address" className="mt-5 lg:max-w-lg  align-middle input input-bordered input-md w-full max-w-xs" /><br />
                <input type="text" placeholder="Subject" className="mt-5 lg:max-w-lg input input-bordered input-md w-full max-w-xs" /><br />

                <textarea className="my-5 lg:max-w-lg items-center  textarea textarea-primary w-full max-w-xs" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>

            </div>
        </div>

    );
};

export default Contact;