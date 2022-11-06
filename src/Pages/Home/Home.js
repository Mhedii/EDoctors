import React from 'react';
import AfterServicesBanner from './AfterServicesBanner.js';
import Banner from './Banner/Banner.js';
import Info from './Info/Info.js';
import Services from './Services.js';
import MakeAppointment from './MakeAppointment.js';
import Testimonials from './Testimonials.js';
import Contact from './Contact.js';
import Footer from '../Shared/Footer.js';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AfterServicesBanner></AfterServicesBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;