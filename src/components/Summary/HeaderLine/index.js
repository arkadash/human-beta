import React from 'react';
import classNames from 'classnames';
import { ASSETS_BASE } from '../../../constants';
import Menu from '../../Menu';
import Icon from '../Icon';

import './styles.scss';

const HeaderLine = ({ onBack, text = "Statistics", className = '' }) => {
    return (
        <div className={classNames('summary-header-line', className)}>
            <div className="header-logo">
                <img src={`${ASSETS_BASE}/summary/left.svg`} alt="sol_e" onClick={onBack}/>
            </div>
            <div className="header-title">
                {text}
            </div>
            <div className="header-btn">
                <Menu IconComponent={Icon}/>
            </div>
        </div>
    );
};

export default HeaderLine;