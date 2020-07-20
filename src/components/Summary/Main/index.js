import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import classNames from 'classnames';
import {noop} from 'lodash';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../../constants';
import HeaderLine from '../../BaseComponent/HeaderLine';
import Cursor from '../../Cursor';
import TVOverlay from '../../TVOverlay';
import './styles.scss';

const SCREEN_WIDTH = 1080;

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

const data = 'P<ISRANGEL<<USER<<<<<<<<<<<<<<<<<<< NO.000666<+972<5884022<+++<<<<<<<<<';
const cursor = {element: '_', hideWhenDone: true, hideWhenDoneDelay: 0};

const SummaryMain = ({onClick = noop}) => {
    const [displayMain, setDisplayMain] = useState(false);
    const [displaySummaryName, setSummaryName] = useState(false);
    const [displaySummaryData, setSummaryData] = useState([]);

    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();


    useEffect(() => {
    }, [])

    return (
        <>
            <TVOverlay/>
            <div className="summary-main-container" ref={introRef}>
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
                        <div>
                            <img src={`${ASSETS_BASE}/summary/placeholder.png`} className="placeholder-img" alt=""/>
                        </div>
                        <div className="summary-data">
                            <div className="summary-data-wrapper">
                                <div className="summary-header">
                                    <Typist cursor={cursor}
                                            avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData(['P'])
                                            }>
                                        <Typist.Delay ms={1000}/>
                                        Type
                                    </Typist>
                                </div>
                                {displaySummaryData.includes('P') &&
                                <div className="summary-header-data">
                                    <Typist cursor={cursor}
                                            avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'SURNAME'])}>
                                        P
                                    </Typist>
                                </div>
                                }
                            </div>
                            <div className="summary-data-wrapper">
                                <div className="summary-header">
                                    {displaySummaryData.includes('SURNAME') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'NO'])}>
                                        Surname
                                    </Typist>
                                    }
                                </div>
                                <div className="summary-header-data">
                                    {displaySummaryData.includes('NO') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'GIVEN'])}>
                                        No.000666
                                    </Typist>
                                    }
                                </div>
                            </div>
                            <div className="summary-data-wrapper">
                                <div className="summary-header">
                                    {displaySummaryData.includes('GIVEN') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'ANGEL'])}>
                                        Given Name
                                    </Typist>
                                    }
                                </div>
                                <div className="summary-header-data">
                                    {displaySummaryData.includes('ANGEL') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'DATE'])}>
                                        ANGEL
                                    </Typist>
                                    }
                                </div>
                            </div>
                            <div className="summary-data-wrapper">
                                <div className="summary-header">
                                    {displaySummaryData.includes('DATE') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'DATE_DATA'])}>
                                        Date of Issue
                                    </Typist>
                                    }
                                </div>
                                <div className="summary-header-data">
                                    {displaySummaryData.includes('DATE_DATA') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'AUTH'])}>
                                        07/07/2020
                                    </Typist>
                                    }
                                </div>
                            </div>
                            <div className="summary-data-wrapper">
                                <div className="summary-header">
                                    {displaySummaryData.includes('AUTH') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryData([...displaySummaryData, 'AUTH_DATA'])}>
                                        Authority - I.C Pass
                                    </Typist>
                                    }
                                </div>
                                <div className="summary-header-data">
                                    {displaySummaryData.includes('AUTH_DATA') &&
                                    <Typist cursor={cursor} avgTypingDelay={70}
                                            onTypingDone={() => setSummaryName(true)}>
                                        Sol_e
                                    </Typist>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    { displaySummaryName &&
                        <div className="summary-name">
                            <Typist cursor={cursor} avgTypingDelay={70}
                                    onTypingDone={() => setDisplayMain(true)}>
                               {data}
                            </Typist>
                        </div>
                    }
                    <div className={classNames('summary-main', {'display-main': displayMain})}>
                        <img src={`${ASSETS_BASE}/summary/line.png`} alt="" className="divider"/>
                        <div className="summary-statistics">
                            <div className="summary-statistics-title">
                                Statistics
                            </div>
                            <div className="summary-statistics-data">
                                <div className="summary-line-1">
                                    <img src={`${ASSETS_BASE}/summary/STAR Default.png`} alt="" className="character"/>
                                    <img src={`${ASSETS_BASE}/summary/preserve Default.png`} alt="" className="preserve"/>
                                </div>
                                <div className="summary-line-2">
                                    <img src={`${ASSETS_BASE}/summary/SNAKE Default.png`} alt="" className="perform"/>
                                    <img src={`${ASSETS_BASE}/summary/IMPROVE Default.png`} alt="" className="improve"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ({nextStep = noop, isActive = true}) => {
    if (!isActive) {
        return null;
    }
    return <SummaryMain onClick={nextStep}/>
}
