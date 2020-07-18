import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Icon from './Icon';
import Main from './Main';

export default () => {
    const [stateOpen, setOpenState] = React.useState();

    const toggleDrawer = (open) => (event) => {
        console.log('Openning menu');
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenState(open);
    };

    return (
        <div>
            <button onClick={toggleDrawer(true)}>
                <Icon/>
            </button>
            <Drawer anchor="right" open={stateOpen}
                onClose={toggleDrawer(false)}>
                <Main onClick={toggleDrawer}/>
            </Drawer>
        </div>
    );
}