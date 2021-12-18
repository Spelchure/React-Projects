import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function IntervalComponent(props) {
    const iconStyle = {
        fontSize: "3em",
        cursor: "pointer",
    } 
    
    return(
        <div className="interval-changer">
            <KeyboardArrowUpIcon onClick={() => props.onChange(0)} sx={iconStyle} /> 
            <h1>{props.interval / 1000}sn</h1>
            <KeyboardArrowDownIcon onClick={() => props.onChange(1)} sx={iconStyle} /> 
        </div>
    );
}