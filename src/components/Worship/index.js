import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from  'classnames';
import Typist from 'react-typist';
import {ASSETS_BASE} from '../../constants';

import BaseComponent from '../BaseComponent';
import WorshipBtnName from './WorshipBtnName';
import WorshipImg from './WorshipImg';
import './styles.scss';

const Worship = ({ nextStep, ...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');
    const hiddenPrev = React.createRef();
    const hiddenNext = React.createRef();

    const onClick = (key) => {
        if(key === selected) {
            setSelection('')
        } else {
            setSelection(key)
        }
        setTimeout(() => {
            nextStep();
        }, 1000);
    };

    return (
        <BaseComponent className="worship" {...rest} num={2} displayNext={false}>
            <div className="worship-title">
                <Typist cursor={{ element: '_' }}
                        avgTypingDelay={100}
                        onTypingDone={() => setDisplaySelection(true)}>
                    <Typist.Delay ms={2500}/>
                    Who<br/>
                    do you worship?
                </Typist>
            </div>
            <div className={classNames('worship-buttons-wrapper', {'show-buttons': displaySelection})}>
                <Carousel
                    className="worship-images"
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay={false}
                    renderArrowNext={
                        (onClickHandler, hasNext, label) => (
                            <button onClick={onClickHandler} className="btn-hidden" ref={hiddenNext}/>
                        )
                    }
                    renderArrowPrev={
                        (onClickHandler, hasNext, label) => (
                            <button onClick={onClickHandler} className="btn-hidden" ref={hiddenPrev}/>
                        )
                    }>
                    <WorshipImg selected={selected === "FACEBOOK"} srcKey="FACEBOOK"/>
                    <WorshipImg selected={selected === "TWITTER"} srcKey="TWITTER"/>
                    <WorshipImg selected={selected === "INSTAGRAM"} srcKey="INSTAGRAM"/>
                </Carousel>

                <Carousel
                    className="worship-buttons-container"
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    renderArrowNext={
                        (onClickHandler, hasNext, label) => (
                            <button onClick={(...props) => {
                                onClickHandler(...props);
                                hiddenNext.current.click();
                            }} className="btn-next">
                                <img src={`${ASSETS_BASE}/worship/button.png`} alt="next" className="img-next"/>
                            </button>
                        )
                    }
                    renderArrowPrev={
                        (onClickHandler, hasNext, label) => (
                            <button onClick={(...props) => {
                                onClickHandler(...props);
                                hiddenPrev.current.click();
                            }} className="btn-prev">
                                <img src={`${ASSETS_BASE}/worship/button.png`} alt="prev"/>
                            </button>
                        )
                    }>
                    <WorshipBtnName
                        onClick={onClick} selected={selected === "FACEBOOK"} srcKey="FACEBOOK"
                    />
                    <WorshipBtnName
                        onClick={onClick} selected={selected === "TWITTER"} srcKey="TWITTER"/>
                    <WorshipBtnName
                        onClick={onClick} selected={selected === "INSTAGRAM"} srcKey="INSTAGRAM"/>
                </Carousel>
            </div>
        </BaseComponent>
    );
};

export default Worship;