import React, {useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import {noop} from 'lodash';
import classNames from 'classnames';
import {getCameraWidth, ASSETS_BASE} from '../../constants';
import HeaderLine from '../BaseComponent/HeaderLine';
import FolderOverlay from '../FolderOverlay';
import TVOverlay from '../TVOverlay';
import Cursor from '../Cursor';
import { init } from './Face-Detection-JavaScript-master/script'
import './styles.scss';

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};
const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const getMaxKeyByValue = (values) => {
    let res = {};
    let max = 0;

    Object.keys(values).forEach((key) => {
        if(values[key] > max) {
            res = key;
            max = values[key];
        }
    });
    return res;
}

const WebCamera = ({ onClick = noop, onCapture = () => null}) => {
    const [imgTaken, setImgTaken] = useState(false);
    const [ready, setReady] = useState(false);
    const [detected, setDetected] = useState({ text: [], box: {
        x: 0, y:0, width: 0, height: 0
    },  factorX: 0, factorY: 0 });
    const cameraRef = React.createRef();
    const webcamRef = React.createRef();

    const takePic = () => {
        setImgTaken(true);
        webcamRef.current.video.pause();
        setTimeout(onClick, 4000);
        capture();
    };

    const onLoad = () => setReady(true);

    const onDetect = (resizedDetections) => {
        const expressionText = [
            `Mode: ${nameCapitalized(getMaxKeyByValue(resizedDetections[0].expressions))}`,
            `Age: ${Math.round(resizedDetections[0].age)}`,
            `Gender: ${nameCapitalized(resizedDetections[0].gender)}`
        ];

        setDetected({
            text: expressionText,
            box: resizedDetections[0].detection.box,
            factorX: resizedDetections[0].alignedRect.imageWidth / 1080,
            factorY: resizedDetections[0].alignedRect.imageHeight / 1920
        });
    }

    useEffect(() => {
        return init(webcamRef.current.video, cameraRef.current, onLoad, onDetect);
    }, []);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log({imageSrc});

            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const mybase64resized = resizeCrop(image, 1080, 1920 ).toDataURL('image/jpg', 90);
                onCapture(mybase64resized)
            }
        },
        [webcamRef]
    );

    const cameraWidth = getCameraWidth();
    return (
        <>
            <TVOverlay/>
            <FolderOverlay/>
            <div className="camera-container">
                <Cursor/>
                    <div className="camera-test" ref={cameraRef} style={{
                        right: cameraWidth * 2
                    }}>
                    <Webcam audio={false} height={videoConstraints.height}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </div>
                <div className="camera-header-container">
                    <HeaderLine/>
                </div>
                <div className="detected-data">
                    {
                        detected.text.map((line, index) => {
                            return (
                                <div key={index}>{line}</div>
                            );
                        })
                    }
                </div>
                <div className="camera-footer-container">
                     <>
                         <p className={classNames('camera-text-smile', { 'display-text': !imgTaken && ready})}>
                             DO NOT forget to <br/> SMILE:)
                         </p>
                         <p className="camera-scan">{!imgTaken ? 'Scan': 'Scanning...'}</p>
                         <p className="camera-scan-details">
                              Hold your position for a better selfie.<br/> It can take a few seconds.
                         </p>
                         <div className="camera-next-btn-container">
                             <button className="camera-next-btn" onClick={takePic}>
                                 {/*<img src={`${ASSETS_BASE}/camera/button.svg`} alt="sol_e"/>*/}
                                 <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <circle cx="69.9998" cy="70.0001" r="57.6471" fill="#FF0000"/>
                                     <circle opacity="0.2" cx="70" cy="70" r="66" stroke="#FF0000" stroke-width="8"/>
                                 </svg>
                             </button>
                         </div>
                     </>
                </div>
            </div>
            {/*<div className={classNames('camera-face-overlay')} style={{*/}
            {/*    'top': `${detected.box.y * detected.factorY}px`,*/}
            {/*    'left': `${(detected.box.x) - 1080 - 100}px`,*/}
            {/*    'width': `${detected.box.width - 16}px`,*/}
            {/*    'height': `${detected.box.height - 16}px`,*/}
            {/*}} />*/}
            <div className={classNames('camera-overlay', { 'take-img': imgTaken})} />
        </>
    );
};

const resizeCrop1 = ( src, width, height ) => {

}

const resizeCrop = ( src, width, height ) => {
    debugger;
    let crop = width === 0 || height === 0;
    // not resize
    if(src.width <= width && height === 0) {
        width  = src.width;
        height = src.height;
    }
    // resize
    if( src.width > width && height === 0){
        height = src.height * (width / src.width);
    }

    // check scale
    const xscale = width  / src.width;
    const yscale = height / src.height;
    const scale  = crop ? Math.min(xscale, yscale) : Math.max(xscale, yscale);
    // create empty canvas
    const canvas = document.createElement("canvas");
    canvas.width  = width ? width   : Math.round(src.width  * scale);
    canvas.height = height ? height : Math.round(src.height * scale);
    canvas.getContext("2d").scale(scale,scale);
    // crop it top center
    canvas.getContext("2d").drawImage(src, ((src.width * scale) - canvas.width) * -.5 , ((src.height * scale) - canvas.height) * -.5 );
    return canvas;
}

const WebCameraHoc = ({ nextStep = noop, isActive = true, onCapture })=> {
    if(!isActive) {
        return null;
    }
    return <WebCamera onClick={nextStep} onCapture={onCapture}/>
}

export default WebCameraHoc;