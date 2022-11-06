import React from 'react';
import footer from '../../images/footer.png';
const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div>
            <footer style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
                className="footer p-10 justify-between bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href=" ">Emergency Checkup</a>
                    <a className="link link-hover" href=" ">Monthly Checkup</a>
                    <a className="link link-hover" href=" ">Weekly Checkup</a>
                    <a className="link link-hover" href=" ">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover" href=" ">Fluoride Treatment</a>
                    <a className="link link-hover" href=" ">Cavity Filling</a>
                    <a className="link link-hover" href=" ">Teeth Whitening</a>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href=" ">Terms of use</a>
                    <a className="link link-hover" href=" ">Privacy policy</a>
                    <a className="link link-hover" href=" ">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">OUR LOCATION</span>
                    <a className="link link-hover" href=" ">Basundhara Dhaka</a>

                </div>
            </footer>

            <div className='my-10 text-center'>

                <p>Copyright © {year} - All right reserved </p>
            </div>
        </div>
    );
};

export default Footer;