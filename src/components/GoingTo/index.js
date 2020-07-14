import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import RoundButton from '../RoundfButton';
import './styles.scss';

const GoingTo = ({ nextStep, ...rest }) => {
    const [displaySelection, setDisplaySelection] = useState(false);

    return (
        <>
            <BaseComponent className="going-to"
                {...rest}
                num={0}
                displayNext={false}
                hideProgressBar
                hideBack
                folder={false}>
                <div className="going-to-title">
                    <Typist cursor={{ element: '_' }}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        Are you going to
                    </Typist>
                </div>
                <div className="heaven-button-wrapper">
                    <RoundButton className={classNames('going-button-heaven', {'show-btn': displaySelection})}
                        text="HEAVEN?"/>
                </div>
                <div className={classNames('going-buttons-wrapper', {'show-buttons': displaySelection})}>
                     <RoundButton className={classNames('going-button-enter')}
                        onClick={() => {
                            setTimeout(nextStep, 0);
                        }} text="ENTER"/>
                </div>
            </BaseComponent>
            <div className={classNames('going-to-overlay')}/>
        </>
    );
};

export default GoingTo;