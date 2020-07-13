import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import IntroLoading from '.';
import '../../styles.scss';

export default {
    title: 'IntroLoading',
    component: IntroLoading,
};

export const ToStorybook = () => <div className="sol-e"><IntroLoading/></div>;

ToStorybook.story = {
    name: 'page'
};
