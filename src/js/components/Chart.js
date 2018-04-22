import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Chart extends Component {
    render() {
        if (this.props.selectedTab !== 1) {
            return null;
        }

        return(
            <div>
            </div>
        );
    }
}

Chart.propTypes = {
    selectedTab: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    selectedTab: state.finance.selectedTab
});

export default connect(mapStateToProps, {})(Chart);