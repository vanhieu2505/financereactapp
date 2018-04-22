import { SELECT_DATA, SELECT_TAB } from '../actions/types';

const initialState = {
    selectedTab: 0,
    selectedData: 0,
    listStocks: [{
        stock: {
            companyName: 'Singtel',
            companyCode: 'Z74.SI',
            open: '',
            high: '',
            low: '',
            volumn: '',
            pe: '',
            marketCap: '',
            fiftyWeekHigh: '',
            fiftyWeekLow: '',
            averageVolumn: '',
            yield: '',
            percentageChange: '',
            change: '',
            listNews: [{
                title: '',
                teaser: '',
                source: '',
                date: ''
            }]
        }
    }]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_DATA:
            if (state.selectedData < 2) {
                return {
                    ...state,
                    selectedData: state.selectedData + 1
                };
            }
            return {
                ...state,
                selectedData: 0
            };
        case SELECT_TAB:
            return {
                ...state,
                selectedTab: action.payload
            };
        default:
            return state;
    }
};