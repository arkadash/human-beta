import React from 'react';
import StepWizard from 'react-step-wizard';
import 'animate.css/animate.min.css';
import Believe from '../Believe';
import Worship from '../Worship';
import Promise from '../Promise';
import Idol from '../Idol';
import Rest from '../Rest';
import Kill from '../Kill';
import Loyal from '../Loyal';
import Steal from '../old/Steal';
import Rich from '../Rich';
import Lie from '../Lie';

const ANIMATE = 'animate__animated animate__tada';

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
            <Loyal/>
            <Steal/>
            <Rich/>
            <Lie/>
        </StepWizard>
    );
};

export default Wizard;