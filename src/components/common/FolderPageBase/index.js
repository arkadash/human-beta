import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './style.scss';

const ASSETS_BASE = 'assets';

const FolderPageBase = ({header ='', className, nextStep = noop, children}) => {

    return (
        <div className={classNames(className, 'black-background')}>
            <div className="red-background"/>
            <div className="folder-background"/>
           {children}
            <header className="header">
                <div className="header-logo">
                    <img src={`${ASSETS_BASE}/logo.png`}/>
                 </div>
                <div className="header-title">{header}</div>
                <div className="header-user">
                    <div className="header-user-details">
                        <div className="header-user-name">User</div>
                        <div className="header-user-details">No.123456</div>
                    </div>
                    <div className="header-user-img">
                        <div className="header-user-img-overlay"/>
                        <img src={`${ASSETS_BASE}/face.jpeg`}/>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default FolderPageBase;