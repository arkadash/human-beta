import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Steal from '.';
import '../../styles.scss';

export default {
    title: 'Steal',
    component: Steal,
};

export const ToStorybook = () => <div className="sol-e"><Steal/></div>;


ToStorybook.story = {
    name: 'page',
};
