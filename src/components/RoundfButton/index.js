import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {noop} from 'lodash';
import './styles.scss';

const RoundButton = ({ text = 'start', onClick = noop, initialSelected = false}) => {
    const [selected, setSelectionState] = useState(initialSelected);

    return (
        <button className={classNames('round-button', {'selected': selected})} onClick={
            () => {
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