import React from 'react';
import { noop } from  'lodash';
import Webcam from 'react-webcam';
import FolderPageBase from '../common/FolderPageBase';
import './styles.scss';

const WIDTH = 300;
const HEIGHT = 500;

const videoConstraints = {
    width: WIDTH,
    height: HEIGHT,
    facingMode: "user"
};

const Idol = ({ nextStep = noop}) => {

    return (
        <FolderPageBase
            className="idol"
            nextStep={nextStep}
            header="Take a picture">
            <div className="camera-wrapper">
                <Webcam videoConstraints={videoConstraints} height={HEIGHT} width={WIDTH}/>
            </div>
        </FolderPageBase>
    );
};

export default Idol;