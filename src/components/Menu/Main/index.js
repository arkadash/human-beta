import React, {useState} from 'react';
import { noop } from 'lodash';
import {ASSETS_BASE} from '../../../constants';
import TVOverlay from '../../TVOverlay';
import Contact from '../Contact';
import About from '../About';
import './styles.scss';

export const STATES = {
    main: 'MAIN',
    contact: 'CONTACT',
    about: 'ABOUT',
}

const MenuLink = ({ name, onClick = noop }) => {
    return (
        <div className="menu-link" onClick={onClick}>
            {name}
            <div className="menu-link-icon">
                <img src={`${ASSETS_BASE}/menu/right.svg`} alt="sol_e"/>
            </div>
        </div>
    );
}

const Initial = ({ onClick = noop, changeState = noop}) => {
    return (
        <div
            className="menu-main"
            role="presentation"
            // onClick={}
            // onKeyDown={onClick(false)}
        >
            <div className="menu-links">
                <MenuLink name="ABOUT" onClick={() => changeState(STATES.about)}/>
                <MenuLink name="CONTACT" onClick={() => changeState(STATES.contact)}/>
                <MenuLink name="RESTART" onClick={() => {
                    window.location.reload();
                }}/>
            </div>
        </div>
    )
}

export default ({ onClick = () => noop }) => {

    const [currentState, setCurrentState] = useState(STATES.main);
    const back = () => setCurrentState(STATES.main);

    const getBody = () => {
        if (currentState === STATES.main) {
            return <Initial onClick={onClick(false)} changeState={setCurrentState}/>
        }
        if (currentState === STATES.contact) {
            return <Contact onClick={onClick(false)} back={back}/>
        }
        if (currentState === STATES.about) {
            return <About onClick={onClick(false)} back={back}/>
        }
        return null;
    }
    return (
        <>
            <TVOverlay/>
            <div className="menu-container">
                <div className="menu-title">
                    <div className="menu-title-text">
                        Menu
                    </div>
                    <div className="menu-close-btn" onClick={onClick(false)}>
                        <img src={`${ASSETS_BASE}/menu/close.svg`} alt="sol_e"/>
                    </div>
                </div>
                { getBody() }
            </div>
        </>
    )
}