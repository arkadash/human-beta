import React from 'react';
import classNames from 'classnames';
import { ASSETS_BASE } from '../../../constants';
import Menu from '../../Menu';
import Icon from '../Icon';
import IconRed from '../IconRed';

import './styles.scss';

const HeaderLine = ({ onBack, text = "Statistics", className = '', isAngel = true }) => {
    return (
        <div className={classNames('summary-header-line', className, { 'is-demon': !isAngel })}>
            <div className="header-logo">
                <img src={
                    isAngel ?
                    `${ASSETS_BASE}/summary/left.svg` : `${ASSETS_BASE}/summary/left-red.svg`}
                 alt="sol_e" onClick={onBack}/>
            </div>
            <div className="header-title">
                {text}
            </div>
            <div className="header-btn">
                <Menu IconComponent={isAngel? Icon: IconRed}/>
            </div>
        </div>
    );
};

export default HeaderLine;