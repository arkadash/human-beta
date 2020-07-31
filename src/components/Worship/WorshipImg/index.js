import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './styles.scss';

const ASSETS_BASE = 'assets';

const IMAGES_KEY_MAP = {
    FACEBOOK: {
        img: 'facebook.png',
        title: 'Facebook'
    },
    INSTAGRAM: {
        img: 'instagram.png',
        title: 'Instagram'
    },
    TWITTER: {
        img: 'twitter.png',
        title: 'Twitter'
    }
};

const WorshipImg = ({ srcKey = 'FACEBOOK', className = '', selected = false}) => {

    return (
        <div className={classNames('worship-img-container', `worship-btn-${srcKey.toLowerCase()}`)}>
            <div className="img-wrapper">
                <img src={`${ASSETS_BASE}/worship/${IMAGES_KEY_MAP[srcKey].img}`}
                     alt={IMAGES_KEY_MAP[srcKey].title}/>
            </div>
        </div>
    );
};

export default WorshipImg;