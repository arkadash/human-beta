import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const LieSlider = () => {
    let value = 30;
    const size = 170;

    const handleChange = (event, newValue) => {
        // setValue(newValue);
        value = newValue;
    };

    const CustomSlider = withStyles({
        root: {
            color: '#FF0000',
            height: 1,
            padding: '0'

        },
        thumb: {
            height: size,
            width: size,
            backgroundColor: 'transparent',
            marginTop: -size/2,
            marginLeft: -size/2,
            border: '1px solid #FF0000',
            '&:focus, &:hover, &$active': {
                boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    boxShadow: 'none'
                }
            }
        }
    })(Slider);

    return (
        <CustomSlider
            defaultValue={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
        />
    )
};

export default LieSlider;