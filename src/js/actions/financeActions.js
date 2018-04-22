import { SELECT_DATA, SELECT_TAB } from './types';

export const changeSelectedData = () => dispatch => {
    dispatch({
        type: SELECT_DATA
    });
}

export const changeSelectedTab = (selectedTab) => dispatch => {
    dispatch({
        type: SELECT_TAB,
        payload: selectedTab
    });
}