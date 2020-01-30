import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import NavigationHeader from './NavigationHeader';
import ContentContainer from './ContentContainer';
import '../Css/ContainerCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';


class ContainerCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            contentShown: 'aboutMe',
            showAboutMe: true,
            showPortfolio: false,
            showProject: false,
            overLayActive:false
        };
    }


    clickPortfolioButton = () => {
        console.log('portfolioButtonClicked');
        this.setState({
            contentShown: 'portfolio',
            showPortfolio: true,
            showAboutMe: false

        })
    }

    clickAboutMeButton = () => {
        console.log('aboutMeButtonClicked');
        this.setState({
            contentShown: 'aboutMe',
            showAboutMe: true,
            showPortfolio: false
        })
    }

    clickProjectDetails = (projectNumber) => {
        console.log(projectNumber);
        this.setState({
            activeProject: projectNumber
        })
    }

    closeProjectDetails = () => {
        console.log('projectDivClicked');
        this.setState({
            activeProject: null
        })
    }

    overLayTest = () => {
        this.setState( {
            overLayActive:true
        })
    };

    overLayClose = () => {
        this.setState( {
            overLayActive:false
        })
    };


    render() {
        return (

            <div>
            <Card className={'cardContainer'}>
                <div className={'navigationHeader'}>
                    <NavigationHeader
                        clickPortfolioButton={this.clickPortfolioButton}
                        clickAboutMeButton={this.clickAboutMeButton}
                        contentShown={this.state.contentShown}
                        showPortfolio={this.state.showPortfolio}

                        showAboutMe={this.state.showAboutMe}

                    />
                </div>
                <div className={'contentContainer'}>
                    <ContentContainer
                        overLayActive={this.state.overLayActive}
                        overLayClose={this.overLayClose}
                        overLayTest={this.overLayTest}
                        contentShown={this.state.contentShown}
                        showPortfolio={this.state.showPortfolio}
                        clickPortfolioButton={this.clickPortfolioButton}
                        clickProjectDetails={this.clickProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}

                        showAboutMe={this.state.showAboutMe}

                    />
                </div>
            </Card>
                             <div className={'socialIconButtons'}>
                            <a href={'https://github.com/manieldiranda'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faGithubSquare}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/daniel-f-miranda/'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faLinkedin}/>
                            </a>
                            <a href={'mailto:manieldiranda@gmail.com'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faEnvelopeSquare}/>
                            </a>
                        </div>

            </div>

        );
    }
}

ContainerCard.propTypes = {};

export default ContainerCard;
