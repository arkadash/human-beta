import React, {useState, useEffect} from 'react';
import classNames from  'classnames';
import {ASSETS_BASE} from '../../constants';
import BaseComponent from '../BaseComponent';
import './styles.scss';

const Steal = ({...rest}) => {
    const [displaySelection, setDisplaySelection] = useState(false);
    const [selected, setSelection] = useState('');

    useEffect(() => {
        setTimeout(() => setDisplaySelection(true), 1500)
    }, [])

    const text = '>>“Dont still!”<<';


    return (
        <BaseComponent className="steal" {...rest}>
            <div className="steal-container">
                <div className="steal-title">
                    {text}
                </div>
                <div className={classNames('main-image', {'show-image': displaySelection})}>
                    <img src={`${ASSETS_BASE}/steal/wallet.png`} alt="sol_e"/>
                </div>
                <div className={classNames('steal-buttons-wrapper', {'show-buttons': displaySelection})}>
                    <button className={classNames('steal-button-take', {'btn-selected': selected === 'take'})}
                            onClick={() => setSelection('take')}>TAKE</button>
                    <button className={classNames('steal-button-back', {'btn-selected': selected === 'back'})}
                            onClick={() => setSelection('back')}>BACK</button>
                </div>
            </div>
        </BaseComponent>
    );
};

export default Steal;