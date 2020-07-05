import React, {useState} from 'react';
import { noop } from  'lodash';
import classNames from 'classnames';
import buttonsMap from './buttonsMap';
import './styles.scss';

const RestBtn  = ({ onClick = noop, name = 'FACEBOOK', isSelected = false}) => {
    const data = buttonsMap[name];
    const title = data.title;

    return (
        <button onClick={() => {
            onClick(name);
        }} className={classNames('rest-button', {'rest-selected': isSelected})}>
            <div className="rest-img-wrapper">
                <img src={data.img} alt={title} className={`res-img-${name.toLowerCase()}`}/>
                <div className={classNames('rest-btn-overlay')}/>
            </div>
            <div className={classNames('rest-btn-title')}>
                { title }
            </div>
        </button>
    )
};

export default RestBtn;