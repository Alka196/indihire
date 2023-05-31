

import React from 'react';
import './Header.scss';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className='header fixed-top'>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/">
                        <img class="starting-logo default-logo " alt="IndiHire"
                            src="https://indihire.com/wp-content/uploads/2022/03/logo.png" />
                    </NavbarBrand>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto gap" navbar>
                            <NavItem>
                                <NavLink href="/" className="nav-link-gap"></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/what-we-do" className="nav-link-gap">What we do</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/expertise" className="nav-link-gap">Expertise</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/navigate-to-your-next-opportunity" className="nav-link-gap">FindJobs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about-us" className="nav-link-gap">Aboutus</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resources" className="nav-link-gap">Resources</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact-us" className="nav-link-gap">Contactus</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header=() =>{
//     return ( 
//         <>
//             <header>
//         <a href="#">LOGO</a>
//         <nav>
//         <ul>
//             <li><NavLink to="/"></NavLink></li>
//             <li><NavLink to="/what-we-do">What we do</NavLink></li>
//             <li><NavLink to="/expertise">Expertise</NavLink></li>
//             <li><NavLink to="/navigate-to-your-next-opportunity">FindJobs</NavLink></li>
//             <li><NavLink to="/about-us">Aboutus</NavLink></li>
//             <li><NavLink to="/resources">Resources</NavLink></li>
//             <li><NavLink to="/contact-us">Contactus</NavLink></li>

//         </ul>
//         </nav>

//         </header>
//         </>
//      );
// }

// export default Header;