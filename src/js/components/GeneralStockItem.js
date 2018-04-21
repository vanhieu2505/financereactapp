import React, { Component } from 'react';

class GeneralStockItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockCode: 'Z74.SI',
            stockPrice: 3.41,
            data: ['55.66B', '-0.58%', '-0.02'],
            currentIndex: 0
        };
    }

    onRowClick(e) {

    }

    onDataClick(e) {
        if (this.state.currentIndex < 2) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            });
        } else {
            this.setState({
                currentIndex: 0
            });
        }
    }

    render() {
        return (
            <div onClick={this.onRowClick.bind(this)}>
                <div>{this.state.stockCode}</div>
                <div>{this.state.stockPrice}</div>
                <div onClick={this.onDataClick.bind(this)}>{this.state.data[this.state.currentIndex]}</div>
            </div>  
        );
    }
}

export default GeneralStockItem;