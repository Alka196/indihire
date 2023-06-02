import React from 'react';
import './MainPage.scss';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const gotoContact = () => {
        navigate('/contact-us');
    }

    const gotoJobs = () => {
        navigate('/navigate-to-your-next-opportunity');
    }

    return (
        <div className="main-page-container">
            <div className="column-1">
                <div className="column-1-r1">
                    <h1>
                        <strong>Rapid</strong><br />
                        <strong>Tech Hiring</strong>
                    </h1><br></br>
                    <p>We are an IT, tech, and digital-focused global recruitment company.</p>
                </div>
                <div className="column-1-r2">
                    <img src="https://indihire.com/wp-content/uploads/2022/06/home-banner-2.png" alt="banner" />
                </div>
            </div>
            <div className='column-2'>
                <div className='column-2-row'>
                    <h2>Hire the right talent</h2>
                    <button className='btn-col2' onClick={() => gotoContact()}>Connect with us </button>
                </div>
                <div className='column-2-row'>
                    <h2>Make your next career move</h2>
                    <button className='btn-col2' onClick={() => gotoJobs()}>Find Jobs </button>
                </div>
            </div>
            <div className='column-3'>
                {/* <div className='column3-r1'>
                    <div class="numbers-grid">
                        <div class="grid">
                            <h3><span class="counter">5000</span>+</h3>
                            <p>Tech talent placed</p>
                        </div>
                        <div class="grid">
                            <h3><span class="counter">7,00,000</span>+</h3>
                            <p>Internal tech talent pool</p>
                        </div>
                        <div class="grid">
                            <h3><span class="counter">5</span>+</h3>
                            <p>Current RPO</p>
                        </div>
                        <div class="grid">
                            <h3><span class="counter">50</span>+</h3>
                            <p>Active clients</p>
                        </div>
                        <div class="grid">
                            <h3><span class="counter">100</span>+</h3>
                            <p>Our people</p>
                        </div>
                        <div class="grid">
                            <h3> <ul id="list-year">
                                <li>2</li>
                                <li>0</li>
                                <li>1</li>
                                <li>1</li>
                            </ul></h3>
                            <p>Serving since</p>
                        </div>
                    </div>
                </div>
                <div className='column3-r2'>
                <h2 class="black-text">People. Power. Future.</h2>
                <p>We connect IT and digital talent with leading companies<br/> around the world.
                     With an ever-evolving technology<br/> landscape, our team crafts agile talent solutions <br/>accelerate growth.</p>
                     <button className='column-3-btn'>Learn more</button>
                </div> */}



            </div>
            <div className='column-4'><h1> </h1></div>
            <div className='column-5'><h1> </h1></div>
            <div className='column-6'><h1> </h1></div>
            <div className='column-7'><h1> </h1></div>


        </div>
    );
}

export default MainPage;
