import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import LoyalBtn from './LoyalBtn';
import Loyal from '.';
import '../../styles.scss';

export default {
    title: 'LoyalOLD',
    component: Loyal,
};

export const ToStorybook = () => <div className="sol-e"><Loyal/></div>;

export const LoyalBtnStorybook = () => (
    <div className="sol-e" style={{'background-color': '#000', padding: '50px'}}>
        <LoyalBtn onClick={() => alert('Clicked!')}/>
    </div>
);


ToStorybook.story = {
    name: 'page',
};

LoyalBtnStorybook.story = {
    name: 'LoyalOLD Button'
};
