import React from 'react';
import classNames from 'classnames';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow, isAngel = true }) => {

    return (
        <>
            <div className={classNames('summary-statistics-character', {'summary-statistics-character-demon': !isAngel})}>
                <img src={isAngel? `${ASSETS_BASE}/summary/cards/starsSingle.png`: `${ASSETS_BASE}/summary/cards/starsSingleRed.png`}
                     alt="sol_e" className="summary-char-stars"/>
                <div className="summary-statistics-title">
                    <div> Character.</div><div className="char-title-num">
                        {isAngel? '62%': '37%'}
                    </div>
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-data-images">
                        <img src={isAngel? `${ASSETS_BASE}/summary/cards/charMain.png`: `${ASSETS_BASE}/summary/cards/charCardMainRed.png`}
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
