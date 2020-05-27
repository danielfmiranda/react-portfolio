import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';
import ProjectModal from './ProjectModal';
import '../Css/Container.css';
import ContactMeSection from "./ContactMeSection";
import ReactGA from "react-ga";


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectModal: false,
            projectSelected: 1

        };
    }

    componentDidMount() {
        ReactGA.initialize('UA-167751693-1');
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
                <ContactMeSection/>
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
