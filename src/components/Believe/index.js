import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './style.scss';

const Believe = ({ nextStep = noop}) => {

    return (
        <div className={classNames('believe', 'dark-red-base-background')}>
            <div className="red-background"/>
            <div className="do-you-believe">
                Do you believe in God?
            </div>
            <div className="do-you-believe-answer">
                <button>
                    Yes
                </button>
                <span className="answers-divider">\</span>
                <button>
                    No
                </button>
            </div>
        </div>
    );
};

export default Believe;