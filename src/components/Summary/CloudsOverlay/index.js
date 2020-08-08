import React from 'react';
import classNames from  'classnames';
import {ASSETS_BASE} from '../../../constants';
import './styles.scss';

const CloudsOverlay = ({blur = false, isAngel = true}) => {
    return (
        <>
        {
            isAngel ?
                <img
                    src={`${ASSETS_BASE}/summary/cloud/angel.png`}
                    alt=""
                    className={classNames('summary-angel-clouds', {'is-blur': blur})}/>:
                <div className="summary-demon-clouds">
                    <img
                        src={`${ASSETS_BASE}/summary/cloud/Subtract.png`} alt=""
                        className={classNames('black-cloud-overlay', {'is-blur': blur})}/>
                    <img
                        src={`${ASSETS_BASE}/summary/cloud/red-cloud.png`} alt=""
                        className={classNames({'is-blur': blur})}/>
                    <img
                        src={`${ASSETS_BASE}/summary/cloud/red-cloud-overlay.png`} alt=""
                        className={classNames('red-cloud-overlay', {'is-blur': blur})}/>
                </div>
        }
        </>
    );
};

export default CloudsOverlay;