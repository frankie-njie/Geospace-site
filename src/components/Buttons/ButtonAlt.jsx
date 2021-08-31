import React from 'react';
import {useHistory} from 'react-router-dom';
import './ButtonAlt.css'



function ButtonAlt (props) {
    let history = useHistory();
    
    function btnRedirect(path){
        history.push(path)
    }

    return <button className="btn-alternate" type="button" name="button" onClick={() => btnRedirect(props.path)}>{props.btnValue}</button>

}

export default ButtonAlt;