import React from 'react';
import {ASSETS_BASE} from "../../../constants";
import './styles.scss';

const MenuLink = ({ name }) => {
    return (
        <div className="menu-link" onClick={(event) => {
            event.preventDefault();
        }}>
            {name}
            <div className="menu-link-icon">
                <img src={`${ASSETS_BASE}/menu/right.svg`} alt="sol_e"/>
            </div>
        </div>
    );
}

export default ({ onClick = () => () => null }) => {

    return (
        <div
        className="menu-main"
        role="presentation"
        // onClick={}
        // onKeyDown={onClick(false)}
    >
            <div className="menu-title">
                <div className="menu-title-text">
                    Menu
                </div>
                <div className="menu-close-btn" onClick={onClick(false)}>
                    <img src={`${ASSETS_BASE}/menu/close.svg`} alt="sol_e"/>
                </div>
            </div>
            <div className="menu-links">
                <MenuLink name="ABOUT"/>
                <MenuLink name="CONTACT"/>
                <MenuLink name="EXIT"/>
            </div>
    </div>
    );
}