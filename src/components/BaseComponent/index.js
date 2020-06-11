import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import 'animate.css/animate.min.css';
import './styles.scss';

const BaseComponent = ({ nextStep = noop, children}) => {

    return (
        <div className={classNames('base-component', 'bg-color-black')}>
            <header className="base-component-header">
               I'm a header!
            </header>
            <div className="base-component-body">
                {children}
            </div>
            <footer className="base-component-footer">
                I'm a footer!
            </footer>
        </div>
    );
};

export default BaseComponent;