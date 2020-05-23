import React, {Component} from 'react';
import '../Css/PortfolioSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolioImage2 from '../portfolioTestPictures/timelyDesktop2.PNG';
import refillrImage from '../portfolioTestPictures/refillrDesktop.PNG';
import greendlyImage from '../portfolioTestPictures/greendlyDesktop.PNG';
import socialCompileImage from '../portfolioTestPictures/socialCompileDesktop.png';
import loteriaImage from '../portfolioTestPictures/loteriaDesktop.PNG';
import socialMediaDashboardImage from '../portfolioTestPictures/socialMediaDashboard.PNG';
import fyloImage from '../portfolioTestPictures/fyloDesktop.png';
import Fade from 'react-reveal/Fade';


class PortfolioSection extends Component {
    render() {
        return (
            <div className={'portfolioContainer'} id={'#portfolio'}>
                <div className={'portfolioContent'}>
                    <h1 className={'portfolioHeading'}> My recent work </h1>
                    <div className={'portfolioDivider'}/>

                    <Container className={'portfolioPhotoContainer'}>
                        <Row>
                            <Col lg={4} md={6}>

                                <Fade className={'contactFormFadeContainer'} bottom>

                                    <div>

                                        <div className={'responsiveColumn'}>

                                            <div className="container" onClick={() => this.props.showProjectModal(5)}>
                                                <img src={loteriaImage} alt="" className="image"/>
                                            </div>
                                        </div>

                                        <h5> Loteria </h5>
                                    </div>
                                </Fade>
                            </Col>


                            <Col lg={4} md={6}>
                                <Fade className={'contactFormFadeContainer'} bottom delay={200}>

                                    <div>
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(2)}>
                                                <img src={refillrImage} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> Refillr </h5>
                                    </div>
                                </Fade>
                            </Col>

                            <Col lg={4} md={6}>

                                <Fade className={'contactFormFadeContainer'} bottom delay={200}>

                                    <div>
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(1)}>
                                                <img src={portfolioImage2} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> Timely </h5>

                                    </div>
                                </Fade>
                            </Col>

                            <Col lg={4} md={6}>
                                <Fade className={'contactFormFadeContainer'} bottom >

                                    <div>
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(6)}>
                                                <img src={socialMediaDashboardImage} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> Social Media Dashboard </h5>
                                    </div>
                                </Fade>
                            </Col>


                            <Col lg={4} md={6}>
                                <Fade className={'contactFormFadeContainer'} bottom delay={100}>

                                    <div>
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(7)}>
                                                <img src={fyloImage} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> Fylo Landing Page </h5>

                                    </div>
                                </Fade>
                            </Col>




                            <Col lg={4} md={6}>
                                <Fade className={'contactFormFadeContainer'} bottom delay={200}>

                                    <div>
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(3)}>
                                                <img src={greendlyImage} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> Greendly </h5>
                                    </div>
                                </Fade>
                            </Col>

                            <Col lg={4} md={3}>

                            </Col>
                             <Col lg={4} md={6}>
                                <Fade className={'contactFormFadeContainer'} bottom>

                                    <div >
                                        <div className={'responsiveColumn'}>
                                            <div className="container" onClick={() => this.props.showProjectModal(4)}>
                                                <img src={socialCompileImage} alt="" className="image"/>
                                            </div>
                                        </div>
                                        <h5> SocialCompile </h5>
                                    </div>
                                </Fade>
                            </Col>


                            <Col lg={4} md={3}>

                            </Col>

                        </Row>
                    </Container >
                </div>
            </div>
        )
            ;
    }
}

PortfolioSection.propTypes = {};

export default PortfolioSection;
