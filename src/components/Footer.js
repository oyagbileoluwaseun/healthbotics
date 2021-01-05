import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

import logo from '../assets/logo.svg';
import location from '../assets/icon-location.svg';
import phone from '../assets/icon-phone.svg';
import email from '../assets/icon-email.svg';

function Footer() {
  return (
    <div>
       <footer>
            <section className="contact-info">
            <div className="contact-info-logo"> <img src={ logo } alt /> </div>
            <div className="contact-info-location">
                <div className="contact-info-location-item">
                <img className="img-footer" src={ location } alt="icon-location" />
                <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div className="contact-info-contacts">
                <div className="contact-info-contacts-item">
                <img className="img-footer" src={ phone } alt="icon-phone" />
                <p>+1-543-123-4567</p>
                </div>
                <div className="contact-info-contacts-item ">
                <img className="img-footer" src={ email } alt="icon-email" />
                <p>example@fylo.com</p>
                </div>
            </div>
            <nav className="contact-info-links">
                <div className="contact-info-links-list">
                <h5> <a href="#">About Us</a> </h5>
                <h5> <a href="#">Jobs</a> </h5>
                <h5> <a href="#">Press</a> </h5>
                <h5> <a href="#">Blog</a> </h5>
                </div>
                <div className="contact-info-links-list">
                <h5> <a href="#">Contact Us</a> </h5>
                <h5> <a href="#">Terms</a> </h5>
                <h5> <a href="#">Privacy</a> </h5>
                </div>
            </nav>
            <div className="contact-info-social-links">
                <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <FacebookIcon /></div>
                </a>
                <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <Twitter/></div>
                </a>
                <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <Instagram /> </div>
                </a>
            </div>
            </section>
        </footer>
    </div>
  );
}

export default Footer;
