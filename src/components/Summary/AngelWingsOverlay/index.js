import React from 'react';
import classNames from  'classnames';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

const AngelOverlay = ({blur = false, isAngel = true}) => {
    return (
        <img src={isAngel? `${ASSETS_BASE}/summary/animations/ANGEL_ANIMATE.gif`: `${ASSETS_BASE}/summary/animations/DEMON_ANIMATE.gif` }
             alt=""
            className={classNames('summary-angel-gif', {'is-blur': blur})}/>
    );
};

export default AngelOverlay;