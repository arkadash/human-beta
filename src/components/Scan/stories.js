import React from 'react';
import '../../style.scss';
import Scan from '.';


export default {
    title: 'Scan',
    component: Scan,
};

export const ToStorybook = () => <div className="sol-e"><Scan/></div>;

ToStorybook.story = {
    name: 'page',
};
