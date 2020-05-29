import React from 'react';
import 'typeface-roboto'
import Believe from '.';
import '../../style.scss';

export default {
    title: 'Believe',
    component: Believe,
};

export const ToStorybook = () => <div className="sol-e"><Believe/></div>;

ToStorybook.story = {
    name: 'page',
};
