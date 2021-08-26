/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import PropTypes from 'prop-types';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import HTML from '../../components/I18N/HTML';

import logo1 from '../assets/img/left-logo.png';
import logo2 from '../assets/img/right-logo.png';

/**
 * Description of MapStore rendered in the home page.
 * Renders the HTML in localization files identified by
 * the path `home.shortDescription`.
 * @name HomeDescription
 * @class
 * @memberof plugins
 * @prop {string} [name='MapStore'] Title of the text
 */
class HomeDescription extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string
    };

    static defaultProps = {
        name: 'SchoolmapStore-CMR',
        className: 'ms-home-description',
        style: {}
    };

    render() {
        return (
            <Jumbotron className={this.props.className} style={this.props.style}>
                <Grid>
                    <Row>
                        <Col xs={2}>
                        <img src={logo1} className="mapstore-header1" />
                        </Col>
                        <Col xs={8} className="text-center">
                            <h1>{this.props.name}</h1>
                            <p>
                                <HTML msgId="home.shortDescription"/>
                            </p>
                        </Col>
                        <Col xs={2} className="text-right">
                        <img src={logo2} className="mapstore-header2" />
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        );
    }
}

export default {
    HomeDescriptionPlugin: HomeDescription
};
