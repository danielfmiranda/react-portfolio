import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import NavigationHeader from './NavigationHeader';
import ContentContainer from './ContentContainer';
import Project1Details from './ProjectDetailModals/Project1Details';
import Project2Details from './ProjectDetailModals/Project2Details';
import Project3Details from './ProjectDetailModals/Project3Details';
import Project4Details from './ProjectDetailModals/Project4Details';
import Project5Details from './ProjectDetailModals/Project5Details';
import Project6Details from './ProjectDetailModals/Project6Details';


class ContainerCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            contentShown: 'aboutMe',
            showAboutMe: true,
            showPortfolio: false,
            showProject: false,
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
                    <Project1Details
                        activeProject={this.state.activeProject}
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}
                    />
                    <Project2Details
                        activeProject={this.state.activeProject}
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}
                    />
                    <Project3Details
                        activeProject={this.state.activeProject}
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}
                    />
                    <Project4Details
                        activeProject={this.state.activeProject}
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}
                    />
                    <Project5Details
                        activeProject={this.state.activeProject}
                        showProjectDetails={this.state.showProjectDetails}
                        closeProjectDetails={this.closeProjectDetails}
                    />
                    <Project6Details
                        activeProject={this.state.activeProject}
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
