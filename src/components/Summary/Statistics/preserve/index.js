import React, {useEffect } from 'react';
import {ASSETS_BASE} from '../../../../constants';
import HeaderLine from '../../HeaderLine';
import './styles.scss';

export default ({ onBack }) => {
    useEffect(() => {
    }, [])

    return (
        <div className="statistics-certificate">
            <HeaderLine onBack={onBack}/>
            <img src={`${ASSETS_BASE}/summary/CERTIFICATE.png`} alt=""/>
        </div>
    );
};

