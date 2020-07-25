import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import SummaryStatistics from '.';
import '../../../../styles.scss';

export default {
    title: 'SummaryStatisticsChar',
    component: SummaryStatistics,
};

export const ToStorybook = () => <div className="sol-e"><SummaryStatistics/></div>;

ToStorybook.story = {
    name: 'page'
};
