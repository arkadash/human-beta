import React, {useState, useEffect} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Steal = ({nextStep, ...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [firstBackSelection, setFirstBackSelection] = useState(false);
    const [selected, setSelectionState] = useState('');
    const [position, setPosition] = useState('');

    let halfClientWidth;

    const overlayFun = (event) => {
        if(event.clientX < halfClientWidth && position !== 'back') {
            setPosition('back');
        } else if(position !== 'take') {
            setPosition('take');
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
        if(key === 'back' && !firstBackSelection) {
            setFirstBackSelection(true);
        } else if(selected === key) {
            setSelectionState('');
        } else {
            setSelectionState(key);
        }
        setTimeout(nextStep, 1000);
    }

    return (
        <>
            <BaseComponent className="steal" {...rest} num={8}>
                <div className="steal-container">
                    <div className="steal-title">
                        {!firstBackSelection ?
                            <Typist cursor={{element: '_'}}
                                    avgTypingDelay={100}
                                    onTypingDone={() => setDisplaySelection(true)}>
                                <Typist.Delay ms={2500}/>
                                Will you<br/>return a 20$ purse?
                                {firstBackSelection && <span>Some text</span>

                                }
                            </Typist> :
                            <span className="second-back-click">
                                  Will you<Typist cursor={{element: '_'}}
                                        avgTypingDelay={100}>
                                    return a 20$ purse?
                                    <Typist.Backspace count={10} delay={300}/>
                                    2000$ purse?
                                </Typist>
                            </span>
                        }
                    </div>
                    <div className={classNames('main-image', {
                        'show-image': displaySelection,
                        'selected-back': selected === 'back',
                        'selected-take': selected === 'take'
                    })}>
                        <img src={`${ASSETS_BASE}/steal/wallet2.png`} alt="sol_e"/>
                        { selected === 'rich' && <div className="img-selected-overlay"/> }
                    </div>
                    <div className={classNames('steal-buttons-wrapper', {'show-buttons': displaySelection})}>
                        <button className={classNames('steal-button-back', {'btn-selected': selected === 'back'})}
                                onClick={() => setSelection('back')}>BACK</button>
                        <button className={classNames('steal-button-take', {'btn-selected': selected === 'take'})}
                                onClick={() => setSelection('take')}>TAKE</button>
                    </div>
                </div>
            </BaseComponent>
            <div className={classNames('steal-selection-wrapper',
                {
                    'steal-selection-back': (position === 'back' || selected === 'back') && selected !== 'take',
                    'steal-selection-take': (position === 'take' || selected === 'take') && selected !== 'back',
                }
            )}/>
        </>
    );
};

export default Steal;