import React, {useEffect} from 'react';
import Webcam from 'react-webcam';
import { init } from './Face-Detection-JavaScript-master/script'
import './styles.scss';

const videoConstraints = {
    width: window.outerWidth,
    height: window.outerHeight,
    facingMode: "environment"
};

const WebCamera = () => {
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();
    useEffect(() => {
        init(webcamRef.current.video, cameraRef.current);
    }, []);

    return (
        <div className="camera-test" ref={cameraRef}>
            <Webcam  audio={false} height={videoConstraints.height}
                 ref={webcamRef}
                 screenshotFormat="image/jpeg"
                 videoConstraints={videoConstraints}/>
            {/*<video id="video" width="720" height="1920" autoPlay muted/>*/}
        </div>
    );
};

export default WebCamera;