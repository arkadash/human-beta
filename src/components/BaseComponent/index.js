import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import {getCameraWidth, ASSETS_BASE} from '../../constants';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Waves from './Waves';
import Cursor from '../Cursor';
import HeaderLine from './HeaderLine';
import './styles.scss';
import Webcam from "react-webcam";

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

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
    disableBack = false,
    camera = true,
    num = 0
}) => {

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    const stageNum = num > 9 ? num : `0${num}`;
    const progressWidth = Math.round((num / 10) * 100);

    return (
        <>
            <Cursor/>
            { folder && <FolderOverlay/> }
            { tv && <TVOverlay/> }
            {camera &&
                <div className="base-camera-container" ref={introRef}>
                    <div className="intro-loading-camera" ref={cameraRef} style={{
                        right: getCameraWidth()
                    }}>
                        <Webcam audio={false} height={videoConstraints.height}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}
                        mirrored/>
                    </div>
                </div>
            }
            <div className={classNames('base-component', className)}>
                {isActive &&
                    <div className="base-component-wrapper">
                        <header>
                           <HeaderLine/>
                            {!hideBack &&
                                <div className="back-container">
                                    <button onClick={previousStep} disabled={disableBack}>
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