import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Promise from '.';
import '../../styles.scss';

export default {
    title: 'Promise',
    component: Promise,
};

export const ToStorybook = () => <div className="sol-e"><Promise/></div>;

ToStorybook.story = {
    name: 'page',
};
