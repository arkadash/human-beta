import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Swear from '.';

export default {
    title: 'Swear',
    component: Swear,
};

export const ToStorybook = () => <div className="sol-e"><Swear/></div>;

ToStorybook.story = {
    name: 'page'
};
