import React from 'react';
import StepWizard from 'react-step-wizard';
import Believe from '../Believe';
import Worship from '../Worship';
import Promise from '../Promise';
import Idol from '../Idol';
import Rest from "../Rest";

const Wizard = () => {
    return (
        <StepWizard isLazyMount>
            <Believe/>
            <Worship/>
            <Promise/>
            <Idol/>
            <Rest/>
        </StepWizard>
    );
};

export default Wizard;