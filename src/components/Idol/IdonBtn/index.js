import React from 'react';
import { noop } from  'lodash';
import './style.scss';

const IdolBtn  = ({ onClick = noop }) => {

    return (
        <button onClick={onClick} className="idol-button">
            button
        </button>
    )
};

export default IdolBtn;