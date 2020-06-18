import React from 'react';
import StepWizard from 'react-step-wizard';
import 'animate.css/animate.min.css';
import Believe from '../Believe';
import Worship from '../Worship';
import Promise from '../Promise';
import Idol from '../Idol';
import Rest from '../Rest';
import Kill from '../Kill';

const ANIMATE = 'animate__animated animate__zoomInDown';

const transitions = {
    enterRight: ANIMATE,
    enterLeft: ANIMATE,
    exitRight: ANIMATE,
    exitLeft: ANIMATE
};

const Wizard = () => {
    return (
        <StepWizard isLazyMount transitions={transitions}>
            <Believe/>
            <Worship/>
            <Promise/>
            <Rest/>
            <Idol/>
            <Kill/>
        </StepWizard>
    );
};

export default Wizard;