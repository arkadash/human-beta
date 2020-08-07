import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const FolderOverlay = ({ className = '' }) => {
    return (
        <div className={classNames('component-folder-overlay', className)}/>
    );
};

export default FolderOverlay;