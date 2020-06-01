import React from 'react';
import { noop } from  'lodash';
import FolderPageBase from '../common/FolderPageBase';
import WorshipBtn from './WorshipBtn';
import './style.scss';

const Worship = ({ nextStep = noop}) => {

    return (
        <FolderPageBase header="Who do you worship?"
            className="worship"
            nextStep={nextStep}>
            <div className="worship-buttons-wrapper">
                <div className="worship-buttons">
                    <WorshipBtn srcKey="FACEBOOK" onClick={nextStep}/>
                    <WorshipBtn srcKey="INSTAGRAM" className='instagram-btn' onClick={nextStep}/>
                    <WorshipBtn srcKey="TWITTER" onClick={nextStep}/>
                </div>
            </div>
        </FolderPageBase>
    );
};

export default Worship;