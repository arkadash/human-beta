import React from 'react';
import './styles.scss';

const Waves = () => {

    return (
        <div className="waves">
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop"/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle"/>
                         {/*style={{'background-image': url('http://front-end-noobs.com/jecko/img/wave-mid.png')}}/>*/}
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom"/>
                         {/*style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"/>*/}
                </div>
            </div>
            <div className="waves-overlay"/>
        </div>
    )
};

export default Waves;