import React from 'react';
import { ASSETS_BASE } from '../../../constants';
import Menu from '../../Menu';

import './styles.scss';

const HeaderLine = () => {
    return (
        <div className="summary-header-line">
            <div className="header-logo">
                <img src={`${ASSETS_BASE}/summary/arrow-left.png`} alt="sol_e"/>
            </div>
            <div className="header-title">
                Statistics
            </div>
            <div className="header-btn">
                <Menu/>
            </div>
        </div>
    );
};

export default HeaderLine;