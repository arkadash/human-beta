import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import IntroStart from '.';
import '../../styles.scss';

export default {
    title: 'IntroStart',
    component: IntroStart
};

export const ToStorybook = () => <div className="sol-e"><IntroStart/></div>;

ToStorybook.story = {
    name: 'page'
};
