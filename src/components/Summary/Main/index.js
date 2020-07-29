import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {noop} from 'lodash';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../../constants';
import HeaderLine from '../../BaseComponent/HeaderLine';
import './styles.scss';

const data = 'P<ISRANGEL<<USER<<<<<<<<<<<<<<<<<<< NO.000666<+972<5884022<+++<<<<<<<<<';
const cursor = {element: '_', hideWhenDone: true, hideWhenDoneDelay: 0};

const delay = 10;

const SummaryMain = ({ onFlow, onChar, onImprove, onCertificate }) => {
    const [displayMain, setDisplayMain] = useState(false);
    const [displaySummaryName, setSummaryName] = useState(false);
    const [displaySummaryData, setSummaryData] = useState([]);

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="summary-statistics-main-container">
                <HeaderLine/>

                <div className="summary-personal-container">
                    <div>
                        <img src={`${ASSETS_BASE}/summary/placeholder.png`} className="placeholder-img" alt=""/>
                    </div>
                    <div className="summary-data">
                        <div className="summary-data-wrapper">
                            <div className="summary-header">
                                <Typist cursor={cursor}
                                        avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData(['P'])
                                        }>
                                    <Typist.Delay ms={1000}/>
                                    Type
                                </Typist>
                            </div>
                            {displaySummaryData.includes('P') &&
                            <div className="summary-header-data">
                                <Typist cursor={cursor}
                                        avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'SURNAME'])}>
                                    P
                                </Typist>
                            </div>
                            }
                        </div>
                        <div className="summary-data-wrapper">
                            <div className="summary-header">
                                {displaySummaryData.includes('SURNAME') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'NO'])}>
                                    Surname
                                </Typist>
                                }
                            </div>
                            <div className="summary-header-data">
                                {displaySummaryData.includes('NO') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'GIVEN'])}>
                                    No.000666
                                </Typist>
                                }
                            </div>
                        </div>
                        <div className="summary-data-wrapper">
                            <div className="summary-header">
                                {displaySummaryData.includes('GIVEN') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'ANGEL'])}>
                                    Given Name
                                </Typist>
                                }
                            </div>
                            <div className="summary-header-data">
                                {displaySummaryData.includes('ANGEL') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'DATE'])}>
                                    ANGEL
                                </Typist>
                                }
                            </div>
                        </div>
                        <div className="summary-data-wrapper">
                            <div className="summary-header">
                                {displaySummaryData.includes('DATE') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'DATE_DATA'])}>
                                    Date of Issue
                                </Typist>
                                }
                            </div>
                            <div className="summary-header-data">
                                {displaySummaryData.includes('DATE_DATA') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'AUTH'])}>
                                    07/07/2020
                                </Typist>
                                }
                            </div>
                        </div>
                        <div className="summary-data-wrapper">
                            <div className="summary-header">
                                {displaySummaryData.includes('AUTH') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryData([...displaySummaryData, 'AUTH_DATA'])}>
                                    Authority - I.C Pass
                                </Typist>
                                }
                            </div>
                            <div className="summary-header-data">
                                {displaySummaryData.includes('AUTH_DATA') &&
                                <Typist cursor={cursor} avgTypingDelay={delay}
                                        onTypingDone={() => setSummaryName(true)}>
                                    Sol_e
                                </Typist>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {displaySummaryName &&
                <div className="summary-name">
                    <Typist cursor={cursor} avgTypingDelay={delay}
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
                                <img src={`${ASSETS_BASE}/summary/STAR Default.png`}
                                     alt="" className="character"
                                     onClick={() => {
                                         onChar()
                                     }}
                                />
                                <img src={`${ASSETS_BASE}/summary/preserve Default.png`} alt="" className="preserve"
                                    onClick={() => {
                                        onCertificate()
                                    }}
                                />
                            </div>
                            <div className="summary-line-2">
                                <img src={`${ASSETS_BASE}/summary/SNAKE Default.png`}
                                     alt="" className="perform"
                                     onClick={() => {
                                         onFlow()
                                     }}
                                />
                                <img src={`${ASSETS_BASE}/summary/IMPROVE Default.png`} alt="" className="improve"
                                     onClick={() => {
                                         onImprove()
                                     }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SummaryMain;