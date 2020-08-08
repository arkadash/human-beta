import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import classNames from 'classnames';
import {getCameraWidth} from '../../constants';
import Cursor from '../Cursor';
import TVOverlay from '../TVOverlay';
import SummaryMain from './Main';
import Improve from './Statistics/improve';
import Preserve from './Statistics/preserve';
import FolderOverlay from '../FolderOverlay';
import SummaryWelcome from './Welcome';
import './styles.scss';
import AngelOverlay from "./AngelWingsOverlay";
import CloudsOverlay from "./CloudsOverlay";

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const STAGE = {
    main: 'MAIN',
    certificate: 'PRESERVE',
    improve: 'IMPROVE',
    welcome: 'WELCOME'
}

const SummaryStatistics = ({ userImage, isAngel }) => {
    const [stage, setStage] = useState(STAGE.welcome);

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
        setTimeout(() => {
            setStage(STAGE.main)
        }, 10 * 1000);
    }, [])

    const cameraBlur = stage !== STAGE.improve && stage !== STAGE.certificate && stage !== STAGE.welcome;

    return (
        <>
            <TVOverlay className={`summary-tv-overlay-${stage.toLowerCase()}`}/>
            <CloudsOverlay isAngel={isAngel}/>
            <FolderOverlay/>
            {
                stage === STAGE.welcome ?
                    <SummaryWelcome back={() => setStage(STAGE.main)} isAngel={isAngel}/> :
                    <div className="summary-statistics-container" ref={introRef}>
                        <Cursor/>
                        <div className={classNames('summary-camera',
                            {'camera-blur': cameraBlur})}
                             ref={cameraRef} style={{
                            right: getCameraWidth()
                        }}>
                            <Webcam audio={false} height={videoConstraints.height}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                    mirrored
                            />
                        </div>
                        <span className={classNames('main-container', {'display-main': stage === STAGE.main})}>
                    <SummaryMain isAngel={isAngel} userImage={userImage} onFlow={() => {
                        setStage(STAGE.flow)
                    }}
                     onWelcome={() => {
                         setStage(STAGE.welcome)
                     }}
                     onChar={() => {
                         setStage(STAGE.char)
                     }}
                     onImprove={() => {
                         setStage(STAGE.improve)
                     }}
                     onCertificate={() => {
                         setStage(STAGE.certificate)
                     }}
                    />
                </span>
                        {
                            stage === STAGE.improve &&
                            <Improve isAngel={isAngel} onBack={() => {
                                setStage(STAGE.main)
                            }}
                            onChange={() => { setStage(STAGE.certificate) }}
                            />
                        }
                        {
                            stage === STAGE.certificate &&
                            <Preserve isAngel={isAngel} onChange={() => { setStage(STAGE.improve) }}
                            onBack={() => {
                                setStage(STAGE.main)
                            }}/>
                        }
                    </div>
            }
            <AngelOverlay isAngel={isAngel} blur={
                stage === STAGE.main
            }/>
        </>
    );
};

export default ({isActive = true, ...rest}) => {
    if (!isActive) {
        return null;
    }
    return <SummaryStatistics {...rest}/>
}
