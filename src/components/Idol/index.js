import React, {useState} from 'react';
import {noop} from 'lodash';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import IdolBtn from './IdonBtn';
import './styles.scss';

const getSelectedClasses = (selected, key) => {
    if (selected === key) {
        return 'btn-selected';
    }
    if (selected.length > 0) {
        return 'else-btn-selected';
    }
    return '';
};

const Idol = ({nextStep = noop}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setIdolSelection] = useState([]);

    const setSelection = (key) => {
        if (selected.includes(key)) {
            selected.splice(1, selected.indexOf(key));
            setIdolSelection([...selected]);
        } else {
            selected.push(key);
            setIdolSelection([...selected]);
        }
    };

    const baseProps = {
        onClick: setSelection,
        selectedFunc: (key) => {
            selected.includes(key)
        }
    };

    return (
        <BaseComponent className="idol">
            <div className="idol-container">
                <div className="idol-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={1500}/>
                        Who<br/>is your idol
                    </Typist>
                </div>
                <div className={classNames('idol-btn-wrapper', {'show-buttons': displaySelection})}>
                    <div className="buttons-row">
                        <IdolBtn name="FATHER" {...baseProps}/>
                        <IdolBtn name="JUSTIN_BIEBER" alt {...baseProps}/>
                        <IdolBtn name="BUDDHA" {...baseProps}/>
                        <IdolBtn name="BEYONCE" alt {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="THE_ROCK" alt {...baseProps}/>
                        <IdolBtn name="CRISTIANO" {...baseProps}/>
                        <IdolBtn name="ADOLF_HITLER" alt {...baseProps}/>
                        <IdolBtn name="KENDALL_JENNER" {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="KIN_KARDASHIAN" {...baseProps}/>
                        <IdolBtn name="KELLY_JENNER" alt {...baseProps}/>
                        <IdolBtn name="KING_JAMES" {...baseProps}/>
                        <IdolBtn name="MOTHER" alt {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="LEO_MESSI" alt {...baseProps}/>
                        <IdolBtn name="ALBERT_EINSTEIN" {...baseProps}/>
                        <IdolBtn name="ZUCK" alt {...baseProps}/>
                        <IdolBtn name="DONALD_TRUMP" {...baseProps}/>
                    </div>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Idol;