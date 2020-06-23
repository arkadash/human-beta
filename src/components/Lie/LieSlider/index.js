import React from 'react';
import Slider from '@material-ui/core/Slider';

const LieSlider = ({ onChange = () => null }) => {

    let value = 30;
    const handleChange = (event, newValue) => {
        value = newValue;
        onChange(newValue);
    };

    return (
        <Slider
            defaultValue={50}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
        />
    )
};

export default LieSlider;