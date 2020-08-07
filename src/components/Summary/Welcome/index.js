import React, {useEffect } from 'react';
import {ASSETS_BASE, getCameraWidth} from '../../../constants';
import Webcam from 'react-webcam';
import './styles.scss';
import TVOverlay from "../../TVOverlay";
import Cursor from "../../Cursor";
import FolderOverlay from "../../FolderOverlay";
import HeaderLine from "../HeaderLine";

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

export default ({ back = () => console.log('next')}) => {

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="statistics-welcome-splash">
                <Cursor/>
                <div className="summary-camera" ref={cameraRef} style={{
                    right: getCameraWidth()
                }}>
                    <Webcam audio={false} height={videoConstraints.height}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            mirrored
                    />
                </div>
                <HeaderLine text="Certificate." className="header-summary-welcome" onBack={back}/>
            </div>
            <img src={`${ASSETS_BASE}/summary/welcomeAngel.png`} alt="" className="summary-animation-welcome-img"/>
            <img src={`${ASSETS_BASE}/summary/animations/ARROWES-WHITE.gif`} alt="" className="summary-animation-welcome-img"/>
        </>
    );
};

