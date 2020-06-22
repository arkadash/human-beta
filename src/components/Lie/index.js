import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import classNames from  'classnames';
import Typist from 'react-typist';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Lie = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelected] = useState(0);

    return (
        <BaseComponent className="lie" {...rest}>
            <div className="lie-container">
                <div className="lie-title">
                    <Typist cursor={{element: '_'}}
                        avgTypingDelay={100}
                        onTypingDone={() => setDisplaySelection(true)}>
                        <Typist.Delay ms={2500}/>
                        How<br/>loyal are you?
                    </Typist>
                </div>
                <div className={classNames('lie-slider-wrapper', {'show-buttons': displaySelection})}>

                </div>
            </div>
        </BaseComponent>
    );
};

export default Lie;