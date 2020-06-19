import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Loyal from '.';
import '../../styles.scss';

export default {
    title: 'Loyal',
    component: Loyal,
};

export const ToStorybook = () => <div className="sol-e"><Loyal/></div>;


ToStorybook.story = {
    name: 'page',
};
