import React from 'react';
import './Main.css';
import * as Icon from 'react-bootstrap-icons';

import mainpic from '../assets/illustration-intro.png';
import firsticon from '../assets/icon-access-anywhere.svg';
import secondicon from '../assets/icon-security.svg';
import thirdicon from '../assets/icon-collaboration.svg';
import fourticon from '../assets/icon-any-file.svg';
import mainpic2 from '../assets/illustration-stay-productive.png';
import profilepic1 from '../assets/profile-1.jpg';
import profilepic2 from '../assets/profile-2.jpg';
import profilepic3 from '../assets/profile-3.jpg';
import quote from '../assets/bg-quotes.png';


function Main() {
  return (
    <div>
          <main>
              <section className="my-image">
                <section className="intro">
                 <div className="intro-img"> <img src={mainpic} alt="illustration-intro" /></div>
                    <div className="intro-content">
                    <h1> All your files in one secure location,<br /> accessible anywhere.</h1>
                    <p >Fylo stores all your most important files in one secure location.<br /> Access them wherever you need, share and collaborate with<br /> friends family, and co-workers.
                    </p>
                    <button className="btn mt-2"> Get Started</button></div>
                </section>
              </section>
            <section className="features">
            <div className="features-item">
                <div className="features-item-head"> <img src={firsticon} alt="icon-access-anywhere" /> </div>
                <div className="features-item-body  mt-2">
                <h3>Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer<br /> to access your account means your files follow you<br/> everywhere.</p>
                </div>
            </div>
            <div className="features-item">
                <div className="features-item-head"> <img src={secondicon} alt="icon-security" /> </div>
                <div className="features-item-body mt-2">
                <h3> Security you can trust</h3>
                <p> 2-factor authentication and user-controlled encryption are<br/> just a couple of the security features we allow to help<br/> secure your files.</p>
                </div>
            </div>
            <div className="features-item">
                <div className="features-item-head"> <img src={thirdicon} alt="icon-collaboration" /> </div>
                <div className="features-item-body  mt-2">
                <h3> Real-time collaboration</h3>
                <p> Securely share files and folders with friends, family and<br/> colleagues for live collaboration. No email attachments<br/> required.</p>
                </div>
            </div>
            <div className="features-item">
                <div className="features-item-head"> <img src={fourticon} alt="icon-any-file" /> </div>
                <div className="features-item-body  mt-2">
                <h3> Store any type of file</h3>
                <p> Whether you're sharing holidays photos or work<br/> documents, Fylo has you covered allowing for all file<br/> types to be securely stored and shared.</p>
                </div>
            </div>
            </section>
            <section className="productive">
            <div className="productive-img"> <img src={mainpic2} alt="illustration-stay-productive" /> </div>
            <div className="productive-content">
                <h2>Stay productive,<br/> wherever you are</h2>
                <p className="lg-p"> Never let location be an issue when accessing your files. Fylo has you<br/> covered for all of your file storage needs. </p>
                <p className="lg-p"> Securely share files and folders with friends, family and colleagues for live<br/> collaboration. No email attachments required.
                </p>
                <p className="lg-p"> <a className="content-link" href="#">See how Fylo works &nbsp;  <Icon.ArrowRightCircleFill /></a> </p>
            </div>
              </section>

              <div className="quotes"><img className="quotes" src={quote} alt="bg-quotes" /></div>
              <section className="testimonial">
                <div className="testimonial-item">
                    <div className="testimonial-item-text">
                    <p>Fylo has improved our team productivity by<br/> an order of magnitude. Since making the<br/> switch our team has become a well-oiled<br/> collaboration machine.</p>
                    </div>
                    <div className="testimonial-item-reviewer">
                    <div className="testimonial-item-reviewer-img"> <img src={ profilepic1 } alt /></div>
                    <div className="mil-1 testimonial-item-reviewer-text">
                        <h4>Satish Patel</h4>
                        <sup>Founder &amp; CEO, Huddle</sup>
                    </div>
                    </div>
                </div>
            <div className="testimonial-item">
                <div className="testimonial-item-text">
                <p>Fylo has improved our team productivity by<br/> an order of magnitude. Since making the<br/> switch our team has become a well-oiled<br/> collaboration machine.</p>
                </div>
                <div className="testimonial-item-reviewer">
                <div className="testimonial-item-reviewer-img"> <img src={ profilepic2 } /></div>
                <div className="mil-1 testimonial-item-reviewer-text">
                    <h4> Bruce McKenzie </h4>
                    <sup>Founder &amp; CEO, Huddle</sup>
                </div>
                </div>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-item-text">
                <p> Fylo has improved our team productivity by<br/> an order of magnitude. Since making the<br/> switch our team has become a well-oiled<br/> collaboration machine.</p>
                </div>
                <div className="testimonial-item-reviewer">
                <div className="testimonial-item-reviewer-img"> <img src={ profilepic3 } alt /></div>
                <div className="mil-1 testimonial-item-reviewer-text">
                    <h4> Iva Boyd </h4>
                    <sup>Founder &amp; CEO, Huddle</sup>
                </div>
                </div>
            </div>
            </section>
            <section className="cta">
            <div className="cta-item">
                <div className="cta-text">
                <h2>Get early access today </h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any<br /> questions, our support team would be happy to help you.</p>
                </div>
                <form className="cta-form mt-2" action>
                <input className="input-block" type="text" placeholder="email@example.com" /> <button className="btn-block">Get Started For Free</button> </form>
            </div>
            </section>
        </main>
    </div>
  )
}

export default Main
