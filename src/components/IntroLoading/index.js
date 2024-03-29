import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {getCameraWidth, ASSETS_BASE} from '../../constants';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Cursor from '../Cursor';
import './styles.scss';
import HeaderLine from "../BaseComponent/HeaderLine";

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
            const added = Math.random() * 2;
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
        setTimeout(onClick, 9 * 1000);
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="intro-loading-container" ref={introRef}>
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
                <div className="intro-header-container">
                    <HeaderLine/>
                </div>
                <div className="intro-body-container">
                    {/*<div className="intro-astr-overlay"/>*/}
                    <img src={`${ASSETS_BASE}/loadingIntro/soly.gif`} className="astr-img" alt=""/>
                    <div className="logging-in">Logging In...</div>
                </div>
                <div className="intro-footer-container">
                    <div className="intro-loading-number">
                        {numValue}%
                    </div>
                </div>
            </div>
            <div className="red-diff-overlay"/>
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