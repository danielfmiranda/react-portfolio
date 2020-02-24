import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavigationBar from "./NavigationBar";
import HeroDiv from "./HeroDiv";
import PortfolioSection from "./PortfolioSection";
import Footer from './Footer';

class Container extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HeroDiv />
                <PortfolioSection id={'#portfolio'}/>
                <Footer/>
            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
