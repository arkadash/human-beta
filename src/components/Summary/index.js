import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import classNames from 'classnames';
import {getCameraWidth} from '../../constants';
import Cursor from '../Cursor';
import TVOverlay from '../TVOverlay';
import SummaryMain from './Main';
import Improve from './Statistics/improve';
import Preserve from './Statistics/preserve';
import './styles.scss';
import FolderOverlay from "../FolderOverlay";

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const STAGE = {
    main: 'MAIN',
    certificate: 'PRESERVE',
    improve: 'IMPROVE'
}

const SummaryStatistics = () => {
    const [stage, setStage] = useState(STAGE.main);

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
    }, [])

    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="summary-statistics-container" ref={introRef}>
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
                <span className={classNames('main-container', { 'display-main': stage === STAGE.main })}>
                    <SummaryMain onFlow={() => {setStage(STAGE.flow)}}
                        onChar={() => {setStage(STAGE.char)}}
                        onImprove={() => {setStage(STAGE.improve)}}
                        onCertificate={() => {setStage(STAGE.certificate)}}
                    />
                </span>
                {
                    stage === STAGE.improve &&
                    <Improve onBack={() => {setStage(STAGE.main)}}/>
                }
                {
                    stage === STAGE.certificate &&
                    <Preserve onBack={() => {setStage(STAGE.main)}}/>
                }
            </div>
        </>
    );
};

export default ({isActive = true, ...rest}) => {
    if (!isActive) {
        return null;
    }
    return <SummaryStatistics {...rest}/>
}
