import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import RestBtn from './RestBtn';
import Rest from '.';
import '../../styles.scss';

export default {
    title: 'Rest',
    component: Rest,
};

export const ToStorybook = () => <div className="sol-e"><Rest/></div>;

export const RestBtnStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000', padding: '50px'}}>
        <RestBtn onClick={() => alert('Clicked!')}/>
    </div>
);


ToStorybook.story = {
    name: 'page',
};

RestBtnStorybook.story = {
    name: 'Rest Button'
};
