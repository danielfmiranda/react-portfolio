import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Css/NavigationBar.css'
import resume from '../portfolioTestPictures/Daniel Miranda Resume.pdf';

class NavigationBar extends Component {



    scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand={'md'} bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand>
                        Daniel Miranda
                    </Navbar.Brand>





                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto hamburgerMenuDropDown">
      <Nav.Link   onClick={(e) => this.scrollToSection('#heroDiv')}>About</Nav.Link>
      <Nav.Link  onClick={(e) => this.scrollToSection('#portfolio')}>Projects</Nav.Link>
              <Nav.Link  onClick={(e) => this.scrollToSection('#contact')} >Contact</Nav.Link>
              <Nav.Link className={'resumeLink'} href = {resume} target = "_blank">Resume</Nav.Link>


    </Nav>
                     </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

NavigationBar.propTypes = {};

export default NavigationBar;
