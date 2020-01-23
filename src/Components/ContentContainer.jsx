import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ContentContainer.css';
import PortfolioProjects from "./PortfolioProjects";
import AboutMeSection from "./AboutMeSection";
import NavigationHeader from "./NavigationHeader";
import ProjectDetails from "./ProjectDetails";

class ContentContainer extends Component {
    render() {
        return (
            <div className={'contentContainer'}>
                <div className={'content'}>
                    <AboutMeSection
                        showAboutMe={this.props.showAboutMe}
                        clickPortfolioButton={this.props.clickPortfolioButton}


                    />
                    <PortfolioProjects
                        showPortfolio={this.props.showPortfolio}
                        clickProjectDetails={this.props.clickProjectDetails}
                        closeProjectDetails={this.props.closeProjectDetails}
                    />


                </div>
            </div>
        );
    }
}

ContentContainer.propTypes = {};

export default ContentContainer;
