import React from 'react';
import { noop } from  'lodash';
import classNames from 'classnames';
import './styles.scss';

const LoyalBtn  = ({ onClick = noop, selectedFunc = noop, title, value = 1}) => {
    const selected = selectedFunc(value);
    const click = () => {
        onClick(value);
        selectedFunc(value);
    }

    return (
        <div className="loyal-button-component" onClick={click}>
            <div className="loyal-button-wrapper">
                <button className={classNames('loyal-button', {'loyal-btn-selected': selected})}/>
            </div>
            {title && <div className={classNames('loyal-btn-title')}>
                { title }
            </div> }
        </div>
    )
};

export default LoyalBtn;