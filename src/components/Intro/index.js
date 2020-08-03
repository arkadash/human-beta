import React, {useEffect} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import {getCameraWidth, ASSETS_BASE} from '../../constants';
import Cursor from '../Cursor';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import './styles.scss';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const Intro = ({ onClick = noop}) => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
        introRef.current.addEventListener('mousemove', () => {
            onClick();
            console.log('intro move!');
        }, { once: true } )
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="intro-container" ref={introRef}>
                <Cursor difference={false}/>
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
                <div className="intro-body-container">
                   <img src={`${ASSETS_BASE}/intro/logo.png`} alt="sol_e"/>
                   {/*<img src={`${ASSETS_BASE}/intro/astr.png`} className="astr-img" alt=""/>*/}
                </div>
                {/*<div className="intro-footer-container">*/}
                {/*    <div className="intro-creator-container">*/}
                {/*        <div className="intro-creator">*/}
                {/*            Created by the creator*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="intro-version-container">*/}
                {/*        <p className="intro-version">*/}
                {/*            Version number 1.8.3*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

const IntroHoc = ({ nextStep = noop, isActive = true })=> {
    if(!isActive) {
        return null;
    }
    return <Intro onClick={nextStep}/>
}

export default IntroHoc;