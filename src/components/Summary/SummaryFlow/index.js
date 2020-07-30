import React, {useEffect} from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onChar }) => {

    return (
        <>
            <div className="summary-statistics-flow">
                <div className="summary-statistics-title">
                    Performance.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-data-images">
                        <img src={`${ASSETS_BASE}/summary/PER.png`}
                            alt="" className="character"/>
                        <img src={`${ASSETS_BASE}/summary/left.png`}
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
