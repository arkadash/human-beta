import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Loyal from '.';
import LoyalSlider from '../LieSlider';
import '../../styles.scss';

export default {
    title: 'Loyal',
    component: Loyal,
};

export const ToStorybook = () => <div className="sol-e"><Loyal/></div>;
export const LieSliderStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000', padding: '250px'}}>
        <LoyalSlider/>
    </div>
);



ToStorybook.story = {
    name: 'page',
};

LieSliderStorybook.story = {
    name: 'Loyal Slider'
};
