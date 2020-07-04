import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 110,
        height: 62,
        padding: 0,
        margin: theme.spacing(1)
    },
    switchBase: {
        padding: 1,

        '&$checked': {
            transform: 'translateX(32px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#FF0000',
                opacity: 1
            }
        }
    },
    thumb: {
        width: 30,
        height: 30,
        margin: 15,
        color: '#FF0000',
        opacity: 0.8
    },
    track: {
        borderRadius: 62 / 2,
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default function CustomizedSwitches() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            />
        </FormGroup>
    );
}