import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import IdolBtn from './IdonBtn';
import './styles.scss';

const Idol = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setIdolSelection] = useState([]);

    const remove = (array, element) => {
        const index = array.indexOf(element);
        array.splice(index, 1);
        return array;
    }

    const setSelection = (key) => {
        if (selected.includes(key)) {
            setIdolSelection(remove([...selected], key));
            // setIdolSelection(selected.filter((current) => current === key));
        } else {
            setIdolSelection(selected.concat(key));
        }
    };

    const baseProps = {
        onClick: setSelection,
        selectedFunc: (key) => {
            selected.includes(key)
        }
    };

    console.log('selected', { len: selected.length, selected })

    return (
        <BaseComponent className="idol" {...rest} num={5} disableNext={selected.length === 0}>
            <div className="idol-container">
                <div className="idol-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        Who<br/>is your idol?
                    </Typist>
                </div>
                <div className={classNames('idol-btn-wrapper', {'show-buttons': displaySelection})}>
                    <div className="buttons-row">
                        <IdolBtn name="FATHER" {...baseProps}/>
                        <IdolBtn name="JUSTIN_BIEBER" {...baseProps}/>
                        <IdolBtn name="BUDDHA" {...baseProps}/>
                        <IdolBtn name="BEYONCE"  {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="THE_ROCK"  {...baseProps}/>
                        <IdolBtn name="CRISTIANO" {...baseProps}/>
                        <IdolBtn name="ADOLF_HITLER"  {...baseProps}/>
                        <IdolBtn name="ARIANA_GRANDE" {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="KIN_KARDASHIAN" {...baseProps}/>
                        <IdolBtn name="KELLY_JENNER"  {...baseProps}/>
                        <IdolBtn name="KING_JAMES" {...baseProps}/>
                        <IdolBtn name="MOTHER"  {...baseProps}/>
                    </div>
                    <div className="buttons-row">
                        <IdolBtn name="LEO_MESSI"  {...baseProps}/>
                        <IdolBtn name="ALBERT_EINSTEIN" {...baseProps}/>
                        <IdolBtn name="ZUCK"  {...baseProps}/>
                        <IdolBtn name="DONALD_TRUMP" {...baseProps}/>
                    </div>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Idol;