import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/NavigationHeader.css'

class NavigationHeader extends Component {
    render() {
        return (
            <div className={'navigationHeader'}>
                <div className={'col-4 navigationTitle'}>
                    <p style={{fontSize:"2em", marginRight:"5px",marginTop:"-9px"}}>👨‍💻</p>
                    <h3> Daniel Miranda </h3></div>
                <div className={'col-8 navigationClearSpaceAndLinks'}>
                    <div className={'col-8'}>

                    </div>
                    <div className={'col-4 navigationLinks'}>
                        <h5  onClick={this.props.clickAboutMeButton} className={'navigationLink' + ' ' + `${this.props.showAboutMe ? ('active') : ( null )}` }> About </h5>
                        <h5  onClick={this.props.clickPortfolioButton}  className={'navigationLink' + ' ' + `${this.props.showPortfolio ? ('active') : ( null )}` }> Portfolio</h5>
                    </div>

                </div>
            </div>
        );
    }
}

NavigationHeader.propTypes = {};

export default NavigationHeader;
