import React from 'react';
import StepWizard from 'react-step-wizard';
import Scan from '../Scan';
import Believe from '../Believe';
import Worship from "../Worship";

const Wizard = () => {
    return (
        <StepWizard>
            <Scan/>
            <Believe/>
            <Worship/>
        </StepWizard>
    );
};

export default Wizard;