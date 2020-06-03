import React from 'react';
import { noop } from  'lodash';
import FolderPageBase from '../common/FolderPageBase';
import './style.scss';

const Idol = ({ nextStep = noop}) => {

    return (
        <FolderPageBase
            className="idol"
            nextStep={nextStep}
            header="Who is your idol?">
            <div className="idol-wrapper">

            </div>
        </FolderPageBase>
    );
};

export default Idol;