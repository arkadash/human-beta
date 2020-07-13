import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {noop} from 'lodash';
import './styles.scss';

const RoundButton = ({ text = 'start', onClick = noop, initialSelected = false, className =''}) => {
    const [selected, setSelectionState] = useState(initialSelected);

    return (
        <button className={classNames('round-button', className, {'selected': selected})}
            onClick={() => {
                setTimeout(() => {
                    onClick(selected);
                }, 1000);
                setSelectionState(!selected);
            }
        }>
            {text}
        </button>
    );
};

export default RoundButton;