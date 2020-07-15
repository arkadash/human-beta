import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';
import Hart from './hart';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Rich = ({nextStep, ...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelectionState] = useState('');

    const setSelection = (key) => {
        if(selected === key) {
            setSelectionState('');
        } else {
            setSelectionState(key);
        }
        setTimeout(nextStep, 1000);
    }

    return (
        <BaseComponent className="rich" {...rest} num={10}>
            <div className="rich-container">
                <div className="rich-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        What<br/>is your ambition?
                    </Typist>
                </div>
                <div className={classNames('main-image', {
                    'show-image': displaySelection,
                    'selected-rich': selected === 'rich',
                    'selected-happy': selected === 'happy'
                })}>
                    <img src={`${ASSETS_BASE}/rich/jewellery-white 1.png`} alt="sol_e"/>
                    <Hart/>
                </div>
                <div className={classNames('rich-buttons-wrapper', {'show-buttons': displaySelection})}>
                    <button className={classNames('rich-button-happy', {'btn-selected': selected === 'happy'})}
                            onClick={() => setSelection('happy')}>LOVE</button>
                    <button className={classNames('rich-button-rich', {'btn-selected': selected === 'rich'})}
                            onClick={() => setSelection('rich')}>RICH</button>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Rich;