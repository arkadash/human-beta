import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Worship from '.';
import '../../styles.scss';

export default {
    title: 'Worship',
    component: Worship,
};

export const ToStorybook = () => <div className="sol-e"><Worship/></div>;

ToStorybook.story = {
    name: 'page'
};
