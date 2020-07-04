import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import RestBtn from './RestBtn';
import RestSwitch from './RestSwitch';
import './styles.scss';

const Rest = ({...rest}) => {
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
                <div className="rest-switch">
                    <RestSwitch/>
                    <div className="rest-switch-text">Clean</div>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Rest;