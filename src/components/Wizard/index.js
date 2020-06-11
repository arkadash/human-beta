import React from 'react';
import StepWizard from 'react-step-wizard';
import BaseComponent from '../BaseComponent';

const Wizard = () => {
    return (
        <StepWizard>
            <BaseComponent><span>Cntent</span></BaseComponent>
        </StepWizard>
    );
};

export default Wizard;