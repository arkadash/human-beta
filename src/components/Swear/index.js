import React from 'react';
import { noop } from  'lodash';
import FolderPageBase from '../common/FolderPageBase';
import './styles.scss';

const Swear = ({ nextStep = noop}) => {

    return (
        <FolderPageBase
            className="swear"
            nextStep={nextStep}>
            <div className="swear-wrapper">
                <div className="swear-title">
                    Promises are meant to
                </div>
                <div className="swear-buttons">
                    <button className="swear-button" onClick={nextStep}>
                        Make
                    </button>
                    <button className="swear-button" onClick={nextStep}>
                        Break
                    </button>
                    <button className="swear-button" onClick={nextStep}>
                        Take
                    </button>
                </div>

            </div>
        </FolderPageBase>
    );
};

export default Swear;