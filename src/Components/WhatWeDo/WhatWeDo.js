import React from 'react';
import './WhatWeDo.scss';


function WhatWeDo() {
    return (
        <>

            <div className="main-Whatwedo">
                <div className='text-area'>
                    <h1><strong>Agile. Focused.

                    </strong>
                        <br></br><small>Innovative.</small></h1>

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
                        <h2 >We’re solution-oriented.<br /> We’re experienced. We’re <br></br>IndiHire.</h2>
                        <p>Our deep tech expertise and years of experience in the sector have <br></br>helped us build a wide network of industry professionals and craft<br></br> customized solutions to your hiring challenges.</p>
                        <div className='sections-part'>
                            <ol class="slides">
                                <li ><p>RPO</p></li>
                                <li ><p>IT &amp; Digital perm recruitment</p></li>
                                <li ><p>Diversity &amp; inclusion</p></li>
                                <li ><p>Executive search</p></li>
                                <li ><p>IT staffing</p></li>
                                <li ><p>AI enabled campus &amp; lateral hiring</p></li>
                                <li ><p>Acquihire</p></li>
                                <li ><p>Sales hiring</p></li>
                            </ol>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default WhatWeDo;