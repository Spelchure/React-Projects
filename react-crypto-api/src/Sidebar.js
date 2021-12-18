import React from "react";

export function SidebarHeader(props) {
    const textStyle = {
        fontSize: "1.3em",
        color: "rgb(220,220,220)",
        textShadow: "1px 1px 5px black",
    } 
    
    return( 
        <div className="sidebar-header">
            <span style={textStyle}>{props.text}</span>
        </div>);
}

export function SidebarContents(props) {
    return(
        <div className="sidebar-contents">
            {props.children}
        </div>
    )
}


export default function Sidebar(props) {
    const getSidebarContents = () => {
        const contents = []; 
        for(let i = 0; i < props.symbols.length; i++) {
            contents.push(
                <div className={props.symbols[i].active ? "sidebar-content-active" : "sidebar-content"}
                    onClick={() => props.onClick(i)}     
                    key={i}>
                    <span>{props.symbols[i].name}</span>
                </div>
            );
        }
        return contents;
    } 
    
    return(
        <div className="crypto-api-sidebar">
            <SidebarHeader text="React Crypto" />
            <SidebarContents>
                {getSidebarContents()} 
            </SidebarContents> 
        </div>
    );
}