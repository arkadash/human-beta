import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../constants';
import Cursor from '../Cursor';
import TVOverlay from '../TVOverlay';
import SummaryMain from './Main';
import SummaryFlow from './Statistics/flow';
import SummaryChar from './Statistics/character';
import './styles.scss';

const SCREEN_WIDTH = 1080;

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const STAGE = {
    main: 'MAIN',
    flow: 'FLOW',
    char: 'CHAR'
}

const SummaryStatistics = ({  }) => {
    const [stage, setStage] = useState(STAGE.main);

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    useEffect(() => {
    }, [])

    return (
        <>
            <TVOverlay/>
            <div className="summary-statistics-container" ref={introRef}>
                <Cursor/>
                <div className="summary-camera" ref={cameraRef} style={{
                    right: -((window.innerWidth + (SCREEN_WIDTH / 2)) / 2)
                }}>
                    <Webcam audio={false} height={videoConstraints.height}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}/>
                </div>
                <span className={classNames('main-container', { 'display-main': stage === STAGE.main })}>
                    <SummaryMain onFlow={() => {setStage(STAGE.flow)}}
                        onChar={() => {setStage(STAGE.char)}}
                    />
                </span>
                {
                    stage === STAGE.flow &&
                        <SummaryFlow onBack={() => {setStage(STAGE.main)}}
                            onChar={() => {setStage(STAGE.char)}}/>
                }
                {
                    stage === STAGE.char &&
                        <SummaryChar onBack={() => {setStage(STAGE.main)}}
                            onFlow={() => {setStage(STAGE.flow)}}/>
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
