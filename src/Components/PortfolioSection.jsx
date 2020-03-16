import React, {Component} from 'react';
import '../Css/PortfolioSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolioImage2 from '../portfolioTestPictures/timelyDesktop.png';
import refillrImage from '../portfolioTestPictures/refillrDesktop.PNG';
import greendlyImage from '../portfolioTestPictures/greendlyDesktop.PNG';
import socialCompileImage from '../portfolioTestPictures/socialCompileDesktop.png';



class PortfolioSection extends Component {
    render() {
        return (
            <div className={'portfolioContainer'} id={'#portfolio'}>
                <div className={'portfolioContent'}>
                    <h1 className={'portfolioHeading'}> PORTFOLIO </h1>
                    <div className={'portfolioDivider'}/>

                    <Container className={'portfolioPhotoContainer'}>
                        <Row>


                            <Col lg={6} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container" onClick={() => this.props.showProjectModal(2)}>
                                        <img src={refillrImage} alt="" className="image"/>
                                    </div>
                                </div>
                                    <h5> Refillr </h5>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container" onClick={() => this.props.showProjectModal(1)}>
                                        <img src={portfolioImage2} alt="" className="image"/>
                                    </div>
                                </div>
                                                                    <h5> Timely </h5>

                            </Col>

                            <Col lg={6} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container" onClick={() => this.props.showProjectModal(3)}>
                                        <img src={greendlyImage} alt="" className="image"/>
                                    </div>
                                </div>
                                    <h5> Greendly </h5>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container" onClick={() => this.props.showProjectModal(4)}>
                                        <img src={socialCompileImage} alt="" className="image"/>
                                    </div>
                                </div>
                                    <h5> SocialCompile </h5>

                            </Col>
                            {/*<Col lg={4} md={6}>*/}
                            {/*    <div className={'responsiveColumn'}>*/}
                            {/*        <div className="container">*/}
                            {/*            <img src={portfolioImage2} alt="" className="image"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*</Col>*/}
                            {/*<Col lg={4} md={6}>*/}
                            {/*    <div className={'responsiveColumn'}>*/}
                            {/*        <div className="container">*/}
                            {/*            <img src={portfolioImage2} alt="" className="image"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*</Col>*/}


                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

PortfolioSection.propTypes = {};

export default PortfolioSection;
