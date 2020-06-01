import React from 'react';
import StepWizard from 'react-step-wizard';
import Scan from '../Scan';
import Believe from '../Believe';
import Worship from "../Worship";
import Swear from "../Swear";

const Wizard = () => {
    return (
        <StepWizard>
            <Scan/>
            <Believe/>
            <Worship/>
            <Swear/>
        </StepWizard>
    );
};

export default Wizard;