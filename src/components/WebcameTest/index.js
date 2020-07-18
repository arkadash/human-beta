import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import HeaderLine from '../BaseComponent/HeaderLine';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Cursor from '../Cursor';
import { init } from './Face-Detection-JavaScript-master/script'
import './styles.scss';

const SCREEN_WIDTH = 1080;

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};
const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const getMaxKeyByValue = (values) => {
    let res = {};
    let max = 0;

    Object.keys(values).forEach((key) => {
        if(values[key] > max) {
            res = key;
            max = values[key];
        }
    });
    return res;
}

const WebCamera = ({ onClick = noop}) => {
    const [imgTaken, setImgTaken] = useState(false);
    const [ready, setReady] = useState(false);
    const [detected, setDetected] = useState([]);
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();

    const takePic = () => {
        setImgTaken(true);
        webcamRef.current.video.pause();
        setTimeout(onClick, 4000);
    };

    const onLoad = () => setReady(true);

    const onDetect = (resizedDetections) => {
        const expressionText = [
            `Mode: ${nameCapitalized(getMaxKeyByValue(resizedDetections[0].expressions))}`,
            `Age: ${Math.round(resizedDetections[0].age)}`,
            `Gender: ${nameCapitalized(resizedDetections[0].gender)}`
        ];

        setDetected(expressionText);
    }

    useEffect(() => {
        return init(webcamRef.current.video, cameraRef.current, onLoad, onDetect);
    }, []);

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="camera-container">
                <Cursor/>
                    <div className="camera-test" ref={cameraRef} style={{
                        right: -((window.innerWidth + (SCREEN_WIDTH/1.3))/2)
                    }}>
                    <Webcam audio={false} height={videoConstraints.height}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </div>
                <div className="camera-header-container">
                    <HeaderLine/>
                </div>
                <div className="detected-data">
                    {
                        detected.map((line, index) => {
                            return (
                                <div key={index}>{line}</div>
                            );
                        })
                    }
                </div>
                <div className="camera-footer-container">
                    {
                        !imgTaken && ready && <>
                            <p className="camera-text-smile">
                                DO NOT forget to <br/> SMILE:)
                            </p>
                            <button className="camera-next-btn" onClick={takePic}>
                                <img src={`${ASSETS_BASE}/camera/button.png`} alt="sol_e"/>
                            </button>
                        </>
                    }
                    {
                        !ready && <p className="camera-next-text">
                            Hold your position for a <br/>
                            better selfie
                        </p>
                    }
                </div>
            </div>
            <div className={classNames('camera-overlay', { 'take-img': imgTaken})} />
        </>
    );
};

const WebCameraHoc = ({ nextStep = noop, isActive = true })=> {
    if(!isActive) {
        return null;
    }
    return <WebCamera onClick={nextStep}/>
}

export default WebCameraHoc;