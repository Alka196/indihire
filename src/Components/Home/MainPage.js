import React, { useEffect, useRef } from 'react';
import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function MainPage() {
    const navigate = useNavigate();

    const gotoContact = () => {
        navigate('/contact-us');
    }

    const gotoJobs = () => {
        navigate('/navigate-to-your-next-opportunity');

    }
    const gotoexpertise = () => {
        navigate("/expertise");
    }



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const sliderImageUrl = [
        //First image url
        {
            url:
                "https://indihire.com/wp-content/uploads/2022/06/article-1.png"
        },
        {
            url:
                "https://indihire.com/wp-content/uploads/2022/04/insights-3.png"
        },
        //Second image url
        {
            url:
                "https://indihire.com/wp-content/uploads/2022/03/insights-4.png"
        },
        //Third image url
        {
            url:
                "https://indihire.com/wp-content/uploads/2022/03/insights-2.png"
        },

        //Fourth image url

        {
            url:
                "https://indihire.com/wp-content/uploads/2022/01/insights-5.png"
        }
    ];

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
                <div className='column-2-row' >
                    <h2 className='column-2-text1'>Hire the right<br></br> talent</h2>
                    <button className='btn-col2' onClick={() => gotoContact()}>Connect with us </button>
                </div>
                <div className='column-2-row'>
                    <h2 className='column-2-text2'>Make your next <br></br>career move</h2>
                    <button className='btn-col2' onClick={() => gotoJobs()}>Find Jobs </button>
                </div>
            </div>


            {/* column 3 data */}

            <div className='column-3'>
                <div className='col-3-row-1'>

                    <div className="numbers-inner-grid" >
                        <h3><span className="counter_indihire">5000</span>+</h3>
                        <p>Tech talent placed</p>
                    </div>
                    <div className="numbers-inner-grid">
                        <h3><span className="counter_indihire">7,00,000</span>+</h3>
                        <p>Internal tech talent pool</p>
                    </div>
                    <div className="numbers-inner-grid">
                        <h3><span className="counter_indihire">5</span>+</h3>
                        <p>Current RPO</p>
                    </div>
                    <div className="numbers-inner-grid">
                        <h3><span className="counter_indihire">50</span>+</h3>
                        <p>Active clients</p>
                    </div>
                    <div className="numbers-inner-grid">
                        <h3><span className="counter_indihire">100</span>+</h3>
                        <p>Our people</p>
                    </div>
                    <div className="numbers-inner-grid">
                        <h3> <ul id="list-year">
                            <li>2</li>
                            <li>0</li>
                            <li>1</li>
                            <li>1</li>
                        </ul></h3>
                        <p>Serving since</p>
                    </div>
                </div>

                <div className='col-3-row-2'>

                    <div className="text-col">
                        <h1>People. Power.<br></br> Future.</h1>
                        <p>We connect IT and digital talent with leading companies around the world. With an ever-evolving technology landscape, our team crafts agile talent solutions accelerate growth.</p>
                    </div>
                    <button className='btn-col3' onClick={() => gotoexpertise()}>Learn more </button>



                </div>

            </div>
            <div className='column-4'>

                <h1>
                    ITHire Edge</h1>
                <p>
                    A deep understanding of the tech domain,
                    combined with an extensive<br></br> talent network and agile workflow,
                    makes us the ideal tech recruiting <br></br>partner for your firm.
                    And because we have 100+ years of combined<br></br> experience working
                    with IT, tech, and digital companies, we <br></br>understand your unique
                    needs and will bring you the competitive edge<br></br> you need to
                    succeed in today’s marketplace.</p>



            </div>
            <div className='column-5'>
                <div className='text-area'>
                    <h1>Knowledge hub</h1><br></br>
                    <p>Explore research-based blog posts and articles focused on talent acquisition<br></br>
                        and recruitment in IT and digital space.</p>
                </div>
                <div className='carousel-area'>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {sliderImageUrl.map((imageUrl, index) => (
                            <div className="slider" key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
            <div className='column-6'>
                <div className='col-6-area'>
                    <div className='text-col-6'>
                        <h1>
                            Work with us
                        </h1>
                        <p>Our core values are driven by innovation, collaboration,<br></br> and diligence. Explore a variety of opportunities and <br></br>find a role that works for you.

                        </p>
                    </div>
                    <button className='btn-col-6'>Get in touch</button></div>
            </div>

        </div>
    );
}

export default MainPage;
