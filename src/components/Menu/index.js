import Webcam from 'react-webcam';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Icon from './Icon';
import Main from './Main';

const SCREEN_WIDTH = 1080;

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
            {stateOpen &&
                <div className="menu-camera-container" ref={introRef}>
                    <div className="intro-loading-camera" ref={cameraRef} style={{
                        right: -((window.innerWidth + (SCREEN_WIDTH / 2)) / 2)
                    }}>
                        <Webcam audio={false} height={videoConstraints.height}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}/>
                    </div>
                </div>
            }
            <div>
                <button onClick={toggleDrawer(true)}>
                    <Icon/>
                </button>
                <Drawer anchor="right" open={stateOpen}
                    onClose={toggleDrawer(false)}>
                    <Main onClick={toggleDrawer}/>
                </Drawer>
            </div>
        </>
    );
}