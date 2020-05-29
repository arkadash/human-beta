import React from 'react';
import StepWizard from 'react-step-wizard';
import Scan from '../Scan';

const Wizard = () => {
    return (
        <StepWizard>
            <Scan/>
            <div>
                Step 2
            </div>
        </StepWizard>
    );
};

export default Wizard;