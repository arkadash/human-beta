import React, {useEffect } from 'react';
import {ASSETS_BASE} from '../../../../constants';
import HeaderLine from '../../HeaderLine';
import './styles.scss';

export default ({ onBack, onChange = () => null, isAngel = true }) => {
    useEffect(() => {
    }, [])

    return (
        <div className="statistics-improve">
            <HeaderLine onBack={onBack} isAngel={isAngel}/>
            <img src={isAngel? `${ASSETS_BASE}/summary/IMPROVE2.png`: `${ASSETS_BASE}/summary/IMPROVE2_RED.png`} alt="" className="improve-img"/>
            <img src={`${ASSETS_BASE}/summary/left2.svg`}
                 alt="" className="summary-improve-data-btn"
                 onClick={onChange}
            />
        </div>
    );
};

