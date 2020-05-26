import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Css/NavigationBar.css'
import resume from '../portfolioTestPictures/Daniel Miranda PDF Resume.pdf';
import {Link} from "react-scroll";


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            navBarTransparent: true

        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);

    }

    expandNavBarClick = () => {
        const currentScrollPos = window.pageYOffset;

        if (this.state.expanded === false) {
            this.setState({
                expanded: true,
                navBarTransparent: false

            })
        } else {

            if (currentScrollPos > 180) {
                this.setState({
                    expanded: false,

                })
            } else {

                this.setState({
                    expanded: false,
                    navBarTransparent: true

                })

            }

        }


    };


    handleScroll = () => {

        const currentScrollPos = window.pageYOffset;
        //216
        if (currentScrollPos > 180) {
            this.setState({
                navBarTransparent: false
            });

        } else {
            this.setState({
                navBarTransparent: true
            });
        }
    };

    render() {
        return (
            <div>

                <Navbar
                    className={this.state.navBarTransparent === true ? ('navBarTransparent') : ('navBar')}
                    onScroll={(e) => this.senseScroll}
                    expanded={this.state.expanded} expand={'sm'} bg="dark" variant="dark" fixed="top">

                    <Navbar.Brand>
                        Daniel Miranda
                    </Navbar.Brand>


                    <Navbar.Toggle
                        className={'navToggle'}
                        onClick={this.expandNavBarClick}
                        aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse expanded={this.state.expanded} id="responsive-navbar-nav">
                        <Nav  className="mr-auto hamburgerMenuDropDown">


                            <Link to="#heroDiv"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={1500}
                            >

                                <Nav.Link
                                    // onClick={this.expandNavBarClick}
                                >About</Nav.Link>
                            </Link>


                            <Link to="#portfolio"
                                  spy={true}
                                  smooth={true}
                                  duration={1500}
                            >


                                <Nav.Link
                                    // onClick={this.expandNavBarClick}

                                >Projects</Nav.Link>
                            </Link>

                            <Link to="#contact"
                                  spy={true}
                                  smooth={true}
                                  duration={1500}
                            >

                                <Nav.Link
                                    // onClick={this.expandNavBarClick}

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
