import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Contents from "./Contents";
import axios from "axios";
import IntervalComponent from "./IntervalComponent";

let intervalHandle = null;

export default function App() {
    const [symbols,setSymbols] = useState([
        {name: "BTCUSDT", active: true, price:0.0, up: 0},
        {name: "MINAUSDT", active: true, price:0.0, up: 0},
        {name: "ETHUSDT", active: true, price:0.0, up: 0},
        {name: "SOLUSDT", active: true, price:0.0, up: 0},
        {name: "ADAUSDT", active: true, price:0.0, up: 0},
        {name: "XRPUSDT", active: true, price:0.0, up: 0},
        {name: "DOTUSDT", active: true, price:0.0, up: 0},
        {name: "LUNAUSDT", active: true, price:0.0, up: 0},
        {name: "AVAXUSDT", active: true, price:0.0, up: 0},
        {name: "SHIBUSDT", active: true, price:0.0, up: 0},
        {name: "LTCUSDT", active: true, price:0.0, up: 0},
        {name: "UNIUSDT", active: true, price:0.0, up: 0},
        {name: "ALGOUSDT", active: true, price:0.0, up: 0},
        {name: "TRXUSDT", active: true, price:0.0, up: 0},
        {name: "LINKUSDT", active: true, price:0.0, up: 0},
        {name: "XLMUSDT", active: true, price:0.0, up: 0},
        {name: "MANAUSDT", active: true, price:0.0, up: 0},
        {name: "DAIUSDT", active: true, price:0.0, up: 0},
        {name: "ATOMUSDT", active: true, price:0.0, up: 0},
        {name: "EGLDUSDT", active: true, price:0.0, up: 0},
        {name: "GALAUSDT", active: true, price:0.0, up: 0},
        {name: "THETAUSDT", active: true, price:0.0, up: 0},
        {name: "ETCUSDT", active: true, price:0.0, up: 0},
        {name: "BTTUSDT", active: true, price:0.0, up: 0},
        {name: "EOSUSDT", active: true, price:0.0, up: 0},
    ]);
    const [updateInterval, setUpdateInterval] = useState(3000);


    useEffect(() => {
        // FETCH SYMBOL PRICES
        const fetchSymbolPrices = async () => {
            symbols.forEach((symbol) => {
                axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.name}`)
                    .then(response => {
                        //console.log(response.data); 
                        let i = 0; 
                        for(i; i < symbols.length; i++) {
                            if(symbols[i].name === response.data.symbol)
                                break;
                        }
                        const symbolsCopy = [...symbols];
                        const parsedPrice = parseFloat(response.data.price);

                        if(symbolsCopy[i].price < parsedPrice) {
                            symbolsCopy[i].up = 0;
                        } else if(symbolsCopy[i].price > parsedPrice) {
                            symbolsCopy[i].up = 1;
                        } else {
                            symbolsCopy[i].up = 2;
                        } 
                    
                        symbolsCopy[i].price = parsedPrice;
                        setSymbols(symbolsCopy);
                    });
            });
        }

        if(intervalHandle)
            clearInterval(intervalHandle);
        
        intervalHandle = setInterval(() => {
            fetchSymbolPrices();
        }, updateInterval);
       
        return () => {
            if(intervalHandle) 
                clearInterval(intervalHandle);
        }
    }, [updateInterval]);
    
    const updateActiveState = (index) => {
        const symbolsCp = [...symbols];
        symbolsCp[index].active = !symbolsCp[index].active;
        setSymbols(symbolsCp);
    }

    const intervalChanger = (upOrDown) => {
        if(upOrDown) {
            if(updateInterval !== 1000) {
                setUpdateInterval(updateInterval - 1000);
            }
        } else {
            if(updateInterval !== 10000) {
                setUpdateInterval(updateInterval + 1000);
            }
        }
    }

    return(
        <> 
        <div style={{
            display: "flex",
            width: "100%",
            height: "100%",
        }}>
            <Sidebar symbols={symbols} onClick={updateActiveState}/>
            <Contents symbols={symbols}/>
            <IntervalComponent onChange={intervalChanger} interval={updateInterval}/>
        </div>
        </> 
    );
}