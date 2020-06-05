import React from 'react';
import { noop } from  'lodash';
import Webcam from 'react-webcam';
import FolderPageBase from '../common/FolderPageBase';
import './styles.scss';

const Idol = ({ nextStep = noop}) => {

    return (
        <FolderPageBase
            className="idol"
            nextStep={nextStep}
            header="Take a picture">
            <div className="camera-wrapper" style={{
                position: 'absolute',
                width: '400px',
                height: '400px'}}>
                <Webcam/>

            </div>
        </FolderPageBase>
    );
};

export default Idol;