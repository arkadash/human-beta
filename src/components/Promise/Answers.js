import React, { Component } from 'react';
import { config } from 'react-spring';
import classNames from  'classnames';
import VerticalCarousel from './slide/verticalCarousel';

const slides = [
    {
        key: 1,
        content: "Take"
    },
    {
        key: 2,
        content: "Make"
    },
    {
        key: 3,
        content: "Break"
    }
];

export default class Answers extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    };

    // onChangeInput = e => {
    //   this.setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //   });
    // };

    render() {
        return (
            <div className="answers-container">
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
                <div className={classNames('answers-border', {'btn-selected': this.props.selected})}
                    onClick={this.props.onClick}/>
            </div>
        );
    }
}
