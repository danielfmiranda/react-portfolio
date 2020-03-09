import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import icon from '../portfolioTestPictures/icon.png';
import '../Css/NavigationBar.css'

class NavigationBar extends Component {


    scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand={'md'} bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Daniel Miranda
                    </Navbar.Brand>





                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto hamburgerMenuDropDown">
      <Nav.Link   onClick={(e) => this.scrollToSection('#heroDiv')}>About</Nav.Link>
      <Nav.Link  onClick={(e) => this.scrollToSection('#portfolio')}>Projects</Nav.Link>
              <Nav.Link  onClick={(e) => this.scrollToSection('#contact')} >Contact</Nav.Link>



    </Nav>
                     </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

NavigationBar.propTypes = {};

export default NavigationBar;
