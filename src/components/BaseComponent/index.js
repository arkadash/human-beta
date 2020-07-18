import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
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
    totalSteps = 1,
    hideBack = false,
    hideWaves = false,
    hideProgressBar = false,
    folder = true,
    tv = true,
    displayNext = true,
    disableNext = false,
    num = 0
}) => {

    const stageNum = num > 9 ? num : `0${num}`;
    const progressWidth = Math.round((num / 10) * 100);

    return (
        <>
            <Cursor/>
            { folder && <FolderOverlay/> }
            { tv && <TVOverlay/> }
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
                                { displayNext &&
                                    <button className="footer-btn" onClick={nextStep} disabled={disableNext}>
                                        <span>Next</span><img src={`${ASSETS_BASE}/next.png`} alt="sol_e"/>
                                    </button>
                                }
                            </div>
                        </footer>
                    </div>
                }
            </div>
            {!hideWaves && <Waves/> }
            {!hideProgressBar && <div className="progress-bar" style={{width: `${progressWidth}%`}}/> }
        </>
    );
};

export default BaseComponent;