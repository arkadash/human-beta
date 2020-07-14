import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import Waves from './Waves';
import Cursor from '../Cursor';
import HeaderLine from './HeaderLine';
import './styles.scss';

const BaseComponent = ({
    nextStep = noop,
    previousStep = noop,
    children,
    className = '',
    isActive = true,
    currentStep = 1,
    totalSteps = 1,
    hideBack = false,
    hideWaves = false,
    folder = true
}) => {

    const stageNum = currentStep > 9 ? currentStep : `0${currentStep}`;
    const progressWidth = Math.round((currentStep / totalSteps) * 100);

    return (
        <>
            <Cursor/>
            <div className="base-component-folder-overlay"/>
            <div className={classNames('base-component', 'bg-color-black', className, { 'bg-folder': folder })}>
                {isActive &&
                    <div className="base-component-wrapper">
                        <header>
                           <HeaderLine/>
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