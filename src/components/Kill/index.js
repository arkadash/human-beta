import React, {useState, useEffect} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Kill = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelectionState] = useState('');
    const [position, setPosition] = useState('');

    let halfClientWidth;

    const overlayFun = (event) => {
        if(event.clientX < halfClientWidth && position !== 'love') {
            setPosition('love');
        } else if(position !== 'hate') {
            setPosition('hate');
        }
    };

    useEffect(() => {
        const divEl = document.querySelector('.sol-e');

        // eslint-disable-next-line react-hooks/exhaustive-deps
        halfClientWidth = divEl.clientWidth / 2;
        setTimeout(() => {
            divEl.addEventListener('mousemove', overlayFun);
        }, 6000);

        return () => divEl.removeEventListener('mousemove', overlayFun)
    }, []);

    const setSelection = (key) => {
        if(selected === key) {
            setSelectionState('');
        } else {
            setSelectionState(key);
        }
    }

    return (
        <>
            <BaseComponent className="kill" {...rest}>
                <div className="kill-container">
                    <div className="kill-title">
                        <Typist cursor={{element: '_'}}
                                avgTypingDelay={100}
                                onTypingDone={() => setDisplaySelection(true)}>
                            <Typist.Delay ms={2500}/>
                            Have<br/>you killed<br/> anyone?
                        </Typist>
                    </div>
                    <div className={classNames('main-image', {
                        'show-image': displaySelection,
                        'selected-love': selected === 'love',
                        'selected-hate': selected === 'hate'
                    })}>
                        <img src={`${ASSETS_BASE}/kill/glock 1.png`} alt="sol_e"/>
                        { selected === 'rich' && <div className="img-selected-overlay"/> }
                    </div>
                    <div className={classNames('kill-buttons-wrapper', {'show-buttons': displaySelection})}>
                        <button className={classNames('kill-button-love', {'btn-selected': selected === 'love'})}
                                onClick={() => setSelection('love')}>LOVE</button>
                        <button className={classNames('kill-button-hate', {'btn-selected': selected === 'hate'})}
                                onClick={() => setSelection('hate')}>HATE</button>
                    </div>
                </div>
            </BaseComponent>
            <div className={classNames('kill-selection-wrapper',
                {
                    'kill-selection-love': (position === 'love' || selected === 'love') && selected !== 'hate',
                    'kill-selection-hate': (position === 'hate' || selected === 'hate') && selected !== 'love',
                } )}/>
                {/*<div className="kill-selection left-selection" onMouseOver={() => alert('dsa')}/>*/}
                {/*<div className="kill-selection right-selection"/>*/}
            {/*</div>*/}
        </>
    );
};

export default Kill;