import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {ASSETS_BASE} from '../../constants';
import RoundButton from '../RoundfButton';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Cursor from '../Cursor';
import './styles.scss';

const SCREEN_WIDTH = 1080;

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
                right: -((window.innerWidth + (SCREEN_WIDTH/2))/2)
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
                    <img src={`${ASSETS_BASE}/introStart/logo.png`} className="astr-img" alt=""/>
                </div>
                <div className="logo-text">Explore your best.</div>
            </div>
            <div className="intro-footer-container">
                <div className="intro-button-container">
                    <RoundButton onClick={onClick} text="START"/>
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