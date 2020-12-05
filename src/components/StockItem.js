import React from 'react'
import StockGraph from '../stock.svg'
import './StockItem.css'

function StockItem(props) {
    return (
        <div className="StockItem">
            <div className="StockItem-name">
                <h3>AAPL</h3>
                <p>20 Shares</p>
            </div>
            <div className="StockItem-graph">
                <img src={StockGraph} height={16}/>
            </div>
            <div className="StockItem-price">
                <p className="price">122.25</p>
                <p className="percentage">+0.29%</p>
            </div>
        </div>
    )
}

export default StockItem
