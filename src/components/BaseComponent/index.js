import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import Menu from './Menu';
import Waves from './Waves';
import './styles.scss';

const BaseComponent = ({nextStep = noop, children, className = '', isActive = true}) => {

    const stageNum = '01';
    const progressWidh = "20";

    return (
        <>
            <div className={classNames('base-component', 'bg-color-black', className)}>
                {isActive &&
                    <div className="base-component-wrapper">
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
                            {children}
                        </div>
                        <footer className="base-component-footer">
                            <div className="footer-progress">
                                <div className="progress-num">{stageNum}</div>
                                <button className="footer-btn" onClick={nextStep}>
                                    <span>Next</span><img src={`${ASSETS_BASE}/next.png`} alt="sol_e"/>
                                </button>
                            </div>
                        </footer>
                    </div>
                }
            </div>
            <Waves/>
            <div className="progress-bar" style={{width: `${progressWidh}%`}}/>
        </>
    );
};

export default BaseComponent;