import React, { useState } from 'react';
import './WhatWeDo.scss';
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';


function WhatWeDo() {

    const [selectedSlide, setSelectedSlide] = useState(0);

    const handleSlideClick = (index) => {
        setSelectedSlide(index);
    };

    const slideInfo = [
        {
            title: 'RPO',
            description: `We work with your company to find the best total recruitment outsourcing <br>for you, whether you are scaling up or starting to build afresh. If it’s off-site, <br>on-site, or a combination of the two, an entire or partial RPO project, we act<br> as an extension of your TA department and assist in meeting recruiting <br>goals in the most efficient and effective way possible. <br><br>
           We believe that no two companies are the same – your business is unique.<br> To meet this need, we develop custom RPOs for each of our customers.`,
        },
        {
            title: 'IT & Digital perm recruitment',
            description: 'We provide permanent hiring services to companies in the tech, IT, and <br>digital space. Our consultants have over a decade of experience in the<br> industry, which means we know exactly what kind of talent is required for <br>the long term. ',

        },
        {
            title: 'Diversity & inclusion',
            description: `We believe that all employees deserve equal opportunities, regardless of <br>their skin color, gender, language, age, sexual orientation and so on. We <br>have worked hard to build a more inclusive environment at our workplace.<br> And we are here to help you do the same. We offer solutions that will <br>empower your organization to:
            <br><br><ul>
              <li>Ensure equal opportunity for minorities – be it gender, ethnicity,<br> language, religion, and so on</li>
              <li>Rethink the hiring process and make it more inclusive</li>
              <li>Hire qualified women for leadership roles</li>
              <li>Provide hiring opportunity and employment support for the disabled,<br> LGBT community, and veterans</li>
            </ul>`,
        },
        {
            title: 'Executive search',
            description: 'Finding the right leader for your company is mission-critical. Our <br>headhunters have an elaborate track record of fulfilling numerous CxO <br>searches. We specialize in bringing executives with the skills and leadership<br> required to fit into your ecosystem and propel the organization forward.<br><br><p>Visit <u><b><a href="https://scalerconsulting.com/" target="_blank" >Scaler Consulting</a></b></u> to know more.</p>',
        },
        {
            title: 'IT staffing',
            description: 'We offer comprehensive IT staffing solutions so you don’t have to worry <br> about finding IT & Tech talent who would work for short to long duration<br>  projects while we manage their payroll, paperwork, or other HR activities. <br> We allow you to scale as needed by supplying you with skilled IT, Digital & tech professionals while keeping costs low and allowing flexibility in delivery <br>models.<br><br><p>Visit <u><b><a href="https://techwisedigital.com/" target="_blank" >TechWise Digital</a></b></u> to know more.</p>',
        },
        {
            title: 'AI enabled campus & lateral hiring',
            description: 'We are focused on leveraging the power of AI and automation for efficiently <br> managing the hiring life cycle. Our scientifically designed hiring tool – <br> search buddy – leverages the power of tech to process candidate selection<br>  at scale.',
        },

        {
            title: 'Acquihire',
            description: `In recent years, acquihiring is a popular strategy for tech companies to<br>  acquire talented employees through the acquisition of an entire company.<br> It is an effective way to gain experienced workers and their expertise, as well <br> as bring a cohesive team into your company all at once. While it can be <br> complicated, there are ways to make it smoother. Our team has experience <br> dealing with the issues that come up in acquihires, both for the employees<br>  and for the new managers.'<br><br>
            Our strategies are based on our long-standing belief that emotional<br>  support, along with other due diligence, is crucial to making an acquihire <br> successful. We collaborate with you through the process, from beginning to<br>  end, to make sure that everyone is satisfied during the transition.`,
        },
        {
            title: 'Sales hiring',
            description: 'Sales hiring made easy. We launched “sales only” hiring platform and are<br> currently supporting via headhunting, offline, RPO &amp; Online platform.<br> Properly assessed & soft skills evaluated candidates in quick time and <br>comparatively lesser costs. We utilise Technology to provide Ready to Hire <br>SALES Candidates.',
        }

    ];

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
        <>

            <div className="main-Whatwedo">
                <div className='text-area'>
                    <h1>
                        <strong>Agile. Focused. </strong>
                        <br></br>
                        <small>Innovative.</small>
                    </h1>

                    <span >We offer rapid technical recruiting services that enable IT, <br></br>
                        tech, and digital companies find the right people, fast</span>
                </div>
                <div className='btn-divs'>
                    <ul>
                        <li> <button>Our solutions</button></li>
                        <li> <button>Our hiring process</button></li>
                        <li>  <button>Our existing customers</button></li>
                        <li>  <button>Knowledge hub</button></li>
                    </ul>
                </div>
                <div className='solutions-col'>
                    <div className='solution-img'>
                        <img src='https://indihire.com/wp-content/uploads/2022/06/what-we-do-2nd-section.png'
                            alt="solution-image" />
                    </div>
                    <div className='solution-text'>
                        <h2 >We’re solution-oriented.<br /> We’re experienced. We’re <br></br>ITHire.</h2>
                        <p>Our deep tech expertise and years of experience in the sector have <br></br>helped us build a wide network of industry professionals and craft<br></br> customized solutions to your hiring challenges.</p>
                        <div className='sections-part'>
                            <ol className="slides">
                                {slideInfo.map((slide, index) => (
                                    <li
                                        key={index}
                                        className={selectedSlide === index ? 'active ' : ''}
                                        onClick={() => handleSlideClick(index)}
                                    >
                                        <p>{slide.title}</p>
                                    </li>
                                ))}
                            </ol>

                        </div>
                        {selectedSlide !== null && (
                            <div className="slide-info">
                                <h3>{slideInfo[selectedSlide].title}</h3><br></br>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: slideInfo[selectedSlide].description,
                                        // By using dangerouslySetInnerHTML and passing slide.description as the __html property, the HTML tags within the description string will be rendered correctly. 
                                    }}
                                />
                            </div>
                        )}


                    </div>

                </div>
                <div className='hiring-col'>
                    <div className='hiring-col-r1'>
                        <h1>Our hiring process</h1>
                        <p>
                            Our hiring process
                            At ITHire, we are committed to providing our clients with <br></br>
                            the best qualified candidates for their open positions. Our<br></br>
                            solutions are customized to meet your unique needs, and<br></br>
                            are discreet and highly intuitive so that you get people<br></br>
                            who are best-suited to help you achieve your <br></br>
                            organizational goals.</p>
                    </div>
                    <div className='hiring-col-r2'>
                        <p><span><h1>01</h1></span>
                            We start by identifying your specific requirements for a job <br></br>
                            and establishing common goals for recruitment.</p>
                        <hr></hr>
                        <p><span><h1>02</h1></span>
                            The selection process involves a comprehensive analysis of <br></br>
                            candidates, starting from tangible attributes such as<br></br>
                            subject knowledge, education, and experience to intangible<br></br>
                            traits such as aptitude, emotional intelligence, and<br></br>
                            organizational fit.</p>
                    </div>
                </div>
                <div className='existing-cus-col'>
                    <div className='existing-cus-col-r1'>
                        <h1>Our existing customers</h1>
                        <p>It is not just people but the right people that maketh a company! We help you find the right<br></br>
                            people who can help you on your path to success.</p>
                        <p>The recruiting process is challenging and time-consuming. We provide our clients with a fully-<br></br>
                            managed service that reduces the time they spend on candidate search and selection. Our<br></br>
                            solutions allow you to focus on core business activities while we enable you to make the right <br></br>
                            hiring decisions.

                        </p>

                    </div>
                    <div className="carousel-wrapper">
                        <Carousel showThumbs={false} className="responsive-carousel" autoPlay={true} interval={3000}>
                          
                                <img src="https://indihire.com/wp-content/uploads/2022/07/14-1.png" alt="Image 1" className="carousel-image"/>
                               
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/05/2.png" alt="Image 2" className="carousel-image"/>
                                
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/05/1.png" alt="Image 3" className="carousel-image"/>
                                
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/05/3.png" alt="Image 1" className="carousel-image"/>
                               
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/05/4.png" alt="Image 2" className="carousel-image"/>
                          
                                <img src=" https://indihire.com/wp-content/uploads/2022/05/6.png" alt="Image 3" className="carousel-image" />
                                
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/05/7.png" alt="Image 1" className="carousel-image"/>
                           
                                <img src=" https://indihire.com/wp-content/uploads/2022/05/8.png" alt="Image 2" className="carousel-image"/>
                          
                                <img src="https://indihire.com/wp-content/uploads/2022/05/9.png " alt="Image 3" className="carousel-image"/>
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/05/10.png " alt="Image 1" className="carousel-image"/>
                          
                                <img src="https://indihire.com/wp-content/uploads/2022/07/18.png " alt="Image 2" className="carousel-image"/>
                        
                                <img src="https://indihire.com/wp-content/uploads/2022/07/19.png" alt="Image 3" className="carousel-image" />
                          
                                <img src="https://indihire.com/wp-content/uploads/2022/07/16.png" alt="Image 1" className="carousel-image"/>
                        
                                <img src="https://indihire.com/wp-content/uploads/2022/07/17.png" alt="Image 2" className="carousel-image"/>
                          
                                <img src="https://indihire.com/wp-content/uploads/2022/07/12-1.png" alt="Image 3" className="carousel-image"/>
                         
                                <img src="https://indihire.com/wp-content/uploads/2022/07/14-1.png" alt="Image 1" className="carousel-image"/>
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/07/13-1.png" alt="Image 2" className="carousel-image"/>
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/07/15.png" alt="Image 3" className="carousel-image"/>
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/07/11-1.png " alt="Image 1" className="carousel-image"/>
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/07/13-1.png" alt="Image 2" className="carousel-image"/>
                            
                                <img src="https://indihire.com/wp-content/uploads/2022/07/15.png" alt="Image 3"className="carousel-image" />
                           
                                <img src="https://indihire.com/wp-content/uploads/2022/07/11-1.png " alt="Image 3" className="carousel-image"/>
                             
                                <img src="https://indihire.com/wp-content/uploads/2022/07/20.png" alt="Image 3" className="carousel-image"/>
                          
                        </Carousel>

                    </div>
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
                        interval={3000}
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
                </div>
            </>
            );
}

            export default WhatWeDo;




