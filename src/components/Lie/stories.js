import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Lie from '.';
import LoyalSlider from '../LieSlider';
import '../../styles.scss';

export default {
    title: 'Lie',
    component: Lie,
};

export const ToStorybook = () => <div className="sol-e"><Lie/></div>;
export const LieSliderStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000', padding: '250px'}}>
        <LoyalSlider/>
    </div>
);



ToStorybook.story = {
    name: 'page',
};

LieSliderStorybook.story = {
    name: 'Lie Slider'
};
