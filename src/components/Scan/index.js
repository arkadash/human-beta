import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';
import text from './scanText';
import './styles.scss';

const ASSETS_BASE = 'assets';
const pad = "000000";

const Scan = ({nextStep, userNumber = 666}) => {
    const [displayText, setText] = useState(text + text + text);

    const timeout = setTimeout(() => {
        setText(displayText.substring(50, displayText.length));
        if(displayText.length < 10) {
            clearTimeout(timeout);
        }
    }, 100);

    useEffect(() => {
        setTimeout(nextStep, 10 * 1000)
    }, []);

    const [firstTyping, setFirstTyping] = useState(false);

    const paddedNumber = pad.substring(userNumber.toString().length) + userNumber;
    return (
        <div className={classNames('scan-page', 'bg-color-black')}>
            <header>
                <div className="header-logo">
                    <img src={`${ASSETS_BASE}/logo.png`} alt="Sol-e"/>
                </div>
            </header>
            {/*<div className="welcome-image">*/}
            <div className="welcome-image">
                <div className="welcome-image-wrapper">
                    <img src={`${ASSETS_BASE}/demoFace.png`} alt="Sol-e"/>
                    <div className="welcome-image-text">
                        {displayText}
                    </div>
                </div>
            </div>
            <div className="scan-username co-red">
                <div className="scan-page-welcome">
                    <Typist cursor={{ hideWhenDone: true, element: '_', hideWhenDoneDelay: 1000 }}
                            avgTypingDelay={100}
                            onTypingDone={() => setTimeout(() => setFirstTyping(true), 1000) }>
                        <Typist.Delay ms={500}/>
                        hi,<br/>
                        and welcome user
                    </Typist>
                </div>
                <div className="scan-page-welcome-user">
                    {firstTyping &&
                        <Typist cursor={{element: '_'}} avgTypingDelay={100}>
                            <Typist.Delay ms={700}/>
                            {`No.${paddedNumber}`.replace(/0/gi, "o")}
                        </Typist>
                    }
                </div>
            </div>
    </div>);
};

export default Scan;