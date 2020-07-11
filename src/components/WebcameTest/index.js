import React, {useEffect} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {ASSETS_BASE} from '../../constants';
import HeaderLine from '../BaseComponent/HeaderLine';
import Cursor from '../Cursor';
import { init } from './Face-Detection-JavaScript-master/script'
import './styles.scss';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "user"
};

const WebCamera = ({ onClick = noop}) => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();

    useEffect(() => {
        return init(webcamRef.current.video, cameraRef.current);
    }, []);

    return (
        <div className="camera-container">
            <Cursor difference={false}/>
            <div className="camera-test" ref={cameraRef}>
                <Webcam audio={false} height={videoConstraints.height}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}/>
            </div>
            <div className="camera-header-container">
                <HeaderLine/>
            </div>
            <div className="camera-footer-container">
                <button className="camera-next-btn" onClick={onClick}>
                    <img src={`${ASSETS_BASE}/camera/right.png`} alt="sol_e"/>
                </button>
                <p className="camera-next-text">
                    Hold your position for a <br/>
                    better selfie
                </p>
            </div>
        </div>
    );
};

const WebCameraHoc = ({ nextStep = noop, isActive = true })=> {
    if(!isActive) {
        return null;
    }
    return <WebCamera onClick={nextStep}/>
}

export default WebCameraHoc;