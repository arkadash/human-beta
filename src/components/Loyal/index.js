import React, {useState} from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';
import BaseComponent from '../BaseComponent';
import LieSlider from '../LieSlider';
import './styles.scss';

const MIN = 1;
const MAX = 99;

export default ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelected] = useState(50);


    const onChange = (value) => {
        let num = Math.min(MAX, value);
        num =  Math.max(MIN, num);
        setSelected(num);
    }
    return (
        <>
            <BaseComponent className="loyal-new" {...rest} num={7}>
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
                        <div className="lie-number-wrapper">
                            <div className="lie-number">{selected}<span>%</span></div>
                        </div>
                        </div>
                        <div className="slider-container">
                            <div className="slider-indication">LOW</div>
                            <LieSlider onChange={onChange}/>
                            <div className="slider-indication">HIGH</div>
                        </div>
                    </div>
                </div>
            </BaseComponent>
        </>
    );
};