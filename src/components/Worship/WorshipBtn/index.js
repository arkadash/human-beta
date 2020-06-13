import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './styles.scss';

const ASSETS_BASE = 'assets';

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

const WorshipBtn = ({ srcKey = 'FACEBOOK', onClick = noop, next = noop, prev = noop, className = '', selected = false}) => {

    return (
        <div className={classNames('worship-btn-container', `worship-btn-${srcKey.toLowerCase()}`)}>
            <div className="img-wrapper">
                <img src={`${ASSETS_BASE}/${IMAGES_KEY_MAP[srcKey].img}`}
                     alt={IMAGES_KEY_MAP[srcKey].title}/>
                { selected && <div className="img-selected-overlay"/> }
            </div>
            <div className="btn-container">
                <button onClick={prev} className="btn-prev">
                    <img src={`${ASSETS_BASE}/right.png`} alt="prev"/>
                </button>
                { selected && <div className="img-selected-overlay"/> }
                <button className={classNames('worship-button', className, { 'btn-selected': selected })}
                    onClick={() => onClick(srcKey)}>
                    {IMAGES_KEY_MAP[srcKey].title}
                </button>
                <button onClick={next} className="btn-next">
                    <img src={`${ASSETS_BASE}/right.png`} alt="next" className="img-next"/>
                </button>
            </div>
        </div>
    );
};

export default WorshipBtn;