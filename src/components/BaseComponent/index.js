import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import {ASSETS_BASE} from '../../constants';
import Menu from './Menu';
import Waves from './Waves';
import './styles.scss';

const BaseComponent = ({ nextStep = noop, children}) => {

    return (
        <div className={classNames('base-component', 'bg-color-black')}>
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
                <div className="back-container">
                    <button onClick={() => alert('Back')}>
                       Back
                    </button>
                </div>
            </header>
            <div className="base-component-body">
                {/*{children}*/}
            </div>
            <footer className="base-component-footer">
                <Waves/>
            </footer>
        </div>
    );
};

export default BaseComponent;