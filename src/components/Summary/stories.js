import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Summary from '.';
import '../../styles.scss';

export default {
    title: 'Summary',
    component: Summary,
};

export const ToStorybook = () => <div className="sol-e"><Summary/></div>;

ToStorybook.story = {
    name: 'page'
};
