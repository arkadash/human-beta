import React, {useState} from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Believe = ({ nextStep = noop}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');

    return (
        <BaseComponent className="believe">
            <div className="believe-title">
                <Typist cursor={{ element: '_' }}
                        avgTypingDelay={100}
                        onTypingDone={() => setDisplaySelection(true)}>
                    <Typist.Delay ms={1500}/>
                    Do you believe in GOD?
                </Typist>
            </div>
            <div className={classNames('believe-buttons-wrapper', {'show-buttons': displaySelection})}>
                <button className={classNames('believe-button-yes', {'btn-selected': selected === 'yes'})}
                    onClick={() => setSelection('yes')}>Yes</button>
                <button className={classNames('believe-button-no', {'btn-selected': selected === 'no'})}
                        onClick={() => setSelection('no')}>No</button>
            </div>
        </BaseComponent>
    );
};

export default Believe;