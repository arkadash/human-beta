import React from 'react';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

const AngelOverlay = () => {
    return (
        <img src={`${ASSETS_BASE}/summary/animations/ANGEL_ANIMATE.gif`} alt="" className="summary-angel-gif"/>
    );
};

export default AngelOverlay;