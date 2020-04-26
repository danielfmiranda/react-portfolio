import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';
import ProjectModal from './ProjectModal';
import '../Css/Container.css';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectModal: false,
            projectSelected: 1

        };
    }

    showProjectModal = (projectSelected) => {
        this.setState({
            showProjectModal: true,
            projectSelected: projectSelected
        })
    };

    hideProjectModal = (projectSelected) => {
        this.setState({
            showProjectModal: false,
            projectSelected: projectSelected


        })
    };


    render() {
        return (
            <div>
                <NavigationBar
                    showResumeModal={this.showResumeModal}
                />
                <HeroDiv/>
                <PortfolioSection
                    id={'#portfolio'}
                    showProjectModal={this.showProjectModal}
                />
                <Footer/>
                <ProjectModal
                    showProjectModal={this.state.showProjectModal}
                    hideProjectModal={this.hideProjectModal}
                    projectSelected={this.state.projectSelected}

                />
            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
