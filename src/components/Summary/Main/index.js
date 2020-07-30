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

const SummaryMain = ({ onImprove, onCertificate }) => {
    const [displayMain, setDisplayMain] = useState(false);
    const [stage, setStage] = useState(STAGE.main);

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="summary-statistics-main-container">
                { stage === STAGE.main && <HeaderLine text="Profile." className="header-main"/> }
                { stage !== STAGE.main && <HeaderLine text="Statistics." onBack={
                    () => setStage(STAGE.main)
                }/> }

                <Top onLoad={() => setDisplayMain(true)}/>
                <div className={classNames('summary-main', `display-stage-${stage.toLowerCase()}`,
                    { 'display-main': displayMain})}>
                    <SummaryMenu onCertificate={onCertificate}
                        onChar={() => setStage(STAGE.char)}
                        onFlow={() => setStage(STAGE.flow)}
                        onImprove={onImprove}
                    />
                    <SummaryChar onFlow={() => setStage(STAGE.flow)}/>
                    <SummaryFlow onChar={() => setStage(STAGE.char)}/>
                </div>
            </div>
        </>
    );
};

export default SummaryMain;