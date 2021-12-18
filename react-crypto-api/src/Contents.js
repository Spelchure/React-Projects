import React from "react";

export default function Contents(props) {

    const cryptoApiContentStyle = {
        display: "flex",
        flexDirection: "column", 
        width: "15%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2em", 
        margin: "2%",
        padding: "5px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px black",
        textShadow: "1px 1px 5px black",
        color: "white", 
        background: "rgb(13,94,0)",
        background: "linear-gradient(71deg, rgba(13,94,0,1) 0%, rgba(0,185,12,1) 100%)",
    }
  
    const getElementStyle = (up) => {
        switch(up) {
            case 0:
                return {
                    ...cryptoApiContentStyle,
                    background: "rgb(13,94,0)",
                    background: "linear-gradient(71deg, rgba(13,94,0,1) 0%, rgba(0,185,12,1) 100%)", 
                }
            case 1:
                return {
                    ...cryptoApiContentStyle,
                    background: "rgb(124,0,0)",
                    background: "radial-gradient(circle, rgba(124,0,0,1) 0%, rgba(107,0,0,1) 100%)",
                }
            case 2:
                return {
                    ...cryptoApiContentStyle,
                    background: "gray"
                }
            default:
                return {
                    ...cryptoApiContentStyle,
                    background: "gray"
                }
        }
    }    

    const getContents = () => {
        const elements = [];
        for(let i = 0; i < props.symbols.length; i++) {
            const upIs = props.symbols[i].up; 
            if(props.symbols[i].active) {
                elements.push(
                    <div style={getElementStyle(upIs)}
                        key={i}
                        className="crypto-api-content">
                            <span>{props.symbols[i].name}</span>
                            <span>{props.symbols[i].price.toFixed(4)}</span>
                    </div>
                );
            } 
        } 
        return elements;
    }

    return(
        <div className="crypto-api-contents">
            {getContents()}
        </div>
    );
}