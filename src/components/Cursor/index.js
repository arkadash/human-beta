import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './styles.scss';

export default ({ difference = true }) => {
    const [position, setPosition] = useState(
        {pageY: '50%', pageX: '50%'}
    );

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setPosition({
                pageX: e.pageX,
                pageY: e.pageY
            });
        })
    }, []);

    return (
        <div className={classNames('cursor', { 'cursor-difference': difference })} style={{top: position.pageY, left: position.pageX }}>
            <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="#FF0000" stroke-width="4"/>
                <circle r="8.57143" transform="matrix(1 0 0 -1 60 60)" fill="#FF0000"/>
            </svg>
        </div>
    )
};