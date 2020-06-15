import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';

import WorshipBtn from './WorshipBtn';
import './styles.scss';

const Worship = ({ ...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const onClick = (key) => {
        if(key === selected) {
            setSelection('')
        } else {
            setSelection(key)
        }
    };

    const next = () => currentSlide === 2 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    const prev = () => currentSlide === 0 ? setCurrentSlide(2) : setCurrentSlide(currentSlide - 1);

    return (
        <BaseComponent className="worship" {...rest}>
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
                <Carousel showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    autoPlay={false}
                    selectedItem={currentSlide}>
                    <WorshipBtn onClick={onClick} selected={selected === "FACEBOOK"} next={next} prev={prev} srcKey="FACEBOOK"/>
                    <WorshipBtn onClick={onClick} selected={selected === "TWITTER"} next={next} prev={prev} srcKey="TWITTER"/>
                    <WorshipBtn onClick={onClick} selected={selected === "INSTAGRAM"} next={next} prev={prev} srcKey="INSTAGRAM"/>
                </Carousel>
            </div>
        </BaseComponent>
    );
};

export default Worship;