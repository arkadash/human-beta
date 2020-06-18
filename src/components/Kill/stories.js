import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Kill from '.';
import '../../styles.scss';

export default {
    title: 'Kill',
    component: Kill,
};

export const ToStorybook = () => <div className="sol-e"><Kill/></div>;


ToStorybook.story = {
    name: 'page',
};
