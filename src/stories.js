import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import App from './App'

export default {
    title: 'Main',
    component: App,
};

export const ToStorybook = () => <App/>;

ToStorybook.story = {
    name: 'page',
};
