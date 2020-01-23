import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import NavigationHeader from './NavigationHeader';
import ContentContainer from './ContentContainer';
import ProjectDetails from './ProjectDetails';

class ContainerCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            contentShown: 'aboutMe',
            showAboutMe: true,
            showPortfolio: false,
            showProjectDetails: false
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

    clickProjectDetails = () => {
        console.log('projectDivClicked');
        this.setState({
            showProjectDetails: true
        })
    }

    closeProjectDetails = () => {
        console.log('projectDivClicked');
        this.setState({
            showProjectDetails: false
        })
    }


    render() {
        return (
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
                        contentShown={this.state.contentShown}
                        showPortfolio={this.state.showPortfolio}
                        clickPortfolioButton={this.clickPortfolioButton}
                        clickProjectDetails={this.clickProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}

                        showAboutMe={this.state.showAboutMe}

                    />
                    <ProjectDetails
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}

                    />

                </div>
            </Card>
        );
    }
}

ContainerCard.propTypes = {};

export default ContainerCard;
