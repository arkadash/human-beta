import React, {useState} from 'react';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Kill = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');

    return (
        <BaseComponent className="kill" {...rest}>
            <div className="kill-container">
                <div className="kill-title">
                    <Typist cursor={{element: '_'}}
                            avgTypingDelay={100}
                            onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        Have<br/>you killed<br/> anyone?
                    </Typist>
                </div>
                <div className={classNames('kill-buttons-wrapper', {'show-buttons': displaySelection})}>
                    <button className={classNames('kill-button-love', {'btn-selected': selected === 'love'})}
                            onClick={() => setSelection('love')}>LOVE</button>
                    <button className={classNames('kill-button-hate', {'btn-selected': selected === 'hate'})}
                            onClick={() => setSelection('hate')}>HATE</button>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Kill;