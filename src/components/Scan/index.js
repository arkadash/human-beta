import React, { useEffect } from 'react';

const Scan = ({ nextStep }) => {

    useEffect(() => {
        setTimeout(nextStep, 5 * 1000)
    }, []);

    return (
        <div>
            Scanning....!
        </div>
    );
};

export default Scan;