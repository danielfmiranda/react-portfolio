import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import '../Css/AboutMeSection.css'

class AboutMeSection extends Component {
    render() {
        return (
            <div
                className={'aboutMeContainer' + ' ' + `${this.props.showAboutMe ? ('aboutMeActive') : ('aboutMeInactive')}`}>
                <div className={'aboutMeTextContainer'}>
                    <h1 className={'aboutMeHeading'}> Hello, my name is Daniel Miranda</h1>
                    <h5 className={'aboutMeHeading'}> I am a full stack web developer based out of the East Bay
                        Area.</h5>
                    <p> Currently working under the Automation Team at <a
                        href={'https://healthy.kaiserpermanente.org/why-kp'}> Kaiser Permanente </a>, I use the latest
                        technologies to build applications that aid Kaiser Employees
                        in our mission to provide quality, affordable healthcare. </p>
                    <p> Outside of work, I enjoy working on cars, cycling, and spending time with my younger
                        brother. </p>
                    <Button onClick={this.props.clickPortfolioButton}className={'viewPortfolioButton'} variant="outline-primary">View My Work -></Button>
                </div>
            </div>
        );
    }
}

AboutMeSection.propTypes = {};

export default AboutMeSection;
