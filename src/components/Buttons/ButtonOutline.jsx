import React from 'react';
import './ButtonOutline.css'

function ButtonOut(props) {
    return <button className="btn-outline" type="button" name="button">{props.btnValue}</button>
}

export default ButtonOut