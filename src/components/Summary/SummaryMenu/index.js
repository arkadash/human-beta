import React, {useEffect} from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow, onChar, onImprove, onCertificate }) => {

    useEffect(() => {}, [])

    return (
        <>
            <div className="summary-statistics-menu">
                <div className="summary-statistics-title">
                    Statistics.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-line-1">
                        <img src={`${ASSETS_BASE}/summary/CHAR.png`}
                             alt="" className="character"
                             onClick={() => {
                                 onChar()
                             }}
                        />
                        <img src={`${ASSETS_BASE}/summary/IMPROVE CARD.png`} alt="" className="improve"
                            onClick={() => {
                                onImprove()
                            }}
                        />
                    </div>
                    <div className="summary-line-2">
                        <img src={`${ASSETS_BASE}/summary/PERFORMANCE CARD.png`}
                             alt="" className="perform"
                             onClick={() => {
                                 onFlow()
                             }}
                        />
                        <img src={`${ASSETS_BASE}/summary/PRESERVE CARD.png`} alt="" className="preserve"
                             onClick={() => {
                                 onCertificate()
                             }}/>
                    </div>
                </div>
            </div>
        </>
    );
};
