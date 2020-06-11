import React from 'react';
import { noop } from  'lodash';
import FolderPageBase from '../common/FolderPageBase';
import './styles.scss';
import IdolBtn from "./IdonBtn";

const Idol = ({ nextStep = noop}) => {

    return (
        <FolderPageBase
            className="idol"
            nextStep={nextStep}
            header="Who is your idol?">
            <div className="idol-wrapper">
                <div className="buttons-row">
                    <IdolBtn name="KING_JAMES" alt/>
                    <IdolBtn name="KIN_KARDASHIAN"/>
                    <IdolBtn name="BUDDHA" alt/>
                    <IdolBtn name="JUSTIN_BIEBER"/>
                    <IdolBtn name="FATHER" alt/>
                </div>
                <div className="buttons-row">
                    <IdolBtn name="MOTHER"/>
                    <IdolBtn name="ADOLF_HITLER" alt/>
                    <IdolBtn name="KELLY_JENNER"/>
                    <IdolBtn name="CRISTIANO" alt/>
                    <IdolBtn name="DONALD_TRUMP"/>
                    <IdolBtn name="KENDALL_JENNER" alt/>
                </div>
                <div className="buttons-row">
                    <IdolBtn name="ALBERT_EINSTEIN"/>
                    <IdolBtn name="THE_ROCK" alt/>
                    <IdolBtn name="LEO_MESSI"/>
                    <IdolBtn name="BEYONCE" alt/>
                    <IdolBtn name="ZUCK" />
                </div>
            </div>
        </FolderPageBase>
    );
};

export default Idol;