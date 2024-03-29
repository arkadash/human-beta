import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Believe = ({ nextStep, onSetBelieveValue = () => null, ...rest }) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setBtnSelection] = useState('');

    const setSelection = (state) => {
        onSetBelieveValue(state)
        setBtnSelection(state);
        setTimeout(nextStep, 500);
    }

    return (
        <BaseComponent className="believe" {...rest} num={1} displayNext={false} disableBack={true}>
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
                    onClick={() => setSelection('yes')}>YES</button>
                <button className={classNames('believe-button-no', {'btn-selected': selected === 'no'})}
                        onClick={() => setSelection('no')}>NO</button>
            </div>
        </BaseComponent>
    );
};

export default Believe;