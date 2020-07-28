import React, {useEffect} from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import Cursor from '../Cursor';
import TVOverlay from '../TVOverlay';
import './styles.scss';
import HeaderLine from "../BaseComponent/HeaderLine";

const Loading = ({
    nextStep = noop,
}) => {
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    nextStep();
                }
                const diff = Math.random() * 2;
                return Math.min(oldProgress + diff, 100);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <>
            <TVOverlay/>
            <Cursor/>
            <div className={classNames('loading-screen', 'bg-color-black')}>
                <header>
                    <HeaderLine/>
                </header>
                <div className="loading-component-body">
                    <div className="loading-bar">
                        <LinearProgress variant="determinate" value={progress} />
                    </div>
                    <div className="loading-num">
                        { Math.round(progress) }%
                    </div>
                </div>
                <footer>
                    <div className="loading-footer-container">
                        <div className="loading-creator-container">
                            <div className="intro-creator">
                                Created by the creator
                            </div>
                        </div>
                        <div className="loading-version-container">
                            <p className="intro-version">
                                Version number 1.8.3
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="loading-screen-overlay"/>
        </>
    );
};

export default Loading;