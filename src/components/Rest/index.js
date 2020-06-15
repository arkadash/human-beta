import React, {useState} from 'react';
import {noop} from 'lodash';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import RestBtn from './RestBtn';
import './styles.scss';

const Rest = ({nextStep = noop, ...rest}) => {
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
        <BaseComponent className="rest" {...rest}>
            <div className="rest-container">
                <div className="rest-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        Who rest<br/> on the 7th day?
                    </Typist>
                </div>
                <div className={classNames('rest-btn-wrapper', {'show-buttons': displaySelection})}>
                    <RestBtn name="YOUTUBE" {...baseProps}/>
                    <RestBtn name="FACEBOOK" {...baseProps}/>
                    <RestBtn name="INSTAGRAM" {...baseProps}/>
                    <RestBtn name="WHATSAPP" {...baseProps}/>
                    <RestBtn name="GOOGLE" {...baseProps}/>
                    <RestBtn name="GMAIL" {...baseProps}/>
                    <RestBtn name="TWITTER" {...baseProps}/>
                    <RestBtn name="LINKDIN" {...baseProps}/>
                    <RestBtn name="BITMOJI" {...baseProps}/>
                    <RestBtn name="NETFLIX" {...baseProps}/>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Rest;