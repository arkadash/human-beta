import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import BaseComponent from '.'
import '../../styles.scss';

export default {
    title: 'BaseComponent',
    component: BaseComponent,
};

export const ToStorybook = () => <div className="sol-e"><BaseComponent/></div>;

ToStorybook.story = {
    name: 'page',
};
