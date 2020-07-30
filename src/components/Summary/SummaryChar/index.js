import React, {useEffect} from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

export default ({ onFlow }) => {

    return (
        <>
            <div className="summary-statistics-character">
                <div className="summary-statistics-title">
                    Character.
                </div>
                <div className="summary-statistics-data">
                    <div className="summary-data-images">
                        <img src={`${ASSETS_BASE}/summary/CHARACTER MAIN.png`}
                            alt="" className="character"/>
                        <img src={`${ASSETS_BASE}/summary/left.png`}
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
