import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Loyal = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');

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
                </div>
            </div>
        </BaseComponent>
    );
};

export default Loyal;