import React from 'react';
import quote from '../../icons/quote.svg';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: '',
            location: "Califonrnia",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: '',
            location: "Califonrnia",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: '',
            location: "Califonrnia",
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h4 className="text-3xl ">What Our Patients Says</h4>
                </div>
                <div>
                    <img className='sm:w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;