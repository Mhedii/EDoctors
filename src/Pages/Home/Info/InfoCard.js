import React from 'react';

const InfoCard = ({ img, CardTitle, CardDetails, bgColor }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
                <figure className='pl-5'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{CardTitle}</h2>
                    <p className='text-white'>{CardDetails}.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;