import React from 'react';
import PropTypes from 'prop-types';
import Slide from '.';
import Arrow from './Arrow';

function mod(a, b) {
    return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
    state = {
        index: 0,
        goToSlide: null,
        prevPropsGoToSlide: 0,
        newSlide: false
    };


    static propTypes = {
        slides: PropTypes.arrayOf(
            PropTypes.shape({
                key: PropTypes.any,
                content: PropTypes.object
            })
        ).isRequired,
        goToSlide: PropTypes.number,
        showNavigation: PropTypes.bool,
        offsetRadius: PropTypes.number,
        animationConfig: PropTypes.object
    };

    static defaultProps = {
        offsetRadius: 2,
        animationConfig: {tension: 120, friction: 14}
    };

    modBySlidesLength = index => {
        return mod(index, this.props.slides.length);
    };

    moveSlide = direction => {
        this.setState({
            index: this.modBySlidesLength(this.state.index + direction),
            goToSlide: null
        });
    };

    clampOffsetRadius(offsetRadius) {
        const {slides} = this.props;
        const upperBound = Math.floor((slides.length - 1) / 2);

        if (offsetRadius < 0) {
            return 0;
        }
        if (offsetRadius > upperBound) {
            return upperBound;
        }

        return offsetRadius;
    }

    getPresentableSlides() {
        const {slides} = this.props;
        const {index} = this.state;
        let {offsetRadius} = this.props;
        offsetRadius = this.clampOffsetRadius(offsetRadius);
        const presentableSlides = new Array();

        for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
            presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
        }

        return presentableSlides;
    }

    render() {
        const {animationConfig, offsetRadius} = this.props;

        return (
            <>
                <div className="list-slider-picker">
                    <div className="slide-arrow slide-up" onClick={() => this.moveSlide(-1)}>
                        <Arrow/>
                    </div>
                    {this.getPresentableSlides().map((slide, presentableIndex) => (
                        <Slide
                            key={slide.key}
                            content={slide.content}
                            moveSlide={this.moveSlide}
                            offsetRadius={this.clampOffsetRadius(offsetRadius)}
                            index={presentableIndex}
                            animationConfig={animationConfig}
                        />
                    ))}
                    <div className="slide-arrow slide-down" onClick={() => this.moveSlide(1)}>
                        <Arrow/>
                    </div>
                </div>
            </>
        );
    }
}

export default VerticalCarousel;
