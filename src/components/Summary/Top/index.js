import React, {useEffect, useState} from 'react';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

const data1 = 'P<';
const data2 = '<<USER<<<<<<<<<<<<<<<<<<<< NO.000666<+972<5884022<+++<<<<<<<<<';
const cursor = {element: '_', hideWhenDone: true, hideWhenDoneDelay: 0};

const delay = 10;

export default ({ onLoad }) => {
    const [displaySummaryName, setSummaryName] = useState(false);
    const [displaySummaryData, setSummaryData] = useState([]);

    useEffect(() => {
    }, [])

    return (
        <>
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
                            onTypingDone={() => onLoad()}>
                        {data1}<span className="is-angel">ISANGEL</span>{data2}
                    </Typist>
                </div>
            }
        </>
    );
};
