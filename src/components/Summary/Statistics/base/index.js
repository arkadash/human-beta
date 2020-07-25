import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../../../constants';
import HeaderLine from '../../HeaderLine';
import './styles.scss';

const SummaryStatistics = ({
    mainImage = 'Snake.png',
    keyImage  = 'flow-key.png',
    onBack  = () => null,
    onSwitch  = () => null
}) => {
    const [displayMain, setDisplayMain] = useState(true);

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="summary-statistics-results-container">
                    <HeaderLine  onBack={onBack}/>
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
                                <img src={`${ASSETS_BASE}/summary/flow-btn.png`} alt="" className="perform-btn"
                                onClick={onSwitch}/>
                                <img src={`${ASSETS_BASE}/summary/${mainImage}`} alt="" className="perform"/>
                            </div>
                            <img src={`${ASSETS_BASE}/summary/${keyImage}`} alt="" className="summary-key"/>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default SummaryStatistics;
