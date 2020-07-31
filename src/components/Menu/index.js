import Webcam from 'react-webcam';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {getCameraWidth} from '../../constants';
import Icon from './Icon';
import Main from './Main';
import Cursor from '../Cursor';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

export default () => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    const introRef = React.createRef();

    const [stateOpen, setOpenState] = React.useState();

    const toggleDrawer = (open) => (event) => {
        console.log('Openning menu');
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenState(open);
    };

    return (
        <>
            <div>
                <button onClick={toggleDrawer(true)}>
                    <Icon/>
                </button>
                <Drawer anchor="right" open={stateOpen}
                    onClose={toggleDrawer(false)}>
                    <>
                        <Cursor/>
                        { stateOpen &&
                            <>
                            <div className="menu-camera-container" ref={introRef}>
                                <div className="intro-loading-camera" ref={cameraRef} style={{
                                    right: getCameraWidth()
                                }}>
                                    <Webcam audio={false} height={videoConstraints.height}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            videoConstraints={videoConstraints}
                                            mirrored
                                    />
                                    {/*<div className="menu-diff-overlay"/>*/}
                                </div>
                            </div>
                            {/*<div className="menu-diff-overlay"/>*/}
                            </>
                        }
                        <Main onClick={toggleDrawer}/>
                    </>
                </Drawer>
            </div>
        </>
    );
}