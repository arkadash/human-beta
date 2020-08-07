import React, {useEffect} from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow, onChar, onImprove, onCertificate }) => {

    useEffect(() => {}, [])

    return (
        <>
            <div className="summary-statistics-menu">
                <img src={`${ASSETS_BASE}/summary/cards/stars.png`} alt="sol_e" className="summary-menu-stars"/>
                <div className="summary-statistics-title">
                    Statistics.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-line-1">
                        <img src={`${ASSETS_BASE}/summary/cards/charCard.png`}
                             alt="" className="character"
                             onClick={() => {
                                 onChar()
                             }}
                        />
                        <img src={`${ASSETS_BASE}/summary/cards/improveCard.png`} alt="" className="improve"
                            onClick={() => {
                                onImprove()
                            }}
                        />
                    </div>
                    <div className="summary-line-2">
                        <img src={`${ASSETS_BASE}/summary/cards/performanceCard.png`}
                             alt="" className="perform"
                             onClick={() => {
                                 onFlow()
                             }}
                        />
                        <img src={`${ASSETS_BASE}/summary/cards/preserveCard.png`} alt="" className="preserve"
                             onClick={() => {
                                 onCertificate()
                             }}/>
                    </div>
                </div>
            </div>
        </>
    );
};
