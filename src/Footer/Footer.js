import React from 'react';
import './Footer.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='Img-col'>
                <img                    
                    src="https://ph-files.imgix.net/5956776e-e3b3-4e2d-98af-f328afda46a1.png?auto=format"
                     alt="INDIHIRE" />

            </div>
            <div className='overview-col'>
                <h4>Overview</h4><br/>
                <ul id="menu-overview-1" class="menu">
                    <li ><a href="/what-we-do/">What we do</a></li>
                    <li ><a href="/expertise/">Expertise</a></li>
                    <li ><a href="/navigate-to-your-next-opportunity/">Find jobs</a></li>
                    <li ><a href="/about-us/">About us</a></li>
                    <li ><a href="/resources/">Resources</a></li>
                    <li ><a href="/contact-us/">Contact us</a></li>
                </ul>

            </div>
            <div className='customer-service-col'>
                <h4>Customer Service</h4><br/>
                <ul >
                    <li ><a href="/contact-us/">Contact Info</a></li>
                    <li ><a href="/cookie-policy/">Cookie Policy</a></li>
                    <li ><a href="/privacy-policy/">Privacy &amp; GDPR Policy</a></li>
                    <li ><a href="/contact-us/">Help</a></li>
                </ul>

            </div>
            <div className='connect-with-us-col'>
                <h4>Connect with us</h4><br/>
                <div class="social-media">
                    <a href="https://www.facebook.com/IndiHire-142382892498277/" class="social-icon" target="_blank"><SocialIcon url="https://facebook.com" /></a><br />
                    <a href="https://www.instagram.com/indihire_rapid_tech_hiring/?igshid=YmMyMTA2M2Y=" class="social-icon"  target="_blank"><SocialIcon url="https://instagram.com" /></a><br />
                    <a href="https://twitter.com/indihire?lang=en" class="social-icon"  target="_blank"><SocialIcon url="https://twitter.com" /></a><br />
                    <a href="https://in.linkedin.com/company/indihire" class="social-icon" target="_blank"><SocialIcon url="https://linkedin.com" /></a><br />
                    <a href="https://www.youtube.com/channel/UCynFn8U3nLCT3L-p9l95KJg" class="social-icon" target="_blank"><SocialIcon url="https://youtube.com" /></a>
                </div><br/>
                <div >
                    <h6>We are D&amp;B verified</h6>
                    <img src="https://www.oneproavl.com/wp-content/uploads/2015/09/db-verified-logo.png" alt="D&B"/>
                </div>


            </div>
        </div>
    );
}

export default Footer;