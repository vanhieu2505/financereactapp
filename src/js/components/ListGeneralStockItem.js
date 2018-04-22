import React, { Component } from 'react';
import GeneralStockItem from './GeneralStockItem';

class ListGeneralStockItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="general-stock-list">
                <GeneralStockItem />
                <GeneralStockItem />
                <GeneralStockItem />
                <GeneralStockItem />
            </div>
        );        
    }
}

export default ListGeneralStockItem;