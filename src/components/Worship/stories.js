import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import WorshipBtn from './WorshipBtn';
import Worship from '.';
import '../../style.scss';

export default {
    title: 'Worship',
    component: Worship,
};

export const ToStorybook = () => <div className="sol-e"><Worship/></div>;
export const WorshipBtnStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000'}}>
        <WorshipBtn onClick={() => alert('Clicked!')}/>
    </div>
);

ToStorybook.story = {
    name: 'page'
};

WorshipBtnStorybook.story = {
    name: 'Worship Button'
};

