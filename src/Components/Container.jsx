import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';
import ProjectModal from './ProjectModal';
import '../Css/Container.css'



class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            projectSelected: 1

        };
    }

    showProjectModal = (projectSelected) => {
        this.setState({
            showModal: true,
            projectSelected: projectSelected
        })
    };

    hideProjectModal = (projectSelected) => {
        this.setState({
            showModal: false,
            projectSelected: projectSelected


        })
    };


    render() {
        return (
            <div>
                <NavigationBar/>
                <HeroDiv/>
                <PortfolioSection
                    id={'#portfolio'}
                    showProjectModal={this.showProjectModal}
                />
                <Footer/>
                <ProjectModal
                    showModal={this.state.showModal}
                    hideProjectModal={this.hideProjectModal}
                    projectSelected={this.state.projectSelected}

                />
            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
