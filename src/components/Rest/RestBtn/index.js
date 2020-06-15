import React, {useState} from 'react';
import { noop } from  'lodash';
import classNames from 'classnames';
import buttonsMap from './buttonsMap';
import './styles.scss';

const RestBtn  = ({ onClick = noop, name = 'FACEBOOK', selectedFunc = noop}) => {
    const [selected, setSelection] = useState(selectedFunc(name));
    const data = buttonsMap[name];
    const title = data.title;

    return (
        <button onClick={() => {
            onClick(name);
            setSelection(!selected);
        }} className={classNames('rest-button', {'rest-selected': selected})}>
            <img src={data.img} alt={title}/>
            <div className={classNames('rest-btn-title')}>
                { title }
            </div>
            <div className={classNames('rest-btn-overlay')}/>
        </button>
    )
};

export default RestBtn;