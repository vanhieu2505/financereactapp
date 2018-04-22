import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

class ListNewsItem extends Component {
    render() {
        if (this.props.selectedTab !== 2) {
            return null;
        }
        
        return (
            <div>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        );
    }
}

ListNewsItem.propTypes = {
    selectedTab: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    selectedTab: state.finance.selectedTab
});

export default connect(mapStateToProps, {})(ListNewsItem);