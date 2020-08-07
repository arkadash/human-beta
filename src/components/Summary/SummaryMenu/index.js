import React, {useEffect} from 'react';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow, onChar, onImprove, onCertificate, isAngel = true }) => {

    useEffect(() => {}, [])

    return (
        <>
            <div className={classNames('summary-statistics-menu', { 'summary-statistics-menu-demon': !isAngel })}>
                <img src={isAngel? `${ASSETS_BASE}/summary/cards/stars.png`: `${ASSETS_BASE}/summary/cards/stars-red.png`}
                     alt="sol_e" className="summary-menu-stars"/>
                <div className="summary-statistics-title">
                    Statistics.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-line-1">
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/charCard.png` : `${ASSETS_BASE}/summary/cards/charCardRed.png`}
                             alt="" className="character"
                             onClick={() => {
                                 onChar()
                             }}
                        />
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/improveCard.png`: `${ASSETS_BASE}/summary/cards/improveCardRed.png`} alt="" className="improve"
                            onClick={() => {
                                onImprove()
                            }}
                        />
                    </div>
                    <div className="summary-line-2">
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/performanceCard.png`: `${ASSETS_BASE}/summary/cards/performanceCardRed.png`}
                             alt="" className="perform"
                             onClick={() => {
                                 onFlow()
                             }}
                        />
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/preserveCard.png`: `${ASSETS_BASE}/summary/cards/preserveCardRed.png`}
                             alt="" className="preserve"
                             onClick={() => {
                                 onCertificate()
                             }}/>
                    </div>
                </div>
            </div>
        </>
    );
};
