import React, {useEffect} from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow }) => {

    return (
        <>
            <div className="summary-statistics-character">
                <img src={`${ASSETS_BASE}/summary/cards/starsSingle.png`} alt="sol_e" className="summary-char-stars"/>
                <div className="summary-statistics-title">
                    <div> Character.</div><div className="char-title-num">62%</div>
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-data-images">
                        <img src={`${ASSETS_BASE}/summary/cards/charMain.png`}
                            alt="" className="character"/>
                        <img src={`${ASSETS_BASE}/summary/left2.svg`}
                            alt="" className="data-btn"
                            onClick={() => {
                                onFlow()
                            }}
                        />
                    </div>
                    <img src={`${ASSETS_BASE}/summary/CHARACTER CHIPS.png`}
                         alt="" className="character-chips"
                    />
                </div>
            </div>
        </>
    );
};
