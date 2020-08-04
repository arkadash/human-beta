import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {getCameraWidth, ASSETS_BASE} from '../../constants';
import RoundButton from '../RoundfButton';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Cursor from '../Cursor';
import './styles.scss';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const IntroStart = ({ onClick = noop}) => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="intro-start-container" ref={introRef}>
            <Cursor/>
            <div className="intro-loading-camera" ref={cameraRef} style={{
                right: getCameraWidth()
            }}>
                <Webcam audio={false} height={videoConstraints.height}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    mirrored
                />
            </div>
            <div className="intro-body-container">
                <div className="logo-container">
                    <img src={`${ASSETS_BASE}/intro/logo2.png`} className="astr-img" alt=""/>
                </div>
                <div className="logo-text">Explore your best.</div>
            </div>
            <div className="intro-footer-container">
                <div className="intro-button-container">
                    <RoundButton onClick={onClick} text="ENTER"/>
                </div>
                <div className="intro-footer-version-container">
                    <div className="intro-creator-container">
                        <div className="intro-creator">
                            Created by the creator
                        </div>
                    </div>
                    <div className="intro-version-container">
                        <p className="intro-version">
                            Version number 6.1.3
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

const IntroHoc = ({ nextStep = noop, isActive = true })=> {
    if(!isActive) {
        return null;
    }
    return <IntroStart onClick={nextStep}/>
}

export default IntroHoc;