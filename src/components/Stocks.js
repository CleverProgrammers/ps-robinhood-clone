import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import StockItem from './StockItem'

function Stocks() {
    return (
        <div className="Stocks-container">
            <div className="header-container">
                <p>Stocks</p>
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
            <div className="Stocks-content">
                <StockItem />
            </div>
        </div>
    )
}

export default Stocks
