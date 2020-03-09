import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';
import ProjectModal from './ProjectModal';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false

        };
    }

    showProjectModal = () => {
        this.setState({
            showModal: true
        })
    };

    hideProjectModal = () => {
        this.setState({
            showModal: false
        })
    }


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

                />
            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
