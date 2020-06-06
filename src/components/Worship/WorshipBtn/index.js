import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './styles.scss';

const ASSETS_BASE = 'assets';

const IMAGES_KEY_MAP = {
    FACEBOOK: {
        img: 'album-resized 1.png',
        title: 'Facebook'
    },
    INSTAGRAM: {
        img: 'history_06 1.png',
        title: 'Instagram'
    },
    TWITTER: {
        img: 'bird-clipart-real-8 1.png',
        title: 'Twitter'
    }
};

const WorshipBtn = ({ srcKey = 'FACEBOOK', onClick = noop, className = ''}) => {

    return (
        <button className={classNames('worship-button', className)}
                onClick={onClick}>
            <img src={`${ASSETS_BASE}/${IMAGES_KEY_MAP[srcKey].img}`}
                alt={IMAGES_KEY_MAP[srcKey].title}/>

            <div className="button-wrapper">
                <div className="worship-text">
                    {IMAGES_KEY_MAP[srcKey].title}
                </div>
            </div>
        </button>
    );
};

export default WorshipBtn;