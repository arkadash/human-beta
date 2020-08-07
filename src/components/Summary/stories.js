import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-montserrat';
import Summary from '.';
import '../../styles.scss';
import WelcomeSummaryAngel from './Welcome';

export default {
    title: 'Summary',
    component: Summary,
};

export const ToStorybook = () => <div className="sol-e"><Summary/></div>;

export const WelcomeAngel = () => (
    <div className="sol-e">
        <WelcomeSummaryAngel/>
    </div>
);

ToStorybook.story = {
    name: 'page'
};

WelcomeAngel.story = {
    name: 'Welcome Angel'
};
