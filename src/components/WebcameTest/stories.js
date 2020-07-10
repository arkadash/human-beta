import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Webcamera from '.';
import '../../styles.scss';

export default {
    title: 'Webcamera',
    component: Webcamera,
};

export const ToStorybook = () => <div className="sol-e"><Webcamera/></div>;

ToStorybook.story = {
    name: 'page'
};
