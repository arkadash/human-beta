import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import IdolBtn from './IdonBtn';
import Idol from '.';
import '../../styles.scss';

export default {
    title: 'Idol',
    component: Idol,
};

export const ToStorybook = () => <div className="sol-e"><Idol/></div>;

export const IdolBtnStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000', padding: '50px'}}>
        <IdolBtn onClick={() => alert('Clicked!')}/>
    </div>
);


ToStorybook.story = {
    name: 'page',
};

IdolBtnStorybook.story = {
    name: 'Idol Button'
};
