import React, {useState} from 'react';
import StepWizard from 'react-step-wizard';
import 'animate.css/animate.min.css';
import Believe from '../Believe';
import Worship from '../Worship';
import Promise from '../Promise';
import Idol from '../Idol';
import Rest from '../Rest';
import Kill from '../Kill';
import Loyal from '../Loyal';
import Steal from '../Steal';
import Rich from '../Rich';
import Lie from '../Lie';
import WebCamera from '../WebcameTest';
import IntroHoc from '../Intro';
import Loading from '../Loading';
import IntroLoadingHoc from '../IntroLoading';
import IntroStartHoc from '../IntroStart';
import Login from '../LogIn';
import GoingTo from '../GoingTo';
import Summary from '../Summary';
import SummaryWelcome from '../Summary/Welcome';

const ANIMATE = 'animate__animated';

const transitions = {
    enterRight: ANIMATE,
    enterLeft: ANIMATE,
    exitRight: ANIMATE,
    exitLeft: ANIMATE
};

const Wizard = () => {
    const [userImage, setUserImage] = useState();
    const [isAngel, setIsAngel] = useState(true);

    const onCapture = (img) => {
        setUserImage(img)
    }

    return (
        <StepWizard isLazyMount transitions={transitions}>
            <IntroHoc/>
            <IntroStartHoc/>
            <Login/>
            <IntroLoadingHoc/>
            <WebCamera onCapture={onCapture}/>
            <Loading/>
            <GoingTo/>
            <Believe/>
            <Worship/>
            <Promise/>
            <Rest/>
            <Idol/>
            <Kill/>
            <Loyal/>
            <Steal/>
            <Lie/>
            <Rich/>
            <Summary userImage={userImage} isAngel={isAngel}/>
        </StepWizard>
    );
};

export default Wizard;