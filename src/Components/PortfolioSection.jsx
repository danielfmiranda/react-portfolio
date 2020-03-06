import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/PortfolioSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolioImage2 from '../portfolioTestPictures/timelyCover.jpeg';
import refillrImage from '../portfolioTestPictures/refillrTestPhoto.png';
import greendlyImage from '../portfolioTestPictures/greendly.png';
import socialCompileImage from '../portfolioTestPictures/socialCompile.png';


class PortfolioSection extends Component {
    render() {
        return (
            <div className={'portfolioContainer'} id={'#portfolio'}>
                <div className={'portfolioContent'}>
                    <h1 className={'portfolioHeading'}> MY RECENT WORK </h1>
                    <div className={'divider'}/>
                    <Container>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container">
                                        <img src={portfolioImage2} alt="" className="image"/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container">
                                        <img src={refillrImage} alt="" className="image"/>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container">
                                        <img src={greendlyImage} alt="" className="image"/>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4} md={6}>
                                <div className={'responsiveColumn'}>
                                    <div className="container">
                                        <img src={socialCompileImage} alt="" className="image"/>
                                    </div>
                                </div>

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
