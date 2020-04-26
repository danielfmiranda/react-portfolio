import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Css/NavigationBar.css'
import resume from '../portfolioTestPictures/Daniel Miranda Resume.pdf';
import {Link, animateScroll as scroll} from "react-scroll";


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false

        };
    }

    expandNavBarClick = () => {
        if (this.state.expanded === false) {
            this.setState({
                expanded: true
            })
        } else {
            this.setState({
                expanded: false
            })
        }


    }

    scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


    render() {
        return (
            <div>
                <Navbar
                    expand={'md'} bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand>
                        Daniel Miranda
                    </Navbar.Brand>


                    <Navbar.Toggle
                        onClick={this.expandNavBarClick}
                        aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse collapseOnSelect={true} id="responsive-navbar-nav">
                        <Nav collapseOnSelect className="mr-auto hamburgerMenuDropDown">


                            <Link to="#heroDiv"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={1500}
                            >

                                <Nav.Link
                                    onClick={this.expandNavBarClick}
                                >About</Nav.Link>
                            </Link>


                            <Link to="#portfolio"
                                  spy={true}
                                  smooth={true}
                                  duration={1500}
                            >


                                <Nav.Link
                                    onClick={this.expandNavBarClick}

                                >Projects</Nav.Link>
                            </Link>

                            <Link to="#contact"
                                  spy={true}
                                  smooth={true}
                                  duration={1500}
                            >

                                <Nav.Link
                                    onClick={this.expandNavBarClick}

                                >Contact</Nav.Link>
                            </Link>
                            <Nav.Link className={'resumeLink'} href={resume} target="_blank">Resume</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

NavigationBar.propTypes = {};

export default NavigationBar;
