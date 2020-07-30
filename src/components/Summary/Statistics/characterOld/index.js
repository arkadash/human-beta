import React, {useEffect } from 'react';
import SummaryStatistics from '../base';

export default ({ onBack, onFlow }) => {
    useEffect(() => {
    }, [])

    return (
        <>
            <SummaryStatistics mainImage='char.png'
                keyImage='char-key.png'
                onBack={onBack}
                onSwitch={onFlow}
            />
        </>
    );
};

