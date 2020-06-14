import React, {useState} from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const getSelectedClasses = (selected, key) => {
    if(selected === key) {
        return 'btn-selected';
    }
    if (selected.length > 0){
        return 'else-btn-selected';
    }
    return '';
};

const Promise = ({ nextStep = noop}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setPronmiseSelection] = useState('');

    const setSelection = (key) => {
        if(selected === key) {
            setPronmiseSelection('');
        } else {
            setPronmiseSelection(key);
        }
    };

    return (
        <BaseComponent className="promise">
            <div className="promise-container">
                <div className={classNames('button-container', {'show-buttons': displaySelection})}>
                    <button className={
                        classNames('promise-button-take', getSelectedClasses(selected, 'take'))}
                            onClick={() => setSelection('take')}>take</button>
                    <button className={classNames('promise-button-make',  getSelectedClasses(selected, 'make'))}
                            onClick={() => setSelection('make')}>make</button>
                    <button className={classNames('promise-button-break',  getSelectedClasses(selected, 'break'))}
                            onClick={() => setSelection('break')}>break</button>
                </div>
                <div className="promise-title">
                    <Typist cursor={{ element: '_' }}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={1500}/>
                        Promises
                    </Typist>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Promise;