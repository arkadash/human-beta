import React, { useState } from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import WorshipBtn from './WorshipBtn';
import './style.scss';

const Worship = ({ nextStep = noop}) => {

    return (
        <div className={classNames('worship', 'black-background')}>
            <div className="red-background"/>
            <div className="folder-background"/>
            <header>

            </header>
            <div className="worship-buttons-wrapper">
                <div className="worship-buttons">
                    <WorshipBtn srcKey="FACEBOOK"/>
                    <WorshipBtn srcKey="INSTAGRAM" className='instagram-btn'/>
                    <WorshipBtn srcKey="TWITTER"/>
                </div>
            </div>
        </div>
    );
};

export default Worship;