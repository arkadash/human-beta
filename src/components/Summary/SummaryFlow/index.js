import React from 'react';
import {ASSETS_BASE} from '../../../constants';
import classNames from 'classnames';
import './styles.scss';

export default ({ onChar, isAngel }) => {

    return (
        <>
            <div className={classNames('summary-statistics-flow', {'summary-statistics-flow-demon': !isAngel})}>
                <img src={isAngel?
                    `${ASSETS_BASE}/summary/cards/starsDouble.png`: `${ASSETS_BASE}/summary/cards/starsDoubleRed.png`
                } alt="sol_e" className="summary-flow-stars"/>
                <div className="summary-statistics-title">
                    Performance.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-data-images">
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/performanceMain.png`: `${ASSETS_BASE}/summary/cards/performanceMainRed.png`}
                            alt="" className="character"/>
                        <img src={`${ASSETS_BASE}/summary/left2.svg`}
                            alt="" className="data-btn"
                            onClick={() => {
                                onChar()
                            }}
                        />
                    </div>
                    <img src={`${ASSETS_BASE}/summary/PERFORMANCE CHIPS.png`}
                         alt="" className="character-chips"
                    />
                </div>
            </div>
        </>
    );
};
