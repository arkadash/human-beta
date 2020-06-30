import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './styles.scss';

const IMAGES_KEY_MAP = {
    FACEBOOK: {
        img: 'album.png',
        title: 'Facebook'
    },
    INSTAGRAM: {
        img: 'history.png',
        title: 'Instagram'
    },
    TWITTER: {
        img: 'bird-clipart.png',
        title: 'Twitter'
    }
};

const WorshipBtnName = ({ srcKey = 'TWITTER', onClick = noop, className = '', selected = false}) => {

    return (
        <div className={classNames('worship-btn-name-container', `worship-btn-${srcKey.toLowerCase()}`)}>
            <button className={classNames('worship-button', className, { 'btn-selected': selected })}
                onClick={() => onClick(srcKey)}>
                {IMAGES_KEY_MAP[srcKey].title}
            </button>
        </div>
    );
};

export default WorshipBtnName;