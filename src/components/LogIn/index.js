import React, {useEffect} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {ASSETS_BASE, getCameraWidth} from '../../constants';
import HeaderLine from '../BaseComponent/HeaderLine';
import Cursor from '../Cursor';
import RoundButton from '../RoundfButton';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import './styles.scss';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const LogIn = ({ onClick = noop}) => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="intro-login-container" ref={introRef}>
                <Cursor/>
                <div className="intro-camera" ref={cameraRef} style={{
                    right: getCameraWidth()
                }}>
                    <Webcam audio={false} height={videoConstraints.height}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        mirrored
                    />
                </div>
                <div className="login-header-container">
                    <HeaderLine/>
                </div>
                <div className="intro-body-container">
                    <div className="login-title">
                        Log in
                    </div>
                    <div className="login-description">
                        Enter with your personal account to access drive history, favorites, and other points on all your devices.
                    </div>
                </div>
                <div className="intro-footer-container">
                    <div className="login-buttons-container">
                        <RoundButton className="login-google" text="GOOGLE" onClick={onClick}/>
                        <RoundButton className="login-facebook" text="FACEBOOK" onClick={onClick}/>
                    </div>
                    <div className="login-terms">
                        <img src={`${ASSETS_BASE}/login/terms.png`} className="astr-img" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ({ nextStep = noop, isActive = true })=> {
    if(!isActive) {
        return null;
    }
    return <LogIn onClick={nextStep}/>
}
