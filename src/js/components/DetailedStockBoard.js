import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DetailedStockBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: 'Singapore Telecommunications Limited',
            open: '3.42',
            high: '3.43',
            low: '3.40',
            volumn: '15.11M',
            PE: '9.88',
            marketCap: '55.66B',
            fiftyTwoWeekHigh: '4.00',
            fiftyTwoWeekLow: '3.30',
            averageVol: '26.40M',
            yield: '5.12%'
        }
    }

    render() {
        if (this.props.selectedTab !== 0) {
            return null;
        }

        return (
            <div>
                <div>{this.state.companyName}</div>
                <div className="detailed-stock-board">
                    <div className="stock-line">
                        <div className="stock-line-text">OPEN</div>
                        <div className="stock-line-value">{this.state.open}</div>
                        <div className="stock-line-text">MKT CAP</div>
                        <div className="stock-line-value last">{this.state.marketCap}</div>
                    </div>
                    <div className="stock-line">
                        <div className="stock-line-text">HIGH</div>
                        <div className="stock-line-value">{this.state.high}</div>
                        <div className="stock-line-text">52W HIGH</div>
                        <div className="stock-line-value last">{this.state.fiftyTwoWeekHigh}</div>
                    </div>
                    <div className="stock-line">
                        <div className="stock-line-text">LOW</div>
                        <div className="stock-line-value">{this.state.low}</div>
                        <div className="stock-line-text">52W LOW</div>
                        <div className="stock-line-value last">{this.state.fiftyTwoWeekLow}</div>
                    </div>
                    <div className="stock-line">
                        <div className="stock-line-text">VOL</div>
                        <div className="stock-line-value">{this.state.volumn}</div>
                        <div className="stock-line-text">AVG VOL</div>
                        <div className="stock-line-value last">{this.state.averageVol}</div>
                    </div>
                    <div className="stock-line">
                        <div className="stock-line-text">P/E</div>
                        <div className="stock-line-value">{this.state.PE}</div>
                        <div className="stock-line-text">YIELD</div>
                        <div className="stock-line-value last">{this.state.yield}</div>
                    </div>
                </div>
            </div>
        );
    }
}

DetailedStockBoard.propTypes = {
    selectedTab: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    selectedTab: state.finance.selectedTab
});

export default connect(mapStateToProps, {})(DetailedStockBoard);