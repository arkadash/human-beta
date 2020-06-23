import React, {useState} from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';
import BaseComponent from '../BaseComponent';
import LieSlider from './LieSlider';
import './styles.scss';

const IMAGES_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Lie = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelected] = useState(0);


    const onChange = (value) => {
        setSelected(value);
    }

    console.log('render!');
    return (
        <BaseComponent className="lie" {...rest}>
            <div className="lie-container">
                <div className="lie-title">
                    <Typist cursor={{element: '_'}}
                        avgTypingDelay={100}
                        onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        How<br/>loyal are you?
                    </Typist>
                </div>
                <div className={classNames('lie-slider-wrapper', {'show-buttons': displaySelection})}>
                    <div className={classNames('main-image', {
                        'show-image': displaySelection
                    })}>
                        {
                            IMAGES_IDS.map((id) =>
                                <img className={classNames('lie-slider-hand-red', `lie-slider-hand-${id}`,
                                    { 'displayHand': Math.round(selected / 10) >= id })}
                                     src={`${ASSETS_BASE}/lie/handRed.svg`} alt="sol_e"/>
                            )
                        }
                        <img className="main-image-white" src={`${ASSETS_BASE}/lie/handWHITE.svg`} alt="sol_e"/>
                    </div>
                    <>
                    <LieSlider onChange={onChange}/>
                    </>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Lie;