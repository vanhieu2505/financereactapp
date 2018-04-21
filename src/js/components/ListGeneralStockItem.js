import React, { Component } from 'react';
import GeneralStockItem from './GeneralStockItem';

class ListGeneralStockItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GeneralStockItem />
                <GeneralStockItem />
                <GeneralStockItem />
                <GeneralStockItem />
            </div>
        );        
    }
}

export default ListGeneralStockItem;