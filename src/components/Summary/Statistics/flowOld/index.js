import React, {useEffect } from 'react';
import SummaryStatistics from '../base';

export default ({ onBack, onChar }) => {
    useEffect(() => {
    }, [])

    return (
        <>
            <SummaryStatistics onBack={onBack} onSwitch={onChar}/>
        </>
    );
};

