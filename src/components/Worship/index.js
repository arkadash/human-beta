import React, { useState } from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import WorshipBtn from './WorshipBtn';
import './style.scss';

const ASSETS_BASE = 'assets';

const Worship = ({ nextStep = noop}) => {

    return (
        <div className={classNames('worship', 'black-background')}>
            <div className="red-background"/>
            <div className="folder-background"/>
            <div className="worship-buttons-wrapper">
                <div className="worship-buttons">
                    <WorshipBtn srcKey="FACEBOOK"/>
                    <WorshipBtn srcKey="INSTAGRAM" className='instagram-btn'/>
                    <WorshipBtn srcKey="TWITTER"/>
                </div>
            </div>
            <header className="header">
                <div className="header-logo">
                    <img src={`${ASSETS_BASE}/logo.png`}/>
                 </div>
                <div className="header-title">Who do you worship?</div>
                <div className="header-user">
                    <div className="header-user-details">
                        <div className="header-user-name">User</div>
                        <div className="header-user-details">No.123456</div>
                    </div>
                    <div className="header-user-img">
                        <div className="header-user-img-overlay"/>
                        <img src={`${ASSETS_BASE}/face.jpeg`}/>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Worship;