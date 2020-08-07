import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import HeaderLine from '../HeaderLine';
import Top from '../Top';
import SummaryMenu from '../SummaryMenu';
import SummaryChar from '../SummaryChar';
import SummaryFlow from '../SummaryFlow';
import './styles.scss';

const STAGE = {
    main: 'MAIN',
    flow: 'FLOW',
    char: 'CHAR'
}

const SummaryMain = ({ onImprove, onCertificate, onWelcome, userImage, isAngel = true }) => {
    const [displayMain, setDisplayMain] = useState(false);
    const [stage, setStage] = useState(STAGE.main);

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="summary-statistics-main-container">
                { stage === STAGE.main && <HeaderLine text="Profile." className="header-main" isAngel={isAngel}/> }
                { stage !== STAGE.main && <HeaderLine text="Statistics." onBack={
                    () => setStage(STAGE.main)
                } isAngel={isAngel}/> }
                <Top onLoad={() => setDisplayMain(true)} isAngel={isAngel} onWelcome={onWelcome} userImage={userImage}/>
                <div className={classNames('summary-main', `display-stage-${stage.toLowerCase()}`,
                    { 'display-main': displayMain})}>
                    <SummaryMenu onCertificate={onCertificate}
                        onChar={() => setStage(STAGE.char)}
                        onFlow={() => setStage(STAGE.flow)}
                        onImprove={onImprove}
                        isAngel={isAngel}
                    />
                    <SummaryChar onFlow={() => setStage(STAGE.flow)}/>
                    <SummaryFlow onChar={() => setStage(STAGE.char)}/>
                </div>
            </div>
        </>
    );
};

export default SummaryMain;