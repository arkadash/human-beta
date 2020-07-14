import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import GoingTo from '.';
import '../../styles.scss';

export default {
    title: 'GoingTo',
    component: GoingTo,
};

export const ToStorybook = () => <div className="sol-e"><GoingTo/></div>;

ToStorybook.story = {
    name: 'page',
};
