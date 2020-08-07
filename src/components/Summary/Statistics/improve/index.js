import React, {useEffect } from 'react';
import {ASSETS_BASE} from '../../../../constants';
import HeaderLine from '../../HeaderLine';
import './styles.scss';

export default ({ onBack }) => {
    useEffect(() => {
    }, [])

    return (
        <div className="statistics-improve">
            <HeaderLine onBack={onBack}/>
            <img src={`${ASSETS_BASE}/summary/IMPROVE2.png`} alt="" className="improve-img"/>
        </div>
    );
};

