import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';
import LoyalBtn from "./LoyalBtn";

const Loyal = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelected] = useState(0);

    const btnProps = {
        selectedFunc: (value) => value === selected,
        onClick: (value) => {
            if(value === selected) {
                setSelected(0);
            } else {
                setSelected(value);
            }
        }
    }

    return (
        <BaseComponent className="loyal" {...rest}>
            <div className="loyal-container">
                <div className="loyal-title">
                    <Typist cursor={{element: '_'}}
                        avgTypingDelay={100}
                        onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        How<br/>loyal are you?
                    </Typist>
                </div>
                <div className={classNames('loyal-buttons-wrapper', {'show-buttons': displaySelection})}>
                    <LoyalBtn value={1} {...btnProps} title="LOW"/>
                    <LoyalBtn value={2} {...btnProps}/>
                    <LoyalBtn value={3} {...btnProps}/>
                    <LoyalBtn value={4} {...btnProps}/>
                    <LoyalBtn value={5} {...btnProps} title="HIGH"/>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Loyal;