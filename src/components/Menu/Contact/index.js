import React from 'react';
import {ASSETS_BASE} from "../../../constants";
import './styles.scss';

export default ({onClick = () => null, back = () => null}) => {

    return (
        <div
            className="menu-contact"
            role="presentation"
            // onClick={}
            // onKeyDown={onClick(false)}
        >
            <button className="menu-back" onClick={back}>
                Back
            </button>
            <div className="menu-contact-data">
                <div className="menu-contact-title">
                    CONTACT
                </div>
                <p className="menu-contact-description">
                    636 Golan street<br/>
                    Jerusalem<br/>
                    Israel<br/>
                    +927 55 555 5555
                </p>
                <p className="menu-contact-mail">
                    sol_e@gmail.com
                </p>
                <div className="menu-contact-icon">
                    <img src={`${ASSETS_BASE}/menu/right.svg`} alt="sol_e"/>
                </div>
            </div>
        </div>
    );
}