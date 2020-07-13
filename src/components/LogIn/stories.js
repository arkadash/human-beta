import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import LogIn from '.';
import '../../styles.scss';

export default {
    title: 'LogIn',
    component: LogIn,
};

export const ToStorybook = () => <div className="sol-e"><LogIn/></div>;

ToStorybook.story = {
    name: 'page'
};
