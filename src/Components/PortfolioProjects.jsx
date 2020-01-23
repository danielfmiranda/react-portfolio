import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/PortfolioProjects.css'
import Card from 'react-bootstrap/Card'
import project1 from '../portfolioTestPictures/lombard.jpg'

class PortfolioProjects extends Component {
    render() {
        return (
            <div className={'portfolioProjectsContainer' + ' ' + `${this.props.showPortfolio ? ('portfolioActive') : ( 'portfolioInactive' )}` }>
                <div className={'portfolioRow'}>
                    <div className={'col-4 red '}>
                          <Card onClick={this.props.clickProjectDetails }className={'projectCell project1'}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 1 </h1>
                              </div>
                        </Card>
                    </div>
                    <div className={'col-4 yellow '}>
              <Card className={'projectCell project2 '}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 2 </h1>
                              </div>
                        </Card>
                    </div>
                    <div className={'col-4 green '}>
                      <Card className={'projectCell project3'}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 3 </h1>
                              </div>
                        </Card>
                    </div>

                </div>
                <div className={'portfolioRow'}>
                    <div className={'col-4 red '}>
                           <Card className={'projectCell project4'}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 4 </h1>
                              </div>
                        </Card>
                    </div>
                    <div className={'col-4 yellow '}>
                          <Card className={'projectCell project5'}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 5 </h1>
                              </div>
                        </Card>
                    </div>
                    <div className={'col-4 green '}>
                     <Card className={'projectCell project6'}>
                              <div className={'text'}>
                            <h1 className={'projectTitle'}> Project 6 </h1>
                              </div>
                        </Card>
                    </div>

                </div>
            </div>
        );
    }
}

PortfolioProjects.propTypes = {};

export default PortfolioProjects;
