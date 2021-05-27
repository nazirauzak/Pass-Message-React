import React from 'react';
import './passmessage.css';

const PassMessage = (props) => {
    return (
        <>
        <button onClick={props.function} type='submit' id="btn">Submit
            </button></>
    );
};

export default PassMessage;