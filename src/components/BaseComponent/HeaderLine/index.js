import React from 'react';
// import { noop } from 'lodash';
import { ASSETS_BASE } from '../../../constants';
// import Icon from '../../Menu/Icon';
import Menu from '../../Menu';

import './styles.scss';

const HeaderLine = () => {
    return (
        <div className="header-line">
            <div className="header-logo">
                <img src={`${ASSETS_BASE}/redLogo.png`} alt="sol_e"/>
            </div>
            <div className="header-btn">
                <Menu/>
                {/*<button onClick={() => alert('clicked!!')}>*/}
                {/*    <Icon/>*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default HeaderLine;