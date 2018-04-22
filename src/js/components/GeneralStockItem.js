import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedData } from '../actions/financeActions';
import PropTypes from 'prop-types';

class GeneralStockItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockCode: 'Z74.SI',
            stockPrice: 3.41,
            data: ['55.66B', '- 0.58%', '- 0.02']
        };
    }

    onRowClick(e) {

    }

    onDataClick(e) {
        this.props.changeSelectedData();        
    }

    render() {
        return (
            <div className="general-stock-item" onClick={this.onRowClick.bind(this)}>
                <div className="stock-item big">{this.state.stockCode}</div>
                <div className="stock-item small">{this.state.stockPrice}</div>
                <div className="stock-item small general-stock-data" onClick={this.onDataClick.bind(this)}>{this.state.data[this.props.selectedData]}</div>
            </div>  
        );
    }
}

GeneralStockItem.propTypes = {
    selectedData: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    selectedData: state.finance.selectedData
});

export default connect(mapStateToProps, { changeSelectedData })(GeneralStockItem);