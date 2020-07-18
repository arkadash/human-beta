import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {ASSETS_BASE} from '../../constants';
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

const IntroLoading = ({ onClick = noop}) => {
    const [numValue, setNumValue] = useState(0);
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    const runNum = (num) => {
        if(num < 100) {
            const added = Math.random() * 3;
            if(num + added > 100) {
                setNumValue(100);
            } else {
                const newVar = num + Math.round(added);
                setTimeout(() => runNum(newVar), 100);
                setNumValue(newVar);
            }
        }
    };

    useEffect(() => {
        runNum(0);
        setTimeout(onClick, 6 * 1000);
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="intro-loading-container" ref={introRef}>
                <Cursor difference={false}/>
                <div className="intro-loading-camera" ref={cameraRef} style={{
                    right: -((window.innerWidth + (SCREEN_WIDTH/2))/2)
                }}>
                    <Webcam audio={false} height={videoConstraints.height}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}/>
                </div>
                <div className="intro-body-container">
                    {/*<div className="intro-astr-overlay"/>*/}
                    <img src={`${ASSETS_BASE}/loadingIntro/soly.gif`} className="astr-img" alt=""/>
                </div>
                <div className="intro-footer-container">
                    <div className="intro-loading-number">
                        {numValue}%
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
    return <IntroLoading onClick={nextStep}/>
}

export default IntroHoc;