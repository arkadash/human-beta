import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import Menu from './Menu';
import Waves from './Waves';
import './styles.scss';
import Cursor from '../Cursor';

const BaseComponent = ({
    nextStep = noop,
    previousStep = noop,
    children,
    className = '',
    isActive = true,
    currentStep = 1,
    totalSteps = 1,
    hideBack = false,
    hideWaves = false
}) => {

    const stageNum = currentStep > 9 ? currentStep : `0${currentStep}`;
    const progressWidth = Math.round((currentStep / totalSteps) * 100);

    return (
        <>
            <Cursor/>
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
                            {!hideBack &&
                                <div className="back-container">
                                    <button onClick={previousStep}>
                                        Back
                                    </button>
                                </div>
                            }
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
            {!hideWaves && <Waves/> }
            <div className="progress-bar" style={{width: `${progressWidth}%`}}/>
        </>
    );
};

export default BaseComponent;