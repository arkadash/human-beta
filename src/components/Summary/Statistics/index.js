import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../../constants';
import HeaderLine from '../HeaderLine';
import Cursor from '../../Cursor';
import TVOverlay from '../../TVOverlay';
import './styles.scss';

const SCREEN_WIDTH = 1080;

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const SummaryStatistics = ({ mainImage = 'Snake.png', keyImage  = 'flow-key.png' }) => {
    const [displayMain, setDisplayMain] = useState(true);

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
                <div className="summary-header-container">
                    <HeaderLine/>

                    <div className="summary-personal-container">
                        <p className="summary-personal-title-container">
                            AN_<br/>GEL
                        </p>
                        <div className="summary-data-container">
                            <div className="summary-data-name">
                                No.000666
                            </div>
                            <div className="summary-data-plus">
                                <span>++++</span><span className="red-plus">+++</span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('summary-main', {'display-main': displayMain})}>
                        <div className="summary-statistics-title">
                            Performance
                        </div>
                        <div className="summary-statistics">
                            <div className="summary-statistics-data">
                                <img src={`${ASSETS_BASE}/summary/flow-btn.png`} alt="" className="perform-btn"/>
                                <img src={`${ASSETS_BASE}/summary/${mainImage}`} alt="" className="perform"/>
                            </div>
                            <img src={`${ASSETS_BASE}/summary/${keyImage}`} alt="" className="summary-key"/>
                        </div>
                    </div>

                </div>
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
