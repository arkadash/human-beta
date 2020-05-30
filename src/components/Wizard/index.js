import React from 'react';
import StepWizard from 'react-step-wizard';
import Scan from '../Scan';
import Believe from '../Believe';

const Wizard = () => {
    return (
        <StepWizard>
            <Scan/>
            <Believe/>
        </StepWizard>
    );
};

export default Wizard;