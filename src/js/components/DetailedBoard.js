import React, { Component } from 'react';
import DetailedStockBoard from './DetailedStockBoard';
import Chart from './Chart';
import ListNewsItem from './ListNewsItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSelectedTab } from '../actions/financeActions';

class DetailedBoard extends Component {
    onNavigatorClick(selectedTab, e) {
        this.props.changeSelectedTab(selectedTab);
    }

    render() {
        return (
            <div className="detailed-board">
                <DetailedStockBoard />
                <Chart />
                <ListNewsItem />                 
                <ul className="navigator">
                    <li className={this.props.selectedTab === 0 ? "navigator-item selected" : "navigator-item"} onClick={this.onNavigatorClick.bind(this, 0)}></li>
                    <li className={this.props.selectedTab === 1 ? "navigator-item selected" : "navigator-item"} onClick={this.onNavigatorClick.bind(this, 1)}></li>
                    <li className={this.props.selectedTab === 2 ? "navigator-item selected" : "navigator-item"} onClick={this.onNavigatorClick.bind(this, 2)}></li>
                </ul>
            </div>            
        );
    }
}

DetailedBoard.propTypes = {
    selectedTab: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    selectedTab: state.finance.selectedTab
});

export default connect(mapStateToProps, { changeSelectedTab })(DetailedBoard);