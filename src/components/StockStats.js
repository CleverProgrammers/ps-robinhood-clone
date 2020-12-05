import React from 'react'
import './StockStats.css'
import Stocks from './Stocks'
import Lists from './Lists'

function StockStats() {
    return (
        <div className="StockStats">
            <div className="StockStats-container">
                <Stocks />
                <Lists />
            </div>
        </div>
    )
}

export default StockStats