import React from 'react';
import { noop } from  'lodash';
import classNames from  'classnames';
import './styles.scss';

const ASSETS_BASE = 'assets';

const FolderPageBase = ({header ='', className, nextStep = noop, children}) => {

    return (
        <div className={classNames(className, 'bg-color-black', 'folder-base-page')}>
            <div className="folder-background">

                <header className="base-header">
                    <div className="header-logo">
                        <div className="header-overlay"/>
                        <img src={`${ASSETS_BASE}/logo.png`} alt="sol_e"/>
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
                {children}
            </div>

        </div>
    );
};

export default FolderPageBase;