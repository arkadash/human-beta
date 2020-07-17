import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Main from './Main';
import '../../styles.scss';

export default {
    title: 'Menu',
    component: Main,
};

export const ToStorybook = () => <div className="sol-e"><Main/></div>;

ToStorybook.story = {
    name: 'page',
};
