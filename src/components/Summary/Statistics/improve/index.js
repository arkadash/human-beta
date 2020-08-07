import React, {useEffect } from 'react';
import {ASSETS_BASE} from '../../../../constants';
import HeaderLine from '../../HeaderLine';
import './styles.scss';

export default ({ onBack, onChange = () => null }) => {
    useEffect(() => {
    }, [])

    return (
        <div className="statistics-improve">
            <HeaderLine onBack={onBack}/>
            <img src={`${ASSETS_BASE}/summary/IMPROVE2.png`} alt="" className="improve-img"/>
            <img src={`${ASSETS_BASE}/summary/left.png`}
                 alt="" className="summary-improve-data-btn"
                 onClick={onChange}
            />
        </div>
    );
};

