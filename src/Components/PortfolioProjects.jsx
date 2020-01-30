import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/PortfolioProjects.css'
import Card from 'react-bootstrap/Card'
import project1 from '../portfolioTestPictures/lombard.jpg'


class PortfolioProjects extends Component {
    render() {
        return (
            <div
                className={'portfolioProjectsContainer' + ' ' + `${this.props.showPortfolio ? ('portfolioActive') : ('portfolioInactive')}`}>
                <div className={'portfolioRow'}>
                    {/*      <div className={'col-4 red '}>*/}
                    {/*            <Card onClick={() => this.props.clickProjectDetails(1)} className={'projectCell project1'}>*/}
                    {/*                <div className={'text'}>*/}
                    {/*              <h1 className={'projectTitle'}> Project 1 </h1>*/}
                    {/*                </div>*/}
                    {/*          </Card>*/}
                    {/*      </div>*/}
                    {/*      <div className={'col-4 yellow '}>*/}
                    {/*<Card onClick={() => this.props.clickProjectDetails(2)}*/}
                    {/*    className={'projectCell project2 '}>*/}
                    {/*                <div className={'text'}>*/}
                    {/*              <h1 className={'projectTitle'}> Project 2 </h1>*/}
                    {/*                </div>*/}
                    {/*          </Card>*/}
                    {/*      </div>*/}
                    <div className={'col-6 green '}>
                        <Card
                            onClick={this.props.overLayTest}
                            // onClick={() => this.props.clickProjectDetails(3)}
                            className={'projectCell project3'}>
                            <div className={'text'}>
                                <h1 className={'projectTitle'}> Refillr </h1>
                            </div>
                        </Card>
                    </div>
                    <div className={'col-6 red '}>
                        <Card
                            onClick={this.props.overLayTest}
                            className={'projectCell project4'}>
                            <div className={'text'}>
                                <h1 className={'projectTitle'}> Timely </h1>
                            </div>
                        </Card>
                    </div>

                </div>
                <div className={'portfolioRow'}>

                    <div className={'col-6 yellow '}>
                        <Card
                            onClick={this.props.overLayTest}
                            className={'projectCell project5'}>
                            <div className={'text'}>
                                <h1 className={'projectTitle'}> Greendly </h1>
                            </div>
                        </Card>
                    </div>
                    <div className={'col-6 green '}>
                        <Card
                            onClick={this.props.overLayTest}
                            className={'projectCell project6'}>
                            <div className={'text'}>
                                <h1 className={'projectTitle'}> SocialCompile </h1>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        );
    }
}

PortfolioProjects.propTypes = {};

export default PortfolioProjects;
