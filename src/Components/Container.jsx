import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';
import PortfolioProjectOverlay from './PortfolioProjectOverlay';

class Container extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HeroDiv />
                <PortfolioSection id={'#portfolio'}/>
                <Footer/>
                {/*<PortfolioProjectOverlay />*/}
            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
