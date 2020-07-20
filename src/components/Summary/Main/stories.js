import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import SummaryMain from '.';
import '../../../styles.scss';

export default {
    title: 'SummaryMain',
    component: SummaryMain,
};

export const ToStorybook = () => <div className="sol-e"><SummaryMain/></div>;

ToStorybook.story = {
    name: 'page'
};
