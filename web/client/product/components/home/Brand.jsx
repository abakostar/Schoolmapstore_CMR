/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import brand from '../../assets/img/geosolutions-brand.png';

class Brand extends React.Component {
    render() {
        return (<div>
            <a href="http://www.minesec.gov.cm">
                <img src={brand} className="mapstore-logo"/>
            </a>
        </div>);
    }
}

export default Brand;
