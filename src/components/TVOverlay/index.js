import React from 'react';
import './styles.scss';
import {ASSETS_BASE} from "../../constants";

const TVOverlay = () => {
    return (
        // <div className="component-tv-overlay"/>
        <img src={`${ASSETS_BASE}/tvOverlay.png`}
             className="component-tv-overlay-2" alt=""/>

    );
};

export default TVOverlay;