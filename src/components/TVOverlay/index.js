import React from 'react';
import classNames from 'classnames';
import {ASSETS_BASE} from "../../constants";
import './styles.scss';

const TVOverlay = ({ className = '' }) => {
    return (
        // <div className="component-tv-overlay"/>
        <img src={`${ASSETS_BASE}/tvOverlay.png`}
             className={classNames('component-tv-overlay-2', className)} alt=""/>

    );
};

export default TVOverlay;