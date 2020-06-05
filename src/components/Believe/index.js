import React, { useState } from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import 'animate.css/animate.min.css';
import './styles.scss';

const ANIMATION_CLASS = classNames('animate__animated', 'animate__swing');

const Believe = ({ nextStep = noop}) => {
    const [btnClassesYes, setBtnClassesYes] = useState('');
    const [btnClassesNo, setBtnClassesNo] = useState('');

    return (
        <div className={classNames('believe', 'bg-color-red')}>
            <div className="do-you-believe co-red">
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