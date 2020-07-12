import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Intro from '.';
import '../../styles.scss';

export default {
    title: 'Intro',
    component: Intro,
};

export const ToStorybook = () => <div className="sol-e"><Intro/></div>;

ToStorybook.story = {
    name: 'page'
};
