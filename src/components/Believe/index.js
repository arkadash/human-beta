import React, { useState } from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import 'animate.css/animate.min.css';
import './style.scss';

const ANIMATION_CLASS = classNames('animate__animated', 'animate__heartBeat');

const Believe = ({ nextStep = noop}) => {
    const [btnClassesYes, setBtnClassesYes] = useState('');
    const [btnClassesNo, setBtnClassesNo] = useState('');

    return (
        <div className={classNames('believe', 'dark-red-base-background')}>
            <div className="red-background"/>
            <div className="do-you-believe">
                Do you believe in God?
            </div>
            <div className="do-you-believe-answer">
                <button className={btnClassesYes}
                    onMouseEnter={() => setBtnClassesYes(ANIMATION_CLASS)}
                    onMouseLeave={() => setBtnClassesYes('')}
                    onClick={nextStep}>
                    Yes
                </button>
                <span className="answers-divider">\</span>
                <button className={btnClassesNo}
                    onMouseEnter={() => setBtnClassesNo(ANIMATION_CLASS)}
                    onMouseLeave={() => setBtnClassesNo('')}
                    onClick={nextStep}>
                    No
                </button>
            </div>
        </div>
    );
};

export default Believe;