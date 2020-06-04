import React from 'react';
import StepWizard from 'react-step-wizard';
import Scan from '../Scan';
import Believe from '../Believe';
import Worship from '../Worship';
import Swear from '../Swear';
import Idol from '../Idol';

const Wizard = () => {
    return (
        <StepWizard>
            <Scan/>
            <Believe/>
            <Worship/>
            <Swear/>
            <Idol/>
        </StepWizard>
    );
};

export default Wizard;