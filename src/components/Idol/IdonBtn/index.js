import React from 'react';
import { noop } from  'lodash';
import classNames from 'classnames';
import buttonsMap from './buttonsMap';
import './styles.scss';

const IdolBtn  = ({ onClick = noop, name = 'KIN_KARDASHIAN', alt = false }) => {
    const data = buttonsMap[name];
    const title = data.title;
    const multipleWords = title.split(' ').length > 1 && title.length > 12;

    return (
        <button onClick={onClick} className={classNames('idol-button', {'idol-button-with-image': data.img})}>
            {data.img &&
                <>
                    <img src={data.img} alt={title}/>
                    <div className={classNames('idol-image-overlay', {'idol-image-overlay-alt': alt})}/>
                </>
            }
            <div className={classNames('idol-title', {'idol-title-two-words': multipleWords})}>
                { title }
            </div>
        </button>
    )
};

export default IdolBtn;