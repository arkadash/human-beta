import React from 'react';
import {ASSETS_BASE} from "../../../constants";
import './styles.scss';

export default ({onClick = () => null, back = () => null}) => {

    return (
        <div
            className="menu-about"
            role="presentation"
            // onClick={}
            // onKeyDown={onClick(false)}
        >
            <button className="menu-back" onClick={back}>
                Back
            </button>
            <div className="menu-about-data">
                <div className="menu-about-title">
                    ABOUT
                </div>
                <div className="menu-about-icon">
                    <img src={`${ASSETS_BASE}/menu/right.svg`} alt="sol_e"/>
                </div>
                <p className="menu-about-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi cras amet facilisis adipiscing sit. Placerat sed vel euismod.
                </p>
            </div>
        </div>
    );
}