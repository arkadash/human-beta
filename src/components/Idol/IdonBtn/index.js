import React, {useState} from 'react';
import { noop } from  'lodash';
import classNames from 'classnames';
import buttonsMap from './buttonsMap';
import './styles.scss';

const IdolBtn  = ({ onClick = noop, name = 'KIN_KARDASHIAN', selectedFunc = noop}) => {
    const [selected, setSelection] = useState(selectedFunc(name));
    const data = buttonsMap[name];
    const title = data.title;

    return (
        <button onClick={() => {
            onClick(name);
            setSelection(!selected);
        }} className={classNames('idol-button',
            {'idol-button-with-image': data.img, 'idol-selected': selected, 'idol-button-no-image': !data.img})}>
            <div className={classNames('idol-img-container', `idol-img-container-${name.toLowerCase().replace('_', '-')}`)}>
                {data.img &&
                    <img src={selected ? data.imgClicked: data.img} alt={title}/>
                }
            </div>
            <div className={classNames('idol-btn-title')}>
                { title }
            </div>
        </button>
    )
};

export default IdolBtn;