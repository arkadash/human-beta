import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Loading from '.'
import '../../styles.scss';

export default {
    title: 'Loading',
    component: Loading,
};

export const ToStorybook = () => <div className="sol-e"><Loading/></div>;

ToStorybook.story = {
    name: 'page',
};
