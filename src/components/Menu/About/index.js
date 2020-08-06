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
                    An interactive social project on morality in the digital age. "Sol_e" is a digital platform, in which the user is given the opportunity to go through a testing process that includes a scan and a questionnaire while utilizing the personal database.
                </p>
            </div>
        </div>
    );
}