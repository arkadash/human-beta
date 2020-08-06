import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import RestBtn from './RestBtn';
import RestSwitch from './RestSwitch';
import './styles.scss';

const ALL_IDOLS = ["YOUTUBE", "FACEBOOK", "INSTAGRAM", "WHATSAPP", "GOOGLE", "GMAIL", "TWITTER", "LINKDIN", "BITMOJI", "NETFLIX"];

const Rest = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setIdolSelection] = useState([]);
    const [switchSelected, setSwitchSelected] = useState(false);

    const setSelection = (key) => {
        if (selected.includes(key)) {
            selected.splice(selected.indexOf(key), 1);
            setIdolSelection([...selected]);
        } else {
            selected.push(key);
            setIdolSelection([...selected]);
        }
        setSwitchSelected(selected.length === ALL_IDOLS.length);
    };

    const baseProps = {
        onClick: setSelection
    };

    return (
        <BaseComponent className="rest" {...rest} num={4} disableNext={selected.length === 0}>
            <div className="rest-container">
                <div className="rest-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={1500}/>
                        Who rest<br/> on the 7th day?
                    </Typist>
                </div>
                <div className={classNames('rest-btn-wrapper', {'show-buttons': displaySelection})}>
                    <RestBtn name="YOUTUBE" {...baseProps} isSelected={selected.includes("YOUTUBE")}/>
                    <RestBtn name="FACEBOOK" {...baseProps} isSelected={selected.includes("FACEBOOK")}/>
                    <RestBtn name="INSTAGRAM" {...baseProps} isSelected={selected.includes("INSTAGRAM")}/>
                    <RestBtn name="WHATSAPP" {...baseProps} isSelected={selected.includes("WHATSAPP")}/>
                    <RestBtn name="GOOGLE" {...baseProps} isSelected={selected.includes("GOOGLE")}/>
                    <RestBtn name="GMAIL" {...baseProps} isSelected={selected.includes("GMAIL")}/>
                    <RestBtn name="TWITTER" {...baseProps} isSelected={selected.includes("TWITTER")}/>
                    <RestBtn name="LINKDIN" {...baseProps} isSelected={selected.includes("LINKDIN")}/>
                    <RestBtn name="BITMOJI" {...baseProps} isSelected={selected.includes("BITMOJI")}/>
                    <RestBtn name="NETFLIX" {...baseProps} isSelected={selected.includes("NETFLIX")}/>
                </div>
                <div className={classNames('rest-switch', {'show-buttons': displaySelection})}>
                    <RestSwitch checked={switchSelected} onChange={(selectedState) => {
                        selectedState ? setIdolSelection([...ALL_IDOLS]): setIdolSelection([]);
                        setSwitchSelected(selectedState);
                    }}/>
                    <div className="rest-switch-text">
                        {switchSelected ? 'Clear' : 'All'}
                    </div>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Rest;