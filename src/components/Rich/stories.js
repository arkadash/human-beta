import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Rich from '.';
import '../../styles.scss';

export default {
    title: 'Rich',
    component: Rich,
};

export const ToStorybook = () => <div className="sol-e"><Rich/></div>;


ToStorybook.story = {
    name: 'page',
};
