import React from 'react';
import { noop } from 'lodash';
import { ASSETS_BASE } from '../../../constants';
import Menu from '../Menu';
import './styles.scss';

const HeaderLine = () => {
    return (
        <header>
            <div className="header-line">
                <div className="header-logo">
                    <img src={`${ASSETS_BASE}/redLogo.png`} alt="sol_e"/>
                </div>
                <div className="header-btn">
                    <button onClick={() => alert('clicked!!')}>
                        <Menu/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderLine;