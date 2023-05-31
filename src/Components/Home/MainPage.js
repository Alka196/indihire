import React from 'react';
import './MainPage.scss';
import { useNavigate } from 'react-router-dom';

function MainPage() {
const navigate= useNavigate();

const gotoContact=()=>{
    navigate('/contact-us');
}

const gotoJobs =()=>{
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
                <div className='column-2-r1'>
                    <h2>Hire the right talent</h2>
                    <button className='btn-col2' onClick={()=>gotoContact()}>Connect with us </button>
                </div>
                <div className='column-2-r2'>
                    <h2>Make your next career move</h2>
                    <button className='btn-col2'onClick={()=>gotoJobs()}>Find Jobs </button>
                </div>
                </div>
                <div className='column-3'><h1> columnumn</h1></div>
                <div className='column-4'><h1> columnumn</h1></div>
                <div className='column-5'><h1> columnumn</h1></div>
                <div className='column-6'><h1> columnumn</h1></div>
                <div className='column-7'><h1> columnumn</h1></div>


            </div>
            );
}

            export default MainPage;
